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

### Combining with Static Tailwind Classes

You can combine dynamic styles with static Tailwind classes using the `tw()` function:

```tsx
import { tw, dynamicStyles } from 'react-strict-dom-tailwind';
import { html } from 'react-strict-dom';

function MyComponent() {
  // Dynamic width based on a variable
  const contentWidth = '75%';

  return (
    <html.div
      style={{
        ...tw('flex flex-col items-center p-4 bg-gray-100'),
        ...dynamicStyles.w(contentWidth)
      }}
    >
      <html.h1 style={tw('text-2xl font-bold text-blue-600')}>
        Dynamic + Static Styles
      </html.h1>
      <html.p style={tw('text-gray-700 text-center')}>
        This component uses both static Tailwind classes and dynamic width.
      </html.p>
    </html.div>
  );
}
```

This approach allows you to use the convenience of predefined Tailwind classes for most styling needs while having the flexibility to apply dynamic values when needed.

### Real-world Usage Example

Here's a more comprehensive example showing how dynamic styles can be used in a real-world component:

```tsx
import React, { useState } from 'react';
import { html } from 'react-strict-dom';
import { tw, dynamicStyles } from 'react-strict-dom-tailwind';

function ResponsiveCard({ title, content, isExpanded = false }) {
  const [expanded, setExpanded] = useState(isExpanded);

  // Dynamic values based on component state
  const cardHeight = expanded ? 'auto' : '200px';
  const rotateIcon = expanded ? '180deg' : '0deg';

  return (
    <html.div
      style={{
        ...tw('bg-white rounded-lg shadow-md p-4 overflow-hidden transition-all duration-300'),
        ...dynamicStyles.h(cardHeight)
      }}
    >
      <html.div style={tw('flex justify-between items-center mb-4')}>
        <html.h2 style={tw('text-xl font-bold text-gray-800')}>{title}</html.h2>
        <html.button
          onClick={() => setExpanded(!expanded)}
          style={{
            ...tw('bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center transition-transform'),
            ...dynamicStyles.rotate(rotateIcon)
          }}
        >
          ↓
        </html.button>
      </html.div>

      <html.div style={tw('text-gray-600')}>
        {content}
      </html.div>
    </html.div>
  );
}
```

### Platform Compatibility

The dynamic styles work across all platforms supported by React Strict DOM:

| Function | Web | iOS | Android |
|----------|-----|-----|---------|
| Dimension functions (`w`, `h`, etc.) | ✅ | ✅ | ✅ |
| Margin & Padding | ✅ | ✅ | ✅ |
| Colors | ✅ | ✅ | ✅ |
| Transforms | ✅ | ✅ | ✅ |
| Transitions | ✅ | ⚠️ Limited | ⚠️ Limited |
| Filters | ✅ | ⚠️ Limited | ⚠️ Limited |

Note: Some advanced CSS features like filters and transitions may have limited support on native platforms.

### Available Dynamic Style Functions

Below is a comprehensive list of all available dynamic style functions organized by category:

#### Dimensions

| Function | CSS Property | Value | Web | Android | iOS |
|----------|-------------|-------|-----|---------|-----|
| `w(value)` | width | value | ✅ | ✅ | ✅ |
| `h(value)` | height | value | ✅ | ✅ | ✅ |
| `size(value)` | width, height | value | ✅ | ✅ | ✅ |
| `min-w(value)` | minWidth | value | ✅ | ✅ | ✅ |
| `min-h(value)` | minHeight | value | ✅ | ✅ | ✅ |
| `max-w(value)` | maxWidth | value | ✅ | ✅ | ✅ |
| `max-h(value)` | maxHeight | value | ✅ | ✅ | ✅ |

#### Margin

| Function | CSS Property | Value | Web | Android | iOS |
|----------|-------------|-------|-----|---------|-----|
| `m(value)` | margin | value | ✅ | ✅ | ✅ |
| `mx(value)` | marginLeft, marginRight | value | ✅ | ✅ | ✅ |
| `my(value)` | marginTop, marginBottom | value | ✅ | ✅ | ✅ |
| `mt(value)` | marginTop | value | ✅ | ✅ | ✅ |
| `mr(value)` | marginRight | value | ✅ | ✅ | ✅ |
| `mb(value)` | marginBottom | value | ✅ | ✅ | ✅ |
| `ml(value)` | marginLeft | value | ✅ | ✅ | ✅ |

