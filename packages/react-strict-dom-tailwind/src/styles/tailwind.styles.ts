/**
 * Tailwind Style Definitions
 *
 * Uses StyleX's css.create to define all styles at the top level
 */

// Import the css object from react-strict-dom
import { css } from 'react-strict-dom';
import { tailwindVariables } from '../variables.stylex';
import { StyleObject } from '../types';


export const tailwindStyles: StyleObject = css.create({
  // Display
  'block': { display: 'block' },
  'inline-block': { display: 'inline-block' },
  'inline': { display: 'inline' },
  'flex': { display: 'flex' },
  'inline-flex': { display: 'inline-flex' },
  'grid': { display: 'grid' },
  'inline-grid': { display: 'inline-grid' },
  'hidden': { display: 'none' },
  'table': { display: 'table' },
  'inline-table': { display: 'inline-table' },
  'table-caption': { display: 'table-caption' },
  'table-cell': { display: 'table-cell' },
  'table-column': { display: 'table-column' },
  'table-column-group': { display: 'table-column-group' },
  'table-footer-group': { display: 'table-footer-group' },
  'table-header-group': { display: 'table-header-group' },
  'table-row-group': { display: 'table-row-group' },
  'table-row': { display: 'table-row' },
  'flow-root': { display: 'flow-root' },
  'contents': { display: 'contents' },
  'list-item': { display: 'list-item' },

  // Position
  'static': { position: 'static' },
  'fixed': { position: 'fixed' },
  'absolute': { position: 'absolute' },
  'relative': { position: 'relative' },
  'sticky': { position: 'sticky' },

  // Isolation
  'isolate': { isolation: 'isolate' },
  'isolation-auto': { isolation: 'auto' },

  // Top/Right/Bottom/Left (Inset)
  'inset-0': { top: 0, right: 0, bottom: 0, left: 0 },
  'inset-y-0': { top: 0, bottom: 0 },
  'inset-x-0': { right: 0, left: 0 },
  'top-0': { top: 0 },
  'right-0': { right: 0 },
  'bottom-0': { bottom: 0 },
  'left-0': { left: 0 },
  'inset-1': { top: '0.25rem', right: '0.25rem', bottom: '0.25rem', left: '0.25rem' },
  'inset-y-1': { top: '0.25rem', bottom: '0.25rem' },
  'inset-x-1': { right: '0.25rem', left: '0.25rem' },
  'top-1': { top: '0.25rem' },
  'right-1': { right: '0.25rem' },
  'bottom-1': { bottom: '0.25rem' },
  'left-1': { left: '0.25rem' },
  'inset-2': { top: '0.5rem', right: '0.5rem', bottom: '0.5rem', left: '0.5rem' },
  'inset-y-2': { top: '0.5rem', bottom: '0.5rem' },
  'inset-x-2': { right: '0.5rem', left: '0.5rem' },
  'top-2': { top: '0.5rem' },
  'right-2': { right: '0.5rem' },
  'bottom-2': { bottom: '0.5rem' },
  'left-2': { left: '0.5rem' },
  'inset-3': { top: '0.75rem', right: '0.75rem', bottom: '0.75rem', left: '0.75rem' },
  'inset-y-3': { top: '0.75rem', bottom: '0.75rem' },
  'inset-x-3': { right: '0.75rem', left: '0.75rem' },
  'top-3': { top: '0.75rem' },
  'right-3': { right: '0.75rem' },
  'bottom-3': { bottom: '0.75rem' },
  'left-3': { left: '0.75rem' },
  'inset-4': { top: '1rem', right: '1rem', bottom: '1rem', left: '1rem' },
  'inset-y-4': { top: '1rem', bottom: '1rem' },
  'inset-x-4': { right: '1rem', left: '1rem' },
  'top-4': { top: '1rem' },
  'right-4': { right: '1rem' },
  'bottom-4': { bottom: '1rem' },
  'left-4': { left: '1rem' },
  'inset-auto': { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' },
  'inset-y-auto': { top: 'auto', bottom: 'auto' },
  'inset-x-auto': { right: 'auto', left: 'auto' },
  'top-auto': { top: 'auto' },
  'right-auto': { right: 'auto' },
  'bottom-auto': { bottom: 'auto' },
  'left-auto': { left: 'auto' },

  // Visibility
  'visible': { visibility: 'visible' },
  'invisible': { visibility: 'hidden' },
  'collapse': { visibility: 'collapse' },

  // Overflow
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

  // Z-Index
  'z-0': { zIndex: 0 },
  'z-10': { zIndex: 10 },
  'z-20': { zIndex: 20 },
  'z-30': { zIndex: 30 },
  'z-40': { zIndex: 40 },
  'z-50': { zIndex: 50 },
  'z-auto': { zIndex: 'auto' },

  // Aspect Ratio
  'aspect-auto': { aspectRatio: 'auto' },
  'aspect-square': { aspectRatio: '1 / 1' },
  'aspect-video': { aspectRatio: '16 / 9' },

  // Box Sizing
  'box-border': { boxSizing: 'border-box' },
  'box-content': { boxSizing: 'content-box' },

  /* Flexbox & Grid */
  // Flex Direction
  'flex-row': { flexDirection: 'row' },
  'flex-col': { flexDirection: 'column' },
  'flex-row-reverse': { flexDirection: 'row-reverse' },
  'flex-col-reverse': { flexDirection: 'column-reverse' },

  // Flex Wrap
  'flex-wrap': { flexWrap: 'wrap' },
  'flex-nowrap': { flexWrap: 'nowrap' },
  'flex-wrap-reverse': { flexWrap: 'wrap-reverse' },

  // Flex Properties
  'flex-1': { flexGrow: 1, flexShrink: 1, flexBasis: 0  },
  'flex-auto': { flexGrow: 1, flexShrink: 1, flexBasis: 'auto'  },
  'flex-initial': { flexGrow: 0, flexShrink: 1, flexBasis: 'auto'   },
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
  'gap-1': { gap: '0.25rem' },
  'gap-2': { gap: '0.5rem' },
  'gap-3': { gap: '0.75rem' },
  'gap-4': { gap: '1rem' },
  'gap-5': { gap: '1.25rem' },
  'gap-6': { gap: '1.5rem' },
  'gap-8': { gap: '2rem' },
  'gap-10': { gap: '2.5rem' },
  'gap-12': { gap: '3rem' },
  'gap-16': { gap: '4rem' },
  'gap-20': { gap: '5rem' },
  'gap-24': { gap: '6rem' },
  'gap-32': { gap: '8rem' },
  'gap-40': { gap: '10rem' },
  'gap-48': { gap: '12rem' },
  'gap-56': { gap: '14rem' },
  'gap-64': { gap: '16rem' },
  'gap-px': { gap: '1px' },

  // Justify Content
  'justify-start': { justifyContent: 'flex-start' },
  'justify-center': { justifyContent: 'center' },
  'justify-end': { justifyContent: 'flex-end' },
  'justify-between': { justifyContent: 'space-between' },
  'justify-around': { justifyContent: 'space-around' },
  'justify-evenly': { justifyContent: 'space-evenly' },

  // Align Items
  'items-start': { alignItems: 'flex-start' },
  'items-center': { alignItems: 'center' },
  'items-end': { alignItems: 'flex-end' },
  'items-stretch': { alignItems: 'stretch' },
  'items-baseline': { alignItems: 'baseline' },


  /* Spacing */
  // All directions
  'p-0': { padding: 0 },
  'p-1': { padding: '0.25rem' },
  'p-2': { padding: '0.5rem' },
  'p-3': { padding: '0.75rem' },
  'p-4': { padding: '1rem' },
  'p-5': { padding: '1.25rem' },
  'p-6': { padding: '1.5rem' },
  'p-8': { padding: '2rem' },
  'p-10': { padding: '2.5rem' },
  'p-12': { padding: '3rem' },
  'p-16': { padding: '4rem' },
  'p-20': { padding: '5rem' },
  'p-24': { padding: '6rem' },
  'p-32': { padding: '8rem' },
  'p-40': { padding: '10rem' },
  'p-48': { padding: '12rem' },
  'p-56': { padding: '14rem' },
  'p-64': { padding: '16rem' },
  'p-px': { padding: '1px' },

  // Horizontal direction
  'px-0': { paddingLeft: 0, paddingRight: 0 },
  'px-1': { paddingLeft: '0.25rem', paddingRight: '0.25rem' },
  'px-2': { paddingLeft: '0.5rem', paddingRight: '0.5rem' },
  'px-3': { paddingLeft: '0.75rem', paddingRight: '0.75rem' },
  'px-4': { paddingLeft: '1rem', paddingRight: '1rem' },
  'px-5': { paddingLeft: '1.25rem', paddingRight: '1.25rem' },
  'px-6': { paddingLeft: '1.5rem', paddingRight: '1.5rem' },
  'px-8': { paddingLeft: '2rem', paddingRight: '2rem' },
  'px-10': { paddingLeft: '2.5rem', paddingRight: '2.5rem' },
  'px-12': { paddingLeft: '3rem', paddingRight: '3rem' },
  'px-16': { paddingLeft: '4rem', paddingRight: '4rem' },
  'px-20': { paddingLeft: '5rem', paddingRight: '5rem' },
  'px-24': { paddingLeft: '6rem', paddingRight: '6rem' },
  'px-32': { paddingLeft: '8rem', paddingRight: '8rem' },
  'px-40': { paddingLeft: '10rem', paddingRight: '10rem' },
  'px-48': { paddingLeft: '12rem', paddingRight: '12rem' },
  'px-56': { paddingLeft: '14rem', paddingRight: '14rem' },
  'px-64': { paddingLeft: '16rem', paddingRight: '16rem' },
  'px-px': { paddingLeft: '1px', paddingRight: '1px' },

  // Vertical direction
  'py-0': { paddingTop: 0, paddingBottom: 0 },
  'py-1': { paddingTop: '0.25rem', paddingBottom: '0.25rem' },
  'py-2': { paddingTop: '0.5rem', paddingBottom: '0.5rem' },
  'py-3': { paddingTop: '0.75rem', paddingBottom: '0.75rem' },
  'py-4': { paddingTop: '1rem', paddingBottom: '1rem' },
  'py-5': { paddingTop: '1.25rem', paddingBottom: '1.25rem' },
  'py-6': { paddingTop: '1.5rem', paddingBottom: '1.5rem' },
  'py-8': { paddingTop: '2rem', paddingBottom: '2rem' },
  'py-10': { paddingTop: '2.5rem', paddingBottom: '2.5rem' },
  'py-12': { paddingTop: '3rem', paddingBottom: '3rem' },
  'py-16': { paddingTop: '4rem', paddingBottom: '4rem' },
  'py-20': { paddingTop: '5rem', paddingBottom: '5rem' },
  'py-24': { paddingTop: '6rem', paddingBottom: '6rem' },
  'py-32': { paddingTop: '8rem', paddingBottom: '8rem' },
  'py-40': { paddingTop: '10rem', paddingBottom: '10rem' },
  'py-48': { paddingTop: '12rem', paddingBottom: '12rem' },
  'py-56': { paddingTop: '14rem', paddingBottom: '14rem' },
  'py-64': { paddingTop: '16rem', paddingBottom: '16rem' },
  'py-px': { paddingTop: '1px', paddingBottom: '1px' },

  // Individual directions
  'pt-0': { paddingTop: 0 },
  'pt-1': { paddingTop: '0.25rem' },
  'pt-2': { paddingTop: '0.5rem' },
  'pt-3': { paddingTop: '0.75rem' },
  'pt-4': { paddingTop: '1rem' },
  'pt-5': { paddingTop: '1.25rem' },
  'pt-6': { paddingTop: '1.5rem' },
  'pt-8': { paddingTop: '2rem' },
  'pt-10': { paddingTop: '2.5rem' },
  'pt-12': { paddingTop: '3rem' },
  'pt-16': { paddingTop: '4rem' },
  'pt-20': { paddingTop: '5rem' },
  'pt-24': { paddingTop: '6rem' },
  'pt-px': { paddingTop: '1px' },

  'pr-0': { paddingRight: 0 },
  'pr-1': { paddingRight: '0.25rem' },
  'pr-2': { paddingRight: '0.5rem' },
  'pr-3': { paddingRight: '0.75rem' },
  'pr-4': { paddingRight: '1rem' },
  'pr-5': { paddingRight: '1.25rem' },
  'pr-6': { paddingRight: '1.5rem' },
  'pr-8': { paddingRight: '2rem' },
  'pr-10': { paddingRight: '2.5rem' },
  'pr-12': { paddingRight: '3rem' },
  'pr-16': { paddingRight: '4rem' },
  'pr-20': { paddingRight: '5rem' },
  'pr-24': { paddingRight: '6rem' },
  'pr-px': { paddingRight: '1px' },

  'pb-0': { paddingBottom: 0 },
  'pb-1': { paddingBottom: '0.25rem' },
  'pb-2': { paddingBottom: '0.5rem' },
  'pb-3': { paddingBottom: '0.75rem' },
  'pb-4': { paddingBottom: '1rem' },
  'pb-5': { paddingBottom: '1.25rem' },
  'pb-6': { paddingBottom: '1.5rem' },
  'pb-8': { paddingBottom: '2rem' },
  'pb-10': { paddingBottom: '2.5rem' },
  'pb-12': { paddingBottom: '3rem' },
  'pb-16': { paddingBottom: '4rem' },
  'pb-20': { paddingBottom: '5rem' },
  'pb-24': { paddingBottom: '6rem' },
  'pb-px': { paddingBottom: '1px' },

  'pl-0': { paddingLeft: 0 },
  'pl-1': { paddingLeft: '0.25rem' },
  'pl-2': { paddingLeft: '0.5rem' },
  'pl-3': { paddingLeft: '0.75rem' },
  'pl-4': { paddingLeft: '1rem' },
  'pl-5': { paddingLeft: '1.25rem' },
  'pl-6': { paddingLeft: '1.5rem' },
  'pl-8': { paddingLeft: '2rem' },
  'pl-10': { paddingLeft: '2.5rem' },
  'pl-12': { paddingLeft: '3rem' },
  'pl-16': { paddingLeft: '4rem' },
  'pl-20': { paddingLeft: '5rem' },
  'pl-24': { paddingLeft: '6rem' },
  'pl-px': { paddingLeft: '1px' },


  // Margin
  // All directions
  'm-0': { margin: 0 },
  'm-1': { margin: '0.25rem' },
  'm-2': { margin: '0.5rem' },
  'm-3': { margin: '0.75rem' },
  'm-4': { margin: '1rem' },
  'm-5': { margin: '1.25rem' },
  'm-6': { margin: '1.5rem' },
  'm-8': { margin: '2rem' },
  'm-10': { margin: '2.5rem' },
  'm-12': { margin: '3rem' },
  'm-16': { margin: '4rem' },
  'm-20': { margin: '5rem' },
  'm-24': { margin: '6rem' },
  'm-32': { margin: '8rem' },
  'm-40': { margin: '10rem' },
  'm-48': { margin: '12rem' },
  'm-56': { margin: '14rem' },
  'm-64': { margin: '16rem' },
  'm-auto': { margin: 'auto' },
  'm-px': { margin: '1px' },

  // Negative margins
  '-m-1': { margin: '-0.25rem' },
  '-m-2': { margin: '-0.5rem' },
  '-m-3': { margin: '-0.75rem' },
  '-m-4': { margin: '-1rem' },
  '-m-5': { margin: '-1.25rem' },
  '-m-6': { margin: '-1.5rem' },
  '-m-8': { margin: '-2rem' },
  '-m-10': { margin: '-2.5rem' },
  '-m-12': { margin: '-3rem' },
  '-m-16': { margin: '-4rem' },
  '-m-20': { margin: '-5rem' },
  '-m-24': { margin: '-6rem' },
  '-m-32': { margin: '-8rem' },
  '-m-40': { margin: '-10rem' },
  '-m-48': { margin: '-12rem' },
  '-m-56': { margin: '-14rem' },
  '-m-64': { margin: '-16rem' },
  '-m-px': { margin: '-1px' },

  // Horizontal direction
  'mx-0': { marginLeft: 0, marginRight: 0 },
  'mx-1': { marginLeft: '0.25rem', marginRight: '0.25rem' },
  'mx-2': { marginLeft: '0.5rem', marginRight: '0.5rem' },
  'mx-3': { marginLeft: '0.75rem', marginRight: '0.75rem' },
  'mx-4': { marginLeft: '1rem', marginRight: '1rem' },
  'mx-5': { marginLeft: '1.25rem', marginRight: '1.25rem' },
  'mx-6': { marginLeft: '1.5rem', marginRight: '1.5rem' },
  'mx-8': { marginLeft: '2rem', marginRight: '2rem' },
  'mx-10': { marginLeft: '2.5rem', marginRight: '2.5rem' },
  'mx-12': { marginLeft: '3rem', marginRight: '3rem' },
  'mx-16': { marginLeft: '4rem', marginRight: '4rem' },
  'mx-20': { marginLeft: '5rem', marginRight: '5rem' },
  'mx-24': { marginLeft: '6rem', marginRight: '6rem' },
  'mx-32': { marginLeft: '8rem', marginRight: '8rem' },
  'mx-40': { marginLeft: '10rem', marginRight: '10rem' },
  'mx-48': { marginLeft: '12rem', marginRight: '12rem' },
  'mx-56': { marginLeft: '14rem', marginRight: '14rem' },
  'mx-64': { marginLeft: '16rem', marginRight: '16rem' },
  'mx-px': { marginLeft: '1px', marginRight: '1px' },
  'mx-auto': { marginLeft: 'auto', marginRight: 'auto' },

  // Negative horizontal margins
  '-mx-1': { marginLeft: '-0.25rem', marginRight: '-0.25rem' },
  '-mx-2': { marginLeft: '-0.5rem', marginRight: '-0.5rem' },
  '-mx-3': { marginLeft: '-0.75rem', marginRight: '-0.75rem' },
  '-mx-4': { marginLeft: '-1rem', marginRight: '-1rem' },
  '-mx-5': { marginLeft: '-1.25rem', marginRight: '-1.25rem' },
  '-mx-6': { marginLeft: '-1.5rem', marginRight: '-1.5rem' },
  '-mx-8': { marginLeft: '-2rem', marginRight: '-2rem' },
  '-mx-10': { marginLeft: '-2.5rem', marginRight: '-2.5rem' },
  '-mx-12': { marginLeft: '-3rem', marginRight: '-3rem' },
  '-mx-16': { marginLeft: '-4rem', marginRight: '-4rem' },
  '-mx-20': { marginLeft: '-5rem', marginRight: '-5rem' },
  '-mx-24': { marginLeft: '-6rem', marginRight: '-6rem' },
  '-mx-32': { marginLeft: '-8rem', marginRight: '-8rem' },
  '-mx-40': { marginLeft: '-10rem', marginRight: '-10rem' },
  '-mx-48': { marginLeft: '-12rem', marginRight: '-12rem' },
  '-mx-56': { marginLeft: '-14rem', marginRight: '-14rem' },
  '-mx-64': { marginLeft: '-16rem', marginRight: '-16rem' },
  '-mx-px': { marginLeft: '-1px', marginRight: '-1px' },

  // Vertical direction
  'my-0': { marginTop: 0, marginBottom: 0 },
  'my-1': { marginTop: '0.25rem', marginBottom: '0.25rem' },
  'my-2': { marginTop: '0.5rem', marginBottom: '0.5rem' },
  'my-3': { marginTop: '0.75rem', marginBottom: '0.75rem' },
  'my-4': { marginTop: '1rem', marginBottom: '1rem' },
  'my-5': { marginTop: '1.25rem', marginBottom: '1.25rem' },
  'my-6': { marginTop: '1.5rem', marginBottom: '1.5rem' },
  'my-8': { marginTop: '2rem', marginBottom: '2rem' },
  'my-10': { marginTop: '2.5rem', marginBottom: '2.5rem' },
  'my-12': { marginTop: '3rem', marginBottom: '3rem' },
  'my-16': { marginTop: '4rem', marginBottom: '4rem' },
  'my-20': { marginTop: '5rem', marginBottom: '5rem' },
  'my-24': { marginTop: '6rem', marginBottom: '6rem' },
  'my-32': { marginTop: '8rem', marginBottom: '8rem' },
  'my-40': { marginTop: '10rem', marginBottom: '10rem' },
  'my-48': { marginTop: '12rem', marginBottom: '12rem' },
  'my-56': { marginTop: '14rem', marginBottom: '14rem' },
  'my-64': { marginTop: '16rem', marginBottom: '16rem' },
  'my-px': { marginTop: '1px', marginBottom: '1px' },
  'my-auto': { marginTop: 'auto', marginBottom: 'auto' },

  // Negative vertical margins
  '-my-1': { marginTop: '-0.25rem', marginBottom: '-0.25rem' },
  '-my-2': { marginTop: '-0.5rem', marginBottom: '-0.5rem' },
  '-my-3': { marginTop: '-0.75rem', marginBottom: '-0.75rem' },
  '-my-4': { marginTop: '-1rem', marginBottom: '-1rem' },
  '-my-5': { marginTop: '-1.25rem', marginBottom: '-1.25rem' },
  '-my-6': { marginTop: '-1.5rem', marginBottom: '-1.5rem' },
  '-my-8': { marginTop: '-2rem', marginBottom: '-2rem' },
  '-my-10': { marginTop: '-2.5rem', marginBottom: '-2.5rem' },
  '-my-12': { marginTop: '-3rem', marginBottom: '-3rem' },
  '-my-16': { marginTop: '-4rem', marginBottom: '-4rem' },
  '-my-20': { marginTop: '-5rem', marginBottom: '-5rem' },
  '-my-24': { marginTop: '-6rem', marginBottom: '-6rem' },
  '-my-32': { marginTop: '-8rem', marginBottom: '-8rem' },
  '-my-40': { marginTop: '-10rem', marginBottom: '-10rem' },
  '-my-48': { marginTop: '-12rem', marginBottom: '-12rem' },
  '-my-56': { marginTop: '-14rem', marginBottom: '-14rem' },
  '-my-64': { marginTop: '-16rem', marginBottom: '-16rem' },
  '-my-px': { marginTop: '-1px', marginBottom: '-1px' },

  // Individual directions
  'mt-0': { marginTop: 0 },
  'mt-1': { marginTop: '0.25rem' },
  'mt-2': { marginTop: '0.5rem' },
  'mt-3': { marginTop: '0.75rem' },
  'mt-4': { marginTop: '1rem' },
  'mt-5': { marginTop: '1.25rem' },
  'mt-6': { marginTop: '1.5rem' },
  'mt-8': { marginTop: '2rem' },
  'mt-10': { marginTop: '2.5rem' },
  'mt-12': { marginTop: '3rem' },
  'mt-16': { marginTop: '4rem' },
  'mt-20': { marginTop: '5rem' },
  'mt-24': { marginTop: '6rem' },
  'mt-px': { marginTop: '1px' },
  'mt-auto': { marginTop: 'auto' },

  'mr-0': { marginRight: 0 },
  'mr-1': { marginRight: '0.25rem' },
  'mr-2': { marginRight: '0.5rem' },
  'mr-3': { marginRight: '0.75rem' },
  'mr-4': { marginRight: '1rem' },
  'mr-5': { marginRight: '1.25rem' },
  'mr-6': { marginRight: '1.5rem' },
  'mr-8': { marginRight: '2rem' },
  'mr-10': { marginRight: '2.5rem' },
  'mr-12': { marginRight: '3rem' },
  'mr-16': { marginRight: '4rem' },
  'mr-20': { marginRight: '5rem' },
  'mr-24': { marginRight: '6rem' },
  'mr-px': { marginRight: '1px' },
  'mr-auto': { marginRight: 'auto' },

  'mb-0': { marginBottom: 0 },
  'mb-1': { marginBottom: '0.25rem' },
  'mb-2': { marginBottom: '0.5rem' },
  'mb-3': { marginBottom: '0.75rem' },
  'mb-4': { marginBottom: '1rem' },
  'mb-5': { marginBottom: '1.25rem' },
  'mb-6': { marginBottom: '1.5rem' },
  'mb-8': { marginBottom: '2rem' },
  'mb-10': { marginBottom: '2.5rem' },
  'mb-12': { marginBottom: '3rem' },
  'mb-16': { marginBottom: '4rem' },
  'mb-20': { marginBottom: '5rem' },
  'mb-24': { marginBottom: '6rem' },
  'mb-px': { marginBottom: '1px' },
  'mb-auto': { marginBottom: 'auto' },

  'ml-0': { marginLeft: 0 },
  'ml-1': { marginLeft: '0.25rem' },
  'ml-2': { marginLeft: '0.5rem' },
  'ml-3': { marginLeft: '0.75rem' },
  'ml-4': { marginLeft: '1rem' },
  'ml-5': { marginLeft: '1.25rem' },
  'ml-6': { marginLeft: '1.5rem' },
  'ml-8': { marginLeft: '2rem' },
  'ml-10': { marginLeft: '2.5rem' },
  'ml-12': { marginLeft: '3rem' },
  'ml-16': { marginLeft: '4rem' },
  'ml-20': { marginLeft: '5rem' },
  'ml-24': { marginLeft: '6rem' },
  'ml-px': { marginLeft: '1px' },
  'ml-auto': { marginLeft: 'auto' },

  /* Sizing */
  // Width
  'w-0': { width: 0 },
  'w-1': { width: '0.25rem' },
  'w-2': { width: '0.5rem' },
  'w-3': { width: '0.75rem' },
  'w-4': { width: '1rem' },
  'w-5': { width: '1.25rem' },
  'w-6': { width: '1.5rem' },
  'w-8': { width: '2rem' },
  'w-10': { width: '2.5rem' },
  'w-12': { width: '3rem' },
  'w-16': { width: '4rem' },
  'w-20': { width: '5rem' },
  'w-24': { width: '6rem' },
  'w-32': { width: '8rem' },
  'w-40': { width: '10rem' },
  'w-48': { width: '12rem' },
  'w-56': { width: '14rem' },
  'w-64': { width: '16rem' },
  'w-px': { width: '1px' },
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
  'w-1/6': { width: '16.666667%' },
  'w-2/6': { width: '33.333333%' },
  'w-3/6': { width: '50%' },
  'w-4/6': { width: '66.666667%' },
  'w-5/6': { width: '83.333333%' },
  'w-1/12': { width: '8.333333%' },
  'w-2/12': { width: '16.666667%' },
  'w-3/12': { width: '25%' },
  'w-4/12': { width: '33.333333%' },
  'w-5/12': { width: '41.666667%' },
  'w-6/12': { width: '50%' },
  'w-7/12': { width: '58.333333%' },
  'w-8/12': { width: '66.666667%' },
  'w-9/12': { width: '75%' },
  'w-10/12': { width: '83.333333%' },
  'w-11/12': { width: '91.666667%' },
  'w-min': { width: 'min-content' },
  'w-max': { width: 'max-content' },
  'w-fit': { width: 'fit-content' },

  // Height
  'h-0': { height: 0 },
  'h-1': { height: '0.25rem' },
  'h-2': { height: '0.5rem' },
  'h-3': { height: '0.75rem' },
  'h-4': { height: '1rem' },
  'h-5': { height: '1.25rem' },
  'h-6': { height: '1.5rem' },
  'h-8': { height: '2rem' },
  'h-10': { height: '2.5rem' },
  'h-12': { height: '3rem' },
  'h-16': { height: '4rem' },
  'h-20': { height: '5rem' },
  'h-24': { height: '6rem' },
  'h-32': { height: '8rem' },
  'h-40': { height: '10rem' },
  'h-48': { height: '12rem' },
  'h-56': { height: '14rem' },
  'h-64': { height: '16rem' },
  'h-px': { height: '1px' },
  'h-auto': { height: 'auto' },
  'h-full': { height: '100%' },
  'h-screen': { height: '100vh' },
  'h-min': { height: 'min-content' },
  'h-max': { height: 'max-content' },
  'h-fit': { height: 'fit-content' },

  // Min Width and Min Height
  'min-w-0': { minWidth: 0 },
  'min-w-full': { minWidth: '100%' },
  'min-w-min': { minWidth: 'min-content' },
  'min-w-max': { minWidth: 'max-content' },
  'min-w-fit': { minWidth: 'fit-content' },
  'min-h-0': { minHeight: 0 },
  'min-h-full': { minHeight: '100%' },
  'min-h-screen': { minHeight: '100vh' },
  'min-h-min': { minHeight: 'min-content' },
  'min-h-max': { minHeight: 'max-content' },
  'min-h-fit': { minHeight: 'fit-content' },


  // Max Width and Max Height
  'max-w-none': { maxWidth: 'none' },
  'max-w-xs': { maxWidth: '20rem' },
  'max-w-sm': { maxWidth: '24rem' },
  'max-w-md': { maxWidth: '28rem' },
  'max-w-lg': { maxWidth: '32rem' },
  'max-w-xl': { maxWidth: '36rem' },
  'max-w-2xl': { maxWidth: '42rem' },
  'max-w-3xl': { maxWidth: '48rem' },
  'max-w-4xl': { maxWidth: '56rem' },
  'max-w-5xl': { maxWidth: '64rem' },
  'max-w-6xl': { maxWidth: '72rem' },
  'max-w-7xl': { maxWidth: '80rem' },
  'max-w-full': { maxWidth: '100%' },
  'max-w-min': { maxWidth: 'min-content' },
  'max-w-max': { maxWidth: 'max-content' },
  'max-w-fit': { maxWidth: 'fit-content' },
  'max-w-prose': { maxWidth: '65ch' },
  'max-w-screen-sm': { maxWidth: 640 },
  'max-w-screen-md': { maxWidth: 768 },
  'max-w-screen-lg': { maxWidth: 1024 },
  'max-w-screen-xl': { maxWidth: 1280 },
  'max-w-screen-2xl': { maxWidth: 1536 },

  'max-h-0': { maxHeight: 0 },
  'max-h-1': { maxHeight: '0.25rem' },
  'max-h-2': { maxHeight: '0.5rem' },
  'max-h-3': { maxHeight: '0.75rem' },
  'max-h-4': { maxHeight: '1rem' },
  'max-h-5': { maxHeight: '1.25rem' },
  'max-h-6': { maxHeight: '1.5rem' },
  'max-h-8': { maxHeight: '2rem' },
  'max-h-10': { maxHeight: '2.5rem' },
  'max-h-12': { maxHeight: '3rem' },
  'max-h-16': { maxHeight: '4rem' },
  'max-h-20': { maxHeight: '5rem' },
  'max-h-24': { maxHeight: '6rem' },
  'max-h-32': { maxHeight: '8rem' },
  'max-h-40': { maxHeight: '10rem' },
  'max-h-48': { maxHeight: '12rem' },
  'max-h-56': { maxHeight: '14rem' },
  'max-h-64': { maxHeight: '16rem' },
  'max-h-px': { maxHeight: '1px' },
  'max-h-full': { maxHeight: '100%' },
  'max-h-screen': { maxHeight: '100vh' },
  'max-h-min': { maxHeight: 'min-content' },
  'max-h-max': { maxHeight: 'max-content' },
  'max-h-fit': { maxHeight: 'fit-content' },


  /* Backgrounds */
  // Background Color
  'bg-transparent': { backgroundColor: tailwindVariables.colorTransparent },
  'bg-black': { backgroundColor: tailwindVariables.colorBlack },
  'bg-white': { backgroundColor: tailwindVariables.colorWhite },

  // Gray
  'bg-gray-50': { backgroundColor: tailwindVariables.colorGray50 },
  'bg-gray-100': { backgroundColor: tailwindVariables.colorGray100 },
  'bg-gray-200': { backgroundColor: tailwindVariables.colorGray200 },
  'bg-gray-300': { backgroundColor: tailwindVariables.colorGray300 },
  'bg-gray-400': { backgroundColor: tailwindVariables.colorGray400 },
  'bg-gray-500': { backgroundColor: tailwindVariables.colorGray500 },
  'bg-gray-600': { backgroundColor: tailwindVariables.colorGray600 },
  'bg-gray-700': { backgroundColor: tailwindVariables.colorGray700 },
  'bg-gray-800': { backgroundColor: tailwindVariables.colorGray800 },
  'bg-gray-900': { backgroundColor: tailwindVariables.colorGray900 },
  'bg-gray-950': { backgroundColor: tailwindVariables.colorGray950 },

  // Red
  'bg-red-50': { backgroundColor: tailwindVariables.colorRed50 },
  'bg-red-100': { backgroundColor: tailwindVariables.colorRed100 },
  'bg-red-200': { backgroundColor: tailwindVariables.colorRed200 },
  'bg-red-300': { backgroundColor: tailwindVariables.colorRed300 },
  'bg-red-400': { backgroundColor: tailwindVariables.colorRed400 },
  'bg-red-500': { backgroundColor: tailwindVariables.colorRed500 },
  'bg-red-600': { backgroundColor: tailwindVariables.colorRed600 },
  'bg-red-700': { backgroundColor: tailwindVariables.colorRed700 },
  'bg-red-800': { backgroundColor: tailwindVariables.colorRed800 },
  'bg-red-900': { backgroundColor: tailwindVariables.colorRed900 },
  'bg-red-950': { backgroundColor: tailwindVariables.colorRed950 },

  // Blue
  'bg-blue-50': { backgroundColor: tailwindVariables.colorBlue50 },
  'bg-blue-100': { backgroundColor: tailwindVariables.colorBlue100 },
  'bg-blue-200': { backgroundColor: tailwindVariables.colorBlue200 },
  'bg-blue-300': { backgroundColor: tailwindVariables.colorBlue300 },
  'bg-blue-400': { backgroundColor: tailwindVariables.colorBlue400 },
  'bg-blue-500': { backgroundColor: tailwindVariables.colorBlue500 },
  'bg-blue-600': { backgroundColor: tailwindVariables.colorBlue600 },
  'bg-blue-700': { backgroundColor: tailwindVariables.colorBlue700 },
  'bg-blue-800': { backgroundColor: tailwindVariables.colorBlue800 },
  'bg-blue-900': { backgroundColor: tailwindVariables.colorBlue900 },
  'bg-blue-950': { backgroundColor: tailwindVariables.colorBlue950 },

  // Green
  'bg-green-50': { backgroundColor: tailwindVariables.colorGreen50 },
  'bg-green-100': { backgroundColor: tailwindVariables.colorGreen100 },
  'bg-green-200': { backgroundColor: tailwindVariables.colorGreen200 },
  'bg-green-300': { backgroundColor: tailwindVariables.colorGreen300 },
  'bg-green-400': { backgroundColor: tailwindVariables.colorGreen400 },
  'bg-green-500': { backgroundColor: tailwindVariables.colorGreen500 },
  'bg-green-600': { backgroundColor: tailwindVariables.colorGreen600 },
  'bg-green-700': { backgroundColor: tailwindVariables.colorGreen700 },
  'bg-green-800': { backgroundColor: tailwindVariables.colorGreen800 },
  'bg-green-900': { backgroundColor: tailwindVariables.colorGreen900 },
  'bg-green-950': { backgroundColor: tailwindVariables.colorGreen950 },

  // Background Attachment
  'bg-fixed': { backgroundAttachment: 'fixed' },
  'bg-local': { backgroundAttachment: 'local' },
  'bg-scroll': { backgroundAttachment: 'scroll' },

  // Background Position
  'bg-bottom': { backgroundPosition: 'bottom' },
  'bg-center': { backgroundPosition: 'center' },
  'bg-left': { backgroundPosition: 'left' },
  'bg-left-bottom': { backgroundPosition: 'left bottom' },
  'bg-left-top': { backgroundPosition: 'left top' },
  'bg-right': { backgroundPosition: 'right' },
  'bg-right-bottom': { backgroundPosition: 'right bottom' },
  'bg-right-top': { backgroundPosition: 'right top' },
  'bg-top': { backgroundPosition: 'top' },

  // Background Repeat
  'bg-repeat': { backgroundRepeat: 'repeat' },
  'bg-no-repeat': { backgroundRepeat: 'no-repeat' },
  'bg-repeat-x': { backgroundRepeat: 'repeat-x' },
  'bg-repeat-y': { backgroundRepeat: 'repeat-y' },
  'bg-repeat-round': { backgroundRepeat: 'round' },
  'bg-repeat-space': { backgroundRepeat: 'space' },

  // Background Size
  'bg-auto': { backgroundSize: 'auto' },
  'bg-cover': { backgroundSize: 'cover' },
  'bg-contain': { backgroundSize: 'contain' },

  // Background Clip
  'bg-clip-border': { backgroundClip: 'border-box' },
  'bg-clip-padding': { backgroundClip: 'padding-box' },
  'bg-clip-content': { backgroundClip: 'content-box' },
  'bg-clip-text': { backgroundClip: 'text' },

  // Background Origin
  'bg-origin-border': { backgroundOrigin: 'border-box' },
  'bg-origin-padding': { backgroundOrigin: 'padding-box' },
  'bg-origin-content': { backgroundOrigin: 'content-box' },

  // Background Blend Mode
  'bg-blend-normal': { backgroundBlendMode: 'normal' },
  'bg-blend-multiply': { backgroundBlendMode: 'multiply' },
  'bg-blend-screen': { backgroundBlendMode: 'screen' },
  'bg-blend-overlay': { backgroundBlendMode: 'overlay' },
  'bg-blend-darken': { backgroundBlendMode: 'darken' },
  'bg-blend-lighten': { backgroundBlendMode: 'lighten' },
  'bg-blend-color-dodge': { backgroundBlendMode: 'color-dodge' },
  'bg-blend-color-burn': { backgroundBlendMode: 'color-burn' },
  'bg-blend-hard-light': { backgroundBlendMode: 'hard-light' },
  'bg-blend-soft-light': { backgroundBlendMode: 'soft-light' },
  'bg-blend-difference': { backgroundBlendMode: 'difference' },
  'bg-blend-exclusion': { backgroundBlendMode: 'exclusion' },
  'bg-blend-hue': { backgroundBlendMode: 'hue' },
  'bg-blend-saturation': { backgroundBlendMode: 'saturation' },
  'bg-blend-color': { backgroundBlendMode: 'color' },
  'bg-blend-luminosity': { backgroundBlendMode: 'luminosity' },


  /* Typography */
  // Text Color
  'text-transparent': { color: tailwindVariables.colorTransparent },
  'text-black': { color: tailwindVariables.colorBlack },
  'text-white': { color: tailwindVariables.colorWhite },

  // Gray
  'text-gray-50': { color: tailwindVariables.colorGray50 },
  'text-gray-100': { color: tailwindVariables.colorGray100 },
  'text-gray-200': { color: tailwindVariables.colorGray200 },
  'text-gray-300': { color: tailwindVariables.colorGray300 },
  'text-gray-400': { color: tailwindVariables.colorGray400 },
  'text-gray-500': { color: tailwindVariables.colorGray500 },
  'text-gray-600': { color: tailwindVariables.colorGray600 },
  'text-gray-700': { color: tailwindVariables.colorGray700 },
  'text-gray-800': { color: tailwindVariables.colorGray800 },
  'text-gray-900': { color: tailwindVariables.colorGray900 },
  'text-gray-950': { color: tailwindVariables.colorGray950 },

  // Red
  'text-red-50': { color: tailwindVariables.colorRed50 },
  'text-red-100': { color: tailwindVariables.colorRed100 },
  'text-red-200': { color: tailwindVariables.colorRed200 },
  'text-red-300': { color: tailwindVariables.colorRed300 },
  'text-red-400': { color: tailwindVariables.colorRed400 },
  'text-red-500': { color: tailwindVariables.colorRed500 },
  'text-red-600': { color: tailwindVariables.colorRed600 },
  'text-red-700': { color: tailwindVariables.colorRed700 },
  'text-red-800': { color: tailwindVariables.colorRed800 },
  'text-red-900': { color: tailwindVariables.colorRed900 },
  'text-red-950': { color: tailwindVariables.colorRed950 },

  // Blue
  'text-blue-50': { color: tailwindVariables.colorBlue50 },
  'text-blue-100': { color: tailwindVariables.colorBlue100 },
  'text-blue-200': { color: tailwindVariables.colorBlue200 },
  'text-blue-300': { color: tailwindVariables.colorBlue300 },
  'text-blue-400': { color: tailwindVariables.colorBlue400 },
  'text-blue-500': { color: tailwindVariables.colorBlue500 },
  'text-blue-600': { color: tailwindVariables.colorBlue600 },
  'text-blue-700': { color: tailwindVariables.colorBlue700 },
  'text-blue-800': { color: tailwindVariables.colorBlue800 },
  'text-blue-900': { color: tailwindVariables.colorBlue900 },
  'text-blue-950': { color: tailwindVariables.colorBlue950 },

  // Green
  'text-green-50': { color: tailwindVariables.colorGreen50 },
  'text-green-100': { color: tailwindVariables.colorGreen100 },
  'text-green-200': { color: tailwindVariables.colorGreen200 },
  'text-green-300': { color: tailwindVariables.colorGreen300 },
  'text-green-400': { color: tailwindVariables.colorGreen400 },
  'text-green-500': { color: tailwindVariables.colorGreen500 },
  'text-green-600': { color: tailwindVariables.colorGreen600 },
  'text-green-700': { color: tailwindVariables.colorGreen700 },
  'text-green-800': { color: tailwindVariables.colorGreen800 },
  'text-green-900': { color: tailwindVariables.colorGreen900 },
  'text-green-950': { color: tailwindVariables.colorGreen950 },


  // Font Size
  'text-xs': { fontSize: tailwindVariables.fontSizeXs },
  'text-sm': { fontSize: tailwindVariables.fontSizeSm },
  'text-base': { fontSize: tailwindVariables.fontSizeBase },
  'text-lg': { fontSize: tailwindVariables.fontSizeLg },
  'text-xl': { fontSize: tailwindVariables.fontSizeXl },
  'text-2xl': { fontSize: tailwindVariables.fontSize2xl },
  'text-3xl': { fontSize: tailwindVariables.fontSize3xl },
  'text-4xl': { fontSize: tailwindVariables.fontSize4xl },
  'text-5xl': { fontSize: tailwindVariables.fontSize5xl },
  'text-6xl': { fontSize: tailwindVariables.fontSize6xl },
  'text-7xl': { fontSize: tailwindVariables.fontSize7xl },
  'text-8xl': { fontSize: tailwindVariables.fontSize8xl },
  'text-9xl': { fontSize: tailwindVariables.fontSize9xl },


  // Font Weight
  'font-thin': { fontWeight: tailwindVariables.fontWeightThin },
  'font-extralight': { fontWeight: tailwindVariables.fontWeightExtralight },
  'font-light': { fontWeight: tailwindVariables.fontWeightLight },
  'font-normal': { fontWeight: tailwindVariables.fontWeightNormal },
  'font-medium': { fontWeight: tailwindVariables.fontWeightMedium },
  'font-semibold': { fontWeight: tailwindVariables.fontWeightSemibold },
  'font-bold': { fontWeight: tailwindVariables.fontWeightBold },
  'font-extrabold': { fontWeight: tailwindVariables.fontWeightExtrabold },
  'font-black': { fontWeight: tailwindVariables.fontWeightBlack },


  // Text Alignment
  'text-left': { textAlign: 'left' },
  'text-center': { textAlign: 'center' },
  'text-right': { textAlign: 'right' },
  'text-justify': { textAlign: 'justify' },
  'text-start': { textAlign: 'start' },
  'text-end': { textAlign: 'end' },


  // Line Height
  'leading-none': { lineHeight: tailwindVariables.lineHeightNone },
  'leading-tight': { lineHeight: tailwindVariables.lineHeightTight },
  'leading-snug': { lineHeight: tailwindVariables.lineHeightSnug },
  'leading-normal': { lineHeight: tailwindVariables.lineHeightNormal },
  'leading-relaxed': { lineHeight: tailwindVariables.lineHeightRelaxed },
  'leading-loose': { lineHeight: tailwindVariables.lineHeightLoose },
  'leading-3': { lineHeight: tailwindVariables.lineHeight3 },
  'leading-4': { lineHeight: tailwindVariables.lineHeight4 },
  'leading-5': { lineHeight: tailwindVariables.lineHeight5 },
  'leading-6': { lineHeight: tailwindVariables.lineHeight6 },
  'leading-7': { lineHeight: tailwindVariables.lineHeight7 },
  'leading-8': { lineHeight: tailwindVariables.lineHeight8 },
  'leading-9': { lineHeight: tailwindVariables.lineHeight9 },
  'leading-10': { lineHeight: tailwindVariables.lineHeight10 },


  // Letter Spacing
  'tracking-tighter': { letterSpacing: tailwindVariables.letterSpacingTighter },
  'tracking-tight': { letterSpacing: tailwindVariables.letterSpacingTight },
  'tracking-normal': { letterSpacing: tailwindVariables.letterSpacingNormal },
  'tracking-wide': { letterSpacing: tailwindVariables.letterSpacingWide },
  'tracking-wider': { letterSpacing: tailwindVariables.letterSpacingWider },
  'tracking-widest': { letterSpacing: tailwindVariables.letterSpacingWidest },

  // Text Decoration
  'underline': { textDecoration: 'underline' },
  'line-through': { textDecoration: 'line-through' },
  'no-underline': { textDecoration: 'none' },

  // Text Transform
  'uppercase': { textTransform: 'uppercase' },
  'lowercase': { textTransform: 'lowercase' },
  'capitalize': { textTransform: 'capitalize' },
  'normal-case': { textTransform: 'none' },

  // Font Style
  'italic': { fontStyle: 'italic' },
  'not-italic': { fontStyle: 'normal' },

  // Text Overflow
  'truncate': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  'text-ellipsis': { textOverflow: 'ellipsis' },
  'text-clip': { textOverflow: 'clip' },

  // Text Wrap
  'text-wrap': { textWrap: 'wrap' },
  'text-nowrap': { textWrap: 'nowrap' },
  'text-balance': { textWrap: 'balance' },
  'text-pretty': { textWrap: 'pretty' },

  // Text Indent
  'indent-0': { textIndent: '0px' },
  'indent-1': { textIndent: '0.25rem' },
  'indent-2': { textIndent: '0.5rem' },
  'indent-3': { textIndent: '0.75rem' },
  'indent-4': { textIndent: '1rem' },
  'indent-5': { textIndent: '1.25rem' },
  'indent-6': { textIndent: '1.5rem' },
  'indent-8': { textIndent: '2rem' },
  'indent-10': { textIndent: '2.5rem' },
  'indent-12': { textIndent: '3rem' },
  'indent-16': { textIndent: '4rem' },
  'indent-20': { textIndent: '5rem' },
  'indent-24': { textIndent: '6rem' },
  'indent-28': { textIndent: '7rem' },
  'indent-32': { textIndent: '8rem' },
  'indent-36': { textIndent: '9rem' },
  'indent-40': { textIndent: '10rem' },
  'indent-44': { textIndent: '11rem' },
  'indent-48': { textIndent: '12rem' },
  'indent-52': { textIndent: '13rem' },
  'indent-56': { textIndent: '14rem' },
  'indent-60': { textIndent: '15rem' },
  'indent-64': { textIndent: '16rem' },
  'indent-72': { textIndent: '18rem' },
  'indent-80': { textIndent: '20rem' },
  'indent-96': { textIndent: '24rem' },
  'indent-px': { textIndent: '1px' },

  // Vertical Align
  'align-baseline': { verticalAlign: 'baseline' },
  'align-top': { verticalAlign: 'top' },
  'align-middle': { verticalAlign: 'middle' },
  'align-bottom': { verticalAlign: 'bottom' },
  'align-text-top': { verticalAlign: 'text-top' },
  'align-text-bottom': { verticalAlign: 'text-bottom' },
  'align-sub': { verticalAlign: 'sub' },
  'align-super': { verticalAlign: 'super' },

  // Whitespace
  'whitespace-normal': { whiteSpace: 'normal' },
  'whitespace-nowrap': { whiteSpace: 'nowrap' },
  'whitespace-pre': { whiteSpace: 'pre' },
  'whitespace-pre-line': { whiteSpace: 'pre-line' },
  'whitespace-pre-wrap': { whiteSpace: 'pre-wrap' },
  'whitespace-break-spaces': { whiteSpace: 'break-spaces' },

  // Word Break
  'break-normal': { wordBreak: 'normal', overflowWrap: 'normal' },
  'break-words': { overflowWrap: 'break-word' },
  'break-all': { wordBreak: 'break-all' },
  'break-keep': { wordBreak: 'keep-all' },

  // Hyphens
  'hyphens-none': { hyphens: 'none' },
  'hyphens-manual': { hyphens: 'manual' },
  'hyphens-auto': { hyphens: 'auto' },

  // Content
  'content-none': { content: 'none' },

  // Columns
  'columns-1': { columns: '1' },
  'columns-2': { columns: '2' },
  'columns-3': { columns: '3' },
  'columns-4': { columns: '4' },
  'columns-5': { columns: '5' },
  'columns-6': { columns: '6' },
  'columns-7': { columns: '7' },
  'columns-8': { columns: '8' },
  'columns-9': { columns: '9' },
  'columns-10': { columns: '10' },
  'columns-11': { columns: '11' },
  'columns-12': { columns: '12' },
  'columns-auto': { columns: 'auto' },
  'columns-3xs': { columns: '16rem' },
  'columns-2xs': { columns: '18rem' },
  'columns-xs': { columns: '20rem' },
  'columns-sm': { columns: '24rem' },
  'columns-md': { columns: '28rem' },
  'columns-lg': { columns: '32rem' },
  'columns-xl': { columns: '36rem' },
  'columns-2xl': { columns: '42rem' },
  'columns-3xl': { columns: '48rem' },
  'columns-4xl': { columns: '56rem' },
  'columns-5xl': { columns: '64rem' },
  'columns-6xl': { columns: '72rem' },
  'columns-7xl': { columns: '80rem' },

  // Font Smoothing
  'antialiased': {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },
  'subpixel-antialiased': {
    WebkitFontSmoothing: 'auto',
    MozOsxFontSmoothing: 'auto'
  },


  /* Borders */
  // Border Width
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

  // Border Color
  'border-transparent': { borderColor: tailwindVariables.colorTransparent },
  'border-black': { borderColor: tailwindVariables.colorBlack },
  'border-white': { borderColor: tailwindVariables.colorWhite },

  // Gray
  'border-gray-50': { borderColor: tailwindVariables.colorGray50 },
  'border-gray-100': { borderColor: tailwindVariables.colorGray100 },
  'border-gray-200': { borderColor: tailwindVariables.colorGray200 },
  'border-gray-300': { borderColor: tailwindVariables.colorGray300 },
  'border-gray-400': { borderColor: tailwindVariables.colorGray400 },
  'border-gray-500': { borderColor: tailwindVariables.colorGray500 },
  'border-gray-600': { borderColor: tailwindVariables.colorGray600 },
  'border-gray-700': { borderColor: tailwindVariables.colorGray700 },
  'border-gray-800': { borderColor: tailwindVariables.colorGray800 },
  'border-gray-900': { borderColor: tailwindVariables.colorGray900 },
  'border-gray-950': { borderColor: tailwindVariables.colorGray950 },

  // Red
  'border-red-50': { borderColor: tailwindVariables.colorRed50 },
  'border-red-100': { borderColor: tailwindVariables.colorRed100 },
  'border-red-200': { borderColor: tailwindVariables.colorRed200 },
  'border-red-300': { borderColor: tailwindVariables.colorRed300 },
  'border-red-400': { borderColor: tailwindVariables.colorRed400 },
  'border-red-500': { borderColor: tailwindVariables.colorRed500 },
  'border-red-600': { borderColor: tailwindVariables.colorRed600 },
  'border-red-700': { borderColor: tailwindVariables.colorRed700 },
  'border-red-800': { borderColor: tailwindVariables.colorRed800 },
  'border-red-900': { borderColor: tailwindVariables.colorRed900 },
  'border-red-950': { borderColor: tailwindVariables.colorRed950 },

  // Blue
  'border-blue-50': { borderColor: tailwindVariables.colorBlue50 },
  'border-blue-100': { borderColor: tailwindVariables.colorBlue100 },
  'border-blue-200': { borderColor: tailwindVariables.colorBlue200 },
  'border-blue-300': { borderColor: tailwindVariables.colorBlue300 },
  'border-blue-400': { borderColor: tailwindVariables.colorBlue400 },
  'border-blue-500': { borderColor: tailwindVariables.colorBlue500 },
  'border-blue-600': { borderColor: tailwindVariables.colorBlue600 },
  'border-blue-700': { borderColor: tailwindVariables.colorBlue700 },
  'border-blue-800': { borderColor: tailwindVariables.colorBlue800 },
  'border-blue-900': { borderColor: tailwindVariables.colorBlue900 },
  'border-blue-950': { borderColor: tailwindVariables.colorBlue950 },

  // Green
  'border-green-50': { borderColor: tailwindVariables.colorGreen50 },
  'border-green-100': { borderColor: tailwindVariables.colorGreen100 },
  'border-green-200': { borderColor: tailwindVariables.colorGreen200 },
  'border-green-300': { borderColor: tailwindVariables.colorGreen300 },
  'border-green-400': { borderColor: tailwindVariables.colorGreen400 },
  'border-green-500': { borderColor: tailwindVariables.colorGreen500 },
  'border-green-600': { borderColor: tailwindVariables.colorGreen600 },
  'border-green-700': { borderColor: tailwindVariables.colorGreen700 },
  'border-green-800': { borderColor: tailwindVariables.colorGreen800 },
  'border-green-900': { borderColor: tailwindVariables.colorGreen900 },
  'border-green-950': { borderColor: tailwindVariables.colorGreen950 },

  // Border Radius
  'rounded-none': { borderRadius: tailwindVariables.borderRadiusNone },
  'rounded-sm': { borderRadius: tailwindVariables.borderRadiusSm },
  'rounded': { borderRadius: tailwindVariables.borderRadiusDefault },
  'rounded-md': { borderRadius: tailwindVariables.borderRadiusMd },
  'rounded-lg': { borderRadius: tailwindVariables.borderRadiusLg },
  'rounded-xl': { borderRadius: tailwindVariables.borderRadiusXl },
  'rounded-2xl': { borderRadius: tailwindVariables.borderRadius2xl },
  'rounded-3xl': { borderRadius: tailwindVariables.borderRadius3xl },
  'rounded-full': { borderRadius: tailwindVariables.borderRadiusFull },

  'rounded-t-none': { borderTopLeftRadius: tailwindVariables.borderRadiusNone, borderTopRightRadius: tailwindVariables.borderRadiusNone },
  'rounded-r-none': { borderTopRightRadius: tailwindVariables.borderRadiusNone, borderBottomRightRadius: tailwindVariables.borderRadiusNone },
  'rounded-b-none': { borderBottomLeftRadius: tailwindVariables.borderRadiusNone, borderBottomRightRadius: tailwindVariables.borderRadiusNone },
  'rounded-l-none': { borderTopLeftRadius: tailwindVariables.borderRadiusNone, borderBottomLeftRadius: tailwindVariables.borderRadiusNone },

  'rounded-t-sm': { borderTopLeftRadius: tailwindVariables.borderRadiusSm, borderTopRightRadius: tailwindVariables.borderRadiusSm },
  'rounded-r-sm': { borderTopRightRadius: tailwindVariables.borderRadiusSm, borderBottomRightRadius: tailwindVariables.borderRadiusSm },
  'rounded-b-sm': { borderBottomLeftRadius: tailwindVariables.borderRadiusSm, borderBottomRightRadius: tailwindVariables.borderRadiusSm },
  'rounded-l-sm': { borderTopLeftRadius: tailwindVariables.borderRadiusSm, borderBottomLeftRadius: tailwindVariables.borderRadiusSm },

  'rounded-t': { borderTopLeftRadius: tailwindVariables.borderRadiusDefault, borderTopRightRadius: tailwindVariables.borderRadiusDefault },
  'rounded-r': { borderTopRightRadius: tailwindVariables.borderRadiusDefault, borderBottomRightRadius: tailwindVariables.borderRadiusDefault },
  'rounded-b': { borderBottomLeftRadius: tailwindVariables.borderRadiusDefault, borderBottomRightRadius: tailwindVariables.borderRadiusDefault },
  'rounded-l': { borderTopLeftRadius: tailwindVariables.borderRadiusDefault, borderBottomLeftRadius: tailwindVariables.borderRadiusDefault },

  'rounded-t-md': { borderTopLeftRadius: tailwindVariables.borderRadiusMd, borderTopRightRadius: tailwindVariables.borderRadiusMd },
  'rounded-r-md': { borderTopRightRadius: tailwindVariables.borderRadiusMd, borderBottomRightRadius: tailwindVariables.borderRadiusMd },
  'rounded-b-md': { borderBottomLeftRadius: tailwindVariables.borderRadiusMd, borderBottomRightRadius: tailwindVariables.borderRadiusMd },
  'rounded-l-md': { borderTopLeftRadius: tailwindVariables.borderRadiusMd, borderBottomLeftRadius: tailwindVariables.borderRadiusMd },

  'rounded-t-lg': { borderTopLeftRadius: tailwindVariables.borderRadiusLg, borderTopRightRadius: tailwindVariables.borderRadiusLg },
  'rounded-r-lg': { borderTopRightRadius: tailwindVariables.borderRadiusLg, borderBottomRightRadius: tailwindVariables.borderRadiusLg },
  'rounded-b-lg': { borderBottomLeftRadius: tailwindVariables.borderRadiusLg, borderBottomRightRadius: tailwindVariables.borderRadiusLg },
  'rounded-l-lg': { borderTopLeftRadius: tailwindVariables.borderRadiusLg, borderBottomLeftRadius: tailwindVariables.borderRadiusLg },

  'rounded-t-xl': { borderTopLeftRadius: tailwindVariables.borderRadiusXl, borderTopRightRadius: tailwindVariables.borderRadiusXl },
  'rounded-r-xl': { borderTopRightRadius: tailwindVariables.borderRadiusXl, borderBottomRightRadius: tailwindVariables.borderRadiusXl },
  'rounded-b-xl': { borderBottomLeftRadius: tailwindVariables.borderRadiusXl, borderBottomRightRadius: tailwindVariables.borderRadiusXl },
  'rounded-l-xl': { borderTopLeftRadius: tailwindVariables.borderRadiusXl, borderBottomLeftRadius: tailwindVariables.borderRadiusXl },

  'rounded-t-2xl': { borderTopLeftRadius: tailwindVariables.borderRadius2xl, borderTopRightRadius: tailwindVariables.borderRadius2xl },
  'rounded-r-2xl': { borderTopRightRadius: tailwindVariables.borderRadius2xl, borderBottomRightRadius: tailwindVariables.borderRadius2xl },
  'rounded-b-2xl': { borderBottomLeftRadius: tailwindVariables.borderRadius2xl, borderBottomRightRadius: tailwindVariables.borderRadius2xl },
  'rounded-l-2xl': { borderTopLeftRadius: tailwindVariables.borderRadius2xl, borderBottomLeftRadius: tailwindVariables.borderRadius2xl },

  'rounded-t-3xl': { borderTopLeftRadius: tailwindVariables.borderRadius3xl, borderTopRightRadius: tailwindVariables.borderRadius3xl },
  'rounded-r-3xl': { borderTopRightRadius: tailwindVariables.borderRadius3xl, borderBottomRightRadius: tailwindVariables.borderRadius3xl },
  'rounded-b-3xl': { borderBottomLeftRadius: tailwindVariables.borderRadius3xl, borderBottomRightRadius: tailwindVariables.borderRadius3xl },
  'rounded-l-3xl': { borderTopLeftRadius: tailwindVariables.borderRadius3xl, borderBottomLeftRadius: tailwindVariables.borderRadius3xl },

  'rounded-t-full': { borderTopLeftRadius: tailwindVariables.borderRadiusFull, borderTopRightRadius: tailwindVariables.borderRadiusFull },
  'rounded-r-full': { borderTopRightRadius: tailwindVariables.borderRadiusFull, borderBottomRightRadius: tailwindVariables.borderRadiusFull },
  'rounded-b-full': { borderBottomLeftRadius: tailwindVariables.borderRadiusFull, borderBottomRightRadius: tailwindVariables.borderRadiusFull },
  'rounded-l-full': { borderTopLeftRadius: tailwindVariables.borderRadiusFull, borderBottomLeftRadius: tailwindVariables.borderRadiusFull },

  // Border Style
  'border-solid': { borderStyle: 'solid' },
  'border-dashed': { borderStyle: 'dashed' },
  'border-dotted': { borderStyle: 'dotted' },
  'border-double': { borderStyle: 'double' },
  'border-none': { borderStyle: 'none' },

  // Border Collapse
  'border-collapse': { borderCollapse: 'collapse' },
  'border-separate': { borderCollapse: 'separate' },

  // Border Spacing
  'border-spacing-0': { borderSpacing: '0px' },
  'border-spacing-1': { borderSpacing: '0.25rem' },
  'border-spacing-2': { borderSpacing: '0.5rem' },
  'border-spacing-4': { borderSpacing: '1rem' },
  'border-spacing-8': { borderSpacing: '2rem' },
  'border-spacing-px': { borderSpacing: '1px' },

  /* Effects */
  // Box Shadow
  'shadow-sm': { boxShadow: tailwindVariables.shadowSm },
  'shadow': { boxShadow: tailwindVariables.shadowDefault },
  'shadow-md': { boxShadow: tailwindVariables.shadowMd },
  'shadow-lg': { boxShadow: tailwindVariables.shadowLg },
  'shadow-xl': { boxShadow: tailwindVariables.shadowXl },
  'shadow-2xl': { boxShadow: tailwindVariables.shadow2xl },
  'shadow-inner': { boxShadow: tailwindVariables.shadowInner },
  'shadow-none': { boxShadow: tailwindVariables.shadowNone },

  // Opacity
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

  // Mix Blend Mode
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

  // Box Decoration Break
  'box-decoration-slice': { boxDecorationBreak: 'slice' },
  'box-decoration-clone': { boxDecorationBreak: 'clone' },

  // Outline
  'outline-none': { outlineWidth: '2px', outlineStyle: "solid", outlineColor: tailwindVariables.colorTransparent, outlineOffset: '2px' },
  'outline-white': { outlineWidth: '2px', outlineStyle: 'solid', outlineColor: tailwindVariables.colorWhite, outlineOffset: '2px' },
  'outline-black': { outlineWidth: '2px', outlineStyle: 'solid', outlineColor: tailwindVariables.colorBlack, outlineOffset: '2px'  },

  /* Interactivity */
  // Resize
  'resize-none': { resize: 'none' },
  'resize': { resize: 'both' },
  'resize-y': { resize: 'vertical' },
  'resize-x': { resize: 'horizontal' },



  // Cursor
  'cursor-auto': { cursor: 'auto' },
  'cursor-default': { cursor: 'default' },
  'cursor-pointer': { cursor: 'pointer' },
  'cursor-wait': { cursor: 'wait' },
  'cursor-text': { cursor: 'text' },
  'cursor-move': { cursor: 'move' },
  'cursor-help': { cursor: 'help' },
  'cursor-not-allowed': { cursor: 'not-allowed' },

  // Pointer Events
  'pointer-events-none': { pointerEvents: 'none' },
  'pointer-events-auto': { pointerEvents: 'auto' },

  // User Select
  'select-none': { userSelect: 'none' },
  'select-text': { userSelect: 'text' },
  'select-all': { userSelect: 'all' },
  'select-auto': { userSelect: 'auto' },

  /* Tables */
  // Table Layout
  'table-auto': { tableLayout: 'auto' },
  'table-fixed': { tableLayout: 'fixed' },

  // Caption Side
  'caption-top': { captionSide: 'top' },
  'caption-bottom': { captionSide: 'bottom' },

  /* Transitions & Animation */
  // Transition Property
  'transition-none': { transitionProperty: 'none' },
  'transition-all': {
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms'
  },
  'transition': {
    transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms'
  },
  'transition-colors': {
    transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms'
  },
  'transition-opacity': {
    transitionProperty: 'opacity',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms'
  },
  'transition-shadow': {
    transitionProperty: 'box-shadow',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms'
  },
  'transition-transform': {
    transitionProperty: 'transform',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms'
  },

  // Transition Duration
  'duration-0': { transitionDuration: '0s' },
  'duration-75': { transitionDuration: '75ms' },
  'duration-100': { transitionDuration: '100ms' },
  'duration-150': { transitionDuration: '150ms' },
  'duration-200': { transitionDuration: '200ms' },
  'duration-300': { transitionDuration: '300ms' },
  'duration-500': { transitionDuration: '500ms' },
  'duration-700': { transitionDuration: '700ms' },
  'duration-1000': { transitionDuration: '1000ms' },

  // Transition Timing Function
  'ease-linear': { transitionTimingFunction: 'linear' },
  'ease-in': { transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)' },
  'ease-out': { transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
  'ease-in-out': { transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' },

  // Transition Delay
  'delay-0': { transitionDelay: '0s' },
  'delay-75': { transitionDelay: '75ms' },
  'delay-100': { transitionDelay: '100ms' },
  'delay-150': { transitionDelay: '150ms' },
  'delay-200': { transitionDelay: '200ms' },
  'delay-300': { transitionDelay: '300ms' },
  'delay-500': { transitionDelay: '500ms' },
  'delay-700': { transitionDelay: '700ms' },
  'delay-1000': { transitionDelay: '1000ms' },

  // Animation !!! Not support !!! 
  // 'animate-none': { animation: 'none' },
  // 'animate-spin': {
  //   animation: 'spin 1s linear infinite',
  //   '@keyframes spin': {
  //     from: { transform: 'rotate(0deg)' },
  //     to: { transform: 'rotate(360deg)' }
  //   }
  // },
  // 'animate-ping': {
  //   animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  //   '@keyframes ping': {
  //     '75%, 100%': { transform: 'scale(2)', opacity: 0 }
  //   }
  // },
  // 'animate-pulse': {
  //   animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  //   '@keyframes pulse': {
  //     '0%, 100%': { opacity: 1 },
  //     '50%': { opacity: 0.5 }
  //   }
  // },
  // 'animate-bounce': {
  //   animation: 'bounce 1s infinite',
  //   '@keyframes bounce': {
  //     '0%, 100%': {
  //       transform: 'translateY(-25%)',
  //       animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
  //     },
  //     '50%': {
  //       transform: 'translateY(0)',
  //       animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
  //     }
  //   }
  // },

  // No Peseudo-class support
});
