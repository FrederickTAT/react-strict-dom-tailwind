module.exports = {
  plugins: {
    'postcss-react-strict-dom': {
      include: [
        // Include source files to watch for style changes
        'src/**/*.{js,jsx,mjs,ts,tsx}',
      ],
    },
    autoprefixer: {},
  },
};
