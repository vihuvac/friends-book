module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Heads up: `react-native-reanimated/plugin` has to be listed last.
    'react-native-reanimated/plugin',
  ],
};
