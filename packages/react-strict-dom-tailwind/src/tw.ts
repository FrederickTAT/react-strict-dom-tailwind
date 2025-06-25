/**
 * tw function - Converts Tailwind class names to StyleX style objects
 */

import { customStyles, dynamicStyles, tailwindStyles } from './styles';
import { StyleObject } from './types';
import { handleArbitrary, handleRegular } from './utils';

export interface TailwindOptions {
  extraStyles?: StyleObject;
  transformStyles?: (styles: StyleObject[]) => StyleObject[]
}

export type Tailwind = (classNames: string | string[], options?: TailwindOptions) => StyleObject[]

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
export const tw: Tailwind = (classNames = '', options = {}) => {
  const { extraStyles = {}, transformStyles = (styles) => styles } = options

  // Split class name string into an array
  const classes = (Array.isArray(classNames) ? classNames.join(' ') : classNames).trim().split(/\s+/);

  const styleList: StyleObject[] = [];

  try {
    // Iterate through each class name and find the corresponding style
    for (const className of classes) {
      const arbitraryMatch = className.match(/^([a-zA-Z-]+)-\[(.+)\]$/);
      if (arbitraryMatch) {
        // Handle arbitrary values
        const arbitraryStyles = handleArbitrary(className, { ...dynamicStyles, ...extraStyles });
        styleList.push(...arbitraryStyles);
      } else {
        // Handle regular class names
        const regularStyles = handleRegular(className, { ...tailwindStyles, ...customStyles, ...extraStyles });
        styleList.push(...regularStyles);
      }
    }
  } catch (error) {
    console.warn(`Error processing Tailwind classes: ${error}`);
  }
  const transformedStyles = transformStyles(styleList);
  return transformedStyles;
}
