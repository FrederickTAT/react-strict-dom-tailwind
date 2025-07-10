import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import reactStrictDomTailwind from 'eslint-plugin-react-strict-dom-tailwind';
import tseslint from 'typescript-eslint';

export default defineConfig([
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactStrictDomTailwind.configs.recommended,
]);
