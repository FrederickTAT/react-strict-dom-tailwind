/**
 * Test no-template-expressions rule
 * Verify that template expressions are properly detected and dynamic styles are correctly skipped
 */

import { RuleTester } from 'eslint';
import { noTemplateExpressions } from '../rules/no-template-expressions';

const ruleTester = new RuleTester();

ruleTester.run('no-template-expressions', noTemplateExpressions, {
  valid: [
    // Static strings should be valid
    { code: 'tw("flex p-4 bg-red-500")' },
    { code: 'tw(\'flex p-4 bg-red-500\')' },
    
    // Dynamic styles with square brackets should be valid (not reported)
    { code: 'tw(`flex p-4 h-[${height}]`)' },
    { code: 'tw(`w-[${width}] h-[${height}]`)' },
    { code: 'tw(`bg-[${color}] text-[${textColor}]`)' },
    { code: 'tw(`border-[${borderWidth}] border-[${borderColor}]`)' },
    { code: 'tw(`m-[${margin}] p-[${padding}]`)' },
    { code: 'tw(`text-[${fontSize}] leading-[${lineHeight}]`)' },
    { code: 'tw(`flex flex-col flex-cc w-full p-5 pt-10 bg-gray-100 min-h-screen h-[${100}]`)' },
    
    // Multiple dynamic styles in one template
    { code: 'tw(`w-[${width}] h-[${height}] bg-[${bgColor}]`)' },
    
    // Mixed static and dynamic styles
    { code: 'tw(`flex p-4 w-[${width}] bg-red-500`)' },
    
    // Complex dynamic expressions
    { code: 'tw(`h-[${condition ? "100px" : "200px"}]`)' },
    { code: 'tw(`bg-[${active ? "#007AFF" : "#E5E5E5"}]`)' },
  ],
  
  invalid: [
    // Template expressions without square brackets should be invalid
    {
      code: 'tw(`flex p-4 ${dynamicClass}`)',
      errors: [{ messageId: 'templateWithExpressions' }],
    },
    
    // Multiple invalid expressions
    {
      code: 'tw(`${baseClass} p-4 ${additionalClass}`)',
      errors: [
        { messageId: 'templateWithExpressions' },
        { messageId: 'templateWithExpressions' },
      ],
    },
    
    // Mixed valid dynamic styles and invalid expressions
    {
      code: 'tw(`flex h-[${height}] ${invalidClass} w-[${width}]`)',
      errors: [{ messageId: 'templateWithExpressions' }],
    },
    
    // Expression not properly wrapped in brackets
    {
      code: 'tw(`h-${height}px`)',
      errors: [{ messageId: 'templateWithExpressions' }],
    },
    
    // Partial bracket wrapping
    {
      code: 'tw(`h-[${height}`)',
      errors: [{ messageId: 'templateWithExpressions' }],
    },
    
    {
      code: 'tw(`h-${height}]`)',
      errors: [{ messageId: 'templateWithExpressions' }],
    },
  ],
});

describe('no-template-expressions rule functionality', () => {
  test('rule should be properly exported', () => {
    expect(noTemplateExpressions).toBeDefined();
    expect(typeof noTemplateExpressions).toBe('object');
    expect(noTemplateExpressions.meta).toBeDefined();
    expect(noTemplateExpressions.create).toBeDefined();
  });
  
  test('rule metadata should be correctly configured', () => {
    expect(noTemplateExpressions.meta.type).toBe('suggestion');
    expect(noTemplateExpressions.meta.docs).toBeDefined();
    expect(noTemplateExpressions.meta.messages).toBeDefined();
    expect(noTemplateExpressions.meta.messages.templateWithExpressions).toBeDefined();
    expect(noTemplateExpressions.meta.messages.suggestAlternative).toBeDefined();
  });
  
  // Note: Dynamic style detection (like h-[${100}]) is tested through actual ESLint runs
  // The rule correctly skips reporting errors for expressions surrounded by square brackets
});