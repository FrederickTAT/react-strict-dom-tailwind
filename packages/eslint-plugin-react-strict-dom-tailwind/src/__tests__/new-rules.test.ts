/**
 * New rules tests
 * Test no-invalid-classes rule
 */

import { RuleTester } from 'eslint';
import { noInvalidClasses } from '../rules/no-invalid-classes';

const ruleTester = new RuleTester();

// ESLint rule tests - string literals
ruleTester.run('noInvalidClasses - string literals', noInvalidClasses, {
  valid: [
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw("flex p-4 bg-red-500 text-center")' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw("")' }, // empty string
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw("   ")' }, // string with only spaces
  ],
  invalid: [
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("flex invalid-class bg-red-500")',
      errors: [{ messageId: 'invalidClass' }]
    }
  ]
});

// ESLint rule tests - template strings
ruleTester.run('noInvalidClasses - template strings', noInvalidClasses, {
  valid: [
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`flex p-4 bg-red-500`)' },
  ],
  invalid: [
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw(`flex invalid-template-class`)',
      errors: [{ messageId: 'invalidClass' }]
    }
  ]
});

// ESLint rule tests - template expressions
ruleTester.run('noInvalidClasses - template expressions', noInvalidClasses, {
  valid: [
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`flex ${someClass} p-4`)' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`border-color-[${color}]`)' }, // dynamic style
  ],
  invalid: [
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw(`flex invalid-prefix-[${color}] p-4`)',
      errors: [{ messageId: 'invalidClass' }]
    }
  ]
});

// ESLint rule tests - comprehensive tests
ruleTester.run('noInvalidClasses - comprehensive tests', noInvalidClasses, {
  valid: [
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw("flex border-color-[#ff0000] p-4")' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`bg-[${bgColor}] text-[14px]`)' },
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw("h-[50px] w-[100%]")' },
  ],
  invalid: [
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("flex h-[50px] invalid-class bg-red-500")',
      errors: [{ messageId: 'invalidClass' }]
    },
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw(`invalid-prefix-[${value}]`)',
      errors: [{ messageId: 'invalidClass' }]
    }
  ]
});

// Basic functionality tests
describe('No Invalid Classes Rule Basic Tests', () => {
  test('rule should be correctly exported', () => {
    expect(noInvalidClasses).toBeDefined();
    expect(typeof noInvalidClasses).toBe('object');
    expect(noInvalidClasses.meta).toBeDefined();
    expect(noInvalidClasses.create).toBeDefined();
  });

  test('rule metadata should be correctly configured', () => {
    expect(noInvalidClasses.meta.type).toBe('problem');
    expect(noInvalidClasses.meta.docs).toBeDefined();
    expect(noInvalidClasses.meta.messages).toBeDefined();
    expect(noInvalidClasses.meta.messages.invalidClass).toBeDefined();
  });

  test('rule creation function should return visitor object', () => {
    const mockContext = {
      report: jest.fn(),
      getSourceCode: jest.fn(() => ({
        getText: jest.fn(() => 'tw("flex")')
      }))
    };

    const visitor = noInvalidClasses.create(mockContext);
    expect(typeof visitor).toBe('object');
    expect(visitor.CallExpression).toBeDefined();
  });
});