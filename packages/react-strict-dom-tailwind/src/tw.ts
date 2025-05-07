/**
 * tw function - Converts Tailwind class names to StyleX style objects
 */

import { styles } from './styles';

// Check if in production environment
const isProduction = typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production';

// Define the type for style objects
interface StyleObject {
  [key: string]: any;
}

/**
 * Converts a Tailwind class name string to a StyleX style object
 *
 * @param classNames - Tailwind class name string, separated by spaces
 * @returns StyleX style object
 *
 * @example
 * <html.div style={tw('flex items-center p-4 bg-blue-500')}>
 *   Content
 * </html.div>
 */
export function tw(classNames: string): StyleObject {
  // Split class name string into an array
  const classes = classNames.trim().split(/\s+/);

  // Collect all matching styles
  const mergedStyles: StyleObject = {};

  // Iterate through each class name and find the corresponding style
  for (const className of classes) {
    const arbitraryMatch = className.match(/^([a-zA-Z]+)-\[(\d+)\]$/);
    if (arbitraryMatch) {
      const property = arbitraryMatch[1];
      const value = arbitraryMatch[2];

      if (property in styles) {
        const customStyle = styles[property](value);
        mergeStyles(styles, customStyle);
        continue;
      } else {
        if (!isProduction) {
          console.warn(`No custom style handler for property: "${property}"`);
        }
      }
    }

    // Handle regular class names
    if (className in styles) {
      // Merge styles
      mergeStyles(mergedStyles, styles[className]);
      continue;
    }
    
    // In development environment, warn about class names not found
    if (!isProduction) {
      console.warn(`Tailwind class not found: "${className}"`);
    }
  }

  return mergedStyles;
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
