/**
 * Template string fix tests
 * Test template string processing logic fix functionality
 */

import { RuleTester } from 'eslint';
import { noInvalidClasses, styleValidator } from '../rules/no-invalid-classes';

const ruleTester = new RuleTester({});

// ESLint rule tests - valid cross-expression dynamic styles
ruleTester.run('valid dynamic styles across expressions', noInvalidClasses, {
  valid: [
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`border-color-[${activeItemId === account.id ? "#007AFF" : "#E5E5E5"}]`)' },
  ],
  invalid: []
});

// ESLint rule tests - invalid dynamic style prefixes
ruleTester.run('invalid dynamic style prefixes', noInvalidClasses, {
  valid: [],
  invalid: [
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw(`invalid-prefix-[${someValue}]`)',
      errors: [{ messageId: 'invalidClass' }]
    }
  ]
});

// ESLint rule tests - mixed valid dynamic and static styles
ruleTester.run('mixed valid dynamic and static styles', noInvalidClasses, {
  valid: [
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`flex border-color-[${color}] p-4`)' },
  ],
  invalid: []
});

// ESLint rule tests - mixed invalid dynamic and valid static styles
ruleTester.run('mixed invalid dynamic and valid static styles', noInvalidClasses, {
  valid: [],
  invalid: [
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw(`flex invalid-prefix-[${color}] p-4`)',
      errors: [{ messageId: 'invalidClass' }]
    }
  ]
});

// ESLint rule tests - mixed valid dynamic and invalid static styles
ruleTester.run('mixed valid dynamic and invalid static styles', noInvalidClasses, {
  valid: [],
  invalid: [
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw(`invalid-static border-color-[${color}] p-4`)',
      errors: [{ messageId: 'invalidClass' }]
    }
  ],
});

// ESLint rule tests - multiple valid dynamic styles
ruleTester.run('multiple valid dynamic styles', noInvalidClasses, {
  valid: [
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`border-color-[${borderColor}] bg-[${bgColor}] p-4`)' },
  ],
  invalid: []
});

// ESLint rule tests - complex template strings
ruleTester.run('complex template strings', noInvalidClasses, {
  valid: [
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`flex ${className} border-color-[${color}] ${spacing} p-4`)' },
  ],
  invalid: []
});

// ESLint rule tests - empty template strings
ruleTester.run('empty template strings', noInvalidClasses, {
  valid: [
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(``)' },
  ],
  invalid: []
});

// ESLint rule tests - template strings containing only expressions
ruleTester.run('expression only template strings', noInvalidClasses, {
  valid: [
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`${className}`)' },
  ],
  invalid: []
});

// Note: The actual template string processing logic is fully implemented in no-invalid-classes.ts
// These tests mainly verify ESLint rule behavior, not re-implementing processing logic

// StyleValidator basic functionality tests
describe('Template Fix Tests', () => {
  describe('StyleValidator functionality verification', () => {
    test('should correctly validate dynamic prefixes', () => {
      expect(styleValidator.hasDynamicPrefix('border-color')).toBe(true);
      expect(styleValidator.hasDynamicPrefix('bg')).toBe(true);
      expect(styleValidator.hasDynamicPrefix('text')).toBe(true);
      expect(styleValidator.hasDynamicPrefix('invalid-prefix')).toBe(false);
    });

    test('should correctly validate static class names', () => {
      expect(styleValidator.isValidClassName('flex')).toBe(true);
      expect(styleValidator.isValidClassName('p-4')).toBe(true);
      expect(styleValidator.isValidClassName('invalid-static')).toBe(false);
    });

    test('should handle edge cases', () => {
      expect(styleValidator.isValidClassName('')).toBe(false);
      expect(styleValidator.hasDynamicPrefix('')).toBe(false);
    });
  });
});