# React Strict DOM Tailwind

A Tailwind CSS style implementation based on React Strict DOM and StyleX

## Overview

This package provides a solution for using Tailwind CSS-like styling in React Strict DOM projects. It leverages StyleX's `css.create` to create efficient styles at compile time while providing the familiar Tailwind class name syntax.

**Note:** This project does not directly implement the original Tailwind CSS embedding. Instead, it creates a mapping system that converts Tailwind CSS styles into StyleX styles while preserving the familiar Tailwind usage pattern. The implementation translates Tailwind class names into corresponding StyleX style objects through a mapping relationship.


## Installation

```bash
npm install react-strict-dom-tailwind
# or using pnpm
pnpm add react-strict-dom-tailwind
```

## Configuration

### PostCSS Configuration

To use `react-strict-dom-tailwind`, you need to add the following to the `postcss-react-strict-dom` plugin configuration in your project's `postcss.config.js` file:

```js
module.exports = {
  plugins: {
    'postcss-react-strict-dom': {
      include: [
        // Include source files to monitor style changes
        'src/**/*.{js,jsx,mjs,ts,tsx}',
        // Include react-strict-dom-tailwind package
        'node_modules/react-strict-dom-tailwind/**/*.{js,jsx,mjs,ts,tsx}',
      ],
    },
    // Other plugins...
  },
};
```

This configuration ensures that PostCSS can process style definitions in the `react-strict-dom-tailwind` package.

## Usage

```tsx
import React from 'react';
import { html } from 'react-strict-dom';
import { tw } from 'react-strict-dom-tailwind';

const MyComponent = () => {
  return (
    <html.div style={tw('flex flex-col items-center p-4 bg-gray-100')}>
      <html.h1 style={tw('text-2xl font-bold text-blue-600 mb-4')}>
        Hello, Tailwind!
      </html.h1>
      <html.p style={tw('text-gray-700 text-center max-w-md')}>
        This is a Tailwind-style component implemented with React Strict DOM and StyleX.
      </html.p>
    </html.div>
  );
};

export default MyComponent;
```


### How It Works

Under the hood, the `tw()` function parses Tailwind class strings and maps them to StyleX style objects. All StyleX `css.create` styles are pre-defined in the react-strict-dom-tailwind package, and the `tw()` function simply combines these pre-defined styles based on the provided Tailwind class names. For example:

```tsx
// When you write:
<html.div style={tw('bg-blue-500 hover:bg-blue-700')} />

// It's not creating styles at runtime, but referencing pre-defined StyleX objects
const predefinedStyles = css.create({
  "bg-blue-500": {
    backgroundColor: {
      default: 'rgb(59, 130, 246)' // blue-500
    }
  },
  "hover:bg-blue-700": {
    backgroundColor: {
      ':hover': 'rgb(29, 78, 216)' // blue-700
    }
  }
});

// That are equivalent to (just for example):
<html.div
  style={{
    ...predefinedStyles["bg-blue-500"],
    ...predefinedStyles["hover:bg-blue-700"]
  }}
/>

// Then, it will pass to StyleX for later processing
```

This approach allows you to use familiar Tailwind syntax while leveraging StyleX's performance benefits.

## Tailwind class support

Not all Tailwind classes are supported by StyleX. Here is a list of Tailwind classes that are supported by StyleX:

- [Tailwind class support](https://github.com/FrederickTAT/react-strict-dom-tailwind/blob/master/tailwind-support.md)

## Dynamic Styles

In addition to the standard Tailwind classes, this package provides dynamic style functions that enable Tailwind-like utility classes with arbitrary values.

### Overview

The `dynamicStyles` object is created using `css.create()` from `react-strict-dom`. Each property in this object is a function that accepts a value (string or number) and returns a style object with the corresponding CSS properties.

### Usage

```tsx
import { dynamicStyles } from 'react-strict-dom-tailwind';

// Apply a width of 150px
const styles = dynamicStyles.w('150px');
// Result: { width: '150px' }

// Apply multiple styles by combining objects
const combinedStyles = {
  ...dynamicStyles.w('200px'),
  ...dynamicStyles.h('100px'),
  ...dynamicStyles.bg('#ff0000'),
};
// Result: { width: '200px', height: '100px', backgroundColor: '#ff0000' }
```

### With Arbitrary Values

```tsx
// Using arbitrary values
const paddingStyles = dynamicStyles.p('2.5rem');
// Result: { padding: '2.5rem' }

// Using numbers (interpreted as pixels in most cases)
const marginStyles = dynamicStyles.m(16);
// Result: { margin: 16 }

// Using complex values
const transformStyles = dynamicStyles.rotate('45deg');
// Result: { transform: 'rotate(45deg)' }
```

### Available Dynamic Style Categories

- **Dimensions**: `w`, `h`, `size`, `min-w`, `min-h`, `max-w`, `max-h`
- **Margin**: `m`, `mx`, `my`, `mt`, `mr`, `mb`, `ml`
- **Padding**: `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl`
- **Typography**: `text`, `leading`, `tracking`, `indent`, `line-clamp`
- **Colors**: `color`, `bg`, `bg-opacity`, `text-opacity`
- **Borders**: `border`, `border-x`, `border-y`, `border-t`, `border-r`, `border-b`, `border-l`, `border-color`, `border-opacity`
- **Border Radius**: `rounded`, `rounded-s`, `rounded-e`, `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-tl`, `rounded-tr`, `rounded-br`, `rounded-bl`
- **Positioning**: `top`, `right`, `bottom`, `left`, `inset`, `inset-x`, `inset-y`, `z`
- **Flexbox & Grid**: `basis`, `flex`, `grow`, `shrink`, `order`, `grid-cols`, `grid-rows`, `col-span`, `col-start`, `col-end`, `row-span`, `row-start`, `row-end`, `gap`, `gap-x`, `gap-y`
- **Spacing**: `space`, `space-x`, `space-y`
- **Effects**: `opacity`, `shadow`, `blur`, `brightness`, `contrast`, `grayscale`, `hue-rotate`, `invert`, `saturate`, `sepia`
- **Transforms**: `translate`, `translate-x`, `translate-y`, `rotate`, `scale`, `scale-x`, `scale-y`, `skew`, `skew-x`, `skew-y`
- **Transitions**: `transition`, `duration`, `ease`, `delay`
- **Layout**: `aspect`, `columns`, `object-position`
- **Miscellaneous**: `content`, `accent`, `caret`, `scroll-m`, `scroll-p`, `stroke`, `stroke-w`, `fill`

For a complete reference of all available dynamic styles and their parameters, see the [Dynamic Styles Documentation](docs/dynamic-styles.md).

### Implementation Notes

- The dynamic styles are implemented as functions that accept a value and return a style object.
- When using numeric values, they are generally passed through as-is without adding units.
- String values are passed through as provided, allowing for any valid CSS unit.
- Some properties like `duration` and `delay` will automatically add 'ms' when a number is provided.

## License

MIT License