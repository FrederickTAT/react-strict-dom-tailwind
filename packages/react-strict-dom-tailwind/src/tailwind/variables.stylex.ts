/**
 * Tailwind CSS Variables
 * 
 * Uses StyleX's css.defineVars to define all theme variables at the top level
 * These variables follow Tailwind CSS v4.1 specifications
 */

import { css } from 'react-strict-dom';

// Define all Tailwind CSS variables in a single css.defineVars call
export const twVars = css.defineVars({
  /* Base Variables */
  '--spacing': '1px',

  /* Color Variables - Base */
  '--color-black': '#000000',
  '--color-white': '#ffffff',
  '--color-transparent': 'transparent',
  '--color-current': 'currentColor',

  /* Color Variables - Gray */
  '--color-gray-50': 'oklch(0.985 0.002 247.839)',
  '--color-gray-100': 'oklch(0.967 0.003 264.542)',
  '--color-gray-200': 'oklch(0.928 0.006 264.531)',
  '--color-gray-300': 'oklch(0.872 0.01 258.338)',
  '--color-gray-400': 'oklch(0.707 0.022 261.325)',
  '--color-gray-500': 'oklch(0.551 0.027 264.364)',
  '--color-gray-600': 'oklch(0.446 0.03 256.802)',
  '--color-gray-700': 'oklch(0.373 0.034 259.733)',
  '--color-gray-800': 'oklch(0.278 0.033 256.848)',
  '--color-gray-900': 'oklch(0.21 0.034 264.665)',
  '--color-gray-950': 'oklch(0.13 0.028 261.692)',

  /* Color Variables - Red */
  '--color-red-50': 'oklch(0.971 0.013 17.38)',
  '--color-red-100': 'oklch(0.936 0.032 17.717)',
  '--color-red-200': 'oklch(0.885 0.062 18.334)',
  '--color-red-300': 'oklch(0.808 0.114 19.571)',
  '--color-red-400': 'oklch(0.704 0.191 22.216)',
  '--color-red-500': 'oklch(0.637 0.237 25.331)',
  '--color-red-600': 'oklch(0.577 0.245 27.325)',
  '--color-red-700': 'oklch(0.505 0.213 27.518)',
  '--color-red-800': 'oklch(0.444 0.177 26.899)',
  '--color-red-900': 'oklch(0.396 0.141 25.723)',
  '--color-red-950': 'oklch(0.258 0.092 26.042)',

  /* Color Variables - Blue */
  '--color-blue-50': 'oklch(0.97 0.014 254.604)',
  '--color-blue-100': 'oklch(0.932 0.032 255.585)',
  '--color-blue-200': 'oklch(0.882 0.059 254.128)',
  '--color-blue-300': 'oklch(0.809 0.105 251.813)',
  '--color-blue-400': 'oklch(0.707 0.165 254.624)',
  '--color-blue-500': 'oklch(0.623 0.214 259.815)',
  '--color-blue-600': 'oklch(0.546 0.245 262.881)',
  '--color-blue-700': 'oklch(0.488 0.243 264.376)',
  '--color-blue-800': 'oklch(0.424 0.199 265.638)',
  '--color-blue-900': 'oklch(0.379 0.146 265.522)',
  '--color-blue-950': 'oklch(0.282 0.091 267.935)',

  /* Color Variables - Green */
  '--color-green-50': 'oklch(0.982 0.018 155.826)',
  '--color-green-100': 'oklch(0.962 0.044 156.743)',
  '--color-green-200': 'oklch(0.925 0.084 155.995)',
  '--color-green-300': 'oklch(0.871 0.15 154.449)',
  '--color-green-400': 'oklch(0.792 0.209 151.711)',
  '--color-green-500': 'oklch(0.723 0.219 149.579)',
  '--color-green-600': 'oklch(0.627 0.194 149.214)',
  '--color-green-700': 'oklch(0.527 0.154 150.069)',
  '--color-green-800': 'oklch(0.448 0.119 151.328)',
  '--color-green-900': 'oklch(0.393 0.095 152.535)',
  '--color-green-950': 'oklch(0.266 0.065 152.934)',

  /* Font Size Variables */
  '--font-size-xs': '0.75rem',
  '--font-size-sm': '0.875rem',
  '--font-size-base': '1rem',
  '--font-size-lg': '1.125rem',
  '--font-size-xl': '1.25rem',
  '--font-size-2xl': '1.5rem',
  '--font-size-3xl': '1.875rem',
  '--font-size-4xl': '2.25rem',
  '--font-size-5xl': '3rem',
  '--font-size-6xl': '3.75rem',
  '--font-size-7xl': '4.5rem',
  '--font-size-8xl': '6rem',
  '--font-size-9xl': '8rem',

  /* Font Weight Variables */
  '--font-weight-thin': '100',
  '--font-weight-extralight': '200',
  '--font-weight-light': '300',
  '--font-weight-normal': '400',
  '--font-weight-medium': '500',
  '--font-weight-semibold': '600',
  '--font-weight-bold': '700',
  '--font-weight-extrabold': '800',
  '--font-weight-black': '900',

  /* Line Height Variables */
  '--line-height-none': '1',
  '--line-height-tight': '1.25',
  '--line-height-snug': '1.375',
  '--line-height-normal': '1.5',
  '--line-height-relaxed': '1.625',
  '--line-height-loose': '2',
  '--line-height-3': '0.75rem',
  '--line-height-4': '1rem',
  '--line-height-5': '1.25rem',
  '--line-height-6': '1.5rem',
  '--line-height-7': '1.75rem',
  '--line-height-8': '2rem',
  '--line-height-9': '2.25rem',
  '--line-height-10': '2.5rem',

  /* Letter Spacing Variables */
  '--letter-spacing-tighter': '-0.05em',
  '--letter-spacing-tight': '-0.025em',
  '--letter-spacing-normal': '0em',
  '--letter-spacing-wide': '0.025em',
  '--letter-spacing-wider': '0.05em',
  '--letter-spacing-widest': '0.1em',

  /* Border Radius Variables */
  '--border-radius-none': '0px',
  '--border-radius-sm': '0.125rem',
  '--border-radius-default': '0.25rem',
  '--border-radius-md': '0.375rem',
  '--border-radius-lg': '0.5rem',
  '--border-radius-xl': '0.75rem',
  '--border-radius-2xl': '1rem',
  '--border-radius-3xl': '1.5rem',
  '--border-radius-full': '9999px',

  /* Shadow Variables */
  '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  '--shadow-default': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '--shadow-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '--shadow-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  '--shadow-none': 'none',

  /* Container Size Variables */
  '--container-sm': '640px',
  '--container-md': '768px',
  '--container-lg': '1024px',
  '--container-xl': '1280px',
  '--container-2xl': '1536px',
});