#### Padding

| Function | CSS Property | Value | Web | Android | iOS |
|----------|-------------|-------|-----|---------|-----|
| `p(value)` | padding | value | ✅ | ✅ | ✅ |
| `px(value)` | paddingLeft, paddingRight | value | ✅ | ✅ | ✅ |
| `py(value)` | paddingTop, paddingBottom | value | ✅ | ✅ | ✅ |
| `pt(value)` | paddingTop | value | ✅ | ✅ | ✅ |
| `pr(value)` | paddingRight | value | ✅ | ✅ | ✅ |
| `pb(value)` | paddingBottom | value | ✅ | ✅ | ✅ |
| `pl(value)` | paddingLeft | value | ✅ | ✅ | ✅ |

#### Typography

| Function | CSS Property | Value | Web | Android | iOS |
|----------|-------------|-------|-----|---------|-----|
| `text(value)` | fontSize | value | ✅ | ✅ | ✅ |
| `leading(value)` | lineHeight | value | ✅ | ✅ | ✅ |
| `tracking(value)` | letterSpacing | value | ✅ | ✅ | ✅ |
| `indent(value)` | textIndent | value | ✅ | ✅ | ✅ |
| `line-clamp(value)` | WebkitLineClamp, display, WebkitBoxOrient, overflow | complex | ✅ | ⚠️ | ⚠️ |

#### Colors

| Function | CSS Property | Value | Web | Android | iOS |
|----------|-------------|-------|-----|---------|-----|
| `color(value)` | color | value | ✅ | ✅ | ✅ |
| `bg(value)` | backgroundColor | value | ✅ | ✅ | ✅ |
| `bg-opacity(value)` | --tw-bg-opacity | value | ✅ | ⚠️ | ⚠️ |
| `text-opacity(value)` | --tw-text-opacity | value | ✅ | ⚠️ | ⚠️ |

#### Borders

| Function | CSS Property | Value | Web | Android | iOS |
|----------|-------------|-------|-----|---------|-----|
| `border(value)` | borderWidth | value | ✅ | ✅ | ✅ |
| `border-x(value)` | borderLeftWidth, borderRightWidth | value | ✅ | ✅ | ✅ |
| `border-y(value)` | borderTopWidth, borderBottomWidth | value | ✅ | ✅ | ✅ |
| `border-t(value)` | borderTopWidth | value | ✅ | ✅ | ✅ |
| `border-r(value)` | borderRightWidth | value | ✅ | ✅ | ✅ |
| `border-b(value)` | borderBottomWidth | value | ✅ | ✅ | ✅ |
| `border-l(value)` | borderLeftWidth | value | ✅ | ✅ | ✅ |
| `border-color(value)` | borderColor | value | ✅ | ✅ | ✅ |
| `border-opacity(value)` | --tw-border-opacity | value | ✅ | ⚠️ | ⚠️ |

#### Border Radius

| Function | CSS Property | Value | Web | Android | iOS |
|----------|-------------|-------|-----|---------|-----|
| `rounded(value)` | borderRadius | value | ✅ | ✅ | ✅ |
| `rounded-s(value)` | borderStartStartRadius, borderEndStartRadius | value | ✅ | ✅ | ✅ |
| `rounded-e(value)` | borderStartEndRadius, borderEndEndRadius | value | ✅ | ✅ | ✅ |
| `rounded-t(value)` | borderTopLeftRadius, borderTopRightRadius | value | ✅ | ✅ | ✅ |
| `rounded-r(value)` | borderTopRightRadius, borderBottomRightRadius | value | ✅ | ✅ | ✅ |
| `rounded-b(value)` | borderBottomLeftRadius, borderBottomRightRadius | value | ✅ | ✅ | ✅ |
| `rounded-l(value)` | borderTopLeftRadius, borderBottomLeftRadius | value | ✅ | ✅ | ✅ |
| `rounded-tl(value)` | borderTopLeftRadius | value | ✅ | ✅ | ✅ |
| `rounded-tr(value)` | borderTopRightRadius | value | ✅ | ✅ | ✅ |
| `rounded-br(value)` | borderBottomRightRadius | value | ✅ | ✅ | ✅ |
| `rounded-bl(value)` | borderBottomLeftRadius | value | ✅ | ✅ | ✅ |

#### Positioning

