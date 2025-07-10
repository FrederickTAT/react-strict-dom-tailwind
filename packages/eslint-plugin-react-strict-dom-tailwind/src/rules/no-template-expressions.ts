import { TSESTree, TSESLint } from '@typescript-eslint/utils';

export const noTemplateExpressions: any = {
  name: 'no-template-expressions',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Discourage the use of template literals with expressions in tw() function calls for better static analysis',
      recommended: 'warn',
    },
    fixable: undefined,
    schema: [],
    messages: {
      templateWithExpressions: 'Template literals with expressions cannot be fully validated. Consider using static strings, arrays, or conditional logic for better validation.',
      suggestAlternative: 'Consider refactoring to use static class names or array syntax: tw(["base-classes", condition && "conditional-class"])',
    },
  },
  create(context: TSESLint.RuleContext<'templateWithExpressions' | 'suggestAlternative', []>) {
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
          
          // Check if expression is surrounded by square brackets (dynamic style pattern)
          const isDynamicStyle = beforeText.endsWith('[') && afterText.startsWith(']');
          
          // Skip reporting if it's a dynamic style pattern
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
      // Use selector to match tw() function calls
      'CallExpression[callee.name="tw"]': checkTemplateExpression,
      // Use selector to match imported tw function calls (e.g., utils.tw())
      'CallExpression[callee.type="MemberExpression"][callee.property.name="tw"]': checkTemplateExpression,
    };
  },
};

export default noTemplateExpressions;