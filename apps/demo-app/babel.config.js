/* eslint-disable @typescript-eslint/no-require-imports */
const reactStrictPreset = require('react-strict-dom/babel-preset');

function getPlatform(caller) {
  // This information is populated by Expo
  return caller && caller.platform;
}

function getIsDev(caller) {
  // This information is populated by Expo
  if (caller?.isDev != null) return caller.isDev;
  // https://babeljs.io/docs/options#envname
  return (
    process.env.BABEL_ENV === 'development' ||
    process.env.NODE_ENV === 'development'
  );
}

module.exports = function (api) {
  // If not using Expo, set these values manually or by other means
  const platform = api.caller(getPlatform);
  const dev = api.caller(getIsDev);

  return {
    plugins: [],
    presets: [
      // Expo's babel preset
      'babel-preset-expo',
      // React Strict DOM's babel preset
      [
        reactStrictPreset,
        {
          debug: dev,
          dev,
          platform,
        },
      ],
    ],
  };
};
