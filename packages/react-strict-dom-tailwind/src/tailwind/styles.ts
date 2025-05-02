/**
 * Tailwind Style Definitions
 *
 * Uses StyleX's css.create to define all styles at the top level
 */

// Import the css object from react-strict-dom
import { css } from 'react-strict-dom';

// Define the type for style objects
interface StyleObject {
  [key: string]: any;
}

// Layout styles
const layoutStyles = css.create({
  // Display
  block: { display: 'block' },
  'inline-block': { display: 'inline-block' },
  flex: { display: 'flex' },
  'inline-flex': { display: 'inline-flex' },
  grid: { display: 'grid' },
  'inline-grid': { display: 'inline-grid' },
  hidden: { display: 'none' },

  // Flex Direction
  'flex-row': { flexDirection: 'row' },
  'flex-col': { flexDirection: 'column' },
  'flex-row-reverse': { flexDirection: 'row-reverse' },
  'flex-col-reverse': { flexDirection: 'column-reverse' },

  // Flex Wrap
  'flex-wrap': { flexWrap: 'wrap' },
  'flex-nowrap': { flexWrap: 'nowrap' },
  'flex-wrap-reverse': { flexWrap: 'wrap-reverse' },

  // Align Items
  'items-start': { alignItems: 'flex-start' },
  'items-center': { alignItems: 'center' },
  'items-end': { alignItems: 'flex-end' },
  'items-stretch': { alignItems: 'stretch' },
  'items-baseline': { alignItems: 'baseline' },

  // Justify Content
  'justify-start': { justifyContent: 'flex-start' },
  'justify-center': { justifyContent: 'center' },
  'justify-end': { justifyContent: 'flex-end' },
  'justify-between': { justifyContent: 'space-between' },
  'justify-around': { justifyContent: 'space-around' },
  'justify-evenly': { justifyContent: 'space-evenly' },
});

// Spacing styles - Padding
const paddingStyles = css.create({
  // All directions
  'p-0': { padding: 0 },
  'p-1': { padding: 4 },
  'p-2': { padding: 8 },
  'p-3': { padding: 12 },
  'p-4': { padding: 16 },
  'p-5': { padding: 20 },
  'p-6': { padding: 24 },
  'p-8': { padding: 32 },
  'p-10': { padding: 40 },
  'p-12': { padding: 48 },

  // Horizontal direction
  'px-0': { paddingLeft: 0, paddingRight: 0 },
  'px-1': { paddingLeft: 4, paddingRight: 4 },
  'px-2': { paddingLeft: 8, paddingRight: 8 },
  'px-3': { paddingLeft: 12, paddingRight: 12 },
  'px-4': { paddingLeft: 16, paddingRight: 16 },
  'px-5': { paddingLeft: 20, paddingRight: 20 },
  'px-6': { paddingLeft: 24, paddingRight: 24 },
  'px-8': { paddingLeft: 32, paddingRight: 32 },
  'px-10': { paddingLeft: 40, paddingRight: 40 },
  'px-12': { paddingLeft: 48, paddingRight: 48 },

  // Vertical direction
  'py-0': { paddingTop: 0, paddingBottom: 0 },
  'py-1': { paddingTop: 4, paddingBottom: 4 },
  'py-2': { paddingTop: 8, paddingBottom: 8 },
  'py-3': { paddingTop: 12, paddingBottom: 12 },
  'py-4': { paddingTop: 16, paddingBottom: 16 },
  'py-5': { paddingTop: 20, paddingBottom: 20 },
  'py-6': { paddingTop: 24, paddingBottom: 24 },
  'py-8': { paddingTop: 32, paddingBottom: 32 },
  'py-10': { paddingTop: 40, paddingBottom: 40 },
  'py-12': { paddingTop: 48, paddingBottom: 48 },

  // Individual directions
  'pt-0': { paddingTop: 0 },
  'pt-1': { paddingTop: 4 },
  'pt-2': { paddingTop: 8 },
  'pt-3': { paddingTop: 12 },
  'pt-4': { paddingTop: 16 },
  'pt-5': { paddingTop: 20 },
  'pt-6': { paddingTop: 24 },
  'pt-8': { paddingTop: 32 },
  'pt-10': { paddingTop: 40 },
  'pt-12': { paddingTop: 48 },

  'pr-0': { paddingRight: 0 },
  'pr-1': { paddingRight: 4 },
  'pr-2': { paddingRight: 8 },
  'pr-3': { paddingRight: 12 },
  'pr-4': { paddingRight: 16 },
  'pr-5': { paddingRight: 20 },
  'pr-6': { paddingRight: 24 },
  'pr-8': { paddingRight: 32 },
  'pr-10': { paddingRight: 40 },
  'pr-12': { paddingRight: 48 },

  'pb-0': { paddingBottom: 0 },
  'pb-1': { paddingBottom: 4 },
  'pb-2': { paddingBottom: 8 },
  'pb-3': { paddingBottom: 12 },
  'pb-4': { paddingBottom: 16 },
  'pb-5': { paddingBottom: 20 },
  'pb-6': { paddingBottom: 24 },
  'pb-8': { paddingBottom: 32 },
  'pb-10': { paddingBottom: 40 },
  'pb-12': { paddingBottom: 48 },

  'pl-0': { paddingLeft: 0 },
  'pl-1': { paddingLeft: 4 },
  'pl-2': { paddingLeft: 8 },
  'pl-3': { paddingLeft: 12 },
  'pl-4': { paddingLeft: 16 },
  'pl-5': { paddingLeft: 20 },
  'pl-6': { paddingLeft: 24 },
  'pl-8': { paddingLeft: 32 },
  'pl-10': { paddingLeft: 40 },
  'pl-12': { paddingLeft: 48 },
});

