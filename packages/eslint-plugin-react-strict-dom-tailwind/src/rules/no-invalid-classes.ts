import { TSESTree, TSESLint } from '@typescript-eslint/utils';

// Import generated style definitions
import { STATIC_STYLES, DYNAMIC_PREFIXES, isValidClassName as checkValidClassName } from '../generated/styles';

// Style validator using generated style definitions
class StyleValidator {
  private staticStyles: Set<string>;
  private dynamicPrefixes: Set<string>;

  constructor() {
    // Use generated style definitions
    this.staticStyles = STATIC_STYLES;
    this.dynamicPrefixes = DYNAMIC_PREFIXES;
  }

  // Public method to check dynamic prefixes
  hasDynamicPrefix(prefix: string): boolean {
    return this.dynamicPrefixes.has(prefix);
  }



  isValidClassName(className: string): boolean {
    // First check if it's a static style
    if (this.staticStyles.has(className)) {
      return true;
    }

    // Reference logic from tw.ts: check arbitrary value syntax (e.g.: h-[50px], bg-[#ff0000], w-[calc(100%-20px)])
    const arbitraryMatch = className.match(/^([a-zA-Z-]+)-\[(.*)\]$/);
    if (arbitraryMatch) {
      const prefix = arbitraryMatch[1];
      const value = arbitraryMatch[2];
      // Check if prefix is in dynamic prefix list and value cannot be empty
      return this.dynamicPrefixes.has(prefix) && value.trim() !== '';
    }

    // Check dynamic prefix patterns (e.g.: bg-opacity-50, border-opacity-25)
    // But exclude cases that look like arbitrary values but don't have brackets (e.g.: h-50px, w-100px)
    for (const prefix of this.dynamicPrefixes) {
      if (className.startsWith(prefix + '-')) {
        const suffix = className.substring(prefix.length + 1);
        // If suffix looks like a value (contains numbers or colors) but has no brackets, consider it invalid
        if (/^\d+px$|^\d+%$|^\d+em$|^\d+rem$|^\d+vh$|^\d+vw$|^[a-fA-F0-9]{3,8}$/.test(suffix)) {
          return false;
        }
        return true;
      }
    }

    // Use original validation logic as fallback
    return checkValidClassName(className);
  }

  getInvalidClasses(classNames: string[]): string[] {
    return classNames.filter(className => !this.isValidClassName(className));
  }
}

// Calculate position information of class names in string
function getClassNamePositions(text: string): Array<{ className: string; start: number; end: number }> {
  const positions: Array<{ className: string; start: number; end: number }> = [];
  const classNames = text.trim().split(/\s+/);
  let currentIndex = 0;

  for (const className of classNames) {
    if (className) {
      // Find the position of class name in original string
      const startIndex = text.indexOf(className, currentIndex);
      if (startIndex !== -1) {
        positions.push({
          className,
          start: startIndex,
          end: startIndex + className.length
        });
        currentIndex = startIndex + className.length;
      }
    }
  }

  return positions;
}

const styleValidator = new StyleValidator();

// Export StyleValidator class and instance for testing
export { StyleValidator, styleValidator };

interface RuleOptions {
  checkImports?: boolean;
  functionNames?: string[];
}

