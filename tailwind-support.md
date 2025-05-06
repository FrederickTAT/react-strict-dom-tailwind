# Tailwind CSS v4.1 Reference Documentation

This document contains reference information for all style classes and theme variables in official Tailwind CSS v4.1. Tailwind CSS v4.1 uses the OKLCH color space and CSS variable system to provide better color representation and theme customization capabilities.

## Table of Contents

1. [Tailwind Classes and Styles](#tailwind-classes-and-styles)
   - [Layout](#layout)
   - [Flexbox and Grid](#flexbox-and-grid)
   - [Spacing](#spacing)
   - [Sizing](#sizing)
   - [Typography](#typography)
   - [Backgrounds](#backgrounds)
   - [Borders](#borders)
   - [Effects](#effects)
   - [Tables](#tables)
   - [Interactivity](#interactivity)
   - [State Variants](#state-variants)

2. [Tailwind Theme Variables](#tailwind-theme-variables)
   - [Colors](#colors)
   - [Spacing](#spacing-variables)
   - [Container Sizes](#container-sizes)
   - [Fonts](#fonts)
   - [Font Sizes](#font-sizes)
   - [Font Weights](#font-weights)
   - [Line Heights](#line-heights)
   - [Letter Spacing](#letter-spacing)
   - [Border Radius](#border-radius)
   - [Shadows](#shadows)
   - [Animations](#animations)

## Tailwind Classes and Styles

This section lists all available classes in official Tailwind CSS and their corresponding styles.

✅ means the class is supported and verified
☑️ means the class is supported with some adaptation and verified
❔ means the class is supported but not yet verified
❌ means the class is not yet supported

### Layout

#### Display

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `block` | display | block | ❔ | ❔ | ❔ |
| `inline-block` | display | inline-block | ❔ | ❔ | ❔ |
| `inline` | display | inline | ❔ | ❔ | ❔ |
| `flex` | display | flex | ❔ | ❔ | ❔ |
| `inline-flex` | display | inline-flex | ❔ | ❔ | ❔ |
| `table` | display | table | ❔ | ❔ | ❔ |
| `inline-table` | display | inline-table | ❔ | ❔ | ❔ |
| `table-caption` | display | table-caption | ❔ | ❔ | ❔ |
| `table-cell` | display | table-cell | ❔ | ❔ | ❔ |
| `table-column` | display | table-column | ❔ | ❔ | ❔ |
| `table-column-group` | display | table-column-group | ❔ | ❔ | ❔ |
| `table-footer-group` | display | table-footer-group | ❔ | ❔ | ❔ |
| `table-header-group` | display | table-header-group | ❔ | ❔ | ❔ |
| `table-row-group` | display | table-row-group | ❔ | ❔ | ❔ |
| `table-row` | display | table-row | ❔ | ❔ | ❔ |
| `flow-root` | display | flow-root | ❔ | ❔ | ❔ |
| `grid` | display | grid | ❔ | ❔ | ❔ |
| `inline-grid` | display | inline-grid | ❔ | ❔ | ❔ |
| `contents` | display | contents | ❔ | ❔ | ❔ |
| `list-item` | display | list-item | ❔ | ❔ | ❔ |
| `hidden` | display | none | ❔ | ❔ | ❔ |

#### Position

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `static` | position | static | ❔ | ❔ | ❔ |
| `fixed` | position | fixed | ❔ | ❔ | ❔ |
| `absolute` | position | absolute | ❔ | ❔ | ❔ |
| `relative` | position | relative | ❔ | ❔ | ❔ |
| `sticky` | position | sticky | ❔ | ❔ | ❔ |

#### Top / Right / Bottom / Left

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `inset-0` | top, right, bottom, left | 0 | ❔ | ❔ | ❔ |
| `inset-x-0` | left, right | 0 | ❔ | ❔ | ❔ |
| `inset-y-0` | top, bottom | 0 | ❔ | ❔ | ❔ |
| `top-0` | top | 0 | ❔ | ❔ | ❔ |
| `right-0` | right | 0 | ❔ | ❔ | ❔ |
| `bottom-0` | bottom | 0 | ❔ | ❔ | ❔ |
| `left-0` | left | 0 | ❔ | ❔ | ❔ |
| `inset-auto` | top, right, bottom, left | auto | ❔ | ❔ | ❔ |
| `inset-x-auto` | left, right | auto | ❔ | ❔ | ❔ |
| `inset-y-auto` | top, bottom | auto | ❔ | ❔ | ❔ |
| `top-auto` | top | auto | ❔ | ❔ | ❔ |
| `right-auto` | right | auto | ❔ | ❔ | ❔ |
| `bottom-auto` | bottom | auto | ❔ | ❔ | ❔ |
| `left-auto` | left | auto | ❔ | ❔ | ❔ |

#### Visibility

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `visible` | visibility | visible | ❔ | ❔ | ❔ |
| `invisible` | visibility | hidden | ❔ | ❔ | ❔ |
| `collapse` | visibility | collapse | ❔ | ❔ | ❔ |

#### Overflow

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `overflow-auto` | overflow | auto | ❔ | ❔ | ❔ |
| `overflow-hidden` | overflow | hidden | ❔ | ❔ | ❔ |
| `overflow-clip` | overflow | clip | ❔ | ❔ | ❔ |
| `overflow-visible` | overflow | visible | ❔ | ❔ | ❔ |
| `overflow-scroll` | overflow | scroll | ❔ | ❔ | ❔ |
| `overflow-x-auto` | overflowX | auto | ❔ | ❔ | ❔ |
| `overflow-y-auto` | overflowY | auto | ❔ | ❔ | ❔ |
| `overflow-x-hidden` | overflowX | hidden | ❔ | ❔ | ❔ |
| `overflow-y-hidden` | overflowY | hidden | ❔ | ❔ | ❔ |
| `overflow-x-clip` | overflowX | clip | ❔ | ❔ | ❔ |
| `overflow-y-clip` | overflowY | clip | ❔ | ❔ | ❔ |
| `overflow-x-visible` | overflowX | visible | ❔ | ❔ | ❔ |
| `overflow-y-visible` | overflowY | visible | ❔ | ❔ | ❔ |
| `overflow-x-scroll` | overflowX | scroll | ❔ | ❔ | ❔ |
| `overflow-y-scroll` | overflowY | scroll | ❔ | ❔ | ❔ |

#### Z-Index

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `z-0` | zIndex | 0 | ❔ | ❔ | ❔ |
| `z-10` | zIndex | 10 | ❔ | ❔ | ❔ |
| `z-20` | zIndex | 20 | ❔ | ❔ | ❔ |
| `z-30` | zIndex | 30 | ❔ | ❔ | ❔ |
| `z-40` | zIndex | 40 | ❔ | ❔ | ❔ |
| `z-50` | zIndex | 50 | ❔ | ❔ | ❔ |
| `z-auto` | zIndex | auto | ❔ | ❔ | ❔ |

#### Box Sizing

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `box-border` | boxSizing | border-box | ❔ | ❔ | ❔ |
| `box-content` | boxSizing | content-box | ❔ | ❔ | ❔ |

### Flexbox and Grid

#### Flex Direction

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `flex-row` | flexDirection | row | ❔ | ❔ | ❔ |
| `flex-row-reverse` | flexDirection | row-reverse | ❔ | ❔ | ❔ |
| `flex-col` | flexDirection | column | ❔ | ❔ | ❔ |
| `flex-col-reverse` | flexDirection | column-reverse | ❔ | ❔ | ❔ |

#### Flex Wrap

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `flex-wrap` | flexWrap | wrap | ❔ | ❔ | ❔ |
| `flex-wrap-reverse` | flexWrap | wrap-reverse | ❔ | ❔ | ❔ |
| `flex-nowrap` | flexWrap | nowrap | ❔ | ❔ | ❔ |

#### Flex Properties

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `flex-1` | flex | 1 1 0% | ❔ | ❔ | ❔ |
| `flex-auto` | flex | 1 1 auto | ❔ | ❔ | ❔ |
| `flex-initial` | flex | 0 1 auto | ❔ | ❔ | ❔ |
| `flex-none` | flex | none | ❔ | ❔ | ❔ |

#### Flex Grow

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `grow` | flexGrow | 1 | ❔ | ❔ | ❔ |
| `grow-0` | flexGrow | 0 | ❔ | ❔ | ❔ |

#### Flex Shrink

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `shrink` | flexShrink | 1 | ❔ | ❔ | ❔ |
| `shrink-0` | flexShrink | 0 | ❔ | ❔ | ❔ |

#### Grid Template Columns

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `grid-cols-1` | gridTemplateColumns | repeat(1, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-cols-2` | gridTemplateColumns | repeat(2, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-cols-3` | gridTemplateColumns | repeat(3, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-cols-4` | gridTemplateColumns | repeat(4, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-cols-5` | gridTemplateColumns | repeat(5, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-cols-6` | gridTemplateColumns | repeat(6, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-cols-7` | gridTemplateColumns | repeat(7, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-cols-8` | gridTemplateColumns | repeat(8, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-cols-9` | gridTemplateColumns | repeat(9, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-cols-12` | gridTemplateColumns | repeat(12, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-cols-none` | gridTemplateColumns | none | ❔ | ❔ | ❔ |

#### Grid Template Rows

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `grid-rows-1` | gridTemplateRows | repeat(1, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-rows-2` | gridTemplateRows | repeat(2, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-rows-3` | gridTemplateRows | repeat(3, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-rows-4` | gridTemplateRows | repeat(4, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-rows-5` | gridTemplateRows | repeat(5, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-rows-6` | gridTemplateRows | repeat(6, minmax(0, 1fr)) | ❔ | ❔ | ❔ |
| `grid-rows-none` | gridTemplateRows | none | ❔ | ❔ | ❔ |

#### Gap

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `gap-0` | gap | 0 | ❔ | ❔ | ❔ |
| `gap-1` | gap | 0.25rem | ❔ | ❔ | ❔ |
| `gap-2` | gap | 0.5rem | ❔ | ❔ | ❔ |
| `gap-3` | gap | 0.75rem | ❔ | ❔ | ❔ |
| `gap-4` | gap | 1rem | ❔ | ❔ | ❔ |
| `gap-5` | gap | 1.25rem | ❔ | ❔ | ❔ |
| `gap-6` | gap | 1.5rem | ❔ | ❔ | ❔ |
| `gap-8` | gap | 2rem | ❔ | ❔ | ❔ |
| `gap-10` | gap | 2.5rem | ❔ | ❔ | ❔ |
| `gap-12` | gap | 3rem | ❔ | ❔ | ❔ |
| `gap-16` | gap | 4rem | ❔ | ❔ | ❔ |
| `gap-20` | gap | 5rem | ❔ | ❔ | ❔ |
| `gap-24` | gap | 6rem | ❔ | ❔ | ❔ |
| `gap-32` | gap | 8rem | ❔ | ❔ | ❔ |
| `gap-40` | gap | 10rem | ❔ | ❔ | ❔ |
| `gap-48` | gap | 12rem | ❔ | ❔ | ❔ |
| `gap-56` | gap | 14rem | ❔ | ❔ | ❔ |
| `gap-64` | gap | 16rem | ❔ | ❔ | ❔ |
| `gap-px` | gap | 1px | ❔ | ❔ | ❔ |

#### Justify Content

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `justify-start` | justifyContent | flex-start | ❔ | ❔ | ❔ |
| `justify-end` | justifyContent | flex-end | ❔ | ❔ | ❔ |
| `justify-center` | justifyContent | center | ❔ | ❔ | ❔ |
| `justify-between` | justifyContent | space-between | ❔ | ❔ | ❔ |
| `justify-around` | justifyContent | space-around | ❔ | ❔ | ❔ |
| `justify-evenly` | justifyContent | space-evenly | ❔ | ❔ | ❔ |

#### Align Items

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `items-start` | alignItems | flex-start | ❔ | ❔ | ❔ |
| `items-end` | alignItems | flex-end | ❔ | ❔ | ❔ |
| `items-center` | alignItems | center | ❔ | ❔ | ❔ |
| `items-baseline` | alignItems | baseline | ❔ | ❔ | ❔ |
| `items-stretch` | alignItems | stretch | ❔ | ❔ | ❔ |

### Spacing

#### Padding

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `p-0` | padding | 0 | ❔ | ❔ | ❔ |
| `p-1` | padding | 0.25rem | ❔ | ❔ | ❔ |
| `p-2` | padding | 0.5rem | ❔ | ❔ | ❔ |
| `p-3` | padding | 0.75rem | ❔ | ❔ | ❔ |
| `p-4` | padding | 1rem | ❔ | ❔ | ❔ |
| `p-5` | padding | 1.25rem | ❔ | ❔ | ❔ |
| `p-6` | padding | 1.5rem | ❔ | ❔ | ❔ |
| `p-8` | padding | 2rem | ❔ | ❔ | ❔ |
| `p-10` | padding | 2.5rem | ❔ | ❔ | ❔ |
| `p-12` | padding | 3rem | ❔ | ❔ | ❔ |
| `p-16` | padding | 4rem | ❔ | ❔ | ❔ |
| `p-20` | padding | 5rem | ❔ | ❔ | ❔ |
| `p-24` | padding | 6rem | ❔ | ❔ | ❔ |
| `p-32` | padding | 8rem | ❔ | ❔ | ❔ |
| `p-40` | padding | 10rem | ❔ | ❔ | ❔ |
| `p-48` | padding | 12rem | ❔ | ❔ | ❔ |
| `p-56` | padding | 14rem | ❔ | ❔ | ❔ |
| `p-64` | padding | 16rem | ❔ | ❔ | ❔ |
| `p-px` | padding | 1px | ❔ | ❔ | ❔ |

#### Padding X (Horizontal)

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `px-0` | paddingLeft, paddingRight | 0 | ❔ | ❔ | ❔ |
| `px-1` | paddingLeft, paddingRight | 0.25rem | ❔ | ❔ | ❔ |
| `px-2` | paddingLeft, paddingRight | 0.5rem | ❔ | ❔ | ❔ |
| `px-3` | paddingLeft, paddingRight | 0.75rem | ❔ | ❔ | ❔ |
| `px-4` | paddingLeft, paddingRight | 1rem | ❔ | ❔ | ❔ |
| `px-5` | paddingLeft, paddingRight | 1.25rem | ❔ | ❔ | ❔ |
| `px-6` | paddingLeft, paddingRight | 1.5rem | ❔ | ❔ | ❔ |
| `px-8` | paddingLeft, paddingRight | 2rem | ❔ | ❔ | ❔ |
| `px-10` | paddingLeft, paddingRight | 2.5rem | ❔ | ❔ | ❔ |
| `px-12` | paddingLeft, paddingRight | 3rem | ❔ | ❔ | ❔ |
| `px-16` | paddingLeft, paddingRight | 4rem | ❔ | ❔ | ❔ |
| `px-20` | paddingLeft, paddingRight | 5rem | ❔ | ❔ | ❔ |
| `px-24` | paddingLeft, paddingRight | 6rem | ❔ | ❔ | ❔ |
| `px-32` | paddingLeft, paddingRight | 8rem | ❔ | ❔ | ❔ |
| `px-40` | paddingLeft, paddingRight | 10rem | ❔ | ❔ | ❔ |
| `px-48` | paddingLeft, paddingRight | 12rem | ❔ | ❔ | ❔ |
| `px-56` | paddingLeft, paddingRight | 14rem | ❔ | ❔ | ❔ |
| `px-64` | paddingLeft, paddingRight | 16rem | ❔ | ❔ | ❔ |
| `px-px` | paddingLeft, paddingRight | 1px | ❔ | ❔ | ❔ |

#### Padding Y (Vertical)

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `py-0` | paddingTop, paddingBottom | 0 | ❔ | ❔ | ❔ |
| `py-1` | paddingTop, paddingBottom | 0.25rem | ❔ | ❔ | ❔ |
| `py-2` | paddingTop, paddingBottom | 0.5rem | ❔ | ❔ | ❔ |
| `py-3` | paddingTop, paddingBottom | 0.75rem | ❔ | ❔ | ❔ |
| `py-4` | paddingTop, paddingBottom | 1rem | ❔ | ❔ | ❔ |
| `py-5` | paddingTop, paddingBottom | 1.25rem | ❔ | ❔ | ❔ |
| `py-6` | paddingTop, paddingBottom | 1.5rem | ❔ | ❔ | ❔ |
| `py-8` | paddingTop, paddingBottom | 2rem | ❔ | ❔ | ❔ |
| `py-10` | paddingTop, paddingBottom | 2.5rem | ❔ | ❔ | ❔ |
| `py-12` | paddingTop, paddingBottom | 3rem | ❔ | ❔ | ❔ |
| `py-16` | paddingTop, paddingBottom | 4rem | ❔ | ❔ | ❔ |
| `py-20` | paddingTop, paddingBottom | 5rem | ❔ | ❔ | ❔ |
| `py-24` | paddingTop, paddingBottom | 6rem | ❔ | ❔ | ❔ |
| `py-32` | paddingTop, paddingBottom | 8rem | ❔ | ❔ | ❔ |
| `py-40` | paddingTop, paddingBottom | 10rem | ❔ | ❔ | ❔ |
| `py-48` | paddingTop, paddingBottom | 12rem | ❔ | ❔ | ❔ |
| `py-56` | paddingTop, paddingBottom | 14rem | ❔ | ❔ | ❔ |
| `py-64` | paddingTop, paddingBottom | 16rem | ❔ | ❔ | ❔ |
| `py-px` | paddingTop, paddingBottom | 1px | ❔ | ❔ | ❔ |

#### Margin

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `m-0` | margin | 0 | ❔ | ❔ | ❔ |
| `m-1` | margin | 0.25rem | ❔ | ❔ | ❔ |
| `m-2` | margin | 0.5rem | ❔ | ❔ | ❔ |
| `m-3` | margin | 0.75rem | ❔ | ❔ | ❔ |
| `m-4` | margin | 1rem | ❔ | ❔ | ❔ |
| `m-5` | margin | 1.25rem | ❔ | ❔ | ❔ |
| `m-6` | margin | 1.5rem | ❔ | ❔ | ❔ |
| `m-8` | margin | 2rem | ❔ | ❔ | ❔ |
| `m-10` | margin | 2.5rem | ❔ | ❔ | ❔ |
| `m-12` | margin | 3rem | ❔ | ❔ | ❔ |
| `m-16` | margin | 4rem | ❔ | ❔ | ❔ |
| `m-20` | margin | 5rem | ❔ | ❔ | ❔ |
| `m-24` | margin | 6rem | ❔ | ❔ | ❔ |
| `m-32` | margin | 8rem | ❔ | ❔ | ❔ |
| `m-40` | margin | 10rem | ❔ | ❔ | ❔ |
| `m-48` | margin | 12rem | ❔ | ❔ | ❔ |
| `m-56` | margin | 14rem | ❔ | ❔ | ❔ |
| `m-64` | margin | 16rem | ❔ | ❔ | ❔ |
| `m-auto` | margin | auto | ❔ | ❔ | ❔ |
| `m-px` | margin | 1px | ❔ | ❔ | ❔ |
| `-m-1` | margin | -0.25rem | ❔ | ❔ | ❔ |
| `-m-2` | margin | -0.5rem | ❔ | ❔ | ❔ |
| `-m-3` | margin | -0.75rem | ❔ | ❔ | ❔ |
| `-m-4` | margin | -1rem | ❔ | ❔ | ❔ |
| `-m-5` | margin | -1.25rem | ❔ | ❔ | ❔ |
| `-m-6` | margin | -1.5rem | ❔ | ❔ | ❔ |
| `-m-8` | margin | -2rem | ❔ | ❔ | ❔ |
| `-m-10` | margin | -2.5rem | ❔ | ❔ | ❔ |
| `-m-12` | margin | -3rem | ❔ | ❔ | ❔ |
| `-m-16` | margin | -4rem | ❔ | ❔ | ❔ |
| `-m-20` | margin | -5rem | ❔ | ❔ | ❔ |
| `-m-24` | margin | -6rem | ❔ | ❔ | ❔ |
| `-m-32` | margin | -8rem | ❔ | ❔ | ❔ |
| `-m-40` | margin | -10rem | ❔ | ❔ | ❔ |
| `-m-48` | margin | -12rem | ❔ | ❔ | ❔ |
| `-m-56` | margin | -14rem | ❔ | ❔ | ❔ |
| `-m-64` | margin | -16rem | ❔ | ❔ | ❔ |
| `-m-px` | margin | -1px | ❔ | ❔ | ❔ |

#### Margin X (Horizontal)

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `mx-0` | marginLeft, marginRight | 0 | ❔ | ❔ | ❔ |
| `mx-1` | marginLeft, marginRight | 0.25rem | ❔ | ❔ | ❔ |
| `mx-2` | marginLeft, marginRight | 0.5rem | ❔ | ❔ | ❔ |
| `mx-3` | marginLeft, marginRight | 0.75rem | ❔ | ❔ | ❔ |
| `mx-4` | marginLeft, marginRight | 1rem | ❔ | ❔ | ❔ |
| `mx-5` | marginLeft, marginRight | 1.25rem | ❔ | ❔ | ❔ |
| `mx-6` | marginLeft, marginRight | 1.5rem | ❔ | ❔ | ❔ |
| `mx-8` | marginLeft, marginRight | 2rem | ❔ | ❔ | ❔ |
| `mx-10` | marginLeft, marginRight | 2.5rem | ❔ | ❔ | ❔ |
| `mx-12` | marginLeft, marginRight | 3rem | ❔ | ❔ | ❔ |
| `mx-16` | marginLeft, marginRight | 4rem | ❔ | ❔ | ❔ |
| `mx-20` | marginLeft, marginRight | 5rem | ❔ | ❔ | ❔ |
| `mx-24` | marginLeft, marginRight | 6rem | ❔ | ❔ | ❔ |
| `mx-32` | marginLeft, marginRight | 8rem | ❔ | ❔ | ❔ |
| `mx-40` | marginLeft, marginRight | 10rem | ❔ | ❔ | ❔ |
| `mx-48` | marginLeft, marginRight | 12rem | ❔ | ❔ | ❔ |
| `mx-56` | marginLeft, marginRight | 14rem | ❔ | ❔ | ❔ |
| `mx-64` | marginLeft, marginRight | 16rem | ❔ | ❔ | ❔ |
| `mx-auto` | marginLeft, marginRight | auto | ❔ | ❔ | ❔ |
| `mx-px` | marginLeft, marginRight | 1px | ❔ | ❔ | ❔ |
| `-mx-1` | marginLeft, marginRight | -0.25rem | ❔ | ❔ | ❔ |
| `-mx-2` | marginLeft, marginRight | -0.5rem | ❔ | ❔ | ❔ |
| `-mx-3` | marginLeft, marginRight | -0.75rem | ❔ | ❔ | ❔ |
| `-mx-4` | marginLeft, marginRight | -1rem | ❔ | ❔ | ❔ |
| `-mx-5` | marginLeft, marginRight | -1.25rem | ❔ | ❔ | ❔ |
| `-mx-6` | marginLeft, marginRight | -1.5rem | ❔ | ❔ | ❔ |
| `-mx-8` | marginLeft, marginRight | -2rem | ❔ | ❔ | ❔ |
| `-mx-10` | marginLeft, marginRight | -2.5rem | ❔ | ❔ | ❔ |
| `-mx-12` | marginLeft, marginRight | -3rem | ❔ | ❔ | ❔ |
| `-mx-16` | marginLeft, marginRight | -4rem | ❔ | ❔ | ❔ |
| `-mx-20` | marginLeft, marginRight | -5rem | ❔ | ❔ | ❔ |
| `-mx-24` | marginLeft, marginRight | -6rem | ❔ | ❔ | ❔ |
| `-mx-32` | marginLeft, marginRight | -8rem | ❔ | ❔ | ❔ |
| `-mx-40` | marginLeft, marginRight | -10rem | ❔ | ❔ | ❔ |
| `-mx-48` | marginLeft, marginRight | -12rem | ❔ | ❔ | ❔ |
| `-mx-56` | marginLeft, marginRight | -14rem | ❔ | ❔ | ❔ |
| `-mx-64` | marginLeft, marginRight | -16rem | ❔ | ❔ | ❔ |
| `-mx-px` | marginLeft, marginRight | -1px | ❔ | ❔ | ❔ |

#### Margin Y (Vertical)

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `my-0` | marginTop, marginBottom | 0 | ❔ | ❔ | ❔ |
| `my-1` | marginTop, marginBottom | 0.25rem | ❔ | ❔ | ❔ |
| `my-2` | marginTop, marginBottom | 0.5rem | ❔ | ❔ | ❔ |
| `my-3` | marginTop, marginBottom | 0.75rem | ❔ | ❔ | ❔ |
| `my-4` | marginTop, marginBottom | 1rem | ❔ | ❔ | ❔ |
| `my-5` | marginTop, marginBottom | 1.25rem | ❔ | ❔ | ❔ |
| `my-6` | marginTop, marginBottom | 1.5rem | ❔ | ❔ | ❔ |
| `my-8` | marginTop, marginBottom | 2rem | ❔ | ❔ | ❔ |
| `my-10` | marginTop, marginBottom | 2.5rem | ❔ | ❔ | ❔ |
| `my-12` | marginTop, marginBottom | 3rem | ❔ | ❔ | ❔ |
| `my-16` | marginTop, marginBottom | 4rem | ❔ | ❔ | ❔ |
| `my-20` | marginTop, marginBottom | 5rem | ❔ | ❔ | ❔ |
| `my-24` | marginTop, marginBottom | 6rem | ❔ | ❔ | ❔ |
| `my-32` | marginTop, marginBottom | 8rem | ❔ | ❔ | ❔ |
| `my-40` | marginTop, marginBottom | 10rem | ❔ | ❔ | ❔ |
| `my-48` | marginTop, marginBottom | 12rem | ❔ | ❔ | ❔ |
| `my-56` | marginTop, marginBottom | 14rem | ❔ | ❔ | ❔ |
| `my-64` | marginTop, marginBottom | 16rem | ❔ | ❔ | ❔ |
| `my-auto` | marginTop, marginBottom | auto | ❔ | ❔ | ❔ |
| `my-px` | marginTop, marginBottom | 1px | ❔ | ❔ | ❔ |
| `-my-1` | marginTop, marginBottom | -0.25rem | ❔ | ❔ | ❔ |
| `-my-2` | marginTop, marginBottom | -0.5rem | ❔ | ❔ | ❔ |
| `-my-3` | marginTop, marginBottom | -0.75rem | ❔ | ❔ | ❔ |
| `-my-4` | marginTop, marginBottom | -1rem | ❔ | ❔ | ❔ |
| `-my-5` | marginTop, marginBottom | -1.25rem | ❔ | ❔ | ❔ |
| `-my-6` | marginTop, marginBottom | -1.5rem | ❔ | ❔ | ❔ |
| `-my-8` | marginTop, marginBottom | -2rem | ❔ | ❔ | ❔ |
| `-my-10` | marginTop, marginBottom | -2.5rem | ❔ | ❔ | ❔ |
| `-my-12` | marginTop, marginBottom | -3rem | ❔ | ❔ | ❔ |
| `-my-16` | marginTop, marginBottom | -4rem | ❔ | ❔ | ❔ |
| `-my-20` | marginTop, marginBottom | -5rem | ❔ | ❔ | ❔ |
| `-my-24` | marginTop, marginBottom | -6rem | ❔ | ❔ | ❔ |
| `-my-32` | marginTop, marginBottom | -8rem | ❔ | ❔ | ❔ |
| `-my-40` | marginTop, marginBottom | -10rem | ❔ | ❔ | ❔ |
| `-my-48` | marginTop, marginBottom | -12rem | ❔ | ❔ | ❔ |
| `-my-56` | marginTop, marginBottom | -14rem | ❔ | ❔ | ❔ |
| `-my-64` | marginTop, marginBottom | -16rem | ❔ | ❔ | ❔ |
| `-my-px` | marginTop, marginBottom | -1px | ❔ | ❔ | ❔ |

### Sizing

#### Width

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `w-0` | width | 0 | ❔ | ❔ | ❔ |
| `w-1` | width | 0.25rem | ❔ | ❔ | ❔ |
| `w-2` | width | 0.5rem | ❔ | ❔ | ❔ |
| `w-3` | width | 0.75rem | ❔ | ❔ | ❔ |
| `w-4` | width | 1rem | ❔ | ❔ | ❔ |
| `w-5` | width | 1.25rem | ❔ | ❔ | ❔ |
| `w-6` | width | 1.5rem | ❔ | ❔ | ❔ |
| `w-8` | width | 2rem | ❔ | ❔ | ❔ |
| `w-10` | width | 2.5rem | ❔ | ❔ | ❔ |
| `w-12` | width | 3rem | ❔ | ❔ | ❔ |
| `w-16` | width | 4rem | ❔ | ❔ | ❔ |
| `w-20` | width | 5rem | ❔ | ❔ | ❔ |
| `w-24` | width | 6rem | ❔ | ❔ | ❔ |
| `w-32` | width | 8rem | ❔ | ❔ | ❔ |
| `w-40` | width | 10rem | ❔ | ❔ | ❔ |
| `w-48` | width | 12rem | ❔ | ❔ | ❔ |
| `w-56` | width | 14rem | ❔ | ❔ | ❔ |
| `w-64` | width | 16rem | ❔ | ❔ | ❔ |
| `w-auto` | width | auto | ❔ | ❔ | ❔ |
| `w-px` | width | 1px | ❔ | ❔ | ❔ |
| `w-1/2` | width | 50% | ❔ | ❔ | ❔ |
| `w-1/3` | width | 33.333333% | ❔ | ❔ | ❔ |
| `w-2/3` | width | 66.666667% | ❔ | ❔ | ❔ |
| `w-1/4` | width | 25% | ❔ | ❔ | ❔ |
| `w-2/4` | width | 50% | ❔ | ❔ | ❔ |
| `w-3/4` | width | 75% | ❔ | ❔ | ❔ |
| `w-1/5` | width | 20% | ❔ | ❔ | ❔ |
| `w-2/5` | width | 40% | ❔ | ❔ | ❔ |
| `w-3/5` | width | 60% | ❔ | ❔ | ❔ |
| `w-4/5` | width | 80% | ❔ | ❔ | ❔ |
| `w-1/6` | width | 16.666667% | ❔ | ❔ | ❔ |
| `w-2/6` | width | 33.333333% | ❔ | ❔ | ❔ |
| `w-3/6` | width | 50% | ❔ | ❔ | ❔ |
| `w-4/6` | width | 66.666667% | ❔ | ❔ | ❔ |
| `w-5/6` | width | 83.333333% | ❔ | ❔ | ❔ |
| `w-1/12` | width | 8.333333% | ❔ | ❔ | ❔ |
| `w-2/12` | width | 16.666667% | ❔ | ❔ | ❔ |
| `w-3/12` | width | 25% | ❔ | ❔ | ❔ |
| `w-4/12` | width | 33.333333% | ❔ | ❔ | ❔ |
| `w-5/12` | width | 41.666667% | ❔ | ❔ | ❔ |
| `w-6/12` | width | 50% | ❔ | ❔ | ❔ |
| `w-7/12` | width | 58.333333% | ❔ | ❔ | ❔ |
| `w-8/12` | width | 66.666667% | ❔ | ❔ | ❔ |
| `w-9/12` | width | 75% | ❔ | ❔ | ❔ |
| `w-10/12` | width | 83.333333% | ❔ | ❔ | ❔ |
| `w-11/12` | width | 91.666667% | ❔ | ❔ | ❔ |
| `w-full` | width | 100% | ❔ | ❔ | ❔ |
| `w-screen` | width | 100vw | ❔ | ❔ | ❔ |
| `w-min` | width | min-content | ❔ | ❔ | ❔ |
| `w-max` | width | max-content | ❔ | ❔ | ❔ |
| `w-fit` | width | fit-content | ❔ | ❔ | ❔ |

#### Height

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `h-0` | height | 0 | ❔ | ❔ | ❔ |
| `h-1` | height | 0.25rem | ❔ | ❔ | ❔ |
| `h-2` | height | 0.5rem | ❔ | ❔ | ❔ |
| `h-3` | height | 0.75rem | ❔ | ❔ | ❔ |
| `h-4` | height | 1rem | ❔ | ❔ | ❔ |
| `h-5` | height | 1.25rem | ❔ | ❔ | ❔ |
| `h-6` | height | 1.5rem | ❔ | ❔ | ❔ |
| `h-8` | height | 2rem | ❔ | ❔ | ❔ |
| `h-10` | height | 2.5rem | ❔ | ❔ | ❔ |
| `h-12` | height | 3rem | ❔ | ❔ | ❔ |
| `h-16` | height | 4rem | ❔ | ❔ | ❔ |
| `h-20` | height | 5rem | ❔ | ❔ | ❔ |
| `h-24` | height | 6rem | ❔ | ❔ | ❔ |
| `h-32` | height | 8rem | ❔ | ❔ | ❔ |
| `h-40` | height | 10rem | ❔ | ❔ | ❔ |
| `h-48` | height | 12rem | ❔ | ❔ | ❔ |
| `h-56` | height | 14rem | ❔ | ❔ | ❔ |
| `h-64` | height | 16rem | ❔ | ❔ | ❔ |
| `h-auto` | height | auto | ❔ | ❔ | ❔ |
| `h-px` | height | 1px | ❔ | ❔ | ❔ |
| `h-full` | height | 100% | ❔ | ❔ | ❔ |
| `h-screen` | height | 100vh | ❔ | ❔ | ❔ |
| `h-min` | height | min-content | ❔ | ❔ | ❔ |
| `h-max` | height | max-content | ❔ | ❔ | ❔ |
| `h-fit` | height | fit-content | ❔ | ❔ | ❔ |

#### Min Width

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `min-w-0` | minWidth | 0 | ❔ | ❔ | ❔ |
| `min-w-full` | minWidth | 100% | ❔ | ❔ | ❔ |
| `min-w-min` | minWidth | min-content | ❔ | ❔ | ❔ |
| `min-w-max` | minWidth | max-content | ❔ | ❔ | ❔ |
| `min-w-fit` | minWidth | fit-content | ❔ | ❔ | ❔ |

#### Min Height

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `min-h-0` | minHeight | 0 | ❔ | ❔ | ❔ |
| `min-h-full` | minHeight | 100% | ❔ | ❔ | ❔ |
| `min-h-screen` | minHeight | 100vh | ❔ | ❔ | ❔ |
| `min-h-min` | minHeight | min-content | ❔ | ❔ | ❔ |
| `min-h-max` | minHeight | max-content | ❔ | ❔ | ❔ |
| `min-h-fit` | minHeight | fit-content | ❔ | ❔ | ❔ |

#### Max Width

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `max-w-none` | maxWidth | none | ❔ | ❔ | ❔ |
| `max-w-xs` | maxWidth | 20rem | ❔ | ❔ | ❔ |
| `max-w-sm` | maxWidth | 24rem | ❔ | ❔ | ❔ |
| `max-w-md` | maxWidth | 28rem | ❔ | ❔ | ❔ |
| `max-w-lg` | maxWidth | 32rem | ❔ | ❔ | ❔ |
| `max-w-xl` | maxWidth | 36rem | ❔ | ❔ | ❔ |
| `max-w-2xl` | maxWidth | 42rem | ❔ | ❔ | ❔ |
| `max-w-3xl` | maxWidth | 48rem | ❔ | ❔ | ❔ |
| `max-w-4xl` | maxWidth | 56rem | ❔ | ❔ | ❔ |
| `max-w-5xl` | maxWidth | 64rem | ❔ | ❔ | ❔ |
| `max-w-6xl` | maxWidth | 72rem | ❔ | ❔ | ❔ |
| `max-w-7xl` | maxWidth | 80rem | ❔ | ❔ | ❔ |
| `max-w-full` | maxWidth | 100% | ❔ | ❔ | ❔ |
| `max-w-min` | maxWidth | min-content | ❔ | ❔ | ❔ |
| `max-w-max` | maxWidth | max-content | ❔ | ❔ | ❔ |
| `max-w-fit` | maxWidth | fit-content | ❔ | ❔ | ❔ |
| `max-w-prose` | maxWidth | 65ch | ❔ | ❔ | ❔ |
| `max-w-screen-sm` | maxWidth | 640px | ❔ | ❔ | ❔ |
| `max-w-screen-md` | maxWidth | 768px | ❔ | ❔ | ❔ |
| `max-w-screen-lg` | maxWidth | 1024px | ❔ | ❔ | ❔ |
| `max-w-screen-xl` | maxWidth | 1280px | ❔ | ❔ | ❔ |
| `max-w-screen-2xl` | maxWidth | 1536px | ❔ | ❔ | ❔ |

#### Max Height

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `max-h-0` | maxHeight | 0 | ❔ | ❔ | ❔ |
| `max-h-1` | maxHeight | 0.25rem | ❔ | ❔ | ❔ |
| `max-h-2` | maxHeight | 0.5rem | ❔ | ❔ | ❔ |
| `max-h-3` | maxHeight | 0.75rem | ❔ | ❔ | ❔ |
| `max-h-4` | maxHeight | 1rem | ❔ | ❔ | ❔ |
| `max-h-5` | maxHeight | 1.25rem | ❔ | ❔ | ❔ |
| `max-h-6` | maxHeight | 1.5rem | ❔ | ❔ | ❔ |
| `max-h-8` | maxHeight | 2rem | ❔ | ❔ | ❔ |
| `max-h-10` | maxHeight | 2.5rem | ❔ | ❔ | ❔ |
| `max-h-12` | maxHeight | 3rem | ❔ | ❔ | ❔ |
| `max-h-16` | maxHeight | 4rem | ❔ | ❔ | ❔ |
| `max-h-20` | maxHeight | 5rem | ❔ | ❔ | ❔ |
| `max-h-24` | maxHeight | 6rem | ❔ | ❔ | ❔ |
| `max-h-32` | maxHeight | 8rem | ❔ | ❔ | ❔ |
| `max-h-40` | maxHeight | 10rem | ❔ | ❔ | ❔ |
| `max-h-48` | maxHeight | 12rem | ❔ | ❔ | ❔ |
| `max-h-56` | maxHeight | 14rem | ❔ | ❔ | ❔ |
| `max-h-64` | maxHeight | 16rem | ❔ | ❔ | ❔ |
| `max-h-px` | maxHeight | 1px | ❔ | ❔ | ❔ |
| `max-h-full` | maxHeight | 100% | ❔ | ❔ | ❔ |
| `max-h-screen` | maxHeight | 100vh | ❔ | ❔ | ❔ |
| `max-h-min` | maxHeight | min-content | ❔ | ❔ | ❔ |
| `max-h-max` | maxHeight | max-content | ❔ | ❔ | ❔ |
| `max-h-fit` | maxHeight | fit-content | ❔ | ❔ | ❔ |

#### Aspect Ratio

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `aspect-auto` | aspectRatio | auto | ❔ | ❔ | ❔ |
| `aspect-square` | aspectRatio | 1 / 1 | ❔ | ❔ | ❔ |
| `aspect-video` | aspectRatio | 16 / 9 | ❔ | ❔ | ❔ |

### Typography

#### Font Size

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `text-xs` | fontSize | 0.75rem | ❔ | ❔ | ❔ |
| `text-sm` | fontSize | 0.875rem | ❔ | ❔ | ❔ |
| `text-base` | fontSize | 1rem | ❔ | ❔ | ❔ |
| `text-lg` | fontSize | 1.125rem | ❔ | ❔ | ❔ |
| `text-xl` | fontSize | 1.25rem | ❔ | ❔ | ❔ |
| `text-2xl` | fontSize | 1.5rem | ❔ | ❔ | ❔ |
| `text-3xl` | fontSize | 1.875rem | ❔ | ❔ | ❔ |
| `text-4xl` | fontSize | 2.25rem | ❔ | ❔ | ❔ |
| `text-5xl` | fontSize | 3rem | ❔ | ❔ | ❔ |
| `text-6xl` | fontSize | 3.75rem | ❔ | ❔ | ❔ |
| `text-7xl` | fontSize | 4.5rem | ❔ | ❔ | ❔ |
| `text-8xl` | fontSize | 6rem | ❔ | ❔ | ❔ |
| `text-9xl` | fontSize | 8rem | ❔ | ❔ | ❔ |

#### Font Weight

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `font-thin` | fontWeight | 100 | ❔ | ❔ | ❔ |
| `font-extralight` | fontWeight | 200 | ❔ | ❔ | ❔ |
| `font-light` | fontWeight | 300 | ❔ | ❔ | ❔ |
| `font-normal` | fontWeight | 400 | ❔ | ❔ | ❔ |
| `font-medium` | fontWeight | 500 | ❔ | ❔ | ❔ |
| `font-semibold` | fontWeight | 600 | ❔ | ❔ | ❔ |
| `font-bold` | fontWeight | 700 | ❔ | ❔ | ❔ |
| `font-extrabold` | fontWeight | 800 | ❔ | ❔ | ❔ |
| `font-black` | fontWeight | 900 | ❔ | ❔ | ❔ |

#### Font Style

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `italic` | fontStyle | italic | ❔ | ❔ | ❔ |
| `not-italic` | fontStyle | normal | ❔ | ❔ | ❔ |

#### Font Smoothing

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `antialiased` | WebkitFontSmoothing, MozOsxFontSmoothing | antialiased, grayscale | ❔ | ❔ | ❔ |
| `subpixel-antialiased` | WebkitFontSmoothing, MozOsxFontSmoothing | auto, auto | ❔ | ❔ | ❔ |

#### Text Align

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `text-left` | textAlign | left | ❔ | ❔ | ❔ |
| `text-center` | textAlign | center | ❔ | ❔ | ❔ |
| `text-right` | textAlign | right | ❔ | ❔ | ❔ |
| `text-justify` | textAlign | justify | ❔ | ❔ | ❔ |
| `text-start` | textAlign | start | ❔ | ❔ | ❔ |
| `text-end` | textAlign | end | ❔ | ❔ | ❔ |

#### Line Height

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `leading-none` | lineHeight | 1 | ❔ | ❔ | ❔ |
| `leading-tight` | lineHeight | 1.25 | ❔ | ❔ | ❔ |
| `leading-snug` | lineHeight | 1.375 | ❔ | ❔ | ❔ |
| `leading-normal` | lineHeight | 1.5 | ❔ | ❔ | ❔ |
| `leading-relaxed` | lineHeight | 1.625 | ❔ | ❔ | ❔ |
| `leading-loose` | lineHeight | 2 | ❔ | ❔ | ❔ |
| `leading-3` | lineHeight | 0.75rem | ❔ | ❔ | ❔ |
| `leading-4` | lineHeight | 1rem | ❔ | ❔ | ❔ |
| `leading-5` | lineHeight | 1.25rem | ❔ | ❔ | ❔ |
| `leading-6` | lineHeight | 1.5rem | ❔ | ❔ | ❔ |
| `leading-7` | lineHeight | 1.75rem | ❔ | ❔ | ❔ |
| `leading-8` | lineHeight | 2rem | ❔ | ❔ | ❔ |
| `leading-9` | lineHeight | 2.25rem | ❔ | ❔ | ❔ |
| `leading-10` | lineHeight | 2.5rem | ❔ | ❔ | ❔ |

#### Letter Spacing

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `tracking-tighter` | letterSpacing | -0.05em | ❔ | ❔ | ❔ |
| `tracking-tight` | letterSpacing | -0.025em | ❔ | ❔ | ❔ |
| `tracking-normal` | letterSpacing | 0 | ❔ | ❔ | ❔ |
| `tracking-wide` | letterSpacing | 0.025em | ❔ | ❔ | ❔ |
| `tracking-wider` | letterSpacing | 0.05em | ❔ | ❔ | ❔ |
| `tracking-widest` | letterSpacing | 0.1em | ❔ | ❔ | ❔ |

#### Text Color

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `text-transparent` | color | transparent | ❔ | ❔ | ❔ |
| `text-current` | color | currentColor | ❔ | ❔ | ❔ |
| `text-black` | color | var(--color-black) | ❔ | ❔ | ❔ |
| `text-white` | color | var(--color-white) | ❔ | ❔ | ❔ |
| `text-gray-50` | color | var(--color-gray-50) | ❔ | ❔ | ❔ |
| `text-gray-100` | color | var(--color-gray-100) | ❔ | ❔ | ❔ |
| `text-gray-200` | color | var(--color-gray-200) | ❔ | ❔ | ❔ |
| `text-gray-300` | color | var(--color-gray-300) | ❔ | ❔ | ❔ |
| `text-gray-400` | color | var(--color-gray-400) | ❔ | ❔ | ❔ |
| `text-gray-500` | color | var(--color-gray-500) | ❔ | ❔ | ❔ |
| `text-gray-600` | color | var(--color-gray-600) | ❔ | ❔ | ❔ |
| `text-gray-700` | color | var(--color-gray-700) | ❔ | ❔ | ❔ |
| `text-gray-800` | color | var(--color-gray-800) | ❔ | ❔ | ❔ |
| `text-gray-900` | color | var(--color-gray-900) | ❔ | ❔ | ❔ |
| `text-gray-950` | color | var(--color-gray-950) | ❔ | ❔ | ❔ |
| `text-red-500` | color | var(--color-red-500) | ❔ | ❔ | ❔ |
| `text-blue-500` | color | var(--color-blue-500) | ❔ | ❔ | ❔ |
| `text-green-500` | color | var(--color-green-500) | ❔ | ❔ | ❔ |

#### Text Decoration

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `underline` | textDecoration | underline | ❔ | ❔ | ❔ |
| `line-through` | textDecoration | line-through | ❔ | ❔ | ❔ |
| `no-underline` | textDecoration | none | ❔ | ❔ | ❔ |

#### Text Transform

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `uppercase` | textTransform | uppercase | ❔ | ❔ | ❔ |
| `lowercase` | textTransform | lowercase | ❔ | ❔ | ❔ |
| `capitalize` | textTransform | capitalize | ❔ | ❔ | ❔ |
| `normal-case` | textTransform | none | ❔ | ❔ | ❔ |

#### Text Overflow

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `truncate` | overflow, textOverflow, whiteSpace | hidden, ellipsis, nowrap | ❔ | ❔ | ❔ |
| `text-ellipsis` | textOverflow | ellipsis | ❔ | ❔ | ❔ |
| `text-clip` | textOverflow | clip | ❔ | ❔ | ❔ |

#### Text Wrap

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `text-wrap` | textWrap | wrap | ❔ | ❔ | ❔ |
| `text-nowrap` | textWrap | nowrap | ❔ | ❔ | ❔ |
| `text-balance` | textWrap | balance | ❔ | ❔ | ❔ |
| `text-pretty` | textWrap | pretty | ❔ | ❔ | ❔ |

#### Text Indent

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `indent-0` | textIndent | 0px | ❔ | ❔ | ❔ |
| `indent-1` | textIndent | 0.25rem | ❔ | ❔ | ❔ |
| `indent-2` | textIndent | 0.5rem | ❔ | ❔ | ❔ |
| `indent-3` | textIndent | 0.75rem | ❔ | ❔ | ❔ |
| `indent-4` | textIndent | 1rem | ❔ | ❔ | ❔ |
| `indent-5` | textIndent | 1.25rem | ❔ | ❔ | ❔ |
| `indent-6` | textIndent | 1.5rem | ❔ | ❔ | ❔ |
| `indent-8` | textIndent | 2rem | ❔ | ❔ | ❔ |
| `indent-10` | textIndent | 2.5rem | ❔ | ❔ | ❔ |
| `indent-12` | textIndent | 3rem | ❔ | ❔ | ❔ |
| `indent-16` | textIndent | 4rem | ❔ | ❔ | ❔ |
| `indent-20` | textIndent | 5rem | ❔ | ❔ | ❔ |
| `indent-24` | textIndent | 6rem | ❔ | ❔ | ❔ |
| `indent-px` | textIndent | 1px | ❔ | ❔ | ❔ |

#### Vertical Align

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `align-baseline` | verticalAlign | baseline | ❔ | ❔ | ❔ |
| `align-top` | verticalAlign | top | ❔ | ❔ | ❔ |
| `align-middle` | verticalAlign | middle | ❔ | ❔ | ❔ |
| `align-bottom` | verticalAlign | bottom | ❔ | ❔ | ❔ |
| `align-text-top` | verticalAlign | text-top | ❔ | ❔ | ❔ |
| `align-text-bottom` | verticalAlign | text-bottom | ❔ | ❔ | ❔ |
| `align-sub` | verticalAlign | sub | ❔ | ❔ | ❔ |
| `align-super` | verticalAlign | super | ❔ | ❔ | ❔ |

#### White Space

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `whitespace-normal` | whiteSpace | normal | ❔ | ❔ | ❔ |
| `whitespace-nowrap` | whiteSpace | nowrap | ❔ | ❔ | ❔ |
| `whitespace-pre` | whiteSpace | pre | ❔ | ❔ | ❔ |
| `whitespace-pre-line` | whiteSpace | pre-line | ❔ | ❔ | ❔ |
| `whitespace-pre-wrap` | whiteSpace | pre-wrap | ❔ | ❔ | ❔ |
| `whitespace-break-spaces` | whiteSpace | break-spaces | ❔ | ❔ | ❔ |

#### Word Break

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `break-normal` | wordBreak, overflowWrap | normal, normal | ❔ | ❔ | ❔ |
| `break-words` | overflowWrap | break-word | ❔ | ❔ | ❔ |
| `break-all` | wordBreak | break-all | ❔ | ❔ | ❔ |
| `break-keep` | wordBreak | keep-all | ❔ | ❔ | ❔ |

#### Hyphens

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `hyphens-none` | hyphens | none | ❔ | ❔ | ❔ |
| `hyphens-manual` | hyphens | manual | ❔ | ❔ | ❔ |
| `hyphens-auto` | hyphens | auto | ❔ | ❔ | ❔ |

#### Content

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `content-none` | content | none | ❔ | ❔ | ❔ |

#### Columns

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `columns-1` | columns | 1 | ❔ | ❔ | ❔ |
| `columns-2` | columns | 2 | ❔ | ❔ | ❔ |
| `columns-3` | columns | 3 | ❔ | ❔ | ❔ |
| `columns-4` | columns | 4 | ❔ | ❔ | ❔ |
| `columns-5` | columns | 5 | ❔ | ❔ | ❔ |
| `columns-6` | columns | 6 | ❔ | ❔ | ❔ |
| `columns-auto` | columns | auto | ❔ | ❔ | ❔ |
| `columns-3xs` | columns | 16rem | ❔ | ❔ | ❔ |
| `columns-2xs` | columns | 18rem | ❔ | ❔ | ❔ |
| `columns-xs` | columns | 20rem | ❔ | ❔ | ❔ |
| `columns-sm` | columns | 24rem | ❔ | ❔ | ❔ |
| `columns-md` | columns | 28rem | ❔ | ❔ | ❔ |
| `columns-lg` | columns | 32rem | ❔ | ❔ | ❔ |
| `columns-xl` | columns | 36rem | ❔ | ❔ | ❔ |
| `columns-2xl` | columns | 42rem | ❔ | ❔ | ❔ |
| `columns-3xl` | columns | 48rem | ❔ | ❔ | ❔ |
| `columns-4xl` | columns | 56rem | ❔ | ❔ | ❔ |
| `columns-5xl` | columns | 64rem | ❔ | ❔ | ❔ |
| `columns-6xl` | columns | 72rem | ❔ | ❔ | ❔ |
| `columns-7xl` | columns | 80rem | ❔ | ❔ | ❔ |

### Backgrounds

#### Background Color

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `bg-transparent` | backgroundColor | transparent | ❔ | ❔ | ❔ |
| `bg-current` | backgroundColor | currentColor | ❔ | ❔ | ❔ |
| `bg-black` | backgroundColor | var(--color-black) | ❔ | ❔ | ❔ |
| `bg-white` | backgroundColor | var(--color-white) | ❔ | ❔ | ❔ |
| `bg-gray-50` | backgroundColor | var(--color-gray-50) | ❔ | ❔ | ❔ |
| `bg-gray-100` | backgroundColor | var(--color-gray-100) | ❔ | ❔ | ❔ |
| `bg-gray-200` | backgroundColor | var(--color-gray-200) | ❔ | ❔ | ❔ |
| `bg-gray-300` | backgroundColor | var(--color-gray-300) | ❔ | ❔ | ❔ |
| `bg-gray-400` | backgroundColor | var(--color-gray-400) | ❔ | ❔ | ❔ |
| `bg-gray-500` | backgroundColor | var(--color-gray-500) | ❔ | ❔ | ❔ |
| `bg-gray-600` | backgroundColor | var(--color-gray-600) | ❔ | ❔ | ❔ |
| `bg-gray-700` | backgroundColor | var(--color-gray-700) | ❔ | ❔ | ❔ |
| `bg-gray-800` | backgroundColor | var(--color-gray-800) | ❔ | ❔ | ❔ |
| `bg-gray-900` | backgroundColor | var(--color-gray-900) | ❔ | ❔ | ❔ |
| `bg-gray-950` | backgroundColor | var(--color-gray-950) | ❔ | ❔ | ❔ |
| `bg-red-500` | backgroundColor | var(--color-red-500) | ❔ | ❔ | ❔ |
| `bg-blue-500` | backgroundColor | var(--color-blue-500) | ❔ | ❔ | ❔ |
| `bg-green-500` | backgroundColor | var(--color-green-500) | ❔ | ❔ | ❔ |

#### Background Attachment

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `bg-fixed` | backgroundAttachment | fixed | ❔ | ❔ | ❔ |
| `bg-local` | backgroundAttachment | local | ❔ | ❔ | ❔ |
| `bg-scroll` | backgroundAttachment | scroll | ❔ | ❔ | ❔ |

#### Background Position

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `bg-bottom` | backgroundPosition | bottom | ❔ | ❔ | ❔ |
| `bg-center` | backgroundPosition | center | ❔ | ❔ | ❔ |
| `bg-left` | backgroundPosition | left | ❔ | ❔ | ❔ |
| `bg-left-bottom` | backgroundPosition | left bottom | ❔ | ❔ | ❔ |
| `bg-left-top` | backgroundPosition | left top | ❔ | ❔ | ❔ |
| `bg-right` | backgroundPosition | right | ❔ | ❔ | ❔ |
| `bg-right-bottom` | backgroundPosition | right bottom | ❔ | ❔ | ❔ |
| `bg-right-top` | backgroundPosition | right top | ❔ | ❔ | ❔ |
| `bg-top` | backgroundPosition | top | ❔ | ❔ | ❔ |

#### Background Repeat

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `bg-repeat` | backgroundRepeat | repeat | ❔ | ❔ | ❔ |
| `bg-no-repeat` | backgroundRepeat | no-repeat | ❔ | ❔ | ❔ |
| `bg-repeat-x` | backgroundRepeat | repeat-x | ❔ | ❔ | ❔ |
| `bg-repeat-y` | backgroundRepeat | repeat-y | ❔ | ❔ | ❔ |
| `bg-repeat-round` | backgroundRepeat | round | ❔ | ❔ | ❔ |
| `bg-repeat-space` | backgroundRepeat | space | ❔ | ❔ | ❔ |

#### Background Size

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `bg-auto` | backgroundSize | auto | ❔ | ❔ | ❔ |
| `bg-cover` | backgroundSize | cover | ❔ | ❔ | ❔ |
| `bg-contain` | backgroundSize | contain | ❔ | ❔ | ❔ |

### Borders

#### Border Width

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `border` | borderWidth | 1px | ❔ | ❔ | ❔ |
| `border-0` | borderWidth | 0 | ❔ | ❔ | ❔ |
| `border-2` | borderWidth | 2px | ❔ | ❔ | ❔ |
| `border-4` | borderWidth | 4px | ❔ | ❔ | ❔ |
| `border-8` | borderWidth | 8px | ❔ | ❔ | ❔ |
| `border-t` | borderTopWidth | 1px | ❔ | ❔ | ❔ |
| `border-r` | borderRightWidth | 1px | ❔ | ❔ | ❔ |
| `border-b` | borderBottomWidth | 1px | ❔ | ❔ | ❔ |
| `border-l` | borderLeftWidth | 1px | ❔ | ❔ | ❔ |
| `border-t-0` | borderTopWidth | 0 | ❔ | ❔ | ❔ |
| `border-r-0` | borderRightWidth | 0 | ❔ | ❔ | ❔ |
| `border-b-0` | borderBottomWidth | 0 | ❔ | ❔ | ❔ |
| `border-l-0` | borderLeftWidth | 0 | ❔ | ❔ | ❔ |
| `border-t-2` | borderTopWidth | 2px | ❔ | ❔ | ❔ |
| `border-r-2` | borderRightWidth | 2px | ❔ | ❔ | ❔ |
| `border-b-2` | borderBottomWidth | 2px | ❔ | ❔ | ❔ |
| `border-l-2` | borderLeftWidth | 2px | ❔ | ❔ | ❔ |
| `border-t-4` | borderTopWidth | 4px | ❔ | ❔ | ❔ |
| `border-r-4` | borderRightWidth | 4px | ❔ | ❔ | ❔ |
| `border-b-4` | borderBottomWidth | 4px | ❔ | ❔ | ❔ |
| `border-l-4` | borderLeftWidth | 4px | ❔ | ❔ | ❔ |
| `border-t-8` | borderTopWidth | 8px | ❔ | ❔ | ❔ |
| `border-r-8` | borderRightWidth | 8px | ❔ | ❔ | ❔ |
| `border-b-8` | borderBottomWidth | 8px | ❔ | ❔ | ❔ |
| `border-l-8` | borderLeftWidth | 8px | ❔ | ❔ | ❔ |

#### Border Color

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `border-transparent` | borderColor | transparent | ❔ | ❔ | ❔ |
| `border-current` | borderColor | currentColor | ❔ | ❔ | ❔ |
| `border-black` | borderColor | var(--color-black) | ❔ | ❔ | ❔ |
| `border-white` | borderColor | var(--color-white) | ❔ | ❔ | ❔ |
| `border-gray-50` | borderColor | var(--color-gray-50) | ❔ | ❔ | ❔ |
| `border-gray-100` | borderColor | var(--color-gray-100) | ❔ | ❔ | ❔ |
| `border-gray-200` | borderColor | var(--color-gray-200) | ❔ | ❔ | ❔ |
| `border-gray-300` | borderColor | var(--color-gray-300) | ❔ | ❔ | ❔ |
| `border-gray-400` | borderColor | var(--color-gray-400) | ❔ | ❔ | ❔ |
| `border-gray-500` | borderColor | var(--color-gray-500) | ❔ | ❔ | ❔ |
| `border-gray-600` | borderColor | var(--color-gray-600) | ❔ | ❔ | ❔ |
| `border-gray-700` | borderColor | var(--color-gray-700) | ❔ | ❔ | ❔ |
| `border-gray-800` | borderColor | var(--color-gray-800) | ❔ | ❔ | ❔ |
| `border-gray-900` | borderColor | var(--color-gray-900) | ❔ | ❔ | ❔ |
| `border-gray-950` | borderColor | var(--color-gray-950) | ❔ | ❔ | ❔ |
| `border-red-500` | borderColor | var(--color-red-500) | ❔ | ❔ | ❔ |
| `border-blue-500` | borderColor | var(--color-blue-500) | ❔ | ❔ | ❔ |
| `border-green-500` | borderColor | var(--color-green-500) | ❔ | ❔ | ❔ |

#### Border Style

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `border-solid` | borderStyle | solid | ❔ | ❔ | ❔ |
| `border-dashed` | borderStyle | dashed | ❔ | ❔ | ❔ |
| `border-dotted` | borderStyle | dotted | ❔ | ❔ | ❔ |
| `border-double` | borderStyle | double | ❔ | ❔ | ❔ |
| `border-none` | borderStyle | none | ❔ | ❔ | ❔ |

#### Border Radius

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `rounded-none` | borderRadius | 0 | ❔ | ❔ | ❔ |
| `rounded-sm` | borderRadius | 0.125rem | ❔ | ❔ | ❔ |
| `rounded` | borderRadius | 0.25rem | ❔ | ❔ | ❔ |
| `rounded-md` | borderRadius | 0.375rem | ❔ | ❔ | ❔ |
| `rounded-lg` | borderRadius | 0.5rem | ❔ | ❔ | ❔ |
| `rounded-xl` | borderRadius | 0.75rem | ❔ | ❔ | ❔ |
| `rounded-2xl` | borderRadius | 1rem | ❔ | ❔ | ❔ |
| `rounded-3xl` | borderRadius | 1.5rem | ❔ | ❔ | ❔ |
| `rounded-full` | borderRadius | 9999px | ❔ | ❔ | ❔ |
| `rounded-t-none` | borderTopLeftRadius, borderTopRightRadius | 0 | ❔ | ❔ | ❔ |
| `rounded-r-none` | borderTopRightRadius, borderBottomRightRadius | 0 | ❔ | ❔ | ❔ |
| `rounded-b-none` | borderBottomLeftRadius, borderBottomRightRadius | 0 | ❔ | ❔ | ❔ |
| `rounded-l-none` | borderTopLeftRadius, borderBottomLeftRadius | 0 | ❔ | ❔ | ❔ |
| `rounded-t-sm` | borderTopLeftRadius, borderTopRightRadius | 0.125rem | ❔ | ❔ | ❔ |
| `rounded-r-sm` | borderTopRightRadius, borderBottomRightRadius | 0.125rem | ❔ | ❔ | ❔ |
| `rounded-b-sm` | borderBottomLeftRadius, borderBottomRightRadius | 0.125rem | ❔ | ❔ | ❔ |
| `rounded-l-sm` | borderTopLeftRadius, borderBottomLeftRadius | 0.125rem | ❔ | ❔ | ❔ |
| `rounded-t` | borderTopLeftRadius, borderTopRightRadius | 0.25rem | ❔ | ❔ | ❔ |
| `rounded-r` | borderTopRightRadius, borderBottomRightRadius | 0.25rem | ❔ | ❔ | ❔ |
| `rounded-b` | borderBottomLeftRadius, borderBottomRightRadius | 0.25rem | ❔ | ❔ | ❔ |
| `rounded-l` | borderTopLeftRadius, borderBottomLeftRadius | 0.25rem | ❔ | ❔ | ❔ |
| `rounded-t-md` | borderTopLeftRadius, borderTopRightRadius | 0.375rem | ❔ | ❔ | ❔ |
| `rounded-r-md` | borderTopRightRadius, borderBottomRightRadius | 0.375rem | ❔ | ❔ | ❔ |
| `rounded-b-md` | borderBottomLeftRadius, borderBottomRightRadius | 0.375rem | ❔ | ❔ | ❔ |
| `rounded-l-md` | borderTopLeftRadius, borderBottomLeftRadius | 0.375rem | ❔ | ❔ | ❔ |
| `rounded-t-lg` | borderTopLeftRadius, borderTopRightRadius | 0.5rem | ❔ | ❔ | ❔ |
| `rounded-r-lg` | borderTopRightRadius, borderBottomRightRadius | 0.5rem | ❔ | ❔ | ❔ |
| `rounded-b-lg` | borderBottomLeftRadius, borderBottomRightRadius | 0.5rem | ❔ | ❔ | ❔ |
| `rounded-l-lg` | borderTopLeftRadius, borderBottomLeftRadius | 0.5rem | ❔ | ❔ | ❔ |
| `rounded-t-xl` | borderTopLeftRadius, borderTopRightRadius | 0.75rem | ❔ | ❔ | ❔ |
| `rounded-r-xl` | borderTopRightRadius, borderBottomRightRadius | 0.75rem | ❔ | ❔ | ❔ |
| `rounded-b-xl` | borderBottomLeftRadius, borderBottomRightRadius | 0.75rem | ❔ | ❔ | ❔ |
| `rounded-l-xl` | borderTopLeftRadius, borderBottomLeftRadius | 0.75rem | ❔ | ❔ | ❔ |
| `rounded-t-2xl` | borderTopLeftRadius, borderTopRightRadius | 1rem | ❔ | ❔ | ❔ |
| `rounded-r-2xl` | borderTopRightRadius, borderBottomRightRadius | 1rem | ❔ | ❔ | ❔ |
| `rounded-b-2xl` | borderBottomLeftRadius, borderBottomRightRadius | 1rem | ❔ | ❔ | ❔ |
| `rounded-l-2xl` | borderTopLeftRadius, borderBottomLeftRadius | 1rem | ❔ | ❔ | ❔ |
| `rounded-t-3xl` | borderTopLeftRadius, borderTopRightRadius | 1.5rem | ❔ | ❔ | ❔ |
| `rounded-r-3xl` | borderTopRightRadius, borderBottomRightRadius | 1.5rem | ❔ | ❔ | ❔ |
| `rounded-b-3xl` | borderBottomLeftRadius, borderBottomRightRadius | 1.5rem | ❔ | ❔ | ❔ |
| `rounded-l-3xl` | borderTopLeftRadius, borderBottomLeftRadius | 1.5rem | ❔ | ❔ | ❔ |
| `rounded-t-full` | borderTopLeftRadius, borderTopRightRadius | 9999px | ❔ | ❔ | ❔ |
| `rounded-r-full` | borderTopRightRadius, borderBottomRightRadius | 9999px | ❔ | ❔ | ❔ |
| `rounded-b-full` | borderBottomLeftRadius, borderBottomRightRadius | 9999px | ❔ | ❔ | ❔ |
| `rounded-l-full` | borderTopLeftRadius, borderBottomLeftRadius | 9999px | ❔ | ❔ | ❔ |
| `rounded-tl-none` | borderTopLeftRadius | 0 | ❔ | ❔ | ❔ |
| `rounded-tr-none` | borderTopRightRadius | 0 | ❔ | ❔ | ❔ |
| `rounded-br-none` | borderBottomRightRadius | 0 | ❔ | ❔ | ❔ |
| `rounded-bl-none` | borderBottomLeftRadius | 0 | ❔ | ❔ | ❔ |
| `rounded-tl-sm` | borderTopLeftRadius | 0.125rem | ❔ | ❔ | ❔ |
| `rounded-tr-sm` | borderTopRightRadius | 0.125rem | ❔ | ❔ | ❔ |
| `rounded-br-sm` | borderBottomRightRadius | 0.125rem | ❔ | ❔ | ❔ |
| `rounded-bl-sm` | borderBottomLeftRadius | 0.125rem | ❔ | ❔ | ❔ |
| `rounded-tl` | borderTopLeftRadius | 0.25rem | ❔ | ❔ | ❔ |
| `rounded-tr` | borderTopRightRadius | 0.25rem | ❔ | ❔ | ❔ |
| `rounded-br` | borderBottomRightRadius | 0.25rem | ❔ | ❔ | ❔ |
| `rounded-bl` | borderBottomLeftRadius | 0.25rem | ❔ | ❔ | ❔ |

### Effects

#### Box Shadow

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `shadow-sm` | boxShadow | 0 1px 2px 0 rgba(0, 0, 0, 0.05) | ❔ | ❔ | ❔ |
| `shadow` | boxShadow | 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) | ❔ | ❔ | ❔ |
| `shadow-md` | boxShadow | 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) | ❔ | ❔ | ❔ |
| `shadow-lg` | boxShadow | 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) | ❔ | ❔ | ❔ |
| `shadow-xl` | boxShadow | 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) | ❔ | ❔ | ❔ |
| `shadow-2xl` | boxShadow | 0 25px 50px -12px rgba(0, 0, 0, 0.25) | ❔ | ❔ | ❔ |
| `shadow-inner` | boxShadow | inset 0 2px 4px 0 rgba(0, 0, 0, 0.06) | ❔ | ❔ | ❔ |
| `shadow-none` | boxShadow | none | ❔ | ❔ | ❔ |

#### Opacity

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `opacity-0` | opacity | 0 | ❔ | ❔ | ❔ |
| `opacity-5` | opacity | 0.05 | ❔ | ❔ | ❔ |
| `opacity-10` | opacity | 0.1 | ❔ | ❔ | ❔ |
| `opacity-20` | opacity | 0.2 | ❔ | ❔ | ❔ |
| `opacity-25` | opacity | 0.25 | ❔ | ❔ | ❔ |
| `opacity-30` | opacity | 0.3 | ❔ | ❔ | ❔ |
| `opacity-40` | opacity | 0.4 | ❔ | ❔ | ❔ |
| `opacity-50` | opacity | 0.5 | ❔ | ❔ | ❔ |
| `opacity-60` | opacity | 0.6 | ❔ | ❔ | ❔ |
| `opacity-70` | opacity | 0.7 | ❔ | ❔ | ❔ |
| `opacity-75` | opacity | 0.75 | ❔ | ❔ | ❔ |
| `opacity-80` | opacity | 0.8 | ❔ | ❔ | ❔ |
| `opacity-90` | opacity | 0.9 | ❔ | ❔ | ❔ |
| `opacity-95` | opacity | 0.95 | ❔ | ❔ | ❔ |
| `opacity-100` | opacity | 1 | ❔ | ❔ | ❔ |

#### Mix Blend Mode

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `mix-blend-normal` | mixBlendMode | normal | ❔ | ❔ | ❔ |
| `mix-blend-multiply` | mixBlendMode | multiply | ❔ | ❔ | ❔ |
| `mix-blend-screen` | mixBlendMode | screen | ❔ | ❔ | ❔ |
| `mix-blend-overlay` | mixBlendMode | overlay | ❔ | ❔ | ❔ |
| `mix-blend-darken` | mixBlendMode | darken | ❔ | ❔ | ❔ |
| `mix-blend-lighten` | mixBlendMode | lighten | ❔ | ❔ | ❔ |
| `mix-blend-color-dodge` | mixBlendMode | color-dodge | ❔ | ❔ | ❔ |
| `mix-blend-color-burn` | mixBlendMode | color-burn | ❔ | ❔ | ❔ |
| `mix-blend-hard-light` | mixBlendMode | hard-light | ❔ | ❔ | ❔ |
| `mix-blend-soft-light` | mixBlendMode | soft-light | ❔ | ❔ | ❔ |
| `mix-blend-difference` | mixBlendMode | difference | ❔ | ❔ | ❔ |
| `mix-blend-exclusion` | mixBlendMode | exclusion | ❔ | ❔ | ❔ |
| `mix-blend-hue` | mixBlendMode | hue | ❔ | ❔ | ❔ |
| `mix-blend-saturation` | mixBlendMode | saturation | ❔ | ❔ | ❔ |
| `mix-blend-color` | mixBlendMode | color | ❔ | ❔ | ❔ |
| `mix-blend-luminosity` | mixBlendMode | luminosity | ❔ | ❔ | ❔ |

#### Box Decoration Break

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `box-decoration-slice` | boxDecorationBreak | slice | ❔ | ❔ | ❔ |
| `box-decoration-clone` | boxDecorationBreak | clone | ❔ | ❔ | ❔ |

### Tables

#### Border Collapse

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `border-collapse` | borderCollapse | collapse | ❔ | ❔ | ❔ |
| `border-separate` | borderCollapse | separate | ❔ | ❔ | ❔ |

#### Table Layout

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `table-auto` | tableLayout | auto | ❔ | ❔ | ❔ |
| `table-fixed` | tableLayout | fixed | ❔ | ❔ | ❔ |

#### Caption Side

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `caption-top` | captionSide | top | ❔ | ❔ | ❔ |
| `caption-bottom` | captionSide | bottom | ❔ | ❔ | ❔ |

#### Border Spacing

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `border-spacing-0` | borderSpacing | 0px | ❔ | ❔ | ❔ |
| `border-spacing-1` | borderSpacing | 0.25rem | ❔ | ❔ | ❔ |
| `border-spacing-2` | borderSpacing | 0.5rem | ❔ | ❔ | ❔ |
| `border-spacing-4` | borderSpacing | 1rem | ❔ | ❔ | ❔ |
| `border-spacing-8` | borderSpacing | 2rem | ❔ | ❔ | ❔ |
| `border-spacing-px` | borderSpacing | 1px | ❔ | ❔ | ❔ |

### Interactivity

#### Cursor

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `cursor-auto` | cursor | auto | ❔ | ❔ | ❔ |
| `cursor-default` | cursor | default | ❔ | ❔ | ❔ |
| `cursor-pointer` | cursor | pointer | ❔ | ❔ | ❔ |
| `cursor-wait` | cursor | wait | ❔ | ❔ | ❔ |
| `cursor-text` | cursor | text | ❔ | ❔ | ❔ |
| `cursor-move` | cursor | move | ❔ | ❔ | ❔ |
| `cursor-help` | cursor | help | ❔ | ❔ | ❔ |
| `cursor-not-allowed` | cursor | not-allowed | ❔ | ❔ | ❔ |

#### User Select

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `select-none` | userSelect | none | ❔ | ❔ | ❔ |
| `select-text` | userSelect | text | ❔ | ❔ | ❔ |
| `select-all` | userSelect | all | ❔ | ❔ | ❔ |
| `select-auto` | userSelect | auto | ❔ | ❔ | ❔ |

#### Outline

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `outline-none` | outline | 2px solid transparent, outline-offset: 2px | ❔ | ❔ | ❔ |
| `outline-white` | outline | 2px dotted white, outline-offset: 2px | ❔ | ❔ | ❔ |
| `outline-black` | outline | 2px dotted black, outline-offset: 2px | ❔ | ❔ | ❔ |

#### Pointer Events

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `pointer-events-none` | pointerEvents | none | ❔ | ❔ | ❔ |
| `pointer-events-auto` | pointerEvents | auto | ❔ | ❔ | ❔ |

#### Resize

| Class | CSS Property | Value | Web | Android | iOS |
|------|----------|-----|-----|-----|-----|
| `resize-none` | resize | none | ❔ | ❔ | ❔ |
| `resize` | resize | both | ❔ | ❔ | ❔ |
| `resize-y` | resize | vertical | ❔ | ❔ | ❔ |
| `resize-x` | resize | horizontal | ❔ | ❔ | ❔ |

### State Variants

Tailwind CSS provides various state variants that can be combined with the classes above:

| Variant Prefix | Description | Web | Android | iOS |
|---------|------|-----|-----|-----|
| `hover:` | Apply styles when mouse is hovering over the element | ❌ | ❌ | ❌ |
| `focus:` | Apply styles when element has focus | ❌ | ❌ | ❌ |
| `active:` | Apply styles when element is in active state | ❌ | ❌ | ❌ |
| `disabled:` | Apply styles when element is disabled | ❌ | ❌ | ❌ |
| `visited:` | Apply styles when link has been visited | ❌ | ❌ | ❌ |
| `checked:` | Apply styles when checkbox or radio button is checked | ❌ | ❌ | ❌ |
| `first:` | Apply styles to the first child element | ❌ | ❌ | ❌ |
| `last:` | Apply styles to the last child element | ❌ | ❌ | ❌ |
| `odd:` | Apply styles to odd child elements | ❌ | ❌ | ❌ |
| `even:` | Apply styles to even child elements | ❌ | ❌ | ❌ |
| `group-hover:` | Apply styles when parent element (with class 'group') is hovered | ❌ | ❌ | ❌ |
| `group-focus:` | Apply styles when parent element (with class 'group') has focus | ❌ | ❌ | ❌ |
| `focus-within:` | Apply styles when element or any of its children has focus | ❌ | ❌ | ❌ |
| `focus-visible:` | Apply styles when element has focus via keyboard navigation | ❌ | ❌ | ❌ |
| `dark:` | Apply styles in dark mode | ❌ | ❌ | ❌ |

For example: `hover:bg-blue-700` changes the background color to blue-700 when the element is hovered.

## Tailwind Theme Variables

This section lists all theme variables and their values, including colors, sizes, font sizes, etc.

### Colors

Tailwind CSS v4.1 provides a rich color system by default, with 11 shades (50-950) for each color. These colors use the OKLCH color space and are implemented through CSS variables, making theme switching and dark mode support easier:

#### Color Variable Definitions

| CSS Variable Name | Default Value (OKLCH) |
|-----------|--------|
| `--color-black` | #000000 |
| `--color-white` | #ffffff |
| `--color-transparent` | transparent |
| `--color-current` | currentColor |

#### Gray

| CSS Variable Name | Default Value (OKLCH) | RGBA |
|-----------|--------|--------|
| `--color-gray-50` | oklch(0.985 0.002 247.839) | rgba(249, 250, 251, 1) |
| `--color-gray-100` | oklch(0.967 0.003 264.542) | rgba(243, 244, 246, 1) |
| `--color-gray-200` | oklch(0.928 0.006 264.531) | rgba(229, 231, 235, 1) |
| `--color-gray-300` | oklch(0.872 0.01 258.338) | rgba(209, 213, 220, 1) |
| `--color-gray-400` | oklch(0.707 0.022 261.325) | rgba(153, 161, 175, 1) |
| `--color-gray-500` | oklch(0.551 0.027 264.364) | rgba(106, 114, 130, 1) |
| `--color-gray-600` | oklch(0.446 0.03 256.802) | rgba(74, 85, 101, 1) |
| `--color-gray-700` | oklch(0.373 0.034 259.733) | rgba(54, 65, 83, 1) |
| `--color-gray-800` | oklch(0.278 0.033 256.848) | rgba(30, 41, 57, 1) |
| `--color-gray-900` | oklch(0.21 0.034 264.665) | rgba(16, 24, 40, 1) |
| `--color-gray-950` | oklch(0.13 0.028 261.692) | rgba(3, 7, 18, 1) |

#### Red

| CSS Variable Name | Default Value (OKLCH) | RGBA |
|-----------|--------|--------|
| `--color-red-50` | oklch(0.971 0.013 17.38) | rgba(254, 242, 242, 1) |
| `--color-red-100` | oklch(0.936 0.032 17.717) | rgba(255, 226, 226, 1) |
| `--color-red-200` | oklch(0.885 0.062 18.334) | rgba(255, 201, 201, 1) |
| `--color-red-300` | oklch(0.808 0.114 19.571) | rgba(255, 162, 162, 1) |
| `--color-red-400` | oklch(0.704 0.191 22.216) | rgba(255, 100, 103, 1) |
| `--color-red-500` | oklch(0.637 0.237 25.331) | rgba(251, 44, 54, 1) |
| `--color-red-600` | oklch(0.577 0.245 27.325) | rgba(231, 0, 11, 1) |
| `--color-red-700` | oklch(0.505 0.213 27.518) | rgba(193, 0, 7, 1) |
| `--color-red-800` | oklch(0.444 0.177 26.899) | rgba(159, 7, 18, 1) |
| `--color-red-900` | oklch(0.396 0.141 25.723) | rgba(130, 24, 26, 1) |
| `--color-red-950` | oklch(0.258 0.092 26.042) | rgba(70, 8, 9, 1) |

#### Blue

| CSS Variable Name | Default Value (OKLCH) | RGBA |
|-----------|--------|--------|
| `--color-blue-50` | oklch(0.97 0.014 254.604) | rgba(239, 246, 255, 1) |
| `--color-blue-100` | oklch(0.932 0.032 255.585) | rgba(219, 234, 254, 1) |
| `--color-blue-200` | oklch(0.882 0.059 254.128) | rgba(190, 219, 255, 1) |
| `--color-blue-300` | oklch(0.809 0.105 251.813) | rgba(142, 197, 255, 1) |
| `--color-blue-400` | oklch(0.707 0.165 254.624) | rgba(81, 162, 255, 1) |
| `--color-blue-500` | oklch(0.623 0.214 259.815) | rgba(43, 127, 255, 1) |
| `--color-blue-600` | oklch(0.546 0.245 262.881) | rgba(21, 93, 252, 1) |
| `--color-blue-700` | oklch(0.488 0.243 264.376) | rgba(20, 71, 230, 1) |
| `--color-blue-800` | oklch(0.424 0.199 265.638) | rgba(25, 60, 184, 1) |
| `--color-blue-900` | oklch(0.379 0.146 265.522) | rgba(28, 57, 142, 1) |
| `--color-blue-950` | oklch(0.282 0.091 267.935) | rgba(22, 36, 86, 1) |

#### Green

| CSS Variable Name | Default Value (OKLCH) | RGBA |
|-----------|--------|--------|
| `--color-green-50` | oklch(0.982 0.018 155.826) | rgba(240, 253, 244, 1) |
| `--color-green-100` | oklch(0.962 0.044 156.743) | rgba(220, 252, 231, 1) |
| `--color-green-200` | oklch(0.925 0.084 155.995) | rgba(185, 248, 207, 1) |
| `--color-green-300` | oklch(0.871 0.15 154.449) | rgba(123, 241, 168, 1) |
| `--color-green-400` | oklch(0.792 0.209 151.711) | rgba(5, 223, 114, 1) |
| `--color-green-500` | oklch(0.723 0.219 149.579) | rgba(0, 201, 80, 1) |
| `--color-green-600` | oklch(0.627 0.194 149.214) | rgba(0, 166, 62, 1) |
| `--color-green-700` | oklch(0.527 0.154 150.069) | rgba(0, 130, 54, 1) |
| `--color-green-800` | oklch(0.448 0.119 151.328) | rgba(1, 102, 48, 1) |
| `--color-green-900` | oklch(0.393 0.095 152.535) | rgba(13, 84, 43, 1) |
| `--color-green-950` | oklch(0.266 0.065 152.934) | rgba(3, 46, 21, 1) |

### Spacing Variables

Tailwind CSS v4.1 defines specific pixel values for spacing, applicable to padding, margin, width, height, and other properties:

| Class | Value |
|------|--------|
| `p-0` | 0px |
| `p-1` | 4px |
| `p-2` | 8px |
| `p-3` | 12px |
| `p-4` | 16px |
| `p-5` | 20px |
| `p-6` | 24px |
| `p-8` | 32px |
| `p-10` | 40px |
| `p-12` | 48px |
| `p-16` | 64px |
| `p-20` | 80px |
| `p-24` | 96px |
| `p-32` | 128px |
| `p-40` | 160px |
| `p-48` | 192px |
| `p-56` | 224px |
| `p-64` | 256px |
| `p-px` | 1px |

The same values apply to all utility classes that use spacing, such as `margin`, `gap`, `width`, `height`, etc.

### Container Sizes

Tailwind CSS defines a series of breakpoints for responsive design:

| Breakpoint Name | Value |
|--------|-----|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

### Fonts

Tailwind CSS defines several font stacks by default:

| Variable Name | Value |
|--------|-----|
| `sans` | ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" |
| `serif` | ui-serif, Georgia, Cambria, "Times New Roman", Times, serif |
| `mono` | ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace |

### Font Sizes

| Variable Name | Value |
|--------|-----|
| `xs` | 0.75rem (12px) |
| `sm` | 0.875rem (14px) |
| `base` | 1rem (16px) |
| `lg` | 1.125rem (18px) |
| `xl` | 1.25rem (20px) |
| `2xl` | 1.5rem (24px) |
| `3xl` | 1.875rem (30px) |
| `4xl` | 2.25rem (36px) |
| `5xl` | 3rem (48px) |
| `6xl` | 3.75rem (60px) |
| `7xl` | 4.5rem (72px) |
| `8xl` | 6rem (96px) |
| `9xl` | 8rem (128px) |

### Font Weights

| Variable Name | Value |
|--------|-----|
| `thin` | 100 |
| `extralight` | 200 |
| `light` | 300 |
| `normal` | 400 |
| `medium` | 500 |
| `semibold` | 600 |
| `bold` | 700 |
| `extrabold` | 800 |
| `black` | 900 |

### Line Heights

| Variable Name | Value |
|--------|-----|
| `none` | 1 |
| `tight` | 1.25 |
| `snug` | 1.375 |
| `normal` | 1.5 |
| `relaxed` | 1.625 |
| `loose` | 2 |
| `3` | 0.75rem (12px) |
| `4` | 1rem (16px) |
| `5` | 1.25rem (20px) |
| `6` | 1.5rem (24px) |
| `7` | 1.75rem (28px) |
| `8` | 2rem (32px) |
| `9` | 2.25rem (36px) |
| `10` | 2.5rem (40px) |

### Letter Spacing

| Variable Name | Value |
|--------|-----|
| `tighter` | -0.05em |
| `tight` | -0.025em |
| `normal` | 0em |
| `wide` | 0.025em |
| `wider` | 0.05em |
| `widest` | 0.1em |

### Border Radius

| Variable Name | Value |
|--------|-----|
| `none` | 0px |
| `sm` | 0.125rem (2px) |
| `DEFAULT` | 0.25rem (4px) |
| `md` | 0.375rem (6px) |
| `lg` | 0.5rem (8px) |
| `xl` | 0.75rem (12px) |
| `2xl` | 1rem (16px) |
| `3xl` | 1.5rem (24px) |
| `full` | 9999px |

### Shadows

| Variable Name | Value |
|--------|-----|
| `sm` | 0 1px 2px 0 rgba(0, 0, 0, 0.05) |
| `DEFAULT` | 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) |
| `md` | 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) |
| `lg` | 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) |
| `xl` | 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) |
| `2xl` | 0 25px 50px -12px rgba(0, 0, 0, 0.25) |
| `inner` | inset 0 2px 4px 0 rgba(0, 0, 0, 0.06) |
| `none` | none |

### Animations

| Variable Name | Value |
|--------|-----|
| `none` | none |
| `spin` | spin 1s linear infinite |
| `ping` | ping 1s cubic-bezier(0, 0, 0.2, 1) infinite |
| `pulse` | pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite |
| `bounce` | bounce 1s infinite |



