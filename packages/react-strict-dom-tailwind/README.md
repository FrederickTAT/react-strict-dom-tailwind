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


## License

MIT License