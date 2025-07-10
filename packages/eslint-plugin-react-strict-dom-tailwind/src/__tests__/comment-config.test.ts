import { RuleTester } from 'eslint';
import { noInvalidClasses } from '../rules/no-invalid-classes';

const ruleTester = new RuleTester();

describe('Comment Configuration Tests', () => {
  ruleTester.run('no-invalid-classes with comment config', noInvalidClasses, {
    valid: [
      // Test comment configuration with custom function names
      {
        code: `
          /* eslint-plugin-react-strict-dom-tailwind functions: ["tw", "css", "styles"] */
          tw("flex justify-center");
          css("bg-red-500 text-white");
          styles("p-4 m-2");
        `,
        options: [{ checkImports: false }],
      },
      // Test that functions not in comment config are ignored
      {
        code: `
          /* eslint-plugin-react-strict-dom-tailwind functions: ["tw"] */
          tw("flex justify-center");
          otherFunction("invalid-class");
        `,
        options: [{ checkImports: false }],
      },
      // Test with single function in comment config
      {
        code: `
          /* eslint-plugin-react-strict-dom-tailwind functions: ["customTw"] */
          customTw("flex justify-center items-center");
        `,
        options: [{ checkImports: false }],
      },
    ],
    invalid: [
      // Test comment configuration detects invalid classes
      {
        code: `
          /* eslint-plugin-react-strict-dom-tailwind functions: ["tw", "css"] */
          tw("invalid-class");
          css("another-invalid");
        `,
        options: [{ checkImports: false }],
        errors: [
          {
            messageId: 'invalidClass',
            data: { className: 'invalid-class' },
          },
          {
            messageId: 'invalidClass',
            data: { className: 'another-invalid' },
          },
        ],
      },
      // Test that configured functions are checked for invalid classes
      {
        code: `
          /* eslint-plugin-react-strict-dom-tailwind functions: ["customFunction"] */
          customFunction("unknown-tailwind-class");
        `,
        options: [{ checkImports: false }],
        errors: [
          {
            messageId: 'invalidClass',
            data: { className: 'unknown-tailwind-class' },
          },
        ],
      },
      // Test mixed valid and invalid classes with comment config
      {
        code: `
          /* eslint-plugin-react-strict-dom-tailwind functions: ["tw"] */
          tw("flex invalid-class justify-center");
        `,
        options: [{ checkImports: false }],
        errors: [
          {
            messageId: 'invalidClass',
            data: { className: 'invalid-class' },
          },
        ],
      },
    ],
  });

  ruleTester.run('no-invalid-classes fallback to options when no comment', noInvalidClasses, {
    valid: [
      // Test fallback to functionNames option when no comment config
      {
        code: `
          customTw("flex justify-center");
          anotherFunction("bg-red-500");
        `,
        options: [{ checkImports: false, functionNames: ['customTw', 'anotherFunction'] }],
      },
    ],
    invalid: [
      // Test fallback to functionNames option detects invalid classes
      {
        code: `
          customTw("invalid-class");
        `,
        options: [{ checkImports: false, functionNames: ['customTw'] }],
        errors: [
          {
            messageId: 'invalidClass',
            data: { className: 'invalid-class' },
          },
        ],
      },
    ],
  });

  ruleTester.run('no-invalid-classes comment config priority', noInvalidClasses, {
    valid: [
      // Test that comment config overrides options
      {
        code: `
          /* eslint-plugin-react-strict-dom-tailwind functions: ["commentFunction"] */
          commentFunction("flex justify-center");
          optionFunction("invalid-class"); // This should be ignored
        `,
        options: [{ checkImports: false, functionNames: ['optionFunction'] }],
      },
    ],
    invalid: [
      // Test that comment config takes priority over options
      {
        code: `
          /* eslint-plugin-react-strict-dom-tailwind functions: ["commentFunction"] */
          commentFunction("invalid-class");
        `,
        options: [{ checkImports: false, functionNames: ['optionFunction'] }],
        errors: [
          {
            messageId: 'invalidClass',
            data: { className: 'invalid-class' },
          },
        ],
      },
    ],
  });
});