// Spacing styles - Margin
const marginStyles = css.create({
  // All directions
  'm-0': { margin: 0 },
  'm-1': { margin: 4 },
  'm-2': { margin: 8 },
  'm-3': { margin: 12 },
  'm-4': { margin: 16 },
  'm-5': { margin: 20 },
  'm-6': { margin: 24 },
  'm-8': { margin: 32 },
  'm-10': { margin: 40 },
  'm-12': { margin: 48 },

  // Horizontal direction
  'mx-0': { marginLeft: 0, marginRight: 0 },
  'mx-1': { marginLeft: 4, marginRight: 4 },
  'mx-2': { marginLeft: 8, marginRight: 8 },
  'mx-3': { marginLeft: 12, marginRight: 12 },
  'mx-4': { marginLeft: 16, marginRight: 16 },
  'mx-5': { marginLeft: 20, marginRight: 20 },
  'mx-6': { marginLeft: 24, marginRight: 24 },
  'mx-8': { marginLeft: 32, marginRight: 32 },
  'mx-10': { marginLeft: 40, marginRight: 40 },
  'mx-12': { marginLeft: 48, marginRight: 48 },
  'mx-auto': { marginLeft: 'auto', marginRight: 'auto' },

  // Vertical direction
  'my-0': { marginTop: 0, marginBottom: 0 },
  'my-1': { marginTop: 4, marginBottom: 4 },
  'my-2': { marginTop: 8, marginBottom: 8 },
  'my-3': { marginTop: 12, marginBottom: 12 },
  'my-4': { marginTop: 16, marginBottom: 16 },
  'my-5': { marginTop: 20, marginBottom: 20 },
  'my-6': { marginTop: 24, marginBottom: 24 },
  'my-8': { marginTop: 32, marginBottom: 32 },
  'my-10': { marginTop: 40, marginBottom: 40 },
  'my-12': { marginTop: 48, marginBottom: 48 },
  'my-auto': { marginTop: 'auto', marginBottom: 'auto' },

  // Individual directions
  'mt-0': { marginTop: 0 },
  'mt-1': { marginTop: 4 },
  'mt-2': { marginTop: 8 },
  'mt-3': { marginTop: 12 },
  'mt-4': { marginTop: 16 },
  'mt-5': { marginTop: 20 },
  'mt-6': { marginTop: 24 },
  'mt-8': { marginTop: 32 },
  'mt-10': { marginTop: 40 },
  'mt-12': { marginTop: 48 },
  'mt-auto': { marginTop: 'auto' },

  'mr-0': { marginRight: 0 },
  'mr-1': { marginRight: 4 },
  'mr-2': { marginRight: 8 },
  'mr-3': { marginRight: 12 },
  'mr-4': { marginRight: 16 },
  'mr-5': { marginRight: 20 },
  'mr-6': { marginRight: 24 },
  'mr-8': { marginRight: 32 },
  'mr-10': { marginRight: 40 },
  'mr-12': { marginRight: 48 },
  'mr-auto': { marginRight: 'auto' },

  'mb-0': { marginBottom: 0 },
  'mb-1': { marginBottom: 4 },
  'mb-2': { marginBottom: 8 },
  'mb-3': { marginBottom: 12 },
  'mb-4': { marginBottom: 16 },
  'mb-5': { marginBottom: 20 },
  'mb-6': { marginBottom: 24 },
  'mb-8': { marginBottom: 32 },
  'mb-10': { marginBottom: 40 },
  'mb-12': { marginBottom: 48 },
  'mb-auto': { marginBottom: 'auto' },

  'ml-0': { marginLeft: 0 },
  'ml-1': { marginLeft: 4 },
  'ml-2': { marginLeft: 8 },
  'ml-3': { marginLeft: 12 },
  'ml-4': { marginLeft: 16 },
  'ml-5': { marginLeft: 20 },
  'ml-6': { marginLeft: 24 },
  'ml-8': { marginLeft: 32 },
  'ml-10': { marginLeft: 40 },
  'ml-12': { marginLeft: 48 },
  'ml-auto': { marginLeft: 'auto' },
});

