/**
 * Test StyleValidator class validation logic
 * Verify that isValidClassName method correctly handles bracket syntax
 */

import { styleValidator } from '../rules/no-invalid-classes';

describe('StyleValidator', () => {

  describe('Dynamic styles (with brackets)', () => {
    test.each([
      ['h-[50px]', 'height arbitrary value'],
      ['w-[100px]', 'width arbitrary value'],
      ['bg-[#ff0000]', 'background color arbitrary value'],
      ['p-[20px]', 'padding arbitrary value'],
      ['m-[10px]', 'margin arbitrary value'],
      ['text-[16px]', 'font size arbitrary value'],
    ])('should validate %s as valid (%s)', (className) => {
      expect(styleValidator.isValidClassName(className)).toBe(true);
    });
  });

  describe('Invalid formats (dynamic styles without brackets)', () => {
    test.each([
      ['h-50px', 'invalid height format'],
      ['w-100px', 'invalid width format'],
      ['bg-ff0000', 'invalid background color format'],
      ['p-20px', 'invalid padding format'],
      ['m-10px', 'invalid margin format'],
      ['text-16px', 'invalid font size format'],
    ])('should validate %s as invalid (%s)', (className) => {
      expect(styleValidator.isValidClassName(className)).toBe(false);
    });
  });

  describe('Static styles', () => {
    test.each([
      ['h-4', 'predefined height value'],
      ['w-full', 'predefined width value'],
      ['bg-red-500', 'predefined background color'],
      ['p-4', 'predefined padding'],
      ['text-lg', 'predefined font size'],
      ['flex', 'layout style'],
    ])('should validate %s as valid (%s)', (className) => {
      expect(styleValidator.isValidClassName(className)).toBe(true);
    });
  });

  describe('Invalid styles', () => {
    test.each([
      ['invalid-[50px]', 'arbitrary value with invalid prefix'],
      ['unknown-class', 'unknown class name'],
      ['h-[]', 'empty arbitrary value'],
    ])('should validate %s as invalid (%s)', (className) => {
      expect(styleValidator.isValidClassName(className)).toBe(false);
    });
  });

  describe('Edge cases', () => {
    test('should correctly handle empty strings', () => {
      expect(styleValidator.isValidClassName('')).toBe(false);
    });

    test('should correctly handle strings with only spaces', () => {
      expect(styleValidator.isValidClassName('   ')).toBe(false);
    });

    test('should correctly handle complex arbitrary values', () => {
      expect(styleValidator.isValidClassName('w-[calc(100%-20px)]')).toBe(true);
      expect(styleValidator.isValidClassName('bg-[rgba(255,0,0,0.5)]')).toBe(true);
    });
  });
});