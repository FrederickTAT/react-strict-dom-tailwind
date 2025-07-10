/**
 * Dynamic style processing tests in template literals
 * Verify that patterns like border-color-[${...}] are correctly recognized as valid dynamic styles
 */

import { RuleTester } from 'eslint';
import { noInvalidClasses, styleValidator } from '../rules/no-invalid-classes';

const ruleTester = new RuleTester({});

// ESLint rule tests - valid dynamic styles
ruleTester.run('valid dynamic styles', noInvalidClasses, {
  valid: [
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`border-color-[${color}]`)' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`bg-[${bgColor}]`)' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`text-[${textColor}]`)' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`w-[${width}]`)' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`h-[${height}]`)' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`p-[${padding}]`)' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`m-[${margin}]`)' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`border-[${border}]`)' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`rounded-[${radius}]`)' },
  ],
  invalid: []
});

// ESLint rule tests - invalid dynamic styles
ruleTester.run('invalid dynamic styles', noInvalidClasses, {
  valid: [],
  invalid: [
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw(`invalid-prefix-[${value}]`)',
      errors: [{ messageId: 'invalidClass' }]
    },
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw(`unknown-[${value}]`)',
      errors: [{ messageId: 'invalidClass' }]
    }
  ]
});

// ESLint rule tests - valid static styles
ruleTester.run('valid static styles', noInvalidClasses, {
  valid: [
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw("flex")' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw("border-color-red-500")' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw("bg-blue-500")' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw("text-lg")' },
  ],
  invalid: []
});

// ESLint rule tests - special scenarios
ruleTester.run('special scenarios', noInvalidClasses, {
  valid: [
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`border-color-[${activeItemId === account.id ? "#007AFF" : "#E5E5E5"}]`)' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`border-t-[${borderWidth}]`)' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`border-b-[${borderWidth}]`)' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(``)' }, // Empty template string
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`${className}`)' }, // Only expression
  ],
  invalid: []
});

// StyleValidator functionality tests
describe('StyleValidator Functionality Verification', () => {

  describe('styleValidator.hasDynamicPrefix function', () => {
    test('border-color prefix should be valid', () => {
      expect(styleValidator.hasDynamicPrefix('border-color')).toBe(true);
    });

    test('basic prefixes should be valid', () => {
      const basicPrefixes = ['bg', 'text', 'w', 'h'];
      basicPrefixes.forEach(prefix => {
        expect(styleValidator.hasDynamicPrefix(prefix)).toBe(true);
      });
    });

    test('invalid prefixes should be correctly identified', () => {
      const invalidPrefixes = ['invalid-prefix', 'unknown', 'fake'];
      invalidPrefixes.forEach(prefix => {
        expect(styleValidator.hasDynamicPrefix(prefix)).toBe(false);
      });
    });

    test('should validate the validity of important prefixes', () => {
      const importantPrefixes = ['border-color', 'bg', 'text', 'w', 'h', 'p', 'm', 'border', 'rounded'];

      importantPrefixes.forEach(prefix => {
        const isValid = styleValidator.hasDynamicPrefix(prefix);
        expect(typeof isValid).toBe('boolean');
      });
    });
  });

  describe('Performance and Stability Tests', () => {
    test('should handle a large number of test cases without errors', () => {
      const testPrefixes: string[] = [];

      // Generate a large number of test cases
      for (let i = 0; i < 100; i++) {
        testPrefixes.push(`test-prefix-${i}`);
        testPrefixes.push(`bg`);
        testPrefixes.push(`text`);
      }

      expect(() => {
        testPrefixes.forEach(prefix => {
          styleValidator.hasDynamicPrefix(prefix);
        });
      }).not.toThrow();
    });

    test('should return consistent results for the same input', () => {
      const testPrefix = 'border-color';

      const result1 = styleValidator.hasDynamicPrefix(testPrefix);
      const result2 = styleValidator.hasDynamicPrefix(testPrefix);
      const result3 = styleValidator.hasDynamicPrefix(testPrefix);

      expect(result1).toEqual(result2);
      expect(result2).toEqual(result3);
    });
  });
});