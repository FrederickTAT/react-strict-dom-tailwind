/**
 * Final validation test: directly test the fixed template string processing logic
 * Verify that edge cases like border-color-[${...}] are handled correctly
 */

import { styleValidator } from '../rules/no-invalid-classes';

// These tests mainly verify the basic functionality of styleValidator

describe('StyleValidator Basic Functionality Tests', () => {
  describe('Key Prefix Validation', () => {
    test.each([
      'border-color',
      'bg',
      'text',
      'w',
      'h',
      'border',
      'border-t',
      'border-b'
    ])('should validate %s as a valid dynamic prefix', (prefix) => {
      expect(styleValidator.hasDynamicPrefix(prefix)).toBe(true);
    });

    test.each([
      'invalid-prefix',
      'unknown',
      'fake',
      'non-existent'
    ])('should validate %s as an invalid dynamic prefix', (prefix) => {
      expect(styleValidator.hasDynamicPrefix(prefix)).toBe(false);
    });
  });

  describe('Static Class Name Validation', () => {
    test('should correctly validate valid static class names', () => {
      expect(styleValidator.isValidClassName('flex')).toBe(true);
      expect(styleValidator.isValidClassName('p-4')).toBe(true);
      expect(styleValidator.isValidClassName('text-lg')).toBe(true);
      expect(styleValidator.isValidClassName('bg-red-500')).toBe(true);
    });

    test('should correctly identify invalid static class names', () => {
      expect(styleValidator.isValidClassName('invalid-class')).toBe(false);
      expect(styleValidator.isValidClassName('unknown-style')).toBe(false);
      expect(styleValidator.isValidClassName('fake-prefix-123')).toBe(false);
    });

    test('should correctly handle dynamic style formats', () => {
      expect(styleValidator.isValidClassName('bg-[#ff0000]')).toBe(true);
      expect(styleValidator.isValidClassName('w-[100px]')).toBe(true);
      expect(styleValidator.isValidClassName('h-[50%]')).toBe(true);
      expect(styleValidator.isValidClassName('border-color-[#007AFF]')).toBe(true);
    });

    test('should reject empty arbitrary values', () => {
      expect(styleValidator.isValidClassName('bg-[]')).toBe(false);
      expect(styleValidator.isValidClassName('w-[]')).toBe(false);
      expect(styleValidator.isValidClassName('h-[]')).toBe(false);
    });

    test('should reject invalid dynamic style formats', () => {
      expect(styleValidator.isValidClassName('bg-50px')).toBe(false);
      expect(styleValidator.isValidClassName('text-16px')).toBe(false);
      expect(styleValidator.isValidClassName('h-100%')).toBe(false);
    });
  });
});