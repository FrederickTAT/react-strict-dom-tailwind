/**
 * tw function - Converts Tailwind class names to StyleX style objects
 */

import { customStyles, dynamicStyles, tailwindStyles } from './styles';
import { StyleObject } from './types';
import { handleArbitrary, handleRegular, handleFinalStyles, mergeStyles } from './utils';

export interface TailwindOptions {
  extraStyles?: StyleObject;
}

export type Tailwind = (classNames: string, options?: TailwindOptions) => (StyleObject[]) & { merge: () => StyleObject }

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
export const tw: Tailwind = (classNames, options = {}) => {
  const { extraStyles={} } = options


  // Split class name string into an array
  const classes = classNames.trim().split(/\s+/);

  const styleList: StyleObject[] = [];

  try {
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
    const returnArray = handleFinalStyles(styleList);
    const [mergedStyles, varStyles] = returnArray;
    return Object.assign(returnArray, { merge: () => mergeStyles(mergedStyles, varStyles) });
  } catch (error) {
    console.warn(`Error processing Tailwind classes: ${error}`);
    return []
  }
}
