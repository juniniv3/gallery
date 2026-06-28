module.exports = {
  initializeAuth: () => ({}),
  getReactNativePersistence: () => ({}),
  onAuthStateChanged: (_auth, callback) => {
    callback(null);
    return () => {};
  },
  signInWithEmailAndPassword: () => Promise.resolve({user: {uid: '', email: '', displayName: '', photoURL: ''}}),
};