export const noInvalidClasses: any = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ensure tw() function only uses valid Tailwind classes defined in react-strict-dom-tailwind',
    },
    fixable: undefined,
    schema: [
      {
        type: 'object',
        properties: {
          checkImports: {
            type: 'boolean',
            description: 'Whether to check if tw() is imported from react-strict-dom-tailwind before validation',
            default: true
          },
          functionNames: {
            type: 'array',
            items: {
              type: 'string'
            },
            description: 'Function names to check when checkImports is false. Defaults to ["tw"]',
            default: ['tw']
          }
        },
        additionalProperties: false
      }
    ],
    messages: {
      invalidClass: 'Invalid Tailwind class "{{className}}". Only classes defined in react-strict-dom-tailwind are allowed.',
    },
  },
  defaultOptions: [{ checkImports: true }],
  create(context: TSESLint.RuleContext<'invalidClass', [RuleOptions]>) {
    // Get rule options
    const options = (context.options && context.options[0]) || { checkImports: true, functionNames: ['tw'] };
    const checkImports = options.checkImports !== false; // Default to true
    const functionNames = options.functionNames || ['tw']; // Default to ['tw']
    
    // Parse comment-based configuration
     function parseCommentConfig(): string[] {
       const sourceCode = context.getSourceCode();
       const comments = sourceCode.getAllComments ? sourceCode.getAllComments() : [];
       
       for (const comment of comments) {
         const text = comment.value.trim();
         // Look for eslint-disable-next-line or eslint-disable comments with function names
         const configMatch = text.match(/eslint-plugin-react-strict-dom-tailwind\s+functions:\s*\[([^\]]+)\]/);
         if (configMatch) {
           const functionList = configMatch[1]
             .split(',')
             .map(name => name.trim().replace(/["']/g, ''))
             .filter(name => name.length > 0);
           return functionList;
         }
       }
       return functionNames;
     }
    
    // Get function names from comment config or options
    const configuredFunctionNames = parseCommentConfig();
    
    // Track imports from react-strict-dom-tailwind
    const twImports = new Set<string>();
    const twMemberImports = new Map<string, string>(); // object -> property mapping
    function validateStringLiteral(node: TSESTree.Node) {
      if (node.type !== 'Literal' || typeof node.value !== 'string') return;

      const text = node.value;
      const positions = getClassNamePositions(text);

      for (const { className, start, end } of positions) {
        if (!styleValidator.isValidClassName(className)) {
          // Calculate actual position in source code (considering quotes)
          const sourceCode = context.sourceCode;
          const actualStart = node.range[0] + 1 + start; // +1 to skip opening quote
          const actualEnd = node.range[0] + 1 + end;

          context.report({
            node: node,
            messageId: 'invalidClass',
            data: {
              className,
            },
            loc: {
              start: sourceCode.getLocFromIndex(actualStart),
              end: sourceCode.getLocFromIndex(actualEnd)
            }
          });
        }
      }
    }

    function validateTemplateLiteral(node: TSESTree.Node) {
      if (node.type !== 'TemplateLiteral') return;
      // For template strings, we need to reconstruct the entire string to detect dynamic styles across expressions
      const sourceCode = context.getSourceCode();

      // Reconstruct complete template string, replacing expressions with placeholders
      let reconstructedText = '';
      const offsetMap: Array<{ start: number, end: number, originalStart: number, originalEnd: number }> = [];
      let currentOffset = 1; // Skip opening backtick
      


      for (let i = 0; i < node.quasis.length; i++) {
        const quasi = node.quasis[i];
        const text = quasi.value.cooked || '';

        // Record mapping of current text fragment
        const textStart = reconstructedText.length;
        const textEnd = textStart + text.length;
        offsetMap.push({
          start: textStart,
          end: textEnd,
          originalStart: node.range[0] + currentOffset,
          originalEnd: node.range[0] + currentOffset + text.length
        });

        reconstructedText += text;
        currentOffset += text.length;

        // If there's an expression, add placeholder
        if (i < node.expressions.length) {
          const expr = node.expressions[i];
          const exprText = sourceCode.getText(expr);
          reconstructedText += 'EXPR_PLACEHOLDER';
          currentOffset += 3 + exprText.length; // ${ + expression + }
        }
      }


      
      // Detect dynamic style patterns (like "border-color-[EXPR_PLACEHOLDER]")
      const dynamicStylePattern = /([a-zA-Z-]+)-\[EXPR_PLACEHOLDER\]/g;
      let match;
      const validDynamicStyles = new Set<string>();

      while ((match = dynamicStylePattern.exec(reconstructedText)) !== null) {
        const prefix = match[1];

        
        if (styleValidator.hasDynamicPrefix(prefix)) {
          // Mark this dynamic style as valid, no need to check
          validDynamicStyles.add(match[0]);
        } else {
          // Report invalid dynamic prefix
          const matchStart = match.index;
          const prefixEnd = matchStart + prefix.length;

          // Find corresponding original position
          for (const mapping of offsetMap) {
            if (matchStart >= mapping.start && prefixEnd <= mapping.end) {
              const relativeStart = matchStart - mapping.start;
              const relativeEnd = prefixEnd - mapping.start;
              const actualStart = mapping.originalStart + relativeStart;
              const actualEnd = mapping.originalStart + relativeEnd;

              context.report({
                node: node,
                messageId: 'invalidClass',
                data: {
                  className: prefix + '-[...]',
                },
                loc: {
                  start: sourceCode.getLocFromIndex(actualStart),
                  end: sourceCode.getLocFromIndex(actualEnd)
                }
              });
              break;
            }
          }
        }
      }

      // Remove valid dynamic styles, then check remaining static class names
      let cleanedText = reconstructedText;
      for (const validStyle of validDynamicStyles) {
        cleanedText = cleanedText.replace(new RegExp(validStyle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '');
      }

      // Remove all remaining expression placeholders
      cleanedText = cleanedText.replace(/EXPR_PLACEHOLDER/g, '');

      // Check remaining static class names
      const positions = getClassNamePositions(cleanedText);

      for (const { className, start, end } of positions) {
        if (!styleValidator.isValidClassName(className)) {
          // Find class name position in original template string
          for (const mapping of offsetMap) {
            if (start >= mapping.start && end <= mapping.end) {
              const relativeStart = start - mapping.start;
              const relativeEnd = end - mapping.start;
              const actualStart = mapping.originalStart + relativeStart;
              const actualEnd = mapping.originalStart + relativeEnd;

              context.report({
                node: node,
                messageId: 'invalidClass',
                data: {
                  className,
                },
                loc: {
                  start: sourceCode.getLocFromIndex(actualStart),
                  end: sourceCode.getLocFromIndex(actualEnd)
                }
              });
              break;
            }
          }
        }
      }
    }

    function validateArrayExpression(node: TSESTree.Node) {
      if (node.type !== 'ArrayExpression') return;

      for (const element of node.elements) {
        if (element && element.type === 'Literal' && typeof element.value === 'string') {
          const text = element.value;
          const positions = getClassNamePositions(text);

          for (const { className, start, end } of positions) {
            if (!styleValidator.isValidClassName(className)) {
              const sourceCode = context.getSourceCode();
              const actualStart = element.range[0] + 1 + start;
              const actualEnd = element.range[0] + 1 + end;

              context.report({
                node: element,
                messageId: 'invalidClass',
                data: {
                  className,
                },
                loc: {
                  start: sourceCode.getLocFromIndex(actualStart),
                  end: sourceCode.getLocFromIndex(actualEnd)
                }
              });
            }
          }
        }
      }
    }

    function isTwFromReactStrictDomTailwind(node: TSESTree.CallExpression): boolean {
      if (node.callee.type === 'Identifier') {
        // Direct call like tw() or aliased call like tailwind()
        return twImports.has(node.callee.name);
      } else if (node.callee.type === 'MemberExpression' &&
                 node.callee.object.type === 'Identifier' &&
                 node.callee.property.type === 'Identifier') {
        // Member call like obj.tw()
        const objectName = node.callee.object.name;
        const propertyName = node.callee.property.name;
        return twMemberImports.get(objectName) === propertyName;
      }
      return false;
    }

    return {
      ImportDeclaration(node: TSESTree.ImportDeclaration) {
        if (node.source.value === 'react-strict-dom-tailwind') {
          for (const specifier of node.specifiers) {
            if (specifier.type === 'ImportSpecifier') {
              if (specifier.imported.type === 'Identifier' && specifier.imported.name === 'tw') {
                // Handle both import { tw } and import { tw as alias }
                twImports.add(specifier.local.name);
              }
            } else if (specifier.type === 'ImportNamespaceSpecifier') {
              // Handle import * as obj from 'react-strict-dom-tailwind'
              twMemberImports.set(specifier.local.name, 'tw');
            }
          }
        }
      },
      CallExpression(node: TSESTree.CallExpression) {
          // If checkImports is enabled, only validate tw() calls from react-strict-dom-tailwind
          if (checkImports && !isTwFromReactStrictDomTailwind(node)) {
            return;
          }
          
          // If checkImports is disabled, validate calls based on configured function names
          // Also validate calls from react-strict-dom-tailwind imports (including aliases)
          if (!checkImports) {
            // Check if it's a call to one of the configured function names
            const isTwCall = (node.callee.type === 'Identifier' && 
                             configuredFunctionNames.includes(node.callee.name)) ||
                           (node.callee.type === 'MemberExpression' &&
                            node.callee.property.type === 'Identifier' &&
                            configuredFunctionNames.includes(node.callee.property.name));
            
            // Also check if it's from react-strict-dom-tailwind imports (including aliases)
            const isFromReactStrictDomTailwind = isTwFromReactStrictDomTailwind(node);
            
            if (!isTwCall && !isFromReactStrictDomTailwind) {
              return;
            }
          }
          
          const arg = node.arguments[0];
          if (!arg) {
            return;
          }
          
          if (arg.type === 'Literal' && typeof arg.value === 'string') {
            validateStringLiteral(arg);
          } else if (arg.type === 'TemplateLiteral') {
            validateTemplateLiteral(arg);
          } else if (arg.type === 'ArrayExpression') {
            validateArrayExpression(arg);
          }
        },
    };
  },
};

export default noInvalidClasses;