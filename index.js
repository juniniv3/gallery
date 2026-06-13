/**
 * @format
 */

// Hermes on ARM64 Android emulators crashes inside captureStackTrace when PAC keys are all active
// (pac_enabled_keys=0x000f). Firebase's FirebaseError calls Error.captureStackTrace explicitly for
// V8 compat; Hermes's own Error constructor still captures stacks, so disabling the V8 API is safe.
// Must run before any require() loads Firebase modules — ES import hoisting would be too late.
global.Error.captureStackTrace = undefined;

const {AppRegistry} = require('react-native');
const App = require('./App').default;
const {name: appName} = require('./app.json');

AppRegistry.registerComponent(appName, () => App);