// Size styles - Width
const widthStyles = css.create({
  'w-0': { width: 0 },
  'w-1': { width: 4 },
  'w-2': { width: 8 },
  'w-3': { width: 12 },
  'w-4': { width: 16 },
  'w-5': { width: 20 },
  'w-6': { width: 24 },
  'w-8': { width: 32 },
  'w-10': { width: 40 },
  'w-12': { width: 48 },
  'w-16': { width: 64 },
  'w-20': { width: 80 },
  'w-24': { width: 96 },
  'w-32': { width: 128 },
  'w-40': { width: 160 },
  'w-48': { width: 192 },
  'w-56': { width: 224 },
  'w-64': { width: 256 },
  'w-auto': { width: 'auto' },
  'w-full': { width: '100%' },
  'w-screen': { width: '100vw' },
  'w-1/2': { width: '50%' },
  'w-1/3': { width: '33.333333%' },
  'w-2/3': { width: '66.666667%' },
  'w-1/4': { width: '25%' },
  'w-2/4': { width: '50%' },
  'w-3/4': { width: '75%' },
  'w-1/5': { width: '20%' },
  'w-2/5': { width: '40%' },
  'w-3/5': { width: '60%' },
  'w-4/5': { width: '80%' },
});

// Size styles - Height
const heightStyles = css.create({
  'h-0': { height: 0 },
  'h-1': { height: 4 },
  'h-2': { height: 8 },
  'h-3': { height: 12 },
  'h-4': { height: 16 },
  'h-5': { height: 20 },
  'h-6': { height: 24 },
  'h-8': { height: 32 },
  'h-10': { height: 40 },
  'h-12': { height: 48 },
  'h-16': { height: 64 },
  'h-20': { height: 80 },
  'h-24': { height: 96 },
  'h-32': { height: 128 },
  'h-40': { height: 160 },
  'h-48': { height: 192 },
  'h-56': { height: 224 },
  'h-64': { height: 256 },
  'h-auto': { height: 'auto' },
  'h-full': { height: '100%' },
  'h-screen': { height: '100vh' },
});

// Size styles - Min width and min height
const minSizeStyles = css.create({
  'min-w-0': { minWidth: 0 },
  'min-w-full': { minWidth: '100%' },
  'min-h-0': { minHeight: 0 },
  'min-h-full': { minHeight: '100%' },
  'min-h-screen': { minHeight: '100vh' },
});

// Size styles - Max width and max height
const maxSizeStyles = css.create({
  'max-w-xs': { maxWidth: 320 },
  'max-w-sm': { maxWidth: 384 },
  'max-w-md': { maxWidth: 448 },
  'max-w-lg': { maxWidth: 512 },
  'max-w-xl': { maxWidth: 576 },
  'max-w-2xl': { maxWidth: 672 },
  'max-w-3xl': { maxWidth: 768 },
  'max-w-4xl': { maxWidth: 896 },
  'max-w-5xl': { maxWidth: 1024 },
  'max-w-6xl': { maxWidth: 1152 },
  'max-w-full': { maxWidth: '100%' },
  'max-h-full': { maxHeight: '100%' },
  'max-h-screen': { maxHeight: '100vh' },
});