| Function | CSS Property | Value | Web | Android | iOS |
|----------|-------------|-------|-----|---------|-----|
| `top(value)` | top | value | ✅ | ✅ | ✅ |
| `right(value)` | right | value | ✅ | ✅ | ✅ |
| `bottom(value)` | bottom | value | ✅ | ✅ | ✅ |
| `left(value)` | left | value | ✅ | ✅ | ✅ |
| `inset(value)` | top, right, bottom, left | value | ✅ | ✅ | ✅ |
| `inset-x(value)` | left, right | value | ✅ | ✅ | ✅ |
| `inset-y(value)` | top, bottom | value | ✅ | ✅ | ✅ |
| `z(value)` | zIndex | value | ✅ | ✅ | ✅ |

#### Flexbox & Grid

| Function | CSS Property | Value | Web | Android | iOS |
|----------|-------------|-------|-----|---------|-----|
| `basis(value)` | flexBasis | value | ✅ | ✅ | ✅ |
| `flex(value)` | flex | value | ✅ | ✅ | ✅ |
| `grow(value)` | flexGrow | value | ✅ | ✅ | ✅ |
| `shrink(value)` | flexShrink | value | ✅ | ✅ | ✅ |
| `order(value)` | order | value | ✅ | ✅ | ✅ |
| `grid-cols(value)` | gridTemplateColumns | repeat(value, minmax(0, 1fr)) | ✅ | ⚠️ | ⚠️ |
| `grid-rows(value)` | gridTemplateRows | repeat(value, minmax(0, 1fr)) | ✅ | ⚠️ | ⚠️ |
| `col-span(value)` | gridColumn | span value / span value | ✅ | ⚠️ | ⚠️ |
| `col-start(value)` | gridColumnStart | value | ✅ | ⚠️ | ⚠️ |
| `col-end(value)` | gridColumnEnd | value | ✅ | ⚠️ | ⚠️ |
| `row-span(value)` | gridRow | span value / span value | ✅ | ⚠️ | ⚠️ |
| `row-start(value)` | gridRowStart | value | ✅ | ⚠️ | ⚠️ |
| `row-end(value)` | gridRowEnd | value | ✅ | ⚠️ | ⚠️ |
| `gap(value)` | gap | value | ✅ | ✅ | ✅ |
| `gap-x(value)` | columnGap | value | ✅ | ✅ | ✅ |
| `gap-y(value)` | rowGap | value | ✅ | ✅ | ✅ |

#### Spacing

| Function | CSS Property | Value | Web | Android | iOS |
|----------|-------------|-------|-----|---------|-----|
| `space(value)` | --tw-space-* variables | complex | ✅ | ⚠️ | ⚠️ |
| `space-x(value)` | --tw-space-x-reverse | complex | ✅ | ⚠️ | ⚠️ |
| `space-y(value)` | --tw-space-y-reverse | complex | ✅ | ⚠️ | ⚠️ |

#### Effects

| Function | Parameter Type | Description | CSS Properties |
|----------|---------------|-------------|----------------|
| `opacity` | string \| number | Sets opacity | `opacity` |
| `shadow` | string | Sets box shadow | `boxShadow` |
| `blur` | string \| number | Sets blur filter | `filter: blur(${blur})` |
| `brightness` | string \| number | Sets brightness filter | `filter: brightness(${brightness})` |
| `contrast` | string \| number | Sets contrast filter | `filter: contrast(${contrast})` |
| `grayscale` | string \| number | Sets grayscale filter | `filter: grayscale(${amount})` |
| `hue-rotate` | string \| number | Sets hue-rotate filter | `filter: hue-rotate(${angle})` |
| `invert` | string \| number | Sets invert filter | `filter: invert(${amount})` |
| `saturate` | string \| number | Sets saturate filter | `filter: saturate(${amount})` |
| `sepia` | string \| number | Sets sepia filter | `filter: sepia(${amount})` |

#### Transforms

