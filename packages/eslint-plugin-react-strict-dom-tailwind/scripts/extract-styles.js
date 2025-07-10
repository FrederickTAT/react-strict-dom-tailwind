#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * Style extraction script
 * Extract style definitions from react-strict-dom-tailwind package and generate TypeScript file
 */

const fs = require('fs');
const path = require('path');

// Path configuration
const STYLES_SOURCE_DIR = path.resolve(__dirname, '../../react-strict-dom-tailwind/src/styles');
const OUTPUT_FILE = path.resolve(__dirname, '../src/generated/styles.ts');
const OUTPUT_DIR = path.dirname(OUTPUT_FILE);

/**
 * Ensure output directory exists
 */
function ensureOutputDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
}

/**
 * Read style files and extract style definitions
 */
function extractStyles() {
  try {
    // Check if source directory exists
    if (!fs.existsSync(STYLES_SOURCE_DIR)) {
      console.warn(`Style source directory does not exist: ${STYLES_SOURCE_DIR}`);
      return generateFallbackStyles();
    }

    // Dynamically import style module
    const stylesIndexPath = path.join(STYLES_SOURCE_DIR, 'index.ts');
    if (!fs.existsSync(stylesIndexPath)) {
      console.warn(`Style index file does not exist: ${stylesIndexPath}`);
      return generateFallbackStyles();
    }

    // Read individual style files
    const tailwindStylesPath = path.join(STYLES_SOURCE_DIR, 'tailwind.styles.ts');
    const dynamicStylesPath = path.join(STYLES_SOURCE_DIR, 'dynamic.styles.ts');
    const customStylesPath = path.join(STYLES_SOURCE_DIR, 'custom.styles.ts');

    const staticStyles = new Set();
    const dynamicPrefixes = new Set();

    // Extract tailwind static styles
    if (fs.existsSync(tailwindStylesPath)) {
      const tailwindContent = fs.readFileSync(tailwindStylesPath, 'utf8');
      extractStaticStylesFromContent(tailwindContent, staticStyles);
    }

    // Extract custom static styles
    if (fs.existsSync(customStylesPath)) {
      const customContent = fs.readFileSync(customStylesPath, 'utf8');
      extractStaticStylesFromContent(customContent, staticStyles);
    }

    // Extract dynamic style prefixes
    if (fs.existsSync(dynamicStylesPath)) {
      const dynamicContent = fs.readFileSync(dynamicStylesPath, 'utf8');
      extractDynamicPrefixesFromContent(dynamicContent, dynamicPrefixes);
    }

    return {
      staticStyles: Array.from(staticStyles).sort(),
      dynamicPrefixes: Array.from(dynamicPrefixes).sort()
    };
  } catch (error) {
    console.error('Error extracting styles:', error.message);
    return generateFallbackStyles();
  }
}

/**
 * Extract static styles from file content
 */
function extractStaticStylesFromContent(content, staticStyles) {
  // Match style definitions in css.create
  const styleMatches = content.match(/css\.create\(\{([\s\S]*?)\}\)/g);
  if (styleMatches) {
    styleMatches.forEach(match => {
      // Extract style names (content within quotes)
      const styleNames = match.match(/['"`]([^'"` ]+)['"`]\s*:/g);
      if (styleNames) {
        styleNames.forEach(styleName => {
          const name = styleName.match(/['"`]([^'"` ]+)['"`]/)[1];
          staticStyles.add(name);
        });
      }
    });
  }
}

/**
 * Extract prefixes from dynamic style file content
 */
