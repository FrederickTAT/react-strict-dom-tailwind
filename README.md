# React Strict DOM Tailwind Monorepo

[![NPM Version](https://img.shields.io/npm/v/react-strict-dom-tailwind)](https://www.npmjs.com/package/react-strict-dom-tailwind)
![License](https://img.shields.io/github/license/FrederickTAT/react-strict-dom-tailwind.svg)

A monorepo project implementing Tailwind CSS style based on React Strict DOM and StyleX.

## Project Structure

```
.
├── apps/                  # Applications
│   └── demo-app/          # Demo application
│       ├── examples/      # Example components
│       └── ...
├── packages/              # Packages
│   └── react-strict-dom-tailwind/  # Tailwind style system package
│       ├── src/           # Source code
│       └── ...
├── pnpm-workspace.yaml    # pnpm workspace configuration
└── package.json           # Root package.json
```

## Package Description

- **react-strict-dom-tailwind**: Provides a Tailwind CSS-like experience based on React Strict DOM and StyleX
- **demo-app**: Demo application showcasing how to use the react-strict-dom-tailwind package

## Quick Start

### Install Dependencies

```bash
# Install pnpm
npm install -g pnpm

# Install all dependencies
pnpm install
```

### Build Packages

```bash
# Build all packages
pnpm build
```

### Run Demo Application

```bash
# Start demo application
pnpm start

# Or start Web version
pnpm start:web
```

## Development

### Development Mode

```bash
# Start development mode for all packages
pnpm dev
```

### Clean Build Files

```bash
# Clean build files for all packages
pnpm clean
```

## React Strict DOM Tailwind

For more information, please refer to the [React Strict DOM Tailwind](./packages/react-strict-dom-tailwind/README.md) document.

## Tailwind class support

Not all Tailwind classes are supported by StyleX. Here is a list of Tailwind classes that are supported by StyleX:

- [Tailwind class support](tailwind-support.md)

## License

MIT License