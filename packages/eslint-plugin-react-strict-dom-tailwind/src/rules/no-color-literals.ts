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

// Regular expressions for detecting color literals
const COLOR_LITERAL_PATTERNS = [
  // Hexadecimal colors: #fff, #ffffff, #ffff, #ffffffff
  /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  // RGB/RGBA: rgb(255,255,255), rgba(255,255,255,1)
  /^rgba?\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[0-9.]+)?\s*\)$/i,
  // HSL/HSLA: hsl(0,100%,50%), hsla(0,100%,50%,1)
  /^hsla?\s*\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*(,\s*[0-9.]+)?\s*\)$/i,
  // CSS color keywords (common ones)
  /^(red|green|blue|yellow|orange|purple|pink|black|white|gray|grey|transparent|currentColor|inherit|initial|unset)$/i
];

// Check if value is a color literal
function isColorLiteral(value: string): boolean {
  return COLOR_LITERAL_PATTERNS.some(pattern => pattern.test(value.trim()));
}

// Check if it's a dynamic class with color literal value
function isDynamicClassWithColorLiteral(className: string): { isColorLiteral: boolean; prefix?: string; value?: string } {
  const arbitraryMatch = className.match(/^([a-zA-Z-]+)-\[(.*)\]$/);
  if (!arbitraryMatch) {
    return { isColorLiteral: false };
  }

  const prefix = arbitraryMatch[1];
  const value = arbitraryMatch[2];

  // Report if it's a dynamic style with color literal value
  if (isColorLiteral(value)) {
    return { isColorLiteral: true, prefix, value };
  }

  return { isColorLiteral: false };
}

// getClassNamePositions and RuleOptions are now imported from utils

export const noColorLiterals: any = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Discourage the use of color literals in dynamic color classes like color-[#fff] or bg-[rgba(255,255,255,1)]',
      recommended: 'warn',
    },
    fixable: undefined,
    schema: createRuleOptionsSchema('Discourage the use of color literals in dynamic color classes'),
    messages: {
      colorLiteral: 'Avoid using color literals like "{{value}}" in dynamic color class "{{className}}". Consider using CSS custom properties or Tailwind color tokens instead. If you must use color literals, disable this rule by comment'
    },
  },
  defaultOptions: [{ checkImports: true }],
  create(context: TSESLint.RuleContext<'colorLiteral', [RuleOptions]>) {
    // Get rule options
    const { checkImports, configuredFunctionNames } = getRuleOptions(context);

    // Create import tracker
    const importTracker = createImportTracker();

    function validateStringLiteral(node: TSESTree.Node) {
      if (node.type !== 'Literal' || typeof node.value !== 'string') return;

      const text = node.value;
      const positions = getClassNamePositions(text);

      for (const { className, start, end } of positions) {
        const colorCheck = isDynamicClassWithColorLiteral(className);
        if (colorCheck.isColorLiteral) {
          const { startPos, endPos } = calculateActualPosition(node, start, end, 1); // +1 for quote

          context.report({
            node: node,
            messageId: 'colorLiteral',
            data: {
              className,
              value: colorCheck.value,
            },
            loc: {
              start: startPos,
              end: endPos
            },
            suggest: [
              {
                messageId: 'colorLiteral',
                fix: function () {
                  return null;
                }
              }
            ]
          });
        }
      }
    }

    function validateTemplateLiteral(node: TSESTree.Node) {
      if (node.type !== 'TemplateLiteral') return;

      const { reconstructed, offsetMap } = reconstructTemplateLiteral(node);
      const positions = getClassNamePositions(reconstructed);

      for (const { className, start, end } of positions) {
        const colorCheck = isDynamicClassWithColorLiteral(className);
        if (colorCheck.isColorLiteral) {
          const startPos = findOriginalPosition(start, offsetMap, node);
          const endPos = findOriginalPosition(end, offsetMap, node);

          context.report({
            node: node,
            messageId: 'colorLiteral',
            data: {
              className,
              value: colorCheck.value,
            },
            loc: {
              start: startPos,
              end: endPos
            },
            suggest: [
              {
                messageId: 'colorLiteral',
                fix: function () {
                  return null;
                }
              }
            ]
          });
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
            const colorCheck = isDynamicClassWithColorLiteral(className);
            if (colorCheck.isColorLiteral) {
              const { startPos, endPos } = calculateActualPosition(element, start, end, 1); // +1 for quote

              context.report({
                node: element,
                messageId: 'colorLiteral',
                data: {
                  className,
                  value: colorCheck.value,
                },
                loc: {
                  start: startPos,
                  end: endPos
                },
                suggest: [
                  {
                    messageId: 'colorLiteral',
                    fix: function () {
                      return null;
                    }
                  }
                ]
              });
            }
          }
        }
      }
    }

    // isTwFromReactStrictDomTailwind is now provided through importTracker

    return {
      ImportDeclaration(node: TSESTree.ImportDeclaration) {
        importTracker.handleImportDeclaration(node);
      },
      CallExpression(node: TSESTree.CallExpression) {
        // If import checking is enabled, only validate tw() calls from react-strict-dom-tailwind
        if (checkImports && !importTracker.isTwFromReactStrictDomTailwind(node)) {
          return;
        }

        // If import checking is disabled, validate calls based on configured function names
        if (!checkImports) {
          const isTwCall = (node.callee.type === 'Identifier' &&
            configuredFunctionNames.includes(node.callee.name)) ||
            (node.callee.type === 'MemberExpression' &&
              node.callee.property.type === 'Identifier' &&
              configuredFunctionNames.includes(node.callee.property.name));

          const isFromReactStrictDomTailwind = importTracker.isTwFromReactStrictDomTailwind(node);

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

export default noColorLiterals;