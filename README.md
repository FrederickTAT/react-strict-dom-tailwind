# React Strict DOM Project Template

This is a cross-platform application development template based on [React Strict DOM](https://facebook.github.io/react-strict-dom/), providing a clean and minimal development environment to help you quickly start building cross-platform applications. The template uses TypeScript by default for improved developer experience and type safety, but can be easily converted to JavaScript if preferred (see [Converting to JavaScript](#converting-to-javascript) section).

## What is React Strict DOM?

React Strict DOM (RSD) is a framework developed by Meta that allows developers to create cross-platform, platform-native interfaces using Web APIs. It has the following features:

- **Cross-platform**: The same code can run on both Web and native platforms (iOS, Android)
- **Platform-native**: On native platforms, it renders truly native components, not a WebView
- **Strict HTML**: Provides type-safe HTML components, excluding legacy attributes from traditional HTML
- **Strict CSS**: Provides predictable, optimized style encapsulation, powered by [StyleX](https://stylexjs.com) on the web

## Project Structure

```bash
├── src             # Source code directory
|  ├── App.tsx      # Main application component (TypeScript)
|  ├── index.js     # Application entry point
|  └── stylex.css   # StyleX declaration
├── app.json        # Expo application configuration
├── babel.config.js # Babel configuration
├── metro.config.js # Metro configuration (React Native bundler)
├── package.json    # Project dependencies
├── postcss.config.js # PostCSS configuration
├── README.md       # Project documentation
└── tsconfig.json   # TypeScript configuration
```

Note: The `.tsx` extension indicates TypeScript files with JSX support. The template is configured to use TypeScript by default.

## Quick Start

### Requirements

- Node.js >=20.11.0 (React Strict DOM requirement)
- npm >=9.0.0 or pnpm >=8.0.0

### Development Setup

```bash
# Using npm
npm install
npm start

# Or using pnpm
npm install -g pnpm
pnpm install
pnpm start
```

After starting, you can:
- Press `w` to open the app in a web browser
- Press `a` to open the app in an Android emulator
- Press `i` to open the app in an iOS simulator (requires macOS)
- Use the Expo Go app to scan the QR code and run on a physical device

### Building for Production

To build the web version of your application for production deployment:

```bash
# Using npm
npm run build

# Or using pnpm
pnpm build
```

This will create a production-ready build in the `dist/` directory that can be deployed to any static hosting service.

## Project Features

- **Clean Development Environment**: Removed all unnecessary dependencies like testing frameworks, code checking tools, etc.
- **Focus on React Strict DOM**: Provides the simplest examples to help you understand the core concepts of RSD
- **Cross-platform Support**: Supports Web, iOS, and Android platforms simultaneously without requiring react-native-web
- **TypeScript by Default**: Built-in TypeScript configuration for type safety and better developer experience
- **Optimized Web Rendering**: React Strict DOM handles web transformations internally, eliminating the need for react-native-web

## Extending the Project

### Adding New Pages

1. Create new component files in the `src` directory
2. Build interfaces using React Strict DOM's `html` components
3. Define styles using `css.create()`

### Platform-Specific Code

For components that need platform-specific implementations, you can use file extensions to differentiate:

- `Component.tsx` - Default implementation
- `Component.web.tsx` - Web platform implementation
- `Component.native.tsx` - Native platform implementation

### Converting to JavaScript

This template uses TypeScript by default for better type safety and developer experience. If you prefer to use JavaScript instead, follow these steps:

1. Rename files from `.tsx` to `.jsx` and `.ts` to `.js`
2. Remove type annotations from your code
3. Update your `package.json` by removing TypeScript-related dependencies:
   ```bash
   npm uninstall typescript @types/react
   # or with pnpm
   pnpm uninstall typescript @types/react
   ```
4. Remove or modify the `tsconfig.json` file
5. Update import statements in your files if necessary

## Learning Resources

- [React Strict DOM Official Documentation](https://facebook.github.io/react-strict-dom/)
- [StyleX Official Documentation](https://stylexjs.com/)
- [Expo Documentation](https://docs.expo.dev/)
