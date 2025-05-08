interface StyleObject {
    [key: string]: any;
}

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

export function handleCustomStyles(styles: StyleObject): StyleObject[] {
    const doubleDashObj: StyleObject = {};
    const otherObj: StyleObject = {};
    for (const [key, value] of Object.entries(styles)) {
        if (/^--/.test(key)) {
            doubleDashObj[key] = hasUnit(value) ? value : `${value}px`;
        } else {
            otherObj[key] = value;
        }
    }
    return [doubleDashObj, otherObj];
}

export function hasUnit(value: string): boolean {
    return isNaN(Number(value));
}