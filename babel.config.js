module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        node: 'current',
      },
      useBuiltIns: 'entry',
    }],
  ],
};
