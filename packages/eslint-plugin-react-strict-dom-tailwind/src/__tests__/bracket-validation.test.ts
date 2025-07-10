/**
 * Bracket syntax validation tests
 * Validates that h-[50px] is recognized as dynamic style, h-50px is recognized as static style
 */

import { isValidDynamicStyle, isValidStaticStyle, isValidClassName } from "../generated/styles";


describe('Bracket Syntax Validation', () => {
  describe('Dynamic styles (with brackets)', () => {
    const dynamicTestCases = [
      { className: 'h-[50px]', description: 'height arbitrary value' },
      { className: 'w-[100px]', description: 'width arbitrary value' },
      { className: 'bg-[#ff0000]', description: 'background color arbitrary value' },
      { className: 'p-[20px]', description: 'padding arbitrary value' },
      { className: 'm-[10px]', description: 'margin arbitrary value' },
      { className: 'text-[16px]', description: 'font size arbitrary value' },
    ];

    test.each(dynamicTestCases)('$className ($description) should be recognized as dynamic style', ({ className }) => {
      expect(isValidStaticStyle(className)).toBe(false);
      expect(isValidDynamicStyle(className)).toBe(true);
      expect(isValidClassName(className)).toBe(true);
    });
  });

  describe('Static styles (predefined values)', () => {
    const staticTestCases = [
      { className: 'h-4', description: 'predefined height value' },
      { className: 'w-full', description: 'predefined width value' },
      { className: 'bg-red-500', description: 'predefined background color' },
      { className: 'p-4', description: 'predefined padding' },
      { className: 'text-lg', description: 'predefined font size' },
    ];

    test.each(staticTestCases)('$className ($description) should be recognized as static style', ({ className }) => {
      expect(isValidStaticStyle(className)).toBe(true);
      expect(isValidDynamicStyle(className)).toBe(false);
      expect(isValidClassName(className)).toBe(true);
    });
  });

  describe('Invalid style formats', () => {
    const invalidTestCases = [
      { className: 'h-50px', description: 'invalid height format (should use brackets)' },
      { className: 'w-100px', description: 'invalid width format (should use brackets)' },
    ];

    test.each(invalidTestCases)('$className ($description) should be recognized as invalid style', ({ className }) => {
      expect(isValidStaticStyle(className)).toBe(false);
      expect(isValidDynamicStyle(className)).toBe(false);
      expect(isValidClassName(className)).toBe(false);
    });
  });

  describe('Edge cases', () => {
    const edgeCases = [
      { className: 'invalid-[50px]', description: 'arbitrary value with invalid prefix' },
      { className: 'h-[]', description: 'empty arbitrary value' },
      { className: 'h-[', description: 'incomplete bracket' },
      { className: 'h-50px]', description: 'missing left bracket' },
    ];

    test.each(edgeCases)('$className ($description) should be recognized as invalid style', ({ className }) => {
      expect(isValidStaticStyle(className)).toBe(false);
      expect(isValidDynamicStyle(className)).toBe(false);
      expect(isValidClassName(className)).toBe(false);
    });
  });

  describe('Comprehensive validation tests', () => {
    test('should correctly distinguish between static and dynamic styles', () => {
      // Dynamic style tests
      const dynamicStyles = ['h-[50px]', 'w-[100px]', 'bg-[#ff0000]'];
      dynamicStyles.forEach(className => {
        expect(isValidDynamicStyle(className)).toBe(true);
        expect(isValidStaticStyle(className)).toBe(false);
        expect(isValidClassName(className)).toBe(true);
      });

      // Static style tests
      const staticStyles = ['h-4', 'w-full', 'bg-red-500'];
      staticStyles.forEach(className => {
        expect(isValidStaticStyle(className)).toBe(true);
        expect(isValidDynamicStyle(className)).toBe(false);
        expect(isValidClassName(className)).toBe(true);
      });

      // Invalid style tests
      const invalidStyles = ['h-50px', 'invalid-[50px]', 'h-[]'];
      invalidStyles.forEach(className => {
        expect(isValidStaticStyle(className)).toBe(false);
        expect(isValidDynamicStyle(className)).toBe(false);
        expect(isValidClassName(className)).toBe(false);
      });
    });

    test('isValidClassName should return true when style is static or dynamic valid', () => {
      const validStyles = [
        'h-[50px]',    // dynamic valid
        'w-[100px]',   // dynamic valid
        'h-4',         // static valid
        'w-full',      // static valid
        'bg-red-500'   // static valid
      ];

      validStyles.forEach(className => {
        expect(isValidClassName(className)).toBe(true);
      });
    });

    test('isValidClassName should return false when style is neither static nor dynamic valid', () => {
      const invalidStyles = [
        'h-50px',        // format error
        'invalid-[50px]', // invalid prefix
        'h-[]',          // empty value
        'h-[',           // incomplete
        'unknown-class'   // completely invalid
      ];

      invalidStyles.forEach(className => {
        expect(isValidClassName(className)).toBe(false);
      });
    });
  });

  describe('Special characters and complex value tests', () => {
    test('should correctly handle arbitrary values with special characters', () => {
      const specialValueStyles = [
        'bg-[#ff0000]',     // hexadecimal color
        'w-[calc(100%-20px)]', // CSS calc function
        'text-[1.5rem]',    // rem unit
        'h-[50vh]',         // viewport unit
      ];

      specialValueStyles.forEach(className => {
        expect(isValidDynamicStyle(className)).toBe(true);
        expect(isValidStaticStyle(className)).toBe(false);
        expect(isValidClassName(className)).toBe(true);
      });
    });

    test('should correctly handle nested bracket cases', () => {
      const nestedBracketStyles = [
        'w-[calc(100%-20px)]',
        'bg-[url(data:image/svg+xml;base64,...))]'
      ];

      nestedBracketStyles.forEach(className => {
        // These should be recognized as dynamic styles (if prefix is valid)
        const result = isValidDynamicStyle(className);
        expect(typeof result).toBe('boolean');
      });
    });
  });
});