| Function | Parameter Type | Description | CSS Properties |
|----------|---------------|-------------|----------------|
| `translate` | string \| number | Sets translate transform | `transform: translate(${translate})` |
| `translate-x` | string \| number | Sets translateX transform | `transform: translateX(${translateX})` |
| `translate-y` | string \| number | Sets translateY transform | `transform: translateY(${translateY})` |
| `rotate` | string \| number | Sets rotate transform | `transform: rotate(${rotate})` |
| `scale` | string \| number | Sets scale transform | `transform: scale(${scale})` |
| `scale-x` | string \| number | Sets scaleX transform | `transform: scaleX(${scaleX})` |
| `scale-y` | string \| number | Sets scaleY transform | `transform: scaleY(${scaleY})` |
| `skew` | string \| number | Sets skew transform | `transform: skew(${skew})` |
| `skew-x` | string \| number | Sets skewX transform | `transform: skewX(${skewX})` |
| `skew-y` | string \| number | Sets skewY transform | `transform: skewY(${skewY})` |

#### Transitions and Animations

| Function | Parameter Type | Description | CSS Properties |
|----------|---------------|-------------|----------------|
| `transition` | string | Sets transition property | `transitionProperty` |
| `duration` | string \| number | Sets transition duration | `transitionDuration: typeof duration === 'number' ? '${duration}ms' : duration` |
| `ease` | string | Sets transition timing function | `transitionTimingFunction` |
| `delay` | string \| number | Sets transition delay | `transitionDelay: typeof delay === 'number' ? '${delay}ms' : delay` |

#### Layout

| Function | CSS Property | Value | Web | Android | iOS |
|----------|-------------|-------|-----|---------|-----|
| `aspect(value)` | aspectRatio | value | ✅ | ⚠️ | ⚠️ |
| `columns(value)` | columns | value | ✅ | ⚠️ | ⚠️ |
| `object-position(value)` | objectPosition | value | ✅ | ⚠️ | ⚠️ |

#### Miscellaneous

| Function | CSS Property | Value | Web | Android | iOS |
|----------|-------------|-------|-----|---------|-----|
| `content(value)` | content | value | ✅ | ⚠️ | ⚠️ |
| `accent(value)` | accentColor | value | ✅ | ⚠️ | ⚠️ |
| `caret(value)` | caretColor | value | ✅ | ⚠️ | ⚠️ |
| `scroll-m(value)` | scrollMargin | value | ✅ | ⚠️ | ⚠️ |
| `scroll-mx(value)` | scrollMarginLeft, scrollMarginRight | value | ✅ | ⚠️ | ⚠️ |
| `scroll-my(value)` | scrollMarginTop, scrollMarginBottom | value | ✅ | ⚠️ | ⚠️ |
| `scroll-mt(value)` | scrollMarginTop | value | ✅ | ⚠️ | ⚠️ |
| `scroll-mr(value)` | scrollMarginRight | value | ✅ | ⚠️ | ⚠️ |
| `scroll-mb(value)` | scrollMarginBottom | value | ✅ | ⚠️ | ⚠️ |
| `scroll-ml(value)` | scrollMarginLeft | value | ✅ | ⚠️ | ⚠️ |
| `scroll-p(value)` | scrollPadding | value | ✅ | ⚠️ | ⚠️ |
| `scroll-px(value)` | scrollPaddingLeft, scrollPaddingRight | value | ✅ | ⚠️ | ⚠️ |
| `scroll-py(value)` | scrollPaddingTop, scrollPaddingBottom | value | ✅ | ⚠️ | ⚠️ |
| `scroll-pt(value)` | scrollPaddingTop | value | ✅ | ⚠️ | ⚠️ |
| `scroll-pr(value)` | scrollPaddingRight | value | ✅ | ⚠️ | ⚠️ |
| `scroll-pb(value)` | scrollPaddingBottom | value | ✅ | ⚠️ | ⚠️ |
| `scroll-pl(value)` | scrollPaddingLeft | value | ✅ | ⚠️ | ⚠️ |
| `stroke(value)` | stroke | value | ✅ | ⚠️ | ⚠️ |
| `stroke-w(value)` | strokeWidth | value | ✅ | ⚠️ | ⚠️ |
| `fill(value)` | fill | value | ✅ | ⚠️ | ⚠️ |

### Implementation Notes

- The dynamic styles are implemented as functions that accept a value and return a style object.
- When using numeric values, they are generally passed through as-is without adding units.
- String values are passed through as provided, allowing for any valid CSS unit.
- Properties like `duration` and `delay` will automatically add 'ms' when a number is provided (e.g., `duration(300)` becomes `transitionDuration: '300ms'`).
- The implementation is based on the `dynamic.styles.ts` file in the package source.

## License

MIT License