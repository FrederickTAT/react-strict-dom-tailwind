/**
 * tw function - Converts Tailwind class names to StyleX style objects
 */

import { customStyles, dynamicStyles, tailwindStyles } from './styles';
import { hasUnit, handleArbitrary, handleRegular, StyleObject } from './utils';


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
export function tw(classNames: string, options: {
  extraStyles?: StyleObject;
} = {}): StyleObject {
  const { extraStyles } = options


  // Split class name string into an array
  const classes = classNames.trim().split(/\s+/);

  const styleList: StyleObject[] = [];


  // Iterate through each class name and find the corresponding style
  for (const className of classes) {
    // Handle regular class names
    const regularStyles = handleRegular(className, { ...tailwindStyles, ...customStyles, ...extraStyles });
    styleList.push(...regularStyles);

    // Handle arbitrary values
    const arbitraryStyles = handleArbitrary(className, { ...dynamicStyles, ...extraStyles });
    styleList.push(...arbitraryStyles);
  }

  // Merge styles
  const varStyles: StyleObject = {}
  const mergedStyles: StyleObject = {};
  for (const style of styleList) {
    if (style && typeof style === 'object') {
      for (const [key, value] of Object.entries(style)) {
        if (/^--/.test(key)) {
          varStyles[key] = hasUnit(value) ? value : `${value}px`;
        } else {
          mergedStyles[key] = value;
        }
      }
    }
  }


  return [mergedStyles, varStyles];
}

