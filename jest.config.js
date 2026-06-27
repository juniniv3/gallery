module.exports = {
  preset: '@react-native/jest-preset',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  moduleNameMapper: {
    '^@reduxjs/toolkit$':
      '<rootDir>/node_modules/@reduxjs/toolkit/dist/cjs/index.js',
    '^@reduxjs/toolkit/react$':
      '<rootDir>/node_modules/@reduxjs/toolkit/dist/react/cjs/index.js',
    '^@react-native-async-storage/async-storage$':
      '<rootDir>/node_modules/@react-native-async-storage/async-storage/jest/async-storage-mock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-native-async-storage|@react-navigation|react-native-image-picker|react-native-gesture-handler|react-native-screens|react-native-safe-area-context|react-redux|@reduxjs/toolkit|immer|firebase|@firebase|react-hook-form)/)',
  ],
};
