# React Strict DOM Tailwind Monorepo

A monorepo project implementing Tailwind CSS style based on React Strict DOM and StyleX

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

## Using react-strict-dom-tailwind

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

## License

MIT
