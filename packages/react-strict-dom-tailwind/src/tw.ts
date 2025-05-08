/**
 * tw function - Converts Tailwind class names to StyleX style objects
 */

import { styles } from './styles';
import { mergeStyles, handleCustomStyles } from './utils';
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
    const arbitraryMatch = className.match(/^([a-zA-Z-]+)-\[(.+)\]$/);
    if (arbitraryMatch) {
      const property = arbitraryMatch[1];
      const value = arbitraryMatch[2];

      if (property in styles) {
        const customStyle = styles[property](value);
        let modeStyles = {};
        if (Array.isArray(customStyle)) {
          for (const element of customStyle) {
            modeStyles = { ...modeStyles, ...element };
          }
        } else {
          modeStyles = customStyle;
        }
        mergeStyles(mergedStyles, modeStyles);
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
  return handleCustomStyles(mergedStyles);
}

