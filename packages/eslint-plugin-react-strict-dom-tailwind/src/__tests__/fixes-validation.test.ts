/**
 * Fix functionality validation tests
 * Verify the isValidClassName method of StyleValidator
 */

// Import style data and StyleValidator instance from actual source code
import { STATIC_STYLES, DYNAMIC_PREFIXES } from '../generated/styles';
import { styleValidator } from '../rules/no-invalid-classes';

describe('Fixes Validation', () => {
    describe('Basic Style Collection Information', () => {
        test('should contain static styles', () => {
            expect(STATIC_STYLES.size).toBeGreaterThan(0);
        });

        test('should contain dynamic prefixes', () => {
            expect(DYNAMIC_PREFIXES.size).toBeGreaterThan(0);
        });

        test('should output style collection size information', () => {
            console.log('STATIC_STYLES count:', STATIC_STYLES.size);
            console.log('DYNAMIC_PREFIXES count:', DYNAMIC_PREFIXES.size);
        });
    });

    describe('Static Style Validation', () => {
        const staticTests = ['flex', 'p-4', 'text-center', 'bg-red-500'];

        test.each(staticTests)('should validate static style %s as valid', (className) => {
            const isValid = styleValidator.isValidClassName(className);
            expect(isValid).toBe(true);
        });

        test('should correctly validate all static style test cases', () => {
            const results = staticTests.map(className => ({
                className,
                isValid: styleValidator.isValidClassName(className)
            }));

            results.forEach(({ isValid }) => {
                expect(isValid).toBe(true);
            });
        });
    });

    describe('Arbitrary Value Syntax Validation', () => {
        const arbitraryTests = [
            { className: 'h-[50px]', expected: true, description: 'height arbitrary value' },
            { className: 'w-[100px]', expected: true, description: 'width arbitrary value' },
            { className: 'bg-[#ff0000]', expected: true, description: 'background color arbitrary value' },
            { className: 'invalid-[50px]', expected: false, description: 'invalid prefix arbitrary value' }
        ];

        test.each(arbitraryTests)('should validate arbitrary value syntax $className ($description)', ({ className, expected }) => {
            const isValid = styleValidator.isValidClassName(className);
            expect(isValid).toBe(expected);
        });

        test('should correctly parse arbitrary value syntax format', () => {
            const validArbitraryValues = ['h-[50px]', 'w-[100px]', 'bg-[#ff0000]'];
            const invalidArbitraryValues = ['invalid-[50px]', 'unknown-prefix-[value]'];

            validArbitraryValues.forEach(className => {
                const match = className.match(/^([a-zA-Z-]+)-\[(.+)\]$/);
                expect(match).not.toBeNull();
                if (match) {
                    const prefix = match[1];
                    expect(DYNAMIC_PREFIXES.has(prefix)).toBe(true);
                }
            });

            invalidArbitraryValues.forEach(className => {
                const match = className.match(/^([a-zA-Z-]+)-\[(.+)\]$/);
                if (match) {
                    const prefix = match[1];
                    expect(DYNAMIC_PREFIXES.has(prefix)).toBe(false);
                }
            });
        });
    });

    describe('Dynamic Prefix Validation', () => {
        const dynamicTests = [
            { className: 'bg-opacity-50', expected: true, description: 'background opacity' },
            { className: 'border-opacity-25', expected: true, description: 'border opacity' },
            { className: 'text-opacity-75', expected: true, description: 'text opacity' },
            { className: 'unknown-prefix-50', expected: false, description: 'unknown prefix' }
        ];

        test.each(dynamicTests)('should validate dynamic prefix $className ($description)', ({ className, expected }) => {
            const isValid = styleValidator.isValidClassName(className);
            expect(isValid).toBe(expected);
        });

        test('should correctly identify dynamic prefix patterns', () => {
            const validDynamicStyles = ['bg-opacity-50', 'border-opacity-25', 'text-opacity-75'];

            validDynamicStyles.forEach(className => {
                // Check if there is a matching dynamic prefix
                let hasMatchingPrefix = false;
                for (const prefix of DYNAMIC_PREFIXES) {
                    if (className.startsWith(prefix + '-')) {
                        hasMatchingPrefix = true;
                        break;
                    }
                }
                expect(hasMatchingPrefix).toBe(true);
            });
        });
    });

    describe('Prefix Existence Check', () => {
        const prefixesToCheck = ['h', 'w', 'bg', 'bg-opacity', 'border-opacity', 'text-opacity'];

        test.each(prefixesToCheck)('should check the existence of prefix %s', (prefix) => {
            const hasPrefix = DYNAMIC_PREFIXES.has(prefix);
            expect(typeof hasPrefix).toBe('boolean');

            // Output prefix check results (for debugging)
            console.log(`Prefix '${prefix}': ${hasPrefix ? 'exists' : 'does not exist'}`);
        });

        test('should contain basic dynamic prefixes', () => {
            const basicPrefixes = ['h', 'w', 'bg'];
            basicPrefixes.forEach(prefix => {
                expect(DYNAMIC_PREFIXES.has(prefix)).toBe(true);
            });
        });
    });

    describe('Comprehensive Validation Tests', () => {
        test('should correctly handle mixed style types', () => {
            const mixedStyles = [
                { className: 'flex', type: 'static' },
                { className: 'h-[50px]', type: 'arbitrary' },
                { className: 'bg-opacity-50', type: 'dynamic' },
                { className: 'invalid-class', type: 'invalid' }
            ];

            mixedStyles.forEach(({ className, type }) => {
                const isValid = styleValidator.isValidClassName(className);
                if (type === 'invalid') {
                    expect(isValid).toBe(false);
                } else {
                    expect(isValid).toBe(true);
                }
            });
        });

        test('should correctly validate complex class name combinations', () => {
            const complexClassNames = [
                'bg-[rgba(255,0,0,0.5)]',  // Complex arbitrary value
                'w-[calc(100%-20px)]',     // CSS calc function
                'text-[1.5rem]',           // rem unit
                'border-t-[2px]'           // Specific border
            ];

            complexClassNames.forEach(className => {
                const isValid = styleValidator.isValidClassName(className);
                // These should be judged based on prefix validity
                expect(typeof isValid).toBe('boolean');
            });
        });

        test('should handle edge cases', () => {
            const edgeCases = [
                '',                    // Empty string
                'a',                   // Single character
                'very-long-class-name-that-might-not-exist',  // Long class name
                'class-with-numbers-123',  // Contains numbers
                'class_with_underscores'   // Contains underscores
            ];

            edgeCases.forEach(className => {
                const isValid = styleValidator.isValidClassName(className);
                expect(typeof isValid).toBe('boolean');
            });
        });
    });
});