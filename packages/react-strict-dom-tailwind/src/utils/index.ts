import { StyleObject } from "../types";


// Check if in production environment
export const isProduction = typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production';

/**
 * Merges two StyleX style objects
 *
 * @param targetStyle - The target style object to merge into
 * @param sourceStyle - The source style object to merge from
 * @returns The merged style object (same as the first parameter)
 *
 * Special handling:
 * - For string values with the same key, they are merged with a space separator
 * - For object values (like pseudo-classes), they are recursively merged
 * - For other types, the value from the second object overrides the first
 */

export function mergeStyles(targetStyle: StyleObject, sourceStyle: StyleObject): StyleObject {
    // Iterate through each key in the source style object
    for (const key in sourceStyle) {
        const sourceValue = sourceStyle[key];

        // If the key doesn't exist in the target, simply assign it
        if (!(key in targetStyle)) {
            targetStyle[key] = sourceValue;
            continue;
        }

        const targetValue = targetStyle[key];

        // Handle different types of values
        if (typeof sourceValue === 'string' && typeof targetValue === 'string') {
            // For strings, merge with space separator
            targetStyle[key] = `${targetValue} ${sourceValue}`;
        } else if (
            typeof sourceValue === 'object' &&
            sourceValue !== null &&
            typeof targetValue === 'object' &&
            targetValue !== null
        ) {
            // For objects (like pseudo-classes), recursively merge
            targetStyle[key] = mergeStyles({ ...targetValue }, sourceValue);
        } else {
            // For other types, override with the source value
            targetStyle[key] = sourceValue;
        }

    }

    return targetStyle;
}

export function handleRegular(className: string, styles: StyleObject): StyleObject[] {
    if (className in styles) {
        return [styles[className]];
    }
    if (!isProduction) {
        console.warn(`Tailwind class not found: "${className}"`);
    }
    return []
}

export function handleArbitrary(className: string, styles: StyleObject): StyleObject[] {
    const arbitraryMatch = className.match(/^([a-zA-Z-]+)-\[(.+)\]$/);
    if (arbitraryMatch) {
        const property = arbitraryMatch[1];
        const value = arbitraryMatch[2];
        if (property in styles && typeof styles[property] === 'function') {
            const styleValue = styles?.[property]?.(value)
            return Array.isArray(styleValue) ? styleValue : [styleValue];
        }
        if (!isProduction) {
            console.warn(`No custom class for property: "${property}"`);
        }
    }
    return []
}

export function hasUnit(value: string): boolean {
    return isNaN(Number(value));
}

export function handleFinalStyles(styleList: StyleObject[]): StyleObject[] {
    const varStyles: StyleObject = {}
    const mergedStyles: StyleObject = {};
    for (const style of styleList) {
        if (style && typeof style === 'object') {
            for (const [key, value] of Object.entries(style)) {
                if (/^--/.test(key)) {
                    varStyles[key] = hasUnit(value) ? value : `${value}px`;
                } else {
                    mergeStyles(mergedStyles, { [key]: value });
                }
            }
        }
    }
    return [mergedStyles, varStyles]
}
