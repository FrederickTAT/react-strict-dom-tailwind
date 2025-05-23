import { StyleObject } from "../types";


// Check if in production environment
export const isProduction = typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production';

export function handleRegular(className: string, styles: StyleObject): StyleObject[] {
    if (className in styles) {
        const styleValue = styles[className]
        return Array.isArray(styleValue) ? styleValue : [styleValue];
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