// Color styles - Background colors
const bgColorStyles = css.create({
  'bg-transparent': { backgroundColor: 'transparent' },
  'bg-black': { backgroundColor: '#000000' },
  'bg-white': { backgroundColor: '#ffffff' },

  // Gray
  'bg-gray-100': { backgroundColor: '#f7fafc' },
  'bg-gray-200': { backgroundColor: '#edf2f7' },
  'bg-gray-300': { backgroundColor: '#e2e8f0' },
  'bg-gray-400': { backgroundColor: '#cbd5e0' },
  'bg-gray-500': { backgroundColor: '#a0aec0' },
  'bg-gray-600': { backgroundColor: '#718096' },
  'bg-gray-700': { backgroundColor: '#4a5568' },
  'bg-gray-800': { backgroundColor: '#2d3748' },
  'bg-gray-900': { backgroundColor: '#1a202c' },

  // Red
  'bg-red-100': { backgroundColor: '#fff5f5' },
  'bg-red-200': { backgroundColor: '#fed7d7' },
  'bg-red-300': { backgroundColor: '#feb2b2' },
  'bg-red-400': { backgroundColor: '#fc8181' },
  'bg-red-500': { backgroundColor: '#f56565' },
  'bg-red-600': { backgroundColor: '#e53e3e' },
  'bg-red-700': { backgroundColor: '#c53030' },
  'bg-red-800': { backgroundColor: '#9b2c2c' },
  'bg-red-900': { backgroundColor: '#742a2a' },

  // Blue
  'bg-blue-100': { backgroundColor: '#ebf8ff' },
  'bg-blue-200': { backgroundColor: '#bee3f8' },
  'bg-blue-300': { backgroundColor: '#90cdf4' },
  'bg-blue-400': { backgroundColor: '#63b3ed' },
  'bg-blue-500': { backgroundColor: '#4299e1' },
  'bg-blue-600': { backgroundColor: '#3182ce' },
  'bg-blue-700': { backgroundColor: '#2b6cb0' },
  'bg-blue-800': { backgroundColor: '#2c5282' },
  'bg-blue-900': { backgroundColor: '#2a4365' },

  // Green
  'bg-green-100': { backgroundColor: '#f0fff4' },
  'bg-green-200': { backgroundColor: '#c6f6d5' },
  'bg-green-300': { backgroundColor: '#9ae6b4' },
  'bg-green-400': { backgroundColor: '#68d391' },
  'bg-green-500': { backgroundColor: '#48bb78' },
  'bg-green-600': { backgroundColor: '#38a169' },
  'bg-green-700': { backgroundColor: '#2f855a' },
  'bg-green-800': { backgroundColor: '#276749' },
  'bg-green-900': { backgroundColor: '#22543d' },
});

// Color styles - Text colors
const textColorStyles = css.create({
  'text-transparent': { color: 'transparent' },
  'text-black': { color: '#000000' },
  'text-white': { color: '#ffffff' },

  // Gray
  'text-gray-100': { color: '#f7fafc' },
  'text-gray-200': { color: '#edf2f7' },
  'text-gray-300': { color: '#e2e8f0' },
  'text-gray-400': { color: '#cbd5e0' },
  'text-gray-500': { color: '#a0aec0' },
  'text-gray-600': { color: '#718096' },
  'text-gray-700': { color: '#4a5568' },
  'text-gray-800': { color: '#2d3748' },
  'text-gray-900': { color: '#1a202c' },

  // Red
  'text-red-100': { color: '#fff5f5' },
  'text-red-200': { color: '#fed7d7' },
  'text-red-300': { color: '#feb2b2' },
  'text-red-400': { color: '#fc8181' },
  'text-red-500': { color: '#f56565' },
  'text-red-600': { color: '#e53e3e' },
  'text-red-700': { color: '#c53030' },
  'text-red-800': { color: '#9b2c2c' },
  'text-red-900': { color: '#742a2a' },

  // Blue
  'text-blue-100': { color: '#ebf8ff' },
  'text-blue-200': { color: '#bee3f8' },
  'text-blue-300': { color: '#90cdf4' },
  'text-blue-400': { color: '#63b3ed' },
  'text-blue-500': { color: '#4299e1' },
  'text-blue-600': { color: '#3182ce' },
  'text-blue-700': { color: '#2b6cb0' },
  'text-blue-800': { color: '#2c5282' },
  'text-blue-900': { color: '#2a4365' },

  // Green
  'text-green-100': { color: '#f0fff4' },
  'text-green-200': { color: '#c6f6d5' },
  'text-green-300': { color: '#9ae6b4' },
  'text-green-400': { color: '#68d391' },
  'text-green-500': { color: '#48bb78' },
  'text-green-600': { color: '#38a169' },
  'text-green-700': { color: '#2f855a' },
  'text-green-800': { color: '#276749' },
  'text-green-900': { color: '#22543d' },
});

