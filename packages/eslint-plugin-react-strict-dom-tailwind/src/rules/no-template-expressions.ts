import { TSESTree, TSESLint } from '@typescript-eslint/utils';
import {
  parseCommentConfig,
  createRuleOptionsSchema,
  getRuleOptions,
  createImportTracker,
  RuleOptions
} from '../utils/rule-utils';

export const noTemplateExpressions: any = {
  name: 'no-template-expressions',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow template expressions in tw() function calls',
      recommended: true,
    },
    fixable: undefined,
    schema: createRuleOptionsSchema('Disallow template expressions in tw() function calls'),
    messages: {
      templateWithExpressions: 'Template literals with expressions cannot be fully validated. Consider using static strings, arrays, or conditional logic for better validation.',
      suggestAlternative: 'Consider refactoring to use static class names or array syntax: tw(["base-classes", condition && "conditional-class"])',
    },
  },
  create(context: TSESLint.RuleContext<'templateWithExpressions' | 'suggestAlternative', [RuleOptions]>) {
    // Get rule options
    const { checkImports, configuredFunctionNames } = getRuleOptions(context);
    
    // Create import tracker
    const importTracker = createImportTracker();
    function checkTemplateExpression(node: TSESTree.CallExpression) {
      if (node.arguments.length === 0) return;

      const firstArg = node.arguments[0];

      // Check if template string contains expressions
      if (firstArg.type === 'TemplateLiteral' && firstArg.expressions && firstArg.expressions.length > 0) {
        // Report error for each expression in the template literal, including ${} symbols
        firstArg.expressions.forEach((expression, index) => {
          const sourceCode = context.sourceCode;

          // Check if this expression is part of a dynamic style pattern like h-[${height}]
          const beforeQuasi = firstArg.quasis[index];
          const afterQuasi = firstArg.quasis[index + 1];
          
          const beforeText = beforeQuasi ? beforeQuasi.value.raw : '';
          const afterText = afterQuasi ? afterQuasi.value.raw : '';
          
          // Check if expression is properly surrounded by square brackets (dynamic style pattern)
          // Only skip reporting if the expression is completely enclosed in brackets like h-[${height}]
          const isDynamicStyle = beforeText.endsWith('[') && afterText.startsWith(']');
          
          // Skip reporting if it's a valid dynamic style pattern
          if (isDynamicStyle) {
            return;
          }

          // Find the position of ${expression} in the template
          const expressionStart = expression.range![0];
          const dollarBraceStart = expressionStart - 2; // Account for '${'  
          const expressionEnd = expression.range![1];
          const braceEnd = expressionEnd + 1; // Account for '}'

          context.report({
            node: expression,
            loc: {
              start: sourceCode.getLocFromIndex(dollarBraceStart),
              end: sourceCode.getLocFromIndex(braceEnd)
            },
            messageId: 'templateWithExpressions',
            suggest: [
              {
                messageId: 'suggestAlternative',
                fix: function () {
                  // Auto-fix suggestions could be provided here, but due to complexity, only messages are provided for now
                  return null;
                }
              }
            ]
          });
        });
      }
    }

    return {
      ImportDeclaration(node: TSESTree.ImportDeclaration) {
        if (checkImports) {
          importTracker.handleImportDeclaration(node);
        }
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
        
        checkTemplateExpression(node);
      },
    };
  },
};

export default noTemplateExpressions;