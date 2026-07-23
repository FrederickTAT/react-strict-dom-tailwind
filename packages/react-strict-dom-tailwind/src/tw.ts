/**
 * tw function - Converts Tailwind class names to StyleX style objects
 *
 * Performance-critical path. Optimizations applied:
 * - Static style maps (tailwindStyles + customStyles) merged once at module level,
 *   eliminating per-class object spreads (~1142 keys × N classes per call).
 * - LRU result cache (2000 entries) for the common no-options call path.
 *   Same input string returns cached result in O(1), avoiding recomputation on re-renders.
 * - Arbitrary-value parsing uses indexOf + slice instead of regex (avoids regex
 *   compilation/execution and the double-match that existed before).
 * - Lookup logic inlined to avoid function-call overhead per class.
 * - Early return for empty/falsy input, skipping split and loop entirely.
 */

import { customStyles, dynamicStyles, tailwindStyles } from './styles';
import { StyleObject } from './types';
import { isProduction } from './utils';

// Pre-merge static style maps at module load time (once). This avoids spreading
// 1142+ keys into a new object on every class-name iteration.
const mergedStaticStyles: StyleObject = { ...tailwindStyles, ...customStyles };

// LRU cache for the zero-options call path (the overwhelming majority of calls).
// Keyed by normalized input string. 2000 entries covers even large apps
// (50+ screens × 20 tw() calls each = 1000 unique strings). Memory cost is
// negligible (~100 bytes/entry → ~200 KB total — all values are shared
// css.create references, not deep copies).
// Eviction: Map preserves insertion order; on cache hit we delete+re-set to
// move the entry to the end, so the head is always the true LRU.
const resultCache = new Map<string, StyleObject[]>();
const MAX_CACHE_SIZE = 2000;

const identityTransform = (styles: StyleObject[]): StyleObject[] => styles;

export interface TailwindOptions {
  extraStyles?: StyleObject;
  transformStyles?: (styles: StyleObject[]) => StyleObject[];
}

export type Tailwind = (classNames?: string | string[], options?: TailwindOptions) => StyleObject[];

export const tw: Tailwind = (classNames = '', options = {}) => {
  const { extraStyles = {}, transformStyles = identityTransform } = options;

  // Normalize: array → space-joined string, or use string as-is
  const input = Array.isArray(classNames) ? classNames.join(' ') : classNames;

  // Determine whether this call is cacheable (no extraStyles, default transform)
  let cacheable = transformStyles === identityTransform;
  if (cacheable) {
    // Fast check: does extraStyles have own keys?
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ in extraStyles) { cacheable = false; break; }
    if (cacheable) {
      const cached = resultCache.get(input);
      if (cached !== undefined) {
        // Move to end of Map to mark as recently used (true LRU)
        resultCache.delete(input);
        resultCache.set(input, cached);
        return cached;
      }
    }
  }

  // Early return for empty input (also guards split below)
  if (!input) return [];

  const classes = input.trim().split(/\s+/);
  const styleList: StyleObject[] = [];

  for (let i = 0; i < classes.length; i++) {
    const className = classes[i];
    if (!className) continue;

    // --- Regular (static) class lookup ---
    // Priority: extraStyles > customStyles > tailwindStyles (merged into mergedStaticStyles)
    let style: StyleObject | undefined = extraStyles[className];
    if (style !== undefined) {
      styleList.push(style);
      continue;
    }
    style = mergedStaticStyles[className];
    if (style !== undefined) {
      styleList.push(style);
      continue;
    }

    // --- Arbitrary value lookup (e.g. "w-[100px]", "bg-[#fff]") ---
    // Use indexOf + slice instead of regex — faster and avoids double-matching
    const bracketIdx = className.indexOf('-[');
    if (bracketIdx > 0 && className.endsWith(']')) {
      const property = className.slice(0, bracketIdx);
      const value = className.slice(bracketIdx + 2, -1); // content between [ and ]

      // Priority: extraStyles > dynamicStyles
      let handler = extraStyles[property];
      if (typeof handler !== 'function') {
        handler = dynamicStyles[property];
      }
      if (typeof handler === 'function') {
        const result: StyleObject | StyleObject[] | null | undefined = handler(value);
        if (result != null) {
          if (Array.isArray(result)) {
            for (let j = 0; j < result.length; j++) {
              styleList.push(result[j]);
            }
          } else {
            styleList.push(result);
          }
        }
        continue;
      }
    }

    // --- Not found ---
    if (!isProduction) {
      console.warn(`Tailwind class not found: "${className}"`);
    }
  }

  const result = transformStyles(styleList);

  // Store in cache for future calls
  if (cacheable) {
    if (resultCache.size >= MAX_CACHE_SIZE) {
      // Evict oldest entry (Map preserves insertion order)
      const firstKey = resultCache.keys().next().value;
      if (firstKey !== undefined) resultCache.delete(firstKey);
    }
    resultCache.set(input, result);
  }

  return result;
};
