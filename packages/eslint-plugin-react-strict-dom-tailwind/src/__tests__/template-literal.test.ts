/**
 * Test ESLint rule behavior for template literal edge cases
 * Verify that border-color-[${...}] patterns are not incorrectly flagged as invalid
 */

import { RuleTester } from 'eslint';
import { noInvalidClasses } from '../rules/no-invalid-classes';

const ruleTester = new RuleTester({});

// ESLint rule tests - border-color dynamic styles
ruleTester.run('border-color dynamic styles', noInvalidClasses, {
    valid: [
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`border-color-[${activeItemId === account.id ? "#007AFF" : "#E5E5E5"}]`)' },
    ],
    invalid: []
});

// ESLint rule tests - multiple dynamic styles
ruleTester.run('multiple dynamic styles', noInvalidClasses, {
    valid: [
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`bg-[${color}] w-[${size}] h-[${size}] text-[${size}] p-[${size}] m-[${size}]`)' },
    ],
    invalid: []
});

// ESLint rule tests - mixed static and dynamic styles
ruleTester.run('mixed static and dynamic styles', noInvalidClasses, {
    valid: [
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`flex bg-[${color}] p-4 border-color-[${color}] text-lg`)' },
    ],
    invalid: []
});

// ESLint rule tests - complex conditional expressions
ruleTester.run('complex conditional expressions', noInvalidClasses, {
    valid: [
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`border-color-[${isActive ? primaryColor : secondaryColor}] bg-[${isActive ? "rgba(0, 122, 255, 0.1)" : "transparent"}]`)' },
    ],
    invalid: []
});

// ESLint rule tests - invalid prefix template literals
ruleTester.run('invalid prefix template literal', noInvalidClasses, {
    valid: [],
    invalid: [
        {
            code: 'import { tw } from "react-strict-dom-tailwind"; tw(`invalid-prefix-[${value}]`)',
            errors: [{ messageId: 'invalidClass' }]
        }
    ]
});

// ESLint rule tests - mixed valid and invalid prefixes
ruleTester.run('mixed valid and invalid prefixes', noInvalidClasses, {
    valid: [],
    invalid: [
        {
            code: 'import { tw } from "react-strict-dom-tailwind"; tw(`bg-[${color}] invalid-[${size}] w-[${size}]`)',
            errors: [{ messageId: 'invalidClass' }]
        }
    ]
});

// ESLint rule tests - empty template literals
ruleTester.run('empty template literal', noInvalidClasses, {
    valid: [
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw(``)' },
    ],
    invalid: []
});

// ESLint rule tests - expression only template literal
ruleTester.run('expression only template literal', noInvalidClasses, {
    valid: [
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`${className}`)' },
    ],
    invalid: []
});

// ESLint rule tests - complex border dynamic styles
ruleTester.run('complex border dynamic styles', noInvalidClasses, {
    valid: [
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`border-[${borderWidth}] border-color-[${borderColor}] border-t-[${borderTopWidth}]`)' },
    ],
    invalid: []
});

// ESLint rule tests - cross-expression dynamic styles
ruleTester.run('cross-expression dynamic styles', noInvalidClasses, {
    valid: [
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`border-color-[${dynamicColor}]`)' },
    ],
    invalid: []
});

// ESLint rule tests - multiple cross-expression dynamic styles
ruleTester.run('multiple cross-expression dynamic styles', noInvalidClasses, {
    valid: [
        { code: 'import { tw } from "react-strict-dom-tailwind"; tw(`w-[${width}] h-[${height}] bg-[${bgColor}]`)' },
    ],
    invalid: []
});

// Basic functionality tests
describe('Template Literal Edge Cases Basic Tests', () => {
    test('rule should correctly handle template literals', () => {
        expect(noInvalidClasses).toBeDefined();
        expect(typeof noInvalidClasses.create).toBe('function');
    });

    test('rule should have correct metadata configuration', () => {
        expect(noInvalidClasses.meta).toBeDefined();
        expect(noInvalidClasses.meta.type).toBe('problem');
        expect(noInvalidClasses.meta.messages.invalidClass).toBeDefined();
    });

    test('rule should be able to handle template literal nodes', () => {
        const mockContext = {
            report: jest.fn(),
            getSourceCode: jest.fn(() => ({
                getText: jest.fn(() => 'tw(`border-color-[${color}]`)')
            }))
        };

        const visitor = noInvalidClasses.create(mockContext);
        expect(visitor).toBeDefined();
        expect(typeof visitor.CallExpression).toBe('function');
    });
});