function extractDynamicPrefixesFromContent(content, dynamicPrefixes) {
  // Match dynamic style function definitions, supporting quoted and unquoted property names
  // Match formats like: w: (w: string | number) => ({ or 'min-w': (minW: string | number) => ({
  const functionMatches = content.match(/(?:['"\`]([^'"\` ]+)['"\`]|([a-zA-Z][a-zA-Z0-9]*))\s*:\s*\([^)]*\)\s*=>/g);
  if (functionMatches) {
    functionMatches.forEach(match => {
      // Try to match quoted property names
      let nameMatch = match.match(/['"\`]([^'"\` ]+)['"\`]\s*:/);
      if (nameMatch) {
        dynamicPrefixes.add(nameMatch[1]);
      } else {
        // Match unquoted property names
        nameMatch = match.match(/([a-zA-Z][a-zA-Z0-9]*)\s*:/);
        if (nameMatch) {
          dynamicPrefixes.add(nameMatch[1]);
        }
      }
    });
  }
}

/**
 * Generate fallback style definitions
 */
function generateFallbackStyles() {
  console.log('Using fallback style definitions');

  const staticStyles = [
    // Display
    'block', 'inline-block', 'inline', 'flex', 'inline-flex', 'grid', 'inline-grid', 'hidden',
    'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group',
    'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root',
    'contents', 'list-item',

    // Position
    'static', 'fixed', 'absolute', 'relative', 'sticky',

    // Flexbox
    'flex-row', 'flex-col', 'flex-row-reverse', 'flex-col-reverse',
    'flex-wrap', 'flex-nowrap', 'flex-wrap-reverse',
    'flex-1', 'flex-auto', 'flex-initial', 'flex-none',
    'grow', 'grow-0', 'shrink', 'shrink-0',

    // Custom styles
    'flex-cc', 'flex-ce', 'flex-cb', 'flex-sb', 'flex-cs', 'flex-ca', 'flex-ss', 'flex-sc',
    'flex-ee', 'absolute-center', 'position-cc', 'position-x-c', 'position-y-c',

    // Common styles
    'items-start', 'items-end', 'items-center', 'items-baseline', 'items-stretch',
    'justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around',
    'justify-evenly', 'justify-stretch',
  ];

  const dynamicPrefixes = [
    'w', 'h', 'size', 'min-w', 'min-h', 'max-w', 'max-h',
    'm', 'mx', 'my', 'mt', 'mr', 'mb', 'ml',
    'p', 'px', 'py', 'pt', 'pr', 'pb', 'pl',
    'text', 'leading', 'tracking', 'indent', 'line-clamp',
    'color', 'bg', 'bg-opacity', 'text-opacity',
    'border', 'border-x', 'border-y', 'border-t', 'border-r', 'border-b', 'border-l',
    'border-color', 'border-opacity',
    'rounded', 'rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l',
    'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl',
    'top', 'right', 'bottom', 'left', 'inset', 'inset-x', 'inset-y',
    'z', 'opacity', 'scale', 'scale-x', 'scale-y', 'rotate', 'translate-x', 'translate-y',
  ];

  return {
    staticStyles: staticStyles.sort(),
    dynamicPrefixes: dynamicPrefixes.sort()
  };
}

/**
 * Generate TypeScript file
 */
function generateTypeScriptFile(styles) {
  const { staticStyles, dynamicPrefixes } = styles;

  const content = `/**
 * Auto-generated style definition file
 * Do not modify this file manually
 * Run npm run extract-styles to update this file
 */

export const STATIC_STYLES = new Set([
${staticStyles.map(style => `  '${style}'`).join(',\n')}
]);

export const DYNAMIC_PREFIXES = new Set([
${dynamicPrefixes.map(prefix => `  '${prefix}'`).join(',\n')}
]);

/**
 * Check if class name is a valid static style
 */
export function isValidStaticStyle(className: string): boolean {
  return STATIC_STYLES.has(className);
}

/**
 * Check if class name is a valid dynamic style
 */
export function isValidDynamicStyle(className: string): boolean {
  const arbitraryMatch = className.match(/^([a-zA-Z-]+)-\\[(.+)\\]$/);
  if (arbitraryMatch) {
    const prefix = arbitraryMatch[1];
    return DYNAMIC_PREFIXES.has(prefix);
  }
  return false;
}

/**
 * Check if class name is valid (static or dynamic)
 */
export function isValidClassName(className: string): boolean {
  return isValidStaticStyle(className) || isValidDynamicStyle(className);
}
`;

  return content;
}

/**
 * Main function
 */
function main() {
  console.log('Starting style definition extraction...');

  // Ensure output directory exists
  ensureOutputDir();

  // Extract styles
  const styles = extractStyles();

  console.log(`Extracted ${styles.staticStyles.length} static styles`);
  console.log(`Extracted ${styles.dynamicPrefixes.length} dynamic style prefixes`);

  // Generate TypeScript file
  const content = generateTypeScriptFile(styles);

  // Write file
  fs.writeFileSync(OUTPUT_FILE, content, 'utf8');

  console.log(`Style definitions generated to: ${OUTPUT_FILE}`);
}

// Run main function
if (require.main === module) {
  main();
}

module.exports = {
  extractStyles,
  generateTypeScriptFile,
  main
};