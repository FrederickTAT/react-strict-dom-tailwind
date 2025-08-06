import { TSESTree, TSESLint } from '@typescript-eslint/utils';
import {
  getClassNamePositions,
  parseCommentConfig,
  reconstructTemplateLiteral,
  findOriginalPosition,
  calculateActualPosition,
  createRuleOptionsSchema,
  getRuleOptions,
  createImportTracker,
  RuleOptions
} from '../utils/rule-utils';

// Import generated style definitions
import { STATIC_STYLES, DYNAMIC_PREFIXES, isValidClassName as checkValidClassName } from '../generated/styles';

// Style validator using generated style definitions
class StyleValidator {
  private staticStyles: Set<string>;
  private dynamicPrefixes: Set<string>;
  private excludeClasses: Set<string>;

  constructor(excludeClasses: string[] = []) {
    // Use generated style definitions
    this.staticStyles = STATIC_STYLES;
    this.dynamicPrefixes = DYNAMIC_PREFIXES;
    this.excludeClasses = new Set(excludeClasses);
  }

  // Public method to check dynamic prefixes
  hasDynamicPrefix(prefix: string): boolean {
    return this.dynamicPrefixes.has(prefix);
  }

  // Public method to update exclude classes
  setExcludeClasses(excludeClasses: string[]): void {
    this.excludeClasses = new Set(excludeClasses);
  }

  // Public method to check if class is excluded
  isExcludedClass(className: string): boolean {
    return this.excludeClasses.has(className);
  }



  isValidClassName(className: string): boolean {
    // First check if class is in exclude list
    if (this.isExcludedClass(className)) {
      return true;
    }

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

// getClassNamePositions is now imported from utils

const styleValidator = new StyleValidator();

// Export StyleValidator class and instance for testing
export { StyleValidator, styleValidator };

// RuleOptions is now imported from utils

export const noInvalidClasses: any = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ensure tw() function only uses valid Tailwind classes defined in react-strict-dom-tailwind',
    },
    fixable: undefined,
    schema: createRuleOptionsSchema('Ensure tw() function only uses valid Tailwind classes'),
    messages: {
      invalidClass: 'Invalid Tailwind class "{{className}}". Only classes defined in react-strict-dom-tailwind are allowed.',
    },
  },
  defaultOptions: [{ checkImports: true, excludeClasses: [] }],
  create(context: TSESLint.RuleContext<'invalidClass', [RuleOptions]>) {
    // Get rule options
    const { checkImports, configuredFunctionNames, excludeClasses } = getRuleOptions(context);
    
    // Create style validator with exclude classes
    const contextStyleValidator = new StyleValidator(excludeClasses);
    
    // Create import tracker
    const importTracker = createImportTracker();
    function validateStringLiteral(node: TSESTree.Node) {
      if (node.type !== 'Literal' || typeof node.value !== 'string') return;
      
      const classNames = getClassNamePositions(node.value);
      
      for (const { className, start, end } of classNames) {
        if (!contextStyleValidator.isValidClassName(className)) {
          const { startPos, endPos } = calculateActualPosition(node, start, end, 1); // +1 for quote
          context.report({
            node,
            messageId: 'invalidClass',
            data: { className },
            loc: {
              start: startPos,
              end: endPos
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

        
        if (contextStyleValidator.hasDynamicPrefix(prefix)) {
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
        if (!contextStyleValidator.isValidClassName(className)) {
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
            if (!contextStyleValidator.isValidClassName(className)) {
              const { startPos, endPos } = calculateActualPosition(element, start, end, 1); // +1 for quote
              context.report({
                node: element,
                messageId: 'invalidClass',
                data: {
                  className,
                },
                loc: {
                  start: startPos,
                  end: endPos
                }
              });
            }
          }
        }
      }
    }



    return {
      ImportDeclaration(node: TSESTree.ImportDeclaration) {
        // Always track imports, regardless of checkImports setting
        // We need this information to identify react-strict-dom-tailwind imports
        importTracker.handleImportDeclaration(node);
      },
      CallExpression(node: TSESTree.CallExpression) {
        // Check if this call should be validated
        const isFromReactStrictDomTailwind = importTracker.isTwFromReactStrictDomTailwind(node);
        
        if (checkImports) {
          // Only validate calls from react-strict-dom-tailwind imports
          if (!isFromReactStrictDomTailwind) {
            return;
          }
        } else {
          // Validate calls based on configured function names or from react-strict-dom-tailwind imports
          const isTwCall = (node.callee.type === 'Identifier' && 
                           configuredFunctionNames.includes(node.callee.name)) ||
                         (node.callee.type === 'MemberExpression' &&
                          node.callee.property.type === 'Identifier' &&
                          configuredFunctionNames.includes(node.callee.property.name));
          
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