// Font styles - Font size
const fontSizeStyles = css.create({
  'text-xs': { fontSize: 12 },
  'text-sm': { fontSize: 14 },
  'text-base': { fontSize: 16 },
  'text-lg': { fontSize: 18 },
  'text-xl': { fontSize: 20 },
  'text-2xl': { fontSize: 24 },
  'text-3xl': { fontSize: 30 },
  'text-4xl': { fontSize: 36 },
  'text-5xl': { fontSize: 48 },
  'text-6xl': { fontSize: 64 },
});

// Font styles - Font weight
const fontWeightStyles = css.create({
  'font-thin': { fontWeight: '100' },
  'font-extralight': { fontWeight: '200' }, // Extra light
  'font-light': { fontWeight: '300' },
  'font-normal': { fontWeight: '400' },
  'font-medium': { fontWeight: '500' },
  'font-semibold': { fontWeight: '600' },
  'font-bold': { fontWeight: '700' },
  'font-extrabold': { fontWeight: '800' }, // Extra bold
  'font-black': { fontWeight: '900' },
});

// Font styles - Text alignment
const textAlignStyles = css.create({
  'text-left': { textAlign: 'left' },
  'text-center': { textAlign: 'center' },
  'text-right': { textAlign: 'right' },
  'text-justify': { textAlign: 'justify' },
});

// Font styles - Line height
const lineHeightStyles = css.create({
  'leading-none': { lineHeight: 1 },
  'leading-tight': { lineHeight: 1.25 },
  'leading-snug': { lineHeight: 1.375 },
  'leading-normal': { lineHeight: 1.5 },
  'leading-relaxed': { lineHeight: 1.625 },
  'leading-loose': { lineHeight: 2 },
});

// Border styles - Border width
const borderWidthStyles = css.create({
  'border': { borderWidth: 1 },
  'border-0': { borderWidth: 0 },
  'border-2': { borderWidth: 2 },
  'border-4': { borderWidth: 4 },
  'border-8': { borderWidth: 8 },

  'border-t': { borderTopWidth: 1 },
  'border-r': { borderRightWidth: 1 },
  'border-b': { borderBottomWidth: 1 },
  'border-l': { borderLeftWidth: 1 },

  'border-t-0': { borderTopWidth: 0 },
  'border-r-0': { borderRightWidth: 0 },
  'border-b-0': { borderBottomWidth: 0 },
  'border-l-0': { borderLeftWidth: 0 },

  'border-t-2': { borderTopWidth: 2 },
  'border-r-2': { borderRightWidth: 2 },
  'border-b-2': { borderBottomWidth: 2 },
  'border-l-2': { borderLeftWidth: 2 },

  'border-t-4': { borderTopWidth: 4 },
  'border-r-4': { borderRightWidth: 4 },
  'border-b-4': { borderBottomWidth: 4 },
  'border-l-4': { borderLeftWidth: 4 },

  'border-t-8': { borderTopWidth: 8 },
  'border-r-8': { borderRightWidth: 8 },
  'border-b-8': { borderBottomWidth: 8 },
  'border-l-8': { borderLeftWidth: 8 },
});

// Border styles - Border color
const borderColorStyles = css.create({
  'border-transparent': { borderColor: 'transparent' },
  'border-black': { borderColor: '#000000' },
  'border-white': { borderColor: '#ffffff' },

  // Gray
  'border-gray-100': { borderColor: '#f7fafc' },
  'border-gray-200': { borderColor: '#edf2f7' },
  'border-gray-300': { borderColor: '#e2e8f0' },
  'border-gray-400': { borderColor: '#cbd5e0' },
  'border-gray-500': { borderColor: '#a0aec0' },
  'border-gray-600': { borderColor: '#718096' },
  'border-gray-700': { borderColor: '#4a5568' },
  'border-gray-800': { borderColor: '#2d3748' },
  'border-gray-900': { borderColor: '#1a202c' },

  // Red
  'border-red-500': { borderColor: '#f56565' },
  'border-red-600': { borderColor: '#e53e3e' },
  'border-red-700': { borderColor: '#c53030' },

  // Blue
  'border-blue-500': { borderColor: '#4299e1' },
  'border-blue-600': { borderColor: '#3182ce' },
  'border-blue-700': { borderColor: '#2b6cb0' },

  // Green
  'border-green-500': { borderColor: '#48bb78' },
  'border-green-600': { borderColor: '#38a169' },
  'border-green-700': { borderColor: '#2f855a' },
});

