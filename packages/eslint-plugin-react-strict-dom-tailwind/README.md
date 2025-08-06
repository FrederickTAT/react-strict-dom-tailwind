# ESLint Plugin for React Strict DOM Tailwind

An ESLint plugin for validating the usage of `tw()` function in [`react-strict-dom-tailwind`](https://github.com/FrederickTAT/react-strict-dom-tailwind/tree/master/packages/react-strict-dom-tailwind) package, ensuring only defined static and dynamic style classes are used.

## Installation

```bash
npm install --save-dev eslint-plugin-react-strict-dom-tailwind
# or using pnpm
pnpm add -D eslint-plugin-react-strict-dom-tailwind
```

## Configuration

### Add plugin to ESLint configuration file

#### .eslintrc.js
```javascript
module.exports = {
  plugins: ['react-strict-dom-tailwind'],
  rules: {
    'react-strict-dom-tailwind/no-invalid-classes': 'error',
    'react-strict-dom-tailwind/no-template-expressions': 'warn',
    'react-strict-dom-tailwind/no-color-literals': 'warn',
  },
};
```

#### eslint.config.js (ESLint 9+)
```javascript
import reactStrictDomTailwind from 'eslint-plugin-react-strict-dom-tailwind';

export default [
  reactStrictDomTailwind.configs.recommended,
];
```

## Rules

### `no-invalid-classes`

Validates whether Tailwind class names used in `tw()` function calls are defined in the `react-strict-dom-tailwind` package. This rule ensures that only valid static styles and dynamic style prefixes are used.

#### Options

- `checkImports` (boolean, default: `true`): Whether to check if `tw()` is imported from `react-strict-dom-tailwind` before validation.
  - When `true` (default): Only validates `tw()` calls that are imported from `react-strict-dom-tailwind`
  - When `false`: Validates all `tw()` calls regardless of import source
- `functionNames` (string[], default: `["tw"]`): Function names to check when `checkImports` is `false`.
  - Only applies when `checkImports` is `false`
  - Supports both direct calls (`functionName()`) and member calls (`obj.functionName()`)

#### Comment-based Configuration

You can also configure function names using comments in your code. This takes priority over the `functionNames` option:

```javascript
/* eslint-plugin-react-strict-dom-tailwind functions: ["tw", "css", "styles"] */
tw("flex justify-center");
css("bg-red-500 text-white");
styles("p-4 m-2");
```

#### Configuration Examples

```javascript
// Default behavior - only validate tw() from react-strict-dom-tailwind
{
  "react-strict-dom-tailwind/no-invalid-classes": "error"
}

// Validate all tw() calls regardless of import source
{
  "react-strict-dom-tailwind/no-invalid-classes": ["error", { "checkImports": false }]
}

// Check custom function names when imports are disabled
{
  "react-strict-dom-tailwind/no-invalid-classes": [
    "error", 
    { 
      "checkImports": false, 
      "functionNames": ["tw", "css", "styles"] 
    }
  ]
}

// Explicitly enable import checking (same as default)
{
  "react-strict-dom-tailwind/no-invalid-classes": ["error", { "checkImports": true }]
}
```

### `no-template-expressions`

Discourages the use of template literals with expressions in `tw()` function calls for better static analysis. This rule warns when template literals contain expressions that cannot be statically validated, except for dynamic style patterns like `border-color-[${color}]`.

#### ✅ Correct usage

```tsx
import { tw } from 'react-strict-dom-tailwind';
import { html } from 'react-strict-dom';

// Using static styles
<html.div style={tw('flex items-center p-4')} />

// Using dynamic styles (arbitrary values)
<html.div style={tw('w-[100px] h-[200px] bg-[#ff0000]')} />

// Using dynamic styles with template expressions (allowed)
<html.div style={tw(`border-color-[${color}] bg-[${bgColor}]`)} />

// Using array form
<html.div style={tw(['flex', 'items-center', 'p-4'])} />

// Using conditional logic with arrays (recommended)
<html.div style={tw(['flex', 'items-center', isActive && 'bg-blue-500'])} />

// Using static template strings
<html.div style={tw(`flex items-center p-4`)} />
```

#### ❌ Incorrect usage

```tsx
import { tw } from 'react-strict-dom-tailwind';
import { html } from 'react-strict-dom';

// Using undefined static styles (no-invalid-classes)
<html.div style={tw('unknown-class')} /> // ❌ Error

// Using undefined dynamic style prefixes (no-invalid-classes)
<html.div style={tw('unknown-[100px]')} /> // ❌ Error

// Mixing valid and invalid classes (no-invalid-classes)
<html.div style={tw('flex unknown-class items-center')} /> // ❌ Error

// Using template expressions for class names (no-template-expressions)
const isActive = true;
<html.div style={tw(`flex items-center ${isActive ? 'bg-blue-500' : 'bg-gray-500'}`)} /> // ⚠️ Warning

// Using template expressions in non-dynamic contexts (no-template-expressions)
<html.div style={tw(`flex ${className} items-center`)} /> // ⚠️ Warning
```

### `no-color-literals`

Discourages the use of color literals in dynamic color classes like `color-[#fff]` or `bg-[rgba(255,255,255,1)]`. This rule helps maintain consistency and encourages the use of design tokens or CSS custom properties instead of hardcoded color values.

#### Options

- `checkImports` (boolean, default: `true`): Whether to check if `tw()` is imported from `react-strict-dom-tailwind` before validation.
- `functionNames` (string[], default: `["tw"]`): Function names to check when `checkImports` is `false`.

#### ✅ Correct usage

```tsx
import { tw } from 'react-strict-dom-tailwind';
import { html } from 'react-strict-dom';

// Using Tailwind color tokens
<html.div style={tw('bg-red-500 text-white')} />

// Using CSS custom properties in dynamic styles
<html.div style={tw('bg-[var(--primary-color)] text-[var(--text-color)]')} />

// Using non-color arbitrary values
<html.div style={tw('w-[100px] h-[200px] rounded-[8px]')} />
```

#### ❌ Incorrect usage

```tsx
import { tw } from 'react-strict-dom-tailwind';
import { html } from 'react-strict-dom';

// Using hex color literals
<html.div style={tw('bg-[#ff0000] text-[#ffffff]')} /> // ⚠️ Warning

// Using RGB color literals
<html.div style={tw('bg-[rgb(255,0,0)] text-[rgba(255,255,255,0.8)]')} /> // ⚠️ Warning

// Using HSL color literals
<html.div style={tw('bg-[hsl(0,100%,50%)] text-[hsla(0,0%,100%,0.9)]')} /> // ⚠️ Warning

// Using CSS color keywords
<html.div style={tw('bg-[red] text-[white]')} /> // ⚠️ Warning
```

## Supported Style Types

For more information about supported React Strict Dom Tailwind styles, see [Tailwind Support Documentation](https://github.com/FrederickTAT/react-strict-dom-tailwind/blob/master/tailwind-support.md).

## Edge Case Handling

The plugin can handle the following edge cases:

### `no-invalid-classes` rule:
1. **Template strings**: Validates static parts in template strings while ignoring expressions
2. **Array parameters**: Validates each string element in arrays
3. **Dynamic styles**: Recognizes arbitrary value syntax like `w-[100px]` and validates prefixes
4. **Empty strings and spaces**: Automatically filters empty strings and extra spaces
5. **Import tracking**: Supports various import patterns and aliased imports

### `no-template-expressions` rule:
1. **Dynamic style patterns**: Allows expressions within square brackets (e.g., `border-color-[${color}]`)
2. **Static template strings**: Permits template literals without expressions
3. **Member expressions**: Detects tw function calls through object properties
4. **Conditional logic**: Suggests using array syntax with conditional logic instead of template expressions

### `no-color-literals` rule:
1. **Color format detection**: Recognizes various color formats including hex (#fff, #ffffff), RGB/RGBA, HSL/HSLA, and CSS color keywords
2. **Dynamic style validation**: Only validates color literals within arbitrary value syntax (e.g., `bg-[#fff]`)
3. **Template literal support**: Validates color literals in both string literals and template literals
4. **Array parameter support**: Validates color literals in array elements
5. **Import tracking**: Respects the same import tracking as other rules

## Development

```bash
# Install dependencies
pnpm install

# Extract styles from react-strict-dom-tailwind
pnpm run extract-styles

# Build
pnpm run build

# Development mode (watch)
pnpm run dev

# Run tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run tests with coverage
pnpm run test:coverage

# Clean build artifacts
pnpm run clean
```

## License

MIT