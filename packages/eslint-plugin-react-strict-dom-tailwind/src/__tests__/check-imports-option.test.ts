/**
 * Test checkImports option functionality
 * Verify that the checkImports option controls whether to validate tw() calls based on imports
 */

import { RuleTester } from 'eslint';
import { noInvalidClasses } from '../rules/no-invalid-classes';

const ruleTester = new RuleTester();

// Test with checkImports: true (default behavior)
ruleTester.run('checkImports option - enabled (default)', noInvalidClasses, {
  valid: [
    // Should not validate tw() calls without proper imports
    { 
      code: 'tw("unknown-class");',
      options: [{ checkImports: true }]
    },
    // Should validate only tw() from react-strict-dom-tailwind with valid classes
    { 
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("flex");',
      options: [{ checkImports: true }]
    },
  ],
  invalid: [
    // Should validate tw() from react-strict-dom-tailwind with invalid classes
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("unknown-class");',
      options: [{ checkImports: true }],
      errors: [{ messageId: 'invalidClass' }],
    },
  ],
});

// Test with checkImports: false (validate all tw() calls)
ruleTester.run('checkImports option - disabled', noInvalidClasses, {
  valid: [
    // Should validate all tw() calls with valid classes, regardless of imports
    { 
      code: 'tw("flex");',
      options: [{ checkImports: false }]
    },
    { 
      code: 'import { tw } from "other-library"; tw("flex");',
      options: [{ checkImports: false }]
    },
    { 
      code: 'obj.tw("flex");',
      options: [{ checkImports: false }]
    },
  ],
  invalid: [
    // Should validate all tw() calls with invalid classes, regardless of imports
    {
      code: 'tw("unknown-class");',
      options: [{ checkImports: false }],
      errors: [{ messageId: 'invalidClass' }],
    },
    {
      code: 'import { tw } from "other-library"; tw("unknown-class");',
      options: [{ checkImports: false }],
      errors: [{ messageId: 'invalidClass' }],
    },
    {
      code: 'obj.tw("unknown-class");',
      options: [{ checkImports: false }],
      errors: [{ messageId: 'invalidClass' }],
    },
  ],
});

// Test default behavior (should be same as checkImports: true)
ruleTester.run('checkImports option - default behavior', noInvalidClasses, {
  valid: [
    // Should not validate tw() calls without proper imports (default behavior)
    { code: 'tw("unknown-class");' },
    // Should validate only tw() from react-strict-dom-tailwind with valid classes
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw("flex");' },
  ],
  invalid: [
    // Should validate tw() from react-strict-dom-tailwind with invalid classes
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("unknown-class");',
      errors: [{ messageId: 'invalidClass' }],
    },
  ],
});

// Test mixed scenarios
ruleTester.run('checkImports option - mixed scenarios', noInvalidClasses, {
  valid: [
    // With checkImports: true, should ignore tw() from other libraries
    {
      code: 'import { tw } from "other-lib"; import { tw as rsdTw } from "react-strict-dom-tailwind"; tw("invalid"); rsdTw("flex");',
      options: [{ checkImports: true }]
    },
  ],
  invalid: [
    // With checkImports: true, should still validate react-strict-dom-tailwind imports
    {
      code: 'import { tw } from "other-lib"; import { tw as rsdTw } from "react-strict-dom-tailwind"; tw("invalid"); rsdTw("unknown-class");',
      options: [{ checkImports: true }],
      errors: [{ messageId: 'invalidClass' }],
    },
    // With checkImports: false, should validate all tw() calls
    {
      code: 'import { tw } from "other-lib"; import { tw as rsdTw } from "react-strict-dom-tailwind"; tw("invalid-class"); rsdTw("unknown-class");',
      options: [{ checkImports: false }],
      errors: [{ messageId: 'invalidClass' }, { messageId: 'invalidClass' }],
    },
  ],
});

// Basic functionality tests
describe('CheckImports Option Tests', () => {
  test('rule should accept checkImports option', () => {
    expect(noInvalidClasses.meta.schema).toBeDefined();
    expect(noInvalidClasses.meta.schema[0]).toBeDefined();
    expect(noInvalidClasses.meta.schema[0].properties.checkImports).toBeDefined();
  });

  test('rule should have correct default options', () => {
    expect(noInvalidClasses.defaultOptions).toEqual([{ checkImports: true }]);
  });

  test('rule should create visitor with options', () => {
    const mockContext = {
      options: [{ checkImports: false }],
      report: jest.fn(),
      getSourceCode: jest.fn(() => ({
        getText: jest.fn(() => 'tw("flex")')
      }))
    };

    const visitor = noInvalidClasses.create(mockContext);
    expect(visitor).toBeDefined();
    expect(typeof visitor.CallExpression).toBe('function');
  });
});