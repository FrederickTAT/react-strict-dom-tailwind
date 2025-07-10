/**
 * Test dynamic style validation
 * Verify how the noInvalidClasses rule handles dynamic styles
 */

import { RuleTester } from 'eslint';
import { noInvalidClasses } from '../rules/no-invalid-classes';

const ruleTester = new RuleTester({});

// ESLint rule tests - valid dynamic styles
ruleTester.run('noInvalidClasses - valid dynamic styles', noInvalidClasses, {
    valid: [
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("h-[50px]")' }, // Height arbitrary value
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("w-[100%]")' }, // Width percentage
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("bg-[#ff0000]")' }, // Background color hexadecimal
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("text-[14px]")' }, // Text size
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("p-[10px_20px]")' }, // Padding composite value
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("m-[calc(100%-20px)]")' }, // Margin calculated value
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("border-[2px_solid_#000]")' }, // Border composite value
    ],
    invalid: []
});

// ESLint rule tests - valid static styles
ruleTester.run('noInvalidClasses - valid static styles', noInvalidClasses, {
    valid: [
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("flex")' }, // Layout style
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("bg-red-500")' }, // Predefined background color
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("m-4")' }, // Predefined margin
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("text-lg")' }, // Predefined text size
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("p-4")' }, // Predefined padding
    ],
    invalid: []
});

// ESLint rule tests - invalid styles
ruleTester.run('noInvalidClasses - invalid styles', noInvalidClasses, {
    valid: [],
    invalid: [
        {
            code: 'import { tw } from "react-strict-dom-tailwind"; tw("invalid-[50px]")',
            errors: [{ messageId: 'invalidClass' }]
        },
        {
            code: 'import { tw } from "react-strict-dom-tailwind"; tw("completely-invalid")',
            errors: [{ messageId: 'invalidClass' }]
        },
        {
            code: 'import { tw } from "react-strict-dom-tailwind"; tw("unknown-prefix-[100px]")',
            errors: [{ messageId: 'invalidClass' }]
        },
        {
            code: 'import { tw } from "react-strict-dom-tailwind"; tw("fake-class")',
            errors: [{ messageId: 'invalidClass' }]
        }
    ]
});

// ESLint rule tests - complex scenarios
ruleTester.run('noInvalidClasses - complex scenarios', noInvalidClasses, {
    valid: [
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("")' }, // Empty string
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw("   ")' }, // String with only spaces
    ],
    invalid: [
        {
            code: 'import { tw } from "react-strict-dom-tailwind"; tw("flex invalid-class bg-red-500")',
            errors: [{ messageId: 'invalidClass' }] // Should only report invalid-class
        }
    ]
});

// Basic functionality tests
describe('Dynamic Styles Validation Basic Tests', () => {
    test('rule should correctly handle dynamic styles', () => {
        expect(noInvalidClasses).toBeDefined();
        expect(typeof noInvalidClasses.create).toBe('function');
    });

    test('rule should have correct metadata', () => {
        expect(noInvalidClasses.meta).toBeDefined();
        expect(noInvalidClasses.meta.type).toBe('problem');
        expect(noInvalidClasses.meta.messages.invalidClass).toBeDefined();
    });

    test('rule should be able to create visitor', () => {
        const mockContext = {
            report: jest.fn(),
            getSourceCode: jest.fn(() => ({
                getText: jest.fn(() => 'tw("h-[50px]")')
            }))
        };

        const visitor = noInvalidClasses.create(mockContext);
        expect(visitor).toBeDefined();
        expect(typeof visitor.CallExpression).toBe('function');
    });
});