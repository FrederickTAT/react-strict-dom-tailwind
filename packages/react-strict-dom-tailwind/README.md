# React Strict DOM Tailwind

A Tailwind CSS style implementation based on React Strict DOM and StyleX

## Overview

This package provides a solution for using Tailwind CSS-like styling in React Strict DOM projects. It leverages StyleX's `css.create` to create efficient styles at compile time while providing the familiar Tailwind class name syntax.

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