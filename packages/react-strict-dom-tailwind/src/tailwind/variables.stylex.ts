/**
 * Tailwind CSS Variables
 *
 * Uses StyleX's css.defineVars to define all theme variables at the top level
 * These variables follow Tailwind CSS v4.1 specifications
 */

import { css } from 'react-strict-dom';

// Define all Tailwind CSS variables in a single css.defineVars call
export const twVars = css.defineVars({
  /* Color Variables - Base */
  colorBlack: '#000000',
  colorWhite: '#ffffff',
  colorTransparent: 'transparent',
  colorCurrent: 'currentColor',

  /* Color Variables - Gray */
  colorGray50: 'rgba(249, 250, 251, 1)',
  colorGray100: 'rgba(243, 244, 246, 1)',
  colorGray200: 'rgba(229, 231, 235, 1)',
  colorGray300: 'rgba(209, 213, 220, 1)',
  colorGray400: 'rgba(153, 161, 175, 1)',
  colorGray500: 'rgba(106, 114, 130, 1)',
  colorGray600: 'rgba(74, 85, 101, 1)',
  colorGray700: 'rgba(54, 65, 83, 1)',
  colorGray800: 'rgba(30, 41, 57, 1)',
  colorGray900: 'rgba(16, 24, 40, 1)',
  colorGray950: 'rgba(3, 7, 18, 1)',

  /* Color Variables - Red */
  colorRed50: 'rgba(254, 242, 242, 1)',
  colorRed100: 'rgba(255, 226, 226, 1)',
  colorRed200: 'rgba(255, 201, 201, 1)',
  colorRed300: 'rgba(255, 162, 162, 1)',
  colorRed400: 'rgba(255, 100, 103, 1)',
  colorRed500: 'rgba(251, 44, 54, 1)',
  colorRed600: 'rgba(231, 0, 11, 1)',
  colorRed700: 'rgba(193, 0, 7, 1)',
  colorRed800: 'rgba(159, 7, 18, 1)',
  colorRed900: 'rgba(130, 24, 26, 1)',
  colorRed950: 'rgba(70, 8, 9, 1)',

  /* Color Variables - Blue */
  colorBlue50: 'rgba(239, 246, 255, 1)',
  colorBlue100: 'rgba(219, 234, 254, 1)',
  colorBlue200: 'rgba(190, 219, 255, 1)',
  colorBlue300: 'rgba(142, 197, 255, 1)',
  colorBlue400: 'rgba(81, 162, 255, 1)',
  colorBlue500: 'rgba(43, 127, 255, 1)',
  colorBlue600: 'rgba(21, 93, 252, 1)',
  colorBlue700: 'rgba(20, 71, 230, 1)',
  colorBlue800: 'rgba(25, 60, 184, 1)',
  colorBlue900: 'rgba(28, 57, 142, 1)',
  colorBlue950: 'rgba(22, 36, 86, 1)',

  /* Color Variables - Green */
  colorGreen50: 'rgba(240, 253, 244, 1)',
  colorGreen100: 'rgba(220, 252, 231, 1)',
  colorGreen200: 'rgba(185, 248, 207, 1)',
  colorGreen300: 'rgba(123, 241, 168, 1)',
  colorGreen400: 'rgba(5, 223, 114, 1)',
  colorGreen500: 'rgba(0, 201, 80, 1)',
  colorGreen600: 'rgba(0, 166, 62, 1)',
  colorGreen700: 'rgba(0, 130, 54, 1)',
  colorGreen800: 'rgba(1, 102, 48, 1)',
  colorGreen900: 'rgba(13, 84, 43, 1)',
  colorGreen950: 'rgba(3, 46, 21, 1)',

  /* Font Size Variables */
  fontSizeXs: '0.75rem',
  fontSizeSm: '0.875rem',
  fontSizeBase: '1rem',
  fontSizeLg: '1.125rem',
  fontSizeXl: '1.25rem',
  fontSize2xl: '1.5rem',
  fontSize3xl: '1.875rem',
  fontSize4xl: '2.25rem',
  fontSize5xl: '3rem',
  fontSize6xl: '3.75rem',
  fontSize7xl: '4.5rem',
  fontSize8xl: '6rem',
  fontSize9xl: '8rem',

  /* Font Weight Variables */
  fontWeightThin: '100',
  fontWeightExtralight: '200',
  fontWeightLight: '300',
  fontWeightNormal: '400',
  fontWeightMedium: '500',
  fontWeightSemibold: '600',
  fontWeightBold: '700',
  fontWeightExtrabold: '800',
  fontWeightBlack: '900',

  /* Line Height Variables */
  lineHeightNone: '1',
  lineHeightTight: '1.25',
  lineHeightSnug: '1.375',
  lineHeightNormal: '1.5',
  lineHeightRelaxed: '1.625',
  lineHeightLoose: '2',
  lineHeight3: '0.75rem',
  lineHeight4: '1rem',
  lineHeight5: '1.25rem',
  lineHeight6: '1.5rem',
  lineHeight7: '1.75rem',
  lineHeight8: '2rem',
  lineHeight9: '2.25rem',
  lineHeight10: '2.5rem',

  /* Letter Spacing Variables */
  letterSpacingTighter: '-0.05em',
  letterSpacingTight: '-0.025em',
  letterSpacingNormal: '0em',
  letterSpacingWide: '0.025em',
  letterSpacingWider: '0.05em',
  letterSpacingWidest: '0.1em',

  /* Border Radius Variables */
  borderRadiusNone: '0px',
  borderRadiusSm: '0.125rem',
  borderRadiusDefault: '0.25rem',
  borderRadiusMd: '0.375rem',
  borderRadiusLg: '0.5rem',
  borderRadiusXl: '0.75rem',
  borderRadius2xl: '1rem',
  borderRadius3xl: '1.5rem',
  borderRadiusFull: '9999px',

  /* Shadow Variables */
  shadowSm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  shadowDefault: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  shadowMd: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  shadowLg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  shadowXl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  shadow2xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  shadowInner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  shadowNone: 'none',

  /* Container Size Variables */
  containerSm: '640px',
  containerMd: '768px',
  containerLg: '1024px',
  containerXl: '1280px',
  container2xl: '1536px',
});
