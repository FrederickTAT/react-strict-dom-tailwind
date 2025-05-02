/**
 * tw function - Converts Tailwind class names to StyleX style objects
 */

import { tailwindStyles, hoverStyles, focusStyles } from './styles';

// Check if in production environment
const isProduction = typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production';

// Define the type for style objects
interface StyleObject {
  [key: string]: any;
}

// Define the type for pseudo-class style objects
interface PseudoStyleObject {
  [key: string]: StyleObject;
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
  const styles: StyleObject = {};

  // Collect pseudo-class styles
  const pseudoStyles: PseudoStyleObject = {
    ':hover': {},
    ':focus': {},
  };

  // Iterate through each class name and find the corresponding style
  for (const className of classes) {
    // Handle hover: prefix
    if (className.startsWith('hover:')) {
      const baseClassName = className.substring(6); // Remove 'hover:' prefix
      if (baseClassName in tailwindStyles) {
        const hoverClassName = `hover:${baseClassName}`;
        if (hoverClassName in hoverStyles) {
          Object.assign(pseudoStyles[':hover'], (hoverStyles as StyleObject)[hoverClassName]);
        } else {
          // If there's no predefined hover style, use the base style
          Object.assign(pseudoStyles[':hover'], (tailwindStyles as StyleObject)[baseClassName]);
        }
      } else {
        // In development environment, warn about class names not found
        if (!isProduction) {
          console.warn(`Tailwind hover class not found: "${className}"`);
        }
      }
      continue;
    }

    // Handle focus: prefix
    if (className.startsWith('focus:')) {
      const baseClassName = className.substring(6); // Remove 'focus:' prefix
      if (baseClassName in tailwindStyles) {
        const focusClassName = `focus:${baseClassName}`;
        if (focusClassName in focusStyles) {
          Object.assign(pseudoStyles[':focus'], (focusStyles as StyleObject)[focusClassName]);
        } else {
          // If there's no predefined focus style, use the base style
          Object.assign(pseudoStyles[':focus'], (tailwindStyles as StyleObject)[baseClassName]);
        }
      } else {
        // In development environment, warn about class names not found
        if (!isProduction) {
          console.warn(`Tailwind focus class not found: "${className}"`);
        }
      }
      continue;
    }

    // Handle regular class names
    if (className in tailwindStyles) {
      // Merge styles
      Object.assign(styles, (tailwindStyles as StyleObject)[className]);
    } else {
      // In development environment, warn about class names not found
      if (!isProduction) {
        console.warn(`Tailwind class not found: "${className}"`);
      }
    }
  }

  // Add pseudo-class styles
  if (Object.keys(pseudoStyles[':hover']).length > 0) {
    styles[':hover'] = pseudoStyles[':hover'];
  }

  if (Object.keys(pseudoStyles[':focus']).length > 0) {
    styles[':focus'] = pseudoStyles[':focus'];
  }

  return styles;
}
