/**
 * Test excludeClasses option functionality
 * Verify that the excludeClasses option allows certain class names to be excluded from validation
 */

import { RuleTester } from 'eslint';
import { noInvalidClasses } from '../rules/no-invalid-classes';

const ruleTester = new RuleTester();

// Test with excludeClasses option
ruleTester.run('excludeClasses option - basic functionality', noInvalidClasses, {
  valid: [
    // Should not report errors for excluded classes
    { 
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("custom-class");',
      options: [{ checkImports: true, excludeClasses: ['custom-class'] }]
    },
    // Should not report errors for multiple excluded classes
    { 
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("custom-class another-custom");',
      options: [{ checkImports: true, excludeClasses: ['custom-class', 'another-custom'] }]
    },
    // Should still validate valid classes normally
    { 
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("flex custom-class");',
      options: [{ checkImports: true, excludeClasses: ['custom-class'] }]
    },
  ],
  invalid: [
    // Should still report errors for non-excluded invalid classes
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("invalid-class");',
      options: [{ checkImports: true, excludeClasses: ['custom-class'] }],
      errors: [{ messageId: 'invalidClass' }],
    },
    // Should report errors for some classes but not excluded ones
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("invalid-class custom-class another-invalid");',
      options: [{ checkImports: true, excludeClasses: ['custom-class'] }],
      errors: [
        { messageId: 'invalidClass', data: { className: 'invalid-class' } },
        { messageId: 'invalidClass', data: { className: 'another-invalid' } }
      ],
    },
  ],
});

// Test with template literals
ruleTester.run('excludeClasses option - template literals', noInvalidClasses, {
  valid: [
    // Should not report errors for excluded classes in template literals
    { 
      code: 'import { tw } from "react-strict-dom-tailwind"; tw(`custom-class flex`);',
      options: [{ checkImports: true, excludeClasses: ['custom-class'] }]
    },
    // Should work with dynamic expressions
    { 
      code: 'import { tw } from "react-strict-dom-tailwind"; tw(`custom-class border-color-[${color}]`);',
      options: [{ checkImports: true, excludeClasses: ['custom-class'] }]
    },
  ],
  invalid: [
    // Should still report errors for non-excluded classes in template literals
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw(`invalid-class custom-class`);',
      options: [{ checkImports: true, excludeClasses: ['custom-class'] }],
      errors: [{ messageId: 'invalidClass', data: { className: 'invalid-class' } }],
    },
  ],
});

// Test with array expressions
ruleTester.run('excludeClasses option - array expressions', noInvalidClasses, {
  valid: [
    // Should not report errors for excluded classes in arrays
    { 
      code: 'import { tw } from "react-strict-dom-tailwind"; tw(["custom-class", "flex"]);',
      options: [{ checkImports: true, excludeClasses: ['custom-class'] }]
    },
  ],
  invalid: [
    // Should still report errors for non-excluded classes in arrays
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw(["invalid-class", "custom-class"]);',
      options: [{ checkImports: true, excludeClasses: ['custom-class'] }],
      errors: [{ messageId: 'invalidClass', data: { className: 'invalid-class' } }],
    },
  ],
});

// Test default behavior (empty excludeClasses)
ruleTester.run('excludeClasses option - default behavior', noInvalidClasses, {
  valid: [
    // Should validate normally with valid classes
    { 
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("flex");',
      options: [{ checkImports: true, excludeClasses: [] }]
    },
  ],
  invalid: [
    // Should report errors for invalid classes when excludeClasses is empty
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("invalid-class");',
      options: [{ checkImports: true, excludeClasses: [] }],
      errors: [{ messageId: 'invalidClass' }],
    },
    // Should report errors when excludeClasses is not provided
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("invalid-class");',
      options: [{ checkImports: true }],
      errors: [{ messageId: 'invalidClass' }],
    },
  ],
});

// Test with checkImports: false
ruleTester.run('excludeClasses option - with checkImports false', noInvalidClasses, {
  valid: [
    // Should work with checkImports: false
    { 
      code: 'tw("custom-class flex");',
      options: [{ checkImports: false, excludeClasses: ['custom-class'] }]
    },
  ],
  invalid: [
    // Should still report non-excluded invalid classes
    {
      code: 'tw("invalid-class custom-class");',
      options: [{ checkImports: false, excludeClasses: ['custom-class'] }],
      errors: [{ messageId: 'invalidClass', data: { className: 'invalid-class' } }],
    },
  ],
});