// Border styles - Border radius
const borderRadiusStyles = css.create({
  'rounded-none': { borderRadius: 0 },
  'rounded-sm': { borderRadius: 2 },
  'rounded': { borderRadius: 4 },
  'rounded-md': { borderRadius: 6 },
  'rounded-lg': { borderRadius: 8 },
  'rounded-xl': { borderRadius: 12 },
  'rounded-2xl': { borderRadius: 16 },
  'rounded-3xl': { borderRadius: 24 },
  'rounded-full': { borderRadius: 9999 },

  'rounded-t-none': { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
  'rounded-r-none': { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
  'rounded-b-none': { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
  'rounded-l-none': { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },

  'rounded-t-sm': { borderTopLeftRadius: 2, borderTopRightRadius: 2 },
  'rounded-r-sm': { borderTopRightRadius: 2, borderBottomRightRadius: 2 },
  'rounded-b-sm': { borderBottomLeftRadius: 2, borderBottomRightRadius: 2 },
  'rounded-l-sm': { borderTopLeftRadius: 2, borderBottomLeftRadius: 2 },

  'rounded-t': { borderTopLeftRadius: 4, borderTopRightRadius: 4 },
  'rounded-r': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  'rounded-b': { borderBottomLeftRadius: 4, borderBottomRightRadius: 4 },
  'rounded-l': { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },

  'rounded-t-md': { borderTopLeftRadius: 6, borderTopRightRadius: 6 },
  'rounded-r-md': { borderTopRightRadius: 6, borderBottomRightRadius: 6 },
  'rounded-b-md': { borderBottomLeftRadius: 6, borderBottomRightRadius: 6 },
  'rounded-l-md': { borderTopLeftRadius: 6, borderBottomLeftRadius: 6 },

  'rounded-t-lg': { borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  'rounded-r-lg': { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
  'rounded-b-lg': { borderBottomLeftRadius: 8, borderBottomRightRadius: 8 },
  'rounded-l-lg': { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },

  'rounded-t-xl': { borderTopLeftRadius: 12, borderTopRightRadius: 12 },
  'rounded-r-xl': { borderTopRightRadius: 12, borderBottomRightRadius: 12 },
  'rounded-b-xl': { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },
  'rounded-l-xl': { borderTopLeftRadius: 12, borderBottomLeftRadius: 12 },

  'rounded-t-2xl': { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  'rounded-r-2xl': { borderTopRightRadius: 16, borderBottomRightRadius: 16 },
  'rounded-b-2xl': { borderBottomLeftRadius: 16, borderBottomRightRadius: 16 },
  'rounded-l-2xl': { borderTopLeftRadius: 16, borderBottomLeftRadius: 16 },

  'rounded-t-3xl': { borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  'rounded-r-3xl': { borderTopRightRadius: 24, borderBottomRightRadius: 24 },
  'rounded-b-3xl': { borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  'rounded-l-3xl': { borderTopLeftRadius: 24, borderBottomLeftRadius: 24 },

  'rounded-t-full': { borderTopLeftRadius: 9999, borderTopRightRadius: 9999 },
  'rounded-r-full': { borderTopRightRadius: 9999, borderBottomRightRadius: 9999 },
  'rounded-b-full': { borderBottomLeftRadius: 9999, borderBottomRightRadius: 9999 },
  'rounded-l-full': { borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 },
});

// Pseudo-class styles - Hover
const hoverBgColorStyles = css.create({
  'hover:bg-transparent': { ':hover': { backgroundColor: 'transparent' } },
  'hover:bg-black': { ':hover': { backgroundColor: '#000000' } },
  'hover:bg-white': { ':hover': { backgroundColor: '#ffffff' } },

  // Gray
  'hover:bg-gray-100': { ':hover': { backgroundColor: '#f7fafc' } },
  'hover:bg-gray-200': { ':hover': { backgroundColor: '#edf2f7' } },
  'hover:bg-gray-300': { ':hover': { backgroundColor: '#e2e8f0' } },
  'hover:bg-gray-400': { ':hover': { backgroundColor: '#cbd5e0' } },
  'hover:bg-gray-500': { ':hover': { backgroundColor: '#a0aec0' } },
  'hover:bg-gray-600': { ':hover': { backgroundColor: '#718096' } },
  'hover:bg-gray-700': { ':hover': { backgroundColor: '#4a5568' } },
  'hover:bg-gray-800': { ':hover': { backgroundColor: '#2d3748' } },
  'hover:bg-gray-900': { ':hover': { backgroundColor: '#1a202c' } },

  // Red
  'hover:bg-red-500': { ':hover': { backgroundColor: '#f56565' } },
  'hover:bg-red-600': { ':hover': { backgroundColor: '#e53e3e' } },
  'hover:bg-red-700': { ':hover': { backgroundColor: '#c53030' } },

  // Blue
  'hover:bg-blue-500': { ':hover': { backgroundColor: '#4299e1' } },
  'hover:bg-blue-600': { ':hover': { backgroundColor: '#3182ce' } },
  'hover:bg-blue-700': { ':hover': { backgroundColor: '#2b6cb0' } },

  // Green
  'hover:bg-green-500': { ':hover': { backgroundColor: '#48bb78' } },
  'hover:bg-green-600': { ':hover': { backgroundColor: '#38a169' } },
  'hover:bg-green-700': { ':hover': { backgroundColor: '#2f855a' } },
});

// Pseudo-class styles - Focus
const focusBgColorStyles = css.create({
  'focus:bg-transparent': { ':focus': { backgroundColor: 'transparent' } },
  'focus:bg-black': { ':focus': { backgroundColor: '#000000' } },
  'focus:bg-white': { ':focus': { backgroundColor: '#ffffff' } },

  // Gray
  'focus:bg-gray-100': { ':focus': { backgroundColor: '#f7fafc' } },
  'focus:bg-gray-200': { ':focus': { backgroundColor: '#edf2f7' } },
  'focus:bg-gray-300': { ':focus': { backgroundColor: '#e2e8f0' } },
  'focus:bg-gray-400': { ':focus': { backgroundColor: '#cbd5e0' } },
  'focus:bg-gray-500': { ':focus': { backgroundColor: '#a0aec0' } },
  'focus:bg-gray-600': { ':focus': { backgroundColor: '#718096' } },
  'focus:bg-gray-700': { ':focus': { backgroundColor: '#4a5568' } },
  'focus:bg-gray-800': { ':focus': { backgroundColor: '#2d3748' } },
  'focus:bg-gray-900': { ':focus': { backgroundColor: '#1a202c' } },

  // Red
  'focus:bg-red-500': { ':focus': { backgroundColor: '#f56565' } },
  'focus:bg-red-600': { ':focus': { backgroundColor: '#e53e3e' } },
  'focus:bg-red-700': { ':focus': { backgroundColor: '#c53030' } },

  // Blue
  'focus:bg-blue-500': { ':focus': { backgroundColor: '#4299e1' } },
  'focus:bg-blue-600': { ':focus': { backgroundColor: '#3182ce' } },
  'focus:bg-blue-700': { ':focus': { backgroundColor: '#2b6cb0' } },

  // Green
  'focus:bg-green-500': { ':focus': { backgroundColor: '#48bb78' } },
  'focus:bg-green-600': { ':focus': { backgroundColor: '#38a169' } },
  'focus:bg-green-700': { ':focus': { backgroundColor: '#2f855a' } },
});

// Pseudo-class styles - Others
const otherPseudoStyles = css.create({
  'focus:outline-none': { ':focus': { outline: 'none' } },
});

// Export the combination of all styles
export const tailwindStyles: StyleObject = {
  ...layoutStyles,
  ...paddingStyles,
  ...marginStyles,
  ...widthStyles,
  ...heightStyles,
  ...minSizeStyles,
  ...maxSizeStyles,
  ...bgColorStyles,
  ...textColorStyles,
  ...fontSizeStyles,
  ...fontWeightStyles,
  ...textAlignStyles,
  ...lineHeightStyles,
  ...borderWidthStyles,
  ...borderColorStyles,
  ...borderRadiusStyles,
};

// Export all hover styles
export const hoverStyles: StyleObject = {
  ...hoverBgColorStyles,
};

// Export all focus styles
export const focusStyles: StyleObject = {
  ...focusBgColorStyles,
  ...otherPseudoStyles,
};
