const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);
const {sourceExts, assetExts} = defaultConfig.resolver;

// Firebase JS SDK uses package.json `exports` with separate `require` (CJS) and `default` (ESM)
// conditions. Metro 0.84 respects these conditions and bundles @firebase/app twice — once as CJS
// (used by @firebase/auth's RN CJS bundle) and once as ESM (used by our TS code). This creates
// two separate module instances with separate `_components` registries, so registerAuth() registers
// the "auth" component in the CJS registry while initializeApp() creates the app in the ESM
// registry. The result is "Component auth has not been registered yet" at runtime.
//
// Fix: intercept resolution of @firebase/app and @firebase/component to always return the same
// file, preventing the split-instance problem.
const firebaseSingletonPackages = [
  '@firebase/app',
  '@firebase/component',
];

const config = {
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'cjs'),
    sourceExts: [...sourceExts, 'cjs'],
    resolveRequest: (context, moduleName, platform) => {
      if (firebaseSingletonPackages.includes(moduleName)) {
        // Bypass package exports and resolve via resolverMainFields (classic behavior)
        // so all importers of this module get the same file → same module instance.
        const pkgDir = path.dirname(
          require.resolve(`${moduleName}/package.json`, {paths: [__dirname]}),
        );
        const pkg = require(`${moduleName}/package.json`);
        // Use react-native > browser > main field order (matching resolverMainFields)
        const file = pkg['react-native'] || pkg.browser || pkg.main;
        return {filePath: path.resolve(pkgDir, file), type: 'sourceFile'};
      }
      return context.resolveRequest(context, moduleName, platform);
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        inlineRequires: false,
      },
    }),
  },
};

module.exports = mergeConfig(defaultConfig, config);
