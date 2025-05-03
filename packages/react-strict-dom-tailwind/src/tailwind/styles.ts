/**
 * Tailwind Style Definitions
 *
 * Uses StyleX's css.create to define all styles at the top level
 */

// Import the css object from react-strict-dom
import { css } from 'react-strict-dom';
import { twVars } from './variables.stylex';

// Define the type for style objects
interface StyleObject {
  [key: string]: any;
}

export const tailwindStyles: StyleObject = css.create({
  /* Layout Styles*/
  // Display
  'block': { display: 'block' },
  'inline-block': { display: 'inline-block' },
  'flex': { display: 'flex' },
  'inline-flex': { display: 'inline-flex' },
  'grid': { display: 'grid' },
  'inline-grid': { display: 'inline-grid' },
  'hidden': { display: 'none' },

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

  // Flex Properties
  'flex-1': { flex: '1 1 0%' },
  'flex-auto': { flex: '1 1 auto' },
  'flex-initial': { flex: '0 1 auto' },
  'flex-none': { flex: 'none' },

  // Flex Grow
  'grow': { flexGrow: 1 },
  'grow-0': { flexGrow: 0 },

  // Flex Shrink
  'shrink': { flexShrink: 1 },
  'shrink-0': { flexShrink: 0 },

  // Grid Template Columns
  'grid-cols-1': { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
  'grid-cols-2': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
  'grid-cols-3': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
  'grid-cols-4': { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
  'grid-cols-5': { gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' },
  'grid-cols-6': { gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' },
  'grid-cols-7': { gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' },
  'grid-cols-8': { gridTemplateColumns: 'repeat(8, minmax(0, 1fr))' },
  'grid-cols-9': { gridTemplateColumns: 'repeat(9, minmax(0, 1fr))' },
  'grid-cols-12': { gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' },
  'grid-cols-none': { gridTemplateColumns: 'none' },

  // Grid Template Rows
  'grid-rows-1': { gridTemplateRows: 'repeat(1, minmax(0, 1fr))' },
  'grid-rows-2': { gridTemplateRows: 'repeat(2, minmax(0, 1fr))' },
  'grid-rows-3': { gridTemplateRows: 'repeat(3, minmax(0, 1fr))' },
  'grid-rows-4': { gridTemplateRows: 'repeat(4, minmax(0, 1fr))' },
  'grid-rows-5': { gridTemplateRows: 'repeat(5, minmax(0, 1fr))' },
  'grid-rows-6': { gridTemplateRows: 'repeat(6, minmax(0, 1fr))' },
  'grid-rows-none': { gridTemplateRows: 'none' },

  // Gap
  'gap-0': { gap: 0 },
  'gap-1': { gap: 4 },
  'gap-2': { gap: 8 },
  'gap-3': { gap: 12 },
  'gap-4': { gap: 16 },
  'gap-5': { gap: 20 },
  'gap-6': { gap: 24 },
  'gap-8': { gap: 32 },
  'gap-10': { gap: 40 },
  'gap-12': { gap: 48 },
  'gap-16': { gap: 64 },
  'gap-20': { gap: 80 },
  'gap-24': { gap: 96 },
  'gap-32': { gap: 128 },
  'gap-40': { gap: 160 },
  'gap-48': { gap: 192 },
  'gap-56': { gap: 224 },
  'gap-64': { gap: 256 },
  'gap-px': { gap: 1 },

  /* Spacing Styles - Padding */
  // All directions
  'p-0': { padding: 0 },
  'p-1': { padding: `calc(${twVars['--spacing']} * 4)` },
  'p-2': { padding: `calc(${twVars['--spacing']} * 8)` },
  'p-3': { padding: `calc(${twVars['--spacing']} * 12)` },
  'p-4': { padding: `calc(${twVars['--spacing']} * 16)` },
  'p-5': { padding: `calc(${twVars['--spacing']} * 20)` },
  'p-6': { padding: `calc(${twVars['--spacing']} * 24)` },
  'p-8': { padding: `calc(${twVars['--spacing']} * 32)` },
  'p-10': { padding: `calc(${twVars['--spacing']} * 40)` },
  'p-12': { padding: `calc(${twVars['--spacing']} * 48)` },
  'p-16': { padding: `calc(${twVars['--spacing']} * 64)` },
  'p-20': { padding: `calc(${twVars['--spacing']} * 80)` },
  'p-24': { padding: `calc(${twVars['--spacing']} * 96)` },
  'p-32': { padding: `calc(${twVars['--spacing']} * 128)` },
  'p-40': { padding: `calc(${twVars['--spacing']} * 160)` },
  'p-48': { padding: `calc(${twVars['--spacing']} * 192)` },
  'p-56': { padding: `calc(${twVars['--spacing']} * 224)` },
  'p-64': { padding: `calc(${twVars['--spacing']} * 256)` },
  'p-px': { padding: 1 },

  // Horizontal direction
  'px-0': { paddingLeft: 0, paddingRight: 0 },
  'px-1': { paddingLeft: `calc(${twVars['--spacing']} * 4)`, paddingRight: `calc(${twVars['--spacing']} * 4)` },
  'px-2': { paddingLeft: `calc(${twVars['--spacing']} * 8)`, paddingRight: `calc(${twVars['--spacing']} * 8)` },
  'px-3': { paddingLeft: `calc(${twVars['--spacing']} * 12)`, paddingRight: `calc(${twVars['--spacing']} * 12)` },
  'px-4': { paddingLeft: `calc(${twVars['--spacing']} * 16)`, paddingRight: `calc(${twVars['--spacing']} * 16)` },
  'px-5': { paddingLeft: `calc(${twVars['--spacing']} * 20)`, paddingRight: `calc(${twVars['--spacing']} * 20)` },
  'px-6': { paddingLeft: `calc(${twVars['--spacing']} * 24)`, paddingRight: `calc(${twVars['--spacing']} * 24)` },
  'px-8': { paddingLeft: `calc(${twVars['--spacing']} * 32)`, paddingRight: `calc(${twVars['--spacing']} * 32)` },
  'px-10': { paddingLeft: `calc(${twVars['--spacing']} * 40)`, paddingRight: `calc(${twVars['--spacing']} * 40)` },
  'px-12': { paddingLeft: `calc(${twVars['--spacing']} * 48)`, paddingRight: `calc(${twVars['--spacing']} * 48)` },
  'px-16': { paddingLeft: `calc(${twVars['--spacing']} * 64)`, paddingRight: `calc(${twVars['--spacing']} * 64)` },
  'px-20': { paddingLeft: `calc(${twVars['--spacing']} * 80)`, paddingRight: `calc(${twVars['--spacing']} * 80)` },
  'px-24': { paddingLeft: `calc(${twVars['--spacing']} * 96)`, paddingRight: `calc(${twVars['--spacing']} * 96)` },
  'px-32': { paddingLeft: `calc(${twVars['--spacing']} * 128)`, paddingRight: `calc(${twVars['--spacing']} * 128)` },
  'px-px': { paddingLeft: 1, paddingRight: 1 },

  // Vertical direction
  'py-0': { paddingTop: 0, paddingBottom: 0 },
  'py-1': { paddingTop: `calc(${twVars['--spacing']} * 4)`, paddingBottom: `calc(${twVars['--spacing']} * 4)` },
  'py-2': { paddingTop: `calc(${twVars['--spacing']} * 8)`, paddingBottom: `calc(${twVars['--spacing']} * 8)` },
  'py-3': { paddingTop: `calc(${twVars['--spacing']} * 12)`, paddingBottom: `calc(${twVars['--spacing']} * 12)` },
  'py-4': { paddingTop: `calc(${twVars['--spacing']} * 16)`, paddingBottom: `calc(${twVars['--spacing']} * 16)` },
  'py-5': { paddingTop: `calc(${twVars['--spacing']} * 20)`, paddingBottom: `calc(${twVars['--spacing']} * 20)` },
  'py-6': { paddingTop: `calc(${twVars['--spacing']} * 24)`, paddingBottom: `calc(${twVars['--spacing']} * 24)` },
  'py-8': { paddingTop: `calc(${twVars['--spacing']} * 32)`, paddingBottom: `calc(${twVars['--spacing']} * 32)` },
  'py-10': { paddingTop: `calc(${twVars['--spacing']} * 40)`, paddingBottom: `calc(${twVars['--spacing']} * 40)` },
  'py-12': { paddingTop: `calc(${twVars['--spacing']} * 48)`, paddingBottom: `calc(${twVars['--spacing']} * 48)` },
  'py-16': { paddingTop: `calc(${twVars['--spacing']} * 64)`, paddingBottom: `calc(${twVars['--spacing']} * 64)` },
  'py-20': { paddingTop: `calc(${twVars['--spacing']} * 80)`, paddingBottom: `calc(${twVars['--spacing']} * 80)` },
  'py-24': { paddingTop: `calc(${twVars['--spacing']} * 96)`, paddingBottom: `calc(${twVars['--spacing']} * 96)` },
  'py-32': { paddingTop: `calc(${twVars['--spacing']} * 128)`, paddingBottom: `calc(${twVars['--spacing']} * 128)` },
  'py-px': { paddingTop: 1, paddingBottom: 1 },

  // Individual directions
  'pt-0': { paddingTop: 0 },
  'pt-1': { paddingTop: `calc(${twVars['--spacing']} * 4)` },
  'pt-2': { paddingTop: `calc(${twVars['--spacing']} * 8)` },
  'pt-3': { paddingTop: `calc(${twVars['--spacing']} * 12)` },
  'pt-4': { paddingTop: `calc(${twVars['--spacing']} * 16)` },
  'pt-5': { paddingTop: `calc(${twVars['--spacing']} * 20)` },
  'pt-6': { paddingTop: `calc(${twVars['--spacing']} * 24)` },
  'pt-8': { paddingTop: `calc(${twVars['--spacing']} * 32)` },
  'pt-10': { paddingTop: `calc(${twVars['--spacing']} * 40)` },
  'pt-12': { paddingTop: `calc(${twVars['--spacing']} * 48)` },
  'pt-16': { paddingTop: `calc(${twVars['--spacing']} * 64)` },
  'pt-20': { paddingTop: `calc(${twVars['--spacing']} * 80)` },
  'pt-24': { paddingTop: `calc(${twVars['--spacing']} * 96)` },
  'pt-px': { paddingTop: 1 },

  'pr-0': { paddingRight: 0 },
  'pr-1': { paddingRight: `calc(${twVars['--spacing']} * 4)` },
  'pr-2': { paddingRight: `calc(${twVars['--spacing']} * 8)` },
  'pr-3': { paddingRight: `calc(${twVars['--spacing']} * 12)` },
  'pr-4': { paddingRight: `calc(${twVars['--spacing']} * 16)` },
  'pr-5': { paddingRight: `calc(${twVars['--spacing']} * 20)` },
  'pr-6': { paddingRight: `calc(${twVars['--spacing']} * 24)` },
  'pr-8': { paddingRight: `calc(${twVars['--spacing']} * 32)` },
  'pr-10': { paddingRight: `calc(${twVars['--spacing']} * 40)` },
  'pr-12': { paddingRight: `calc(${twVars['--spacing']} * 48)` },
  'pr-16': { paddingRight: `calc(${twVars['--spacing']} * 64)` },
  'pr-20': { paddingRight: `calc(${twVars['--spacing']} * 80)` },
  'pr-24': { paddingRight: `calc(${twVars['--spacing']} * 96)` },
  'pr-px': { paddingRight: 1 },

  'pb-0': { paddingBottom: 0 },
  'pb-1': { paddingBottom: `calc(${twVars['--spacing']} * 4)` },
  'pb-2': { paddingBottom: `calc(${twVars['--spacing']} * 8)` },
  'pb-3': { paddingBottom: `calc(${twVars['--spacing']} * 12)` },
  'pb-4': { paddingBottom: `calc(${twVars['--spacing']} * 16)` },
  'pb-5': { paddingBottom: `calc(${twVars['--spacing']} * 20)` },
  'pb-6': { paddingBottom: `calc(${twVars['--spacing']} * 24)` },
  'pb-8': { paddingBottom: `calc(${twVars['--spacing']} * 32)` },
  'pb-10': { paddingBottom: `calc(${twVars['--spacing']} * 40)` },
  'pb-12': { paddingBottom: `calc(${twVars['--spacing']} * 48)` },
  'pb-16': { paddingBottom: `calc(${twVars['--spacing']} * 64)` },
  'pb-20': { paddingBottom: `calc(${twVars['--spacing']} * 80)` },
  'pb-24': { paddingBottom: `calc(${twVars['--spacing']} * 96)` },
  'pb-px': { paddingBottom: 1 },

  'pl-0': { paddingLeft: 0 },
  'pl-1': { paddingLeft: `calc(${twVars['--spacing']} * 4)` },
  'pl-2': { paddingLeft: `calc(${twVars['--spacing']} * 8)` },
  'pl-3': { paddingLeft: `calc(${twVars['--spacing']} * 12)` },
  'pl-4': { paddingLeft: `calc(${twVars['--spacing']} * 16)` },
  'pl-5': { paddingLeft: `calc(${twVars['--spacing']} * 20)` },
  'pl-6': { paddingLeft: `calc(${twVars['--spacing']} * 24)` },
  'pl-8': { paddingLeft: `calc(${twVars['--spacing']} * 32)` },
  'pl-10': { paddingLeft: `calc(${twVars['--spacing']} * 40)` },
  'pl-12': { paddingLeft: `calc(${twVars['--spacing']} * 48)` },
  'pl-16': { paddingLeft: `calc(${twVars['--spacing']} * 64)` },
  'pl-20': { paddingLeft: `calc(${twVars['--spacing']} * 80)` },
  'pl-24': { paddingLeft: `calc(${twVars['--spacing']} * 96)` },
  'pl-px': { paddingLeft: 1 },


  /* Spacing styles - Margin */
  // All directions
  'm-0': { margin: 0 },
  'm-1': { margin: `calc(${twVars['--spacing']} * 4)` },
  'm-2': { margin: `calc(${twVars['--spacing']} * 8)` },
  'm-3': { margin: `calc(${twVars['--spacing']} * 12)` },
  'm-4': { margin: `calc(${twVars['--spacing']} * 16)` },
  'm-5': { margin: `calc(${twVars['--spacing']} * 20)` },
  'm-6': { margin: `calc(${twVars['--spacing']} * 24)` },
  'm-8': { margin: `calc(${twVars['--spacing']} * 32)` },
  'm-10': { margin: `calc(${twVars['--spacing']} * 40)` },
  'm-12': { margin: `calc(${twVars['--spacing']} * 48)` },
  'm-16': { margin: `calc(${twVars['--spacing']} * 64)` },
  'm-20': { margin: `calc(${twVars['--spacing']} * 80)` },
  'm-24': { margin: `calc(${twVars['--spacing']} * 96)` },
  'm-32': { margin: `calc(${twVars['--spacing']} * 128)` },
  'm-px': { margin: 1 },

  // Horizontal direction
  'mx-0': { marginLeft: 0, marginRight: 0 },
  'mx-1': { marginLeft: `calc(${twVars['--spacing']} * 4)`, marginRight: `calc(${twVars['--spacing']} * 4)` },
  'mx-2': { marginLeft: `calc(${twVars['--spacing']} * 8)`, marginRight: `calc(${twVars['--spacing']} * 8)` },
  'mx-3': { marginLeft: `calc(${twVars['--spacing']} * 12)`, marginRight: `calc(${twVars['--spacing']} * 12)` },
  'mx-4': { marginLeft: `calc(${twVars['--spacing']} * 16)`, marginRight: `calc(${twVars['--spacing']} * 16)` },
  'mx-5': { marginLeft: `calc(${twVars['--spacing']} * 20)`, marginRight: `calc(${twVars['--spacing']} * 20)` },
  'mx-6': { marginLeft: `calc(${twVars['--spacing']} * 24)`, marginRight: `calc(${twVars['--spacing']} * 24)` },
  'mx-8': { marginLeft: `calc(${twVars['--spacing']} * 32)`, marginRight: `calc(${twVars['--spacing']} * 32)` },
  'mx-10': { marginLeft: `calc(${twVars['--spacing']} * 40)`, marginRight: `calc(${twVars['--spacing']} * 40)` },
  'mx-12': { marginLeft: `calc(${twVars['--spacing']} * 48)`, marginRight: `calc(${twVars['--spacing']} * 48)` },
  'mx-16': { marginLeft: `calc(${twVars['--spacing']} * 64)`, marginRight: `calc(${twVars['--spacing']} * 64)` },
  'mx-20': { marginLeft: `calc(${twVars['--spacing']} * 80)`, marginRight: `calc(${twVars['--spacing']} * 80)` },
  'mx-24': { marginLeft: `calc(${twVars['--spacing']} * 96)`, marginRight: `calc(${twVars['--spacing']} * 96)` },
  'mx-32': { marginLeft: `calc(${twVars['--spacing']} * 128)`, marginRight: `calc(${twVars['--spacing']} * 128)` },
  'mx-px': { marginLeft: 1, marginRight: 1 },
  'mx-auto': { marginLeft: 'auto', marginRight: 'auto' },

  // Vertical direction
  'my-0': { marginTop: 0, marginBottom: 0 },
  'my-1': { marginTop: `calc(${twVars['--spacing']} * 4)`, marginBottom: `calc(${twVars['--spacing']} * 4)` },
  'my-2': { marginTop: `calc(${twVars['--spacing']} * 8)`, marginBottom: `calc(${twVars['--spacing']} * 8)` },
  'my-3': { marginTop: `calc(${twVars['--spacing']} * 12)`, marginBottom: `calc(${twVars['--spacing']} * 12)` },
  'my-4': { marginTop: `calc(${twVars['--spacing']} * 16)`, marginBottom: `calc(${twVars['--spacing']} * 16)` },
  'my-5': { marginTop: `calc(${twVars['--spacing']} * 20)`, marginBottom: `calc(${twVars['--spacing']} * 20)` },
  'my-6': { marginTop: `calc(${twVars['--spacing']} * 24)`, marginBottom: `calc(${twVars['--spacing']} * 24)` },
  'my-8': { marginTop: `calc(${twVars['--spacing']} * 32)`, marginBottom: `calc(${twVars['--spacing']} * 32)` },
  'my-10': { marginTop: `calc(${twVars['--spacing']} * 40)`, marginBottom: `calc(${twVars['--spacing']} * 40)` },
  'my-12': { marginTop: `calc(${twVars['--spacing']} * 48)`, marginBottom: `calc(${twVars['--spacing']} * 48)` },
  'my-16': { marginTop: `calc(${twVars['--spacing']} * 64)`, marginBottom: `calc(${twVars['--spacing']} * 64)` },
  'my-20': { marginTop: `calc(${twVars['--spacing']} * 80)`, marginBottom: `calc(${twVars['--spacing']} * 80)` },
  'my-24': { marginTop: `calc(${twVars['--spacing']} * 96)`, marginBottom: `calc(${twVars['--spacing']} * 96)` },
  'my-32': { marginTop: `calc(${twVars['--spacing']} * 128)`, marginBottom: `calc(${twVars['--spacing']} * 128)` },
  'my-px': { marginTop: 1, marginBottom: 1 },
  'my-auto': { marginTop: 'auto', marginBottom: 'auto' },

  // Individual directions
  'mt-0': { marginTop: 0 },
  'mt-1': { marginTop: `calc(${twVars['--spacing']} * 4)` },
  'mt-2': { marginTop: `calc(${twVars['--spacing']} * 8)` },
  'mt-3': { marginTop: `calc(${twVars['--spacing']} * 12)` },
  'mt-4': { marginTop: `calc(${twVars['--spacing']} * 16)` },
  'mt-5': { marginTop: `calc(${twVars['--spacing']} * 20)` },
  'mt-6': { marginTop: `calc(${twVars['--spacing']} * 24)` },
  'mt-8': { marginTop: `calc(${twVars['--spacing']} * 32)` },
  'mt-10': { marginTop: `calc(${twVars['--spacing']} * 40)` },
  'mt-12': { marginTop: `calc(${twVars['--spacing']} * 48)` },
  'mt-16': { marginTop: `calc(${twVars['--spacing']} * 64)` },
  'mt-20': { marginTop: `calc(${twVars['--spacing']} * 80)` },
  'mt-24': { marginTop: `calc(${twVars['--spacing']} * 96)` },
  'mt-px': { marginTop: 1 },
  'mt-auto': { marginTop: 'auto' },

  'mr-0': { marginRight: 0 },
  'mr-1': { marginRight: `calc(${twVars['--spacing']} * 4)` },
  'mr-2': { marginRight: `calc(${twVars['--spacing']} * 8)` },
  'mr-3': { marginRight: `calc(${twVars['--spacing']} * 12)` },
  'mr-4': { marginRight: `calc(${twVars['--spacing']} * 16)` },
  'mr-5': { marginRight: `calc(${twVars['--spacing']} * 20)` },
  'mr-6': { marginRight: `calc(${twVars['--spacing']} * 24)` },
  'mr-8': { marginRight: `calc(${twVars['--spacing']} * 32)` },
  'mr-10': { marginRight: `calc(${twVars['--spacing']} * 40)` },
  'mr-12': { marginRight: `calc(${twVars['--spacing']} * 48)` },
  'mr-16': { marginRight: `calc(${twVars['--spacing']} * 64)` },
  'mr-20': { marginRight: `calc(${twVars['--spacing']} * 80)` },
  'mr-24': { marginRight: `calc(${twVars['--spacing']} * 96)` },
  'mr-px': { marginRight: 1 },
  'mr-auto': { marginRight: 'auto' },

  'mb-0': { marginBottom: 0 },
  'mb-1': { marginBottom: `calc(${twVars['--spacing']} * 4)` },
  'mb-2': { marginBottom: `calc(${twVars['--spacing']} * 8)` },
  'mb-3': { marginBottom: `calc(${twVars['--spacing']} * 12)` },
  'mb-4': { marginBottom: `calc(${twVars['--spacing']} * 16)` },
  'mb-5': { marginBottom: `calc(${twVars['--spacing']} * 20)` },
  'mb-6': { marginBottom: `calc(${twVars['--spacing']} * 24)` },
  'mb-8': { marginBottom: `calc(${twVars['--spacing']} * 32)` },
  'mb-10': { marginBottom: `calc(${twVars['--spacing']} * 40)` },
  'mb-12': { marginBottom: `calc(${twVars['--spacing']} * 48)` },
  'mb-16': { marginBottom: `calc(${twVars['--spacing']} * 64)` },
  'mb-20': { marginBottom: `calc(${twVars['--spacing']} * 80)` },
  'mb-24': { marginBottom: `calc(${twVars['--spacing']} * 96)` },
  'mb-px': { marginBottom: 1 },
  'mb-auto': { marginBottom: 'auto' },

  'ml-0': { marginLeft: 0 },
  'ml-1': { marginLeft: `calc(${twVars['--spacing']} * 4)` },
  'ml-2': { marginLeft: `calc(${twVars['--spacing']} * 8)` },
  'ml-3': { marginLeft: `calc(${twVars['--spacing']} * 12)` },
  'ml-4': { marginLeft: `calc(${twVars['--spacing']} * 16)` },
  'ml-5': { marginLeft: `calc(${twVars['--spacing']} * 20)` },
  'ml-6': { marginLeft: `calc(${twVars['--spacing']} * 24)` },
  'ml-8': { marginLeft: `calc(${twVars['--spacing']} * 32)` },
  'ml-10': { marginLeft: `calc(${twVars['--spacing']} * 40)` },
  'ml-12': { marginLeft: `calc(${twVars['--spacing']} * 48)` },
  'ml-16': { marginLeft: `calc(${twVars['--spacing']} * 64)` },
  'ml-20': { marginLeft: `calc(${twVars['--spacing']} * 80)` },
  'ml-24': { marginLeft: `calc(${twVars['--spacing']} * 96)` },
  'ml-px': { marginLeft: 1 },
  'ml-auto': { marginLeft: 'auto' },

  /* Size styles - Width */
  'w-0': { width: 0 },
  'w-1': { width: `calc(${twVars['--spacing']} * 4)` },
  'w-2': { width: `calc(${twVars['--spacing']} * 8)` },
  'w-3': { width: `calc(${twVars['--spacing']} * 12)` },
  'w-4': { width: `calc(${twVars['--spacing']} * 16)` },
  'w-5': { width: `calc(${twVars['--spacing']} * 20)` },
  'w-6': { width: `calc(${twVars['--spacing']} * 24)` },
  'w-8': { width: `calc(${twVars['--spacing']} * 32)` },
  'w-10': { width: `calc(${twVars['--spacing']} * 40)` },
  'w-12': { width: `calc(${twVars['--spacing']} * 48)` },
  'w-16': { width: `calc(${twVars['--spacing']} * 64)` },
  'w-20': { width: `calc(${twVars['--spacing']} * 80)` },
  'w-24': { width: `calc(${twVars['--spacing']} * 96)` },
  'w-32': { width: `calc(${twVars['--spacing']} * 128)` },
  'w-40': { width: `calc(${twVars['--spacing']} * 160)` },
  'w-48': { width: `calc(${twVars['--spacing']} * 192)` },
  'w-56': { width: `calc(${twVars['--spacing']} * 224)` },
  'w-64': { width: `calc(${twVars['--spacing']} * 256)` },
  'w-px': { width: 1 },
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

  /* Size styles - Height */
  'h-0': { height: 0 },
  'h-1': { height: `calc(${twVars['--spacing']} * 4)` },
  'h-2': { height: `calc(${twVars['--spacing']} * 8)` },
  'h-3': { height: `calc(${twVars['--spacing']} * 12)` },
  'h-4': { height: `calc(${twVars['--spacing']} * 16)` },
  'h-5': { height: `calc(${twVars['--spacing']} * 20)` },
  'h-6': { height: `calc(${twVars['--spacing']} * 24)` },
  'h-8': { height: `calc(${twVars['--spacing']} * 32)` },
  'h-10': { height: `calc(${twVars['--spacing']} * 40)` },
  'h-12': { height: `calc(${twVars['--spacing']} * 48)` },
  'h-16': { height: `calc(${twVars['--spacing']} * 64)` },
  'h-20': { height: `calc(${twVars['--spacing']} * 80)` },
  'h-24': { height: `calc(${twVars['--spacing']} * 96)` },
  'h-32': { height: `calc(${twVars['--spacing']} * 128)` },
  'h-40': { height: `calc(${twVars['--spacing']} * 160)` },
  'h-48': { height: `calc(${twVars['--spacing']} * 192)` },
  'h-56': { height: `calc(${twVars['--spacing']} * 224)` },
  'h-64': { height: `calc(${twVars['--spacing']} * 256)` },
  'h-px': { height: 1 },
  'h-auto': { height: 'auto' },
  'h-full': { height: '100%' },
  'h-screen': { height: '100vh' },

  /* Size styles - Min width and min height */
  'min-w-0': { minWidth: 0 },
  'min-w-full': { minWidth: '100%' },
  'min-h-0': { minHeight: 0 },
  'min-h-full': { minHeight: '100%' },
  'min-h-screen': { minHeight: '100vh' },


  /* Size styles - Max width and max height */
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


  /* Color styles - Background colors */
  'bg-transparent': { backgroundColor: twVars['--color-transparent'] },
  'bg-black': { backgroundColor: twVars['--color-black'] },
  'bg-white': { backgroundColor: twVars['--color-white'] },

  // Gray
  'bg-gray-50': { backgroundColor: twVars['--color-gray-50'] },
  'bg-gray-100': { backgroundColor: twVars['--color-gray-100'] },
  'bg-gray-200': { backgroundColor: twVars['--color-gray-200'] },
  'bg-gray-300': { backgroundColor: twVars['--color-gray-300'] },
  'bg-gray-400': { backgroundColor: twVars['--color-gray-400'] },
  'bg-gray-500': { backgroundColor: twVars['--color-gray-500'] },
  'bg-gray-600': { backgroundColor: twVars['--color-gray-600'] },
  'bg-gray-700': { backgroundColor: twVars['--color-gray-700'] },
  'bg-gray-800': { backgroundColor: twVars['--color-gray-800'] },
  'bg-gray-900': { backgroundColor: twVars['--color-gray-900'] },
  'bg-gray-950': { backgroundColor: twVars['--color-gray-950'] },

  // Red
  'bg-red-50': { backgroundColor: twVars['--color-red-50'] },
  'bg-red-100': { backgroundColor: twVars['--color-red-100'] },
  'bg-red-200': { backgroundColor: twVars['--color-red-200'] },
  'bg-red-300': { backgroundColor: twVars['--color-red-300'] },
  'bg-red-400': { backgroundColor: twVars['--color-red-400'] },
  'bg-red-500': { backgroundColor: twVars['--color-red-500'] },
  'bg-red-600': { backgroundColor: twVars['--color-red-600'] },
  'bg-red-700': { backgroundColor: twVars['--color-red-700'] },
  'bg-red-800': { backgroundColor: twVars['--color-red-800'] },
  'bg-red-900': { backgroundColor: twVars['--color-red-900'] },
  'bg-red-950': { backgroundColor: twVars['--color-red-950'] },

  // Blue
  'bg-blue-50': { backgroundColor: twVars['--color-blue-50'] },
  'bg-blue-100': { backgroundColor: twVars['--color-blue-100'] },
  'bg-blue-200': { backgroundColor: twVars['--color-blue-200'] },
  'bg-blue-300': { backgroundColor: twVars['--color-blue-300'] },
  'bg-blue-400': { backgroundColor: twVars['--color-blue-400'] },
  'bg-blue-500': { backgroundColor: twVars['--color-blue-500'] },
  'bg-blue-600': { backgroundColor: twVars['--color-blue-600'] },
  'bg-blue-700': { backgroundColor: twVars['--color-blue-700'] },
  'bg-blue-800': { backgroundColor: twVars['--color-blue-800'] },
  'bg-blue-900': { backgroundColor: twVars['--color-blue-900'] },
  'bg-blue-950': { backgroundColor: twVars['--color-blue-950'] },

  // Green
  'bg-green-50': { backgroundColor: twVars['--color-green-50'] },
  'bg-green-100': { backgroundColor: twVars['--color-green-100'] },
  'bg-green-200': { backgroundColor: twVars['--color-green-200'] },
  'bg-green-300': { backgroundColor: twVars['--color-green-300'] },
  'bg-green-400': { backgroundColor: twVars['--color-green-400'] },
  'bg-green-500': { backgroundColor: twVars['--color-green-500'] },
  'bg-green-600': { backgroundColor: twVars['--color-green-600'] },
  'bg-green-700': { backgroundColor: twVars['--color-green-700'] },
  'bg-green-800': { backgroundColor: twVars['--color-green-800'] },
  'bg-green-900': { backgroundColor: twVars['--color-green-900'] },
  'bg-green-950': { backgroundColor: twVars['--color-green-950'] },


  /* Color styles - Text colors */
  'text-transparent': { color: twVars['--color-transparent'] },
  'text-black': { color: twVars['--color-black'] },
  'text-white': { color: twVars['--color-white'] },

  // Gray
  'text-gray-50': { color: twVars['--color-gray-50'] },
  'text-gray-100': { color: twVars['--color-gray-100'] },
  'text-gray-200': { color: twVars['--color-gray-200'] },
  'text-gray-300': { color: twVars['--color-gray-300'] },
  'text-gray-400': { color: twVars['--color-gray-400'] },
  'text-gray-500': { color: twVars['--color-gray-500'] },
  'text-gray-600': { color: twVars['--color-gray-600'] },
  'text-gray-700': { color: twVars['--color-gray-700'] },
  'text-gray-800': { color: twVars['--color-gray-800'] },
  'text-gray-900': { color: twVars['--color-gray-900'] },
  'text-gray-950': { color: twVars['--color-gray-950'] },

  // Red
  'text-red-50': { color: twVars['--color-red-50'] },
  'text-red-100': { color: twVars['--color-red-100'] },
  'text-red-200': { color: twVars['--color-red-200'] },
  'text-red-300': { color: twVars['--color-red-300'] },
  'text-red-400': { color: twVars['--color-red-400'] },
  'text-red-500': { color: twVars['--color-red-500'] },
  'text-red-600': { color: twVars['--color-red-600'] },
  'text-red-700': { color: twVars['--color-red-700'] },
  'text-red-800': { color: twVars['--color-red-800'] },
  'text-red-900': { color: twVars['--color-red-900'] },
  'text-red-950': { color: twVars['--color-red-950'] },

  // Blue
  'text-blue-50': { color: twVars['--color-blue-50'] },
  'text-blue-100': { color: twVars['--color-blue-100'] },
  'text-blue-200': { color: twVars['--color-blue-200'] },
  'text-blue-300': { color: twVars['--color-blue-300'] },
  'text-blue-400': { color: twVars['--color-blue-400'] },
  'text-blue-500': { color: twVars['--color-blue-500'] },
  'text-blue-600': { color: twVars['--color-blue-600'] },
  'text-blue-700': { color: twVars['--color-blue-700'] },
  'text-blue-800': { color: twVars['--color-blue-800'] },
  'text-blue-900': { color: twVars['--color-blue-900'] },
  'text-blue-950': { color: twVars['--color-blue-950'] },

  // Green
  'text-green-50': { color: twVars['--color-green-50'] },
  'text-green-100': { color: twVars['--color-green-100'] },
  'text-green-200': { color: twVars['--color-green-200'] },
  'text-green-300': { color: twVars['--color-green-300'] },
  'text-green-400': { color: twVars['--color-green-400'] },
  'text-green-500': { color: twVars['--color-green-500'] },
  'text-green-600': { color: twVars['--color-green-600'] },
  'text-green-700': { color: twVars['--color-green-700'] },
  'text-green-800': { color: twVars['--color-green-800'] },
  'text-green-900': { color: twVars['--color-green-900'] },
  'text-green-950': { color: twVars['--color-green-950'] },


  /* Font styles - Font size */
  'text-xs': { fontSize: twVars['--font-size-xs'] },
  'text-sm': { fontSize: twVars['--font-size-sm'] },
  'text-base': { fontSize: twVars['--font-size-base'] },
  'text-lg': { fontSize: twVars['--font-size-lg'] },
  'text-xl': { fontSize: twVars['--font-size-xl'] },
  'text-2xl': { fontSize: twVars['--font-size-2xl'] },
  'text-3xl': { fontSize: twVars['--font-size-3xl'] },
  'text-4xl': { fontSize: twVars['--font-size-4xl'] },
  'text-5xl': { fontSize: twVars['--font-size-5xl'] },
  'text-6xl': { fontSize: twVars['--font-size-6xl'] },
  'text-7xl': { fontSize: twVars['--font-size-7xl'] },
  'text-8xl': { fontSize: twVars['--font-size-8xl'] },
  'text-9xl': { fontSize: twVars['--font-size-9xl'] },


  /* Font styles - Font weight */
  'font-thin': { fontWeight: twVars['--font-weight-thin'] },
  'font-extralight': { fontWeight: twVars['--font-weight-extralight'] },
  'font-light': { fontWeight: twVars['--font-weight-light'] },
  'font-normal': { fontWeight: twVars['--font-weight-normal'] },
  'font-medium': { fontWeight: twVars['--font-weight-medium'] },
  'font-semibold': { fontWeight: twVars['--font-weight-semibold'] },
  'font-bold': { fontWeight: twVars['--font-weight-bold'] },
  'font-extrabold': { fontWeight: twVars['--font-weight-extrabold'] },
  'font-black': { fontWeight: twVars['--font-weight-black'] },


  /* Font styles - Text alignment */
  'text-left': { textAlign: 'left' },
  'text-center': { textAlign: 'center' },
  'text-right': { textAlign: 'right' },
  'text-justify': { textAlign: 'justify' },


  /* Font styles - Line height */
  'leading-none': { lineHeight: twVars['--line-height-none'] },
  'leading-tight': { lineHeight: twVars['--line-height-tight'] },
  'leading-snug': { lineHeight: twVars['--line-height-snug'] },
  'leading-normal': { lineHeight: twVars['--line-height-normal'] },
  'leading-relaxed': { lineHeight: twVars['--line-height-relaxed'] },
  'leading-loose': { lineHeight: twVars['--line-height-loose'] },
  'leading-3': { lineHeight: twVars['--line-height-3'] },
  'leading-4': { lineHeight: twVars['--line-height-4'] },
  'leading-5': { lineHeight: twVars['--line-height-5'] },
  'leading-6': { lineHeight: twVars['--line-height-6'] },
  'leading-7': { lineHeight: twVars['--line-height-7'] },
  'leading-8': { lineHeight: twVars['--line-height-8'] },
  'leading-9': { lineHeight: twVars['--line-height-9'] },
  'leading-10': { lineHeight: twVars['--line-height-10'] },


  /* Font styles - Letter spacing */
  'tracking-tighter': { letterSpacing: twVars['--letter-spacing-tighter'] },
  'tracking-tight': { letterSpacing: twVars['--letter-spacing-tight'] },
  'tracking-normal': { letterSpacing: twVars['--letter-spacing-normal'] },
  'tracking-wide': { letterSpacing: twVars['--letter-spacing-wide'] },
  'tracking-wider': { letterSpacing: twVars['--letter-spacing-wider'] },
  'tracking-widest': { letterSpacing: twVars['--letter-spacing-widest'] },


  /* Border styles - Border width */
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

  /* Border styles - Border color */
  'border-transparent': { borderColor: twVars['--color-transparent'] },
  'border-black': { borderColor: twVars['--color-black'] },
  'border-white': { borderColor: twVars['--color-white'] },

  // Gray
  'border-gray-50': { borderColor: twVars['--color-gray-50'] },
  'border-gray-100': { borderColor: twVars['--color-gray-100'] },
  'border-gray-200': { borderColor: twVars['--color-gray-200'] },
  'border-gray-300': { borderColor: twVars['--color-gray-300'] },
  'border-gray-400': { borderColor: twVars['--color-gray-400'] },
  'border-gray-500': { borderColor: twVars['--color-gray-500'] },
  'border-gray-600': { borderColor: twVars['--color-gray-600'] },
  'border-gray-700': { borderColor: twVars['--color-gray-700'] },
  'border-gray-800': { borderColor: twVars['--color-gray-800'] },
  'border-gray-900': { borderColor: twVars['--color-gray-900'] },
  'border-gray-950': { borderColor: twVars['--color-gray-950'] },

  // Red
  'border-red-50': { borderColor: twVars['--color-red-50'] },
  'border-red-100': { borderColor: twVars['--color-red-100'] },
  'border-red-200': { borderColor: twVars['--color-red-200'] },
  'border-red-300': { borderColor: twVars['--color-red-300'] },
  'border-red-400': { borderColor: twVars['--color-red-400'] },
  'border-red-500': { borderColor: twVars['--color-red-500'] },
  'border-red-600': { borderColor: twVars['--color-red-600'] },
  'border-red-700': { borderColor: twVars['--color-red-700'] },
  'border-red-800': { borderColor: twVars['--color-red-800'] },
  'border-red-900': { borderColor: twVars['--color-red-900'] },
  'border-red-950': { borderColor: twVars['--color-red-950'] },

  // Blue
  'border-blue-50': { borderColor: twVars['--color-blue-50'] },
  'border-blue-100': { borderColor: twVars['--color-blue-100'] },
  'border-blue-200': { borderColor: twVars['--color-blue-200'] },
  'border-blue-300': { borderColor: twVars['--color-blue-300'] },
  'border-blue-400': { borderColor: twVars['--color-blue-400'] },
  'border-blue-500': { borderColor: twVars['--color-blue-500'] },
  'border-blue-600': { borderColor: twVars['--color-blue-600'] },
  'border-blue-700': { borderColor: twVars['--color-blue-700'] },
  'border-blue-800': { borderColor: twVars['--color-blue-800'] },
  'border-blue-900': { borderColor: twVars['--color-blue-900'] },
  'border-blue-950': { borderColor: twVars['--color-blue-950'] },

  // Green
  'border-green-50': { borderColor: twVars['--color-green-50'] },
  'border-green-100': { borderColor: twVars['--color-green-100'] },
  'border-green-200': { borderColor: twVars['--color-green-200'] },
  'border-green-300': { borderColor: twVars['--color-green-300'] },
  'border-green-400': { borderColor: twVars['--color-green-400'] },
  'border-green-500': { borderColor: twVars['--color-green-500'] },
  'border-green-600': { borderColor: twVars['--color-green-600'] },
  'border-green-700': { borderColor: twVars['--color-green-700'] },
  'border-green-800': { borderColor: twVars['--color-green-800'] },
  'border-green-900': { borderColor: twVars['--color-green-900'] },
  'border-green-950': { borderColor: twVars['--color-green-950'] },

  /* Border styles - Border radius */
  'rounded-none': { borderRadius: twVars['--border-radius-none'] },
  'rounded-sm': { borderRadius: twVars['--border-radius-sm'] },
  'rounded': { borderRadius: twVars['--border-radius-default'] },
  'rounded-md': { borderRadius: twVars['--border-radius-md'] },
  'rounded-lg': { borderRadius: twVars['--border-radius-lg'] },
  'rounded-xl': { borderRadius: twVars['--border-radius-xl'] },
  'rounded-2xl': { borderRadius: twVars['--border-radius-2xl'] },
  'rounded-3xl': { borderRadius: twVars['--border-radius-3xl'] },
  'rounded-full': { borderRadius: twVars['--border-radius-full'] },

  'rounded-t-none': { borderTopLeftRadius: twVars['--border-radius-none'], borderTopRightRadius: twVars['--border-radius-none'] },
  'rounded-r-none': { borderTopRightRadius: twVars['--border-radius-none'], borderBottomRightRadius: twVars['--border-radius-none'] },
  'rounded-b-none': { borderBottomLeftRadius: twVars['--border-radius-none'], borderBottomRightRadius: twVars['--border-radius-none'] },
  'rounded-l-none': { borderTopLeftRadius: twVars['--border-radius-none'], borderBottomLeftRadius: twVars['--border-radius-none'] },

  'rounded-t-sm': { borderTopLeftRadius: twVars['--border-radius-sm'], borderTopRightRadius: twVars['--border-radius-sm'] },
  'rounded-r-sm': { borderTopRightRadius: twVars['--border-radius-sm'], borderBottomRightRadius: twVars['--border-radius-sm'] },
  'rounded-b-sm': { borderBottomLeftRadius: twVars['--border-radius-sm'], borderBottomRightRadius: twVars['--border-radius-sm'] },
  'rounded-l-sm': { borderTopLeftRadius: twVars['--border-radius-sm'], borderBottomLeftRadius: twVars['--border-radius-sm'] },

  'rounded-t': { borderTopLeftRadius: twVars['--border-radius-default'], borderTopRightRadius: twVars['--border-radius-default'] },
  'rounded-r': { borderTopRightRadius: twVars['--border-radius-default'], borderBottomRightRadius: twVars['--border-radius-default'] },
  'rounded-b': { borderBottomLeftRadius: twVars['--border-radius-default'], borderBottomRightRadius: twVars['--border-radius-default'] },
  'rounded-l': { borderTopLeftRadius: twVars['--border-radius-default'], borderBottomLeftRadius: twVars['--border-radius-default'] },

  'rounded-t-md': { borderTopLeftRadius: twVars['--border-radius-md'], borderTopRightRadius: twVars['--border-radius-md'] },
  'rounded-r-md': { borderTopRightRadius: twVars['--border-radius-md'], borderBottomRightRadius: twVars['--border-radius-md'] },
  'rounded-b-md': { borderBottomLeftRadius: twVars['--border-radius-md'], borderBottomRightRadius: twVars['--border-radius-md'] },
  'rounded-l-md': { borderTopLeftRadius: twVars['--border-radius-md'], borderBottomLeftRadius: twVars['--border-radius-md'] },

  'rounded-t-lg': { borderTopLeftRadius: twVars['--border-radius-lg'], borderTopRightRadius: twVars['--border-radius-lg'] },
  'rounded-r-lg': { borderTopRightRadius: twVars['--border-radius-lg'], borderBottomRightRadius: twVars['--border-radius-lg'] },
  'rounded-b-lg': { borderBottomLeftRadius: twVars['--border-radius-lg'], borderBottomRightRadius: twVars['--border-radius-lg'] },
  'rounded-l-lg': { borderTopLeftRadius: twVars['--border-radius-lg'], borderBottomLeftRadius: twVars['--border-radius-lg'] },

  'rounded-t-xl': { borderTopLeftRadius: twVars['--border-radius-xl'], borderTopRightRadius: twVars['--border-radius-xl'] },
  'rounded-r-xl': { borderTopRightRadius: twVars['--border-radius-xl'], borderBottomRightRadius: twVars['--border-radius-xl'] },
  'rounded-b-xl': { borderBottomLeftRadius: twVars['--border-radius-xl'], borderBottomRightRadius: twVars['--border-radius-xl'] },
  'rounded-l-xl': { borderTopLeftRadius: twVars['--border-radius-xl'], borderBottomLeftRadius: twVars['--border-radius-xl'] },

  'rounded-t-2xl': { borderTopLeftRadius: twVars['--border-radius-2xl'], borderTopRightRadius: twVars['--border-radius-2xl'] },
  'rounded-r-2xl': { borderTopRightRadius: twVars['--border-radius-2xl'], borderBottomRightRadius: twVars['--border-radius-2xl'] },
  'rounded-b-2xl': { borderBottomLeftRadius: twVars['--border-radius-2xl'], borderBottomRightRadius: twVars['--border-radius-2xl'] },
  'rounded-l-2xl': { borderTopLeftRadius: twVars['--border-radius-2xl'], borderBottomLeftRadius: twVars['--border-radius-2xl'] },

  'rounded-t-3xl': { borderTopLeftRadius: twVars['--border-radius-3xl'], borderTopRightRadius: twVars['--border-radius-3xl'] },
  'rounded-r-3xl': { borderTopRightRadius: twVars['--border-radius-3xl'], borderBottomRightRadius: twVars['--border-radius-3xl'] },
  'rounded-b-3xl': { borderBottomLeftRadius: twVars['--border-radius-3xl'], borderBottomRightRadius: twVars['--border-radius-3xl'] },
  'rounded-l-3xl': { borderTopLeftRadius: twVars['--border-radius-3xl'], borderBottomLeftRadius: twVars['--border-radius-3xl'] },

  'rounded-t-full': { borderTopLeftRadius: twVars['--border-radius-full'], borderTopRightRadius: twVars['--border-radius-full'] },
  'rounded-r-full': { borderTopRightRadius: twVars['--border-radius-full'], borderBottomRightRadius: twVars['--border-radius-full'] },
  'rounded-b-full': { borderBottomLeftRadius: twVars['--border-radius-full'], borderBottomRightRadius: twVars['--border-radius-full'] },
  'rounded-l-full': { borderTopLeftRadius: twVars['--border-radius-full'], borderBottomLeftRadius: twVars['--border-radius-full'] },


  /* Pseudo-class styles - Hover */

  'hover:bg-transparent': {
    backgroundColor: {
      ':hover': twVars['--color-transparent']
    }
  },
  'hover:bg-black': {
    backgroundColor: {
      ':hover': twVars['--color-black']
    }
  },
  'hover:bg-white': {
    backgroundColor: {
      ':hover': twVars['--color-white']
    }
  },

  // Gray
  'hover:bg-gray-50': {
    backgroundColor: {
      ':hover': twVars['--color-gray-50']
    }
  },
  'hover:bg-gray-100': {
    backgroundColor: {
      ':hover': twVars['--color-gray-100']
    }
  },
  'hover:bg-gray-200': {
    backgroundColor: {
      ':hover': twVars['--color-gray-200']
    }
  },
  'hover:bg-gray-300': {
    backgroundColor: {
      ':hover': twVars['--color-gray-300']
    }
  },
  'hover:bg-gray-400': {
    backgroundColor: {
      ':hover': twVars['--color-gray-400']
    }
  },
  'hover:bg-gray-500': {
    backgroundColor: {
      ':hover': twVars['--color-gray-500']
    }
  },
  'hover:bg-gray-600': {
    backgroundColor: {
      ':hover': twVars['--color-gray-600']
    }
  },
  'hover:bg-gray-700': {
    backgroundColor: {
      ':hover': twVars['--color-gray-700']
    }
  },
  'hover:bg-gray-800': {
    backgroundColor: {
      ':hover': twVars['--color-gray-800']
    }
  },
  'hover:bg-gray-900': {
    backgroundColor: {
      ':hover': twVars['--color-gray-900']
    }
  },
  'hover:bg-gray-950': {
    backgroundColor: {
      ':hover': twVars['--color-gray-950']
    }
  },

  // Red
  'hover:bg-red-500': {
    backgroundColor: {
      ':hover': twVars['--color-red-500']
    }
  },
  'hover:bg-red-600': {
    backgroundColor: {
      ':hover': twVars['--color-red-600']
    }
  },
  'hover:bg-red-700': {
    backgroundColor: {
      ':hover': twVars['--color-red-700']
    }
  },

  // Blue
  'hover:bg-blue-500': {
    backgroundColor: {
      ':hover': twVars['--color-blue-500']
    }
  },
  'hover:bg-blue-600': {
    backgroundColor: {
      ':hover': twVars['--color-blue-600']
    }
  },
  'hover:bg-blue-700': {
    backgroundColor: {
      ':hover': twVars['--color-blue-700']
    }
  },

  // Green
  'hover:bg-green-500': {
    backgroundColor: {
      ':hover': twVars['--color-green-500']
    }
  },
  'hover:bg-green-600': {
    backgroundColor: {
      ':hover': twVars['--color-green-600']
    }
  },
  'hover:bg-green-700': {
    backgroundColor: {
      ':hover': twVars['--color-green-700']
    }
  },


  /* Pseudo-class styles - Focus */
  'focus:bg-transparent': {
    backgroundColor: {
      ':focus': twVars['--color-transparent']
    }
  },
  'focus:bg-black': {
    backgroundColor: {
      ':focus': twVars['--color-black']
    }
  },
  'focus:bg-white': {
    backgroundColor: {
      ':focus': twVars['--color-white']
    }
  },

  // Gray
  'focus:bg-gray-50': {
    backgroundColor: {
      ':focus': twVars['--color-gray-50']
    }
  },
  'focus:bg-gray-100': {
    backgroundColor: {
      ':focus': twVars['--color-gray-100']
    }
  },
  'focus:bg-gray-200': {
    backgroundColor: {
      ':focus': twVars['--color-gray-200']
    }
  },
  'focus:bg-gray-300': {
    backgroundColor: {
      ':focus': twVars['--color-gray-300']
    }
  },
  'focus:bg-gray-400': {
    backgroundColor: {
      ':focus': twVars['--color-gray-400']
    }
  },
  'focus:bg-gray-500': {
    backgroundColor: {
      ':focus': twVars['--color-gray-500']
    }
  },
  'focus:bg-gray-600': {
    backgroundColor: {
      ':focus': twVars['--color-gray-600']
    }
  },
  'focus:bg-gray-700': {
    backgroundColor: {
      ':focus': twVars['--color-gray-700']
    }
  },
  'focus:bg-gray-800': {
    backgroundColor: {
      ':focus': twVars['--color-gray-800']
    }
  },
  'focus:bg-gray-900': {
    backgroundColor: {
      ':focus': twVars['--color-gray-900']
    }
  },
  'focus:bg-gray-950': {
    backgroundColor: {
      ':focus': twVars['--color-gray-950']
    }
  },

  // Red
  'focus:bg-red-500': {
    backgroundColor: {
      ':focus': twVars['--color-red-500']
    }
  },
  'focus:bg-red-600': {
    backgroundColor: {
      ':focus': twVars['--color-red-600']
    }
  },
  'focus:bg-red-700': {
    backgroundColor: {
      ':focus': twVars['--color-red-700']
    }
  },

  // Blue
  'focus:bg-blue-500': {
    backgroundColor: {
      ':focus': twVars['--color-blue-500']
    }
  },
  'focus:bg-blue-600': {
    backgroundColor: {
      ':focus': twVars['--color-blue-600']
    }
  },
  'focus:bg-blue-700': {
    backgroundColor: {
      ':focus': twVars['--color-blue-700']
    }
  },

  // Green
  'focus:bg-green-500': {
    backgroundColor: {
      ':focus': twVars['--color-green-500']
    }
  },
  'focus:bg-green-600': {
    backgroundColor: {
      ':focus': twVars['--color-green-600']
    }
  },
  'focus:bg-green-700': {
    backgroundColor: {
      ':focus': twVars['--color-green-700']
    }
  },


  /* Pseudo-class styles - Others */
  'focus:outline-none': {
    outline: {
      ':focus': 'none'
    }
  },

  /* Active state styles */
  'active:bg-gray-100': {
    backgroundColor: {
      ':active': twVars['--color-gray-100']
    }
  },
  'active:bg-gray-200': {
    backgroundColor: {
      ':active': twVars['--color-gray-200']
    }
  },
  'active:bg-gray-300': {
    backgroundColor: {
      ':active': twVars['--color-gray-300']
    }
  },
  'active:bg-blue-500': {
    backgroundColor: {
      ':active': twVars['--color-blue-500']
    }
  },
  'active:bg-blue-600': {
    backgroundColor: {
      ':active': twVars['--color-blue-600']
    }
  },
  'active:bg-blue-700': {
    backgroundColor: {
      ':active': twVars['--color-blue-700']
    }
  },
  'active:bg-red-500': {
    backgroundColor: {
      ':active': twVars['--color-red-500']
    }
  },
  'active:bg-red-600': {
    backgroundColor: {
      ':active': twVars['--color-red-600']
    }
  },
  'active:bg-red-700': {
    backgroundColor: {
      ':active': twVars['--color-red-700']
    }
  },
  'active:bg-green-500': {
    backgroundColor: {
      ':active': twVars['--color-green-500']
    }
  },
  'active:bg-green-600': {
    backgroundColor: {
      ':active': twVars['--color-green-600']
    }
  },
  'active:bg-green-700': {
    backgroundColor: {
      ':active': twVars['--color-green-700']
    }
  },

  /* Disabled state styles */
  'disabled:opacity-50': {
    opacity: {
      ':disabled': 0.5
    }
  },
  'disabled:cursor-not-allowed': {
    cursor: {
      ':disabled': 'not-allowed'
    }
  },
  'disabled:bg-gray-200': {
    backgroundColor: {
      ':disabled': twVars['--color-gray-200']
    }
  },
  'disabled:text-gray-500': {
    color: {
      ':disabled': twVars['--color-gray-500']
    }
  },

  /* Shadow styles */
  'shadow-sm': { boxShadow: twVars['--shadow-sm'] },
  'shadow': { boxShadow: twVars['--shadow-default'] },
  'shadow-md': { boxShadow: twVars['--shadow-md'] },
  'shadow-lg': { boxShadow: twVars['--shadow-lg'] },
  'shadow-xl': { boxShadow: twVars['--shadow-xl'] },
  'shadow-2xl': { boxShadow: twVars['--shadow-2xl'] },
  'shadow-inner': { boxShadow: twVars['--shadow-inner'] },
  'shadow-none': { boxShadow: twVars['--shadow-none'] },

  /* Opacity styles */
  'opacity-0': { opacity: 0 },
  'opacity-5': { opacity: 0.05 },
  'opacity-10': { opacity: 0.1 },
  'opacity-20': { opacity: 0.2 },
  'opacity-25': { opacity: 0.25 },
  'opacity-30': { opacity: 0.3 },
  'opacity-40': { opacity: 0.4 },
  'opacity-50': { opacity: 0.5 },
  'opacity-60': { opacity: 0.6 },
  'opacity-70': { opacity: 0.7 },
  'opacity-75': { opacity: 0.75 },
  'opacity-80': { opacity: 0.8 },
  'opacity-90': { opacity: 0.9 },
  'opacity-95': { opacity: 0.95 },
  'opacity-100': { opacity: 1 },

  /* Resize styles */
  'resize-none': { resize: 'none' },
  'resize': { resize: 'both' },
  'resize-y': { resize: 'vertical' },
  'resize-x': { resize: 'horizontal' },

  /* Position styles */
  'static': { position: 'static' },
  'fixed': { position: 'fixed' },
  'absolute': { position: 'absolute' },
  'relative': { position: 'relative' },
  'sticky': { position: 'sticky' },

  /* Positioning - Inset */
  'inset-0': { top: 0, right: 0, bottom: 0, left: 0 },
  'inset-y-0': { top: 0, bottom: 0 },
  'inset-x-0': { right: 0, left: 0 },
  'top-0': { top: 0 },
  'right-0': { right: 0 },
  'bottom-0': { bottom: 0 },
  'left-0': { left: 0 },
  'inset-1': { top: 4, right: 4, bottom: 4, left: 4 },
  'inset-y-1': { top: 4, bottom: 4 },
  'inset-x-1': { right: 4, left: 4 },
  'top-1': { top: 4 },
  'right-1': { right: 4 },
  'bottom-1': { bottom: 4 },
  'left-1': { left: 4 },
  'inset-2': { top: 8, right: 8, bottom: 8, left: 8 },
  'inset-y-2': { top: 8, bottom: 8 },
  'inset-x-2': { right: 8, left: 8 },
  'top-2': { top: 8 },
  'right-2': { right: 8 },
  'bottom-2': { bottom: 8 },
  'left-2': { left: 8 },
  'inset-3': { top: 12, right: 12, bottom: 12, left: 12 },
  'inset-y-3': { top: 12, bottom: 12 },
  'inset-x-3': { right: 12, left: 12 },
  'top-3': { top: 12 },
  'right-3': { right: 12 },
  'bottom-3': { bottom: 12 },
  'left-3': { left: 12 },
  'inset-4': { top: 16, right: 16, bottom: 16, left: 16 },
  'inset-y-4': { top: 16, bottom: 16 },
  'inset-x-4': { right: 16, left: 16 },
  'top-4': { top: 16 },
  'right-4': { right: 16 },
  'bottom-4': { bottom: 16 },
  'left-4': { left: 16 },
  'inset-auto': { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' },
  'inset-y-auto': { top: 'auto', bottom: 'auto' },
  'inset-x-auto': { right: 'auto', left: 'auto' },
  'top-auto': { top: 'auto' },
  'right-auto': { right: 'auto' },
  'bottom-auto': { bottom: 'auto' },
  'left-auto': { left: 'auto' },

  /* Visibility styles */
  'visible': { visibility: 'visible' },
  'invisible': { visibility: 'hidden' },
  'collapse': { visibility: 'collapse' },

  /* Overflow styles */
  'overflow-auto': { overflow: 'auto' },
  'overflow-hidden': { overflow: 'hidden' },
  'overflow-clip': { overflow: 'clip' },
  'overflow-visible': { overflow: 'visible' },
  'overflow-scroll': { overflow: 'scroll' },
  'overflow-x-auto': { overflowX: 'auto' },
  'overflow-y-auto': { overflowY: 'auto' },
  'overflow-x-hidden': { overflowX: 'hidden' },
  'overflow-y-hidden': { overflowY: 'hidden' },
  'overflow-x-clip': { overflowX: 'clip' },
  'overflow-y-clip': { overflowY: 'clip' },
  'overflow-x-visible': { overflowX: 'visible' },
  'overflow-y-visible': { overflowY: 'visible' },
  'overflow-x-scroll': { overflowX: 'scroll' },
  'overflow-y-scroll': { overflowY: 'scroll' },

  /* Z-Index styles */
  'z-0': { zIndex: 0 },
  'z-10': { zIndex: 10 },
  'z-20': { zIndex: 20 },
  'z-30': { zIndex: 30 },
  'z-40': { zIndex: 40 },
  'z-50': { zIndex: 50 },
  'z-auto': { zIndex: 'auto' },

  /* Cursor styles */
  'cursor-auto': { cursor: 'auto' },
  'cursor-default': { cursor: 'default' },
  'cursor-pointer': { cursor: 'pointer' },
  'cursor-wait': { cursor: 'wait' },
  'cursor-text': { cursor: 'text' },
  'cursor-move': { cursor: 'move' },
  'cursor-help': { cursor: 'help' },
  'cursor-not-allowed': { cursor: 'not-allowed' },

  /* Pointer Events styles */
  'pointer-events-none': { pointerEvents: 'none' },
  'pointer-events-auto': { pointerEvents: 'auto' },

  /* Text Decoration styles */
  'underline': { textDecoration: 'underline' },
  'line-through': { textDecoration: 'line-through' },
  'no-underline': { textDecoration: 'none' },

  /* Text Transform styles */
  'uppercase': { textTransform: 'uppercase' },
  'lowercase': { textTransform: 'lowercase' },
  'capitalize': { textTransform: 'capitalize' },
  'normal-case': { textTransform: 'none' },

  /* Border Style */
  'border-solid': { borderStyle: 'solid' },
  'border-dashed': { borderStyle: 'dashed' },
  'border-dotted': { borderStyle: 'dotted' },
  'border-double': { borderStyle: 'double' },
  'border-none': { borderStyle: 'none' },

  /* Mix Blend Mode */
  'mix-blend-normal': { mixBlendMode: 'normal' },
  'mix-blend-multiply': { mixBlendMode: 'multiply' },
  'mix-blend-screen': { mixBlendMode: 'screen' },
  'mix-blend-overlay': { mixBlendMode: 'overlay' },
  'mix-blend-darken': { mixBlendMode: 'darken' },
  'mix-blend-lighten': { mixBlendMode: 'lighten' },
  'mix-blend-color-dodge': { mixBlendMode: 'color-dodge' },
  'mix-blend-color-burn': { mixBlendMode: 'color-burn' },
  'mix-blend-hard-light': { mixBlendMode: 'hard-light' },
  'mix-blend-soft-light': { mixBlendMode: 'soft-light' },
  'mix-blend-difference': { mixBlendMode: 'difference' },
  'mix-blend-exclusion': { mixBlendMode: 'exclusion' },
  'mix-blend-hue': { mixBlendMode: 'hue' },
  'mix-blend-saturation': { mixBlendMode: 'saturation' },
  'mix-blend-color': { mixBlendMode: 'color' },
  'mix-blend-luminosity': { mixBlendMode: 'luminosity' },

  /* Outline styles */
  'outline-none': { outline: '2px solid transparent', outlineOffset: '2px' },
  'outline-white': { outline: '2px dotted white', outlineOffset: '2px' },
  'outline-black': { outline: '2px dotted black', outlineOffset: '2px' },
});
