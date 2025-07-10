/**
 * ESLint Plugin for React Strict DOM Tailwind
 * 
 * Validates that tw() function only uses style classes defined in react-strict-dom-tailwind
 */

import { noInvalidClasses } from './rules/no-invalid-classes';
import { noTemplateExpressions } from './rules/no-template-expressions';

interface ESLintPlugin {
  meta: {
    name: string;
    version: string;
  };
  rules: Record<string, unknown>;
  configs: Record<string, unknown>;
}

const plugin: ESLintPlugin = {
  meta: {
    name: 'eslint-plugin-react-strict-dom-tailwind',
    version: '1.0.0',
  },
  rules: {
    'no-invalid-classes': noInvalidClasses,
    'no-template-expressions': noTemplateExpressions,
  },
  configs: {

  },
};

Object.assign(plugin.configs, {
  recommended: {
    plugins: {
      'react-strict-dom-tailwind': plugin,
    },
    rules: {
      'react-strict-dom-tailwind/no-invalid-classes': 'error',
      'react-strict-dom-tailwind/no-template-expressions': 'warn',
    },
  },
});

export default plugin;

module.exports = plugin;
