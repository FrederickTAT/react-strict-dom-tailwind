import { RuleTester } from 'eslint';
import { noColorLiterals } from '../rules/no-color-literals';

const ruleTester = new RuleTester();

ruleTester.run('no-color-literals', noColorLiterals, {
  valid: [
    // Valid dynamic color classes (using CSS variables or other non-literal values)
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('bg-[var(--primary-color)]');
      `,
    },
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('color-[theme(colors.blue.500)]');
      `,
    },
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('border-[calc(1px + 2px)]');
      `,
    },
    // Static Tailwind class names (not dynamic colors)
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('bg-blue-500 text-red-600');
      `,
    },
    // Dynamic classes with non-color literals
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('w-[100px] h-[50vh] p-[2rem]');
      `,
    },
    // Valid dynamic colors in template strings
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const color = 'var(--accent)';
        const styles = tw(\`bg-[\${color}]\`);
      `,
    },
  ],
  invalid: [
    // Hexadecimal color literals
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('bg-[#ffffff]');
      `,
      errors: [
        {
          messageId: 'colorLiteral',
          data: {
            className: 'bg-[#ffffff]',
            value: '#ffffff',
          },
        },
      ],
    },
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('color-[#fff]');
      `,
      errors: [
        {
          messageId: 'colorLiteral',
          data: {
            className: 'color-[#fff]',
            value: '#fff',
          },
        },
      ],
    },
    // RGB/RGBA color literals
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('bg-[rgb(255,255,255)]');
      `,
      errors: [
        {
          messageId: 'colorLiteral',
          data: {
            className: 'bg-[rgb(255,255,255)]',
            value: 'rgb(255,255,255)',
          },
        },
      ],
    },
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('text-[rgba(0,0,0,0.5)]');
      `,
      errors: [
        {
          messageId: 'colorLiteral',
          data: {
            className: 'text-[rgba(0,0,0,0.5)]',
            value: 'rgba(0,0,0,0.5)',
          },
        },
      ],
    },
    // HSL/HSLA color literals
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('border-[hsl(0,100%,50%)]');
      `,
      errors: [
        {
          messageId: 'colorLiteral',
          data: {
            className: 'border-[hsl(0,100%,50%)]',
            value: 'hsl(0,100%,50%)',
          },
        },
      ],
    },
    // CSS color keywords
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('bg-[red]');
      `,
      errors: [
        {
          messageId: 'colorLiteral',
          data: {
            className: 'bg-[red]',
            value: 'red',
          },
        },
      ],
    },
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('text-[transparent]');
      `,
      errors: [
        {
          messageId: 'colorLiteral',
          data: {
            className: 'text-[transparent]',
            value: 'transparent',
          },
        },
      ],
    },
    // Color literals in array syntax
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw(['bg-[#000000]', 'text-white']);
      `,
      errors: [
        {
          messageId: 'colorLiteral',
          data: {
            className: 'bg-[#000000]',
            value: '#000000',
          },
        },
      ],
    },
    // Color literals in template strings
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw(\`bg-[#ff0000] text-lg\`);
      `,
      errors: [
        {
          messageId: 'colorLiteral',
          data: {
            className: 'bg-[#ff0000]',
            value: '#ff0000',
          },
        },
      ],
    },
    // Multiple color literals
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('bg-[#fff] border-[rgba(0,0,0,1)] text-[blue]');
      `,
      errors: [
        {
          messageId: 'colorLiteral',
          data: {
            className: 'bg-[#fff]',
            value: '#fff',
          },
        },
        {
          messageId: 'colorLiteral',
          data: {
            className: 'border-[rgba(0,0,0,1)]',
            value: 'rgba(0,0,0,1)',
          },
        },
        {
          messageId: 'colorLiteral',
          data: {
            className: 'text-[blue]',
            value: 'blue',
          },
        },
      ],
    },
    // Color literals in any dynamic styles will be detected
    {
      code: `
        import { tw } from 'react-strict-dom-tailwind';
        const styles = tw('ring-[#00ff00] outline-[purple] fill-[#123456] custom-[red]');
      `,
      errors: [
        {
          messageId: 'colorLiteral',
          data: {
            className: 'ring-[#00ff00]',
            value: '#00ff00',
          },
        },
        {
          messageId: 'colorLiteral',
          data: {
            className: 'outline-[purple]',
            value: 'purple',
          },
        },
        {
          messageId: 'colorLiteral',
          data: {
            className: 'fill-[#123456]',
            value: '#123456',
          },
        },
        {
          messageId: 'colorLiteral',
          data: {
            className: 'custom-[red]',
            value: 'red',
          },
        },
      ],
    },
  ],
});