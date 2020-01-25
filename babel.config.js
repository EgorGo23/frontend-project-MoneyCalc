module.exports = {
    presets: [
      ['@babel/env', {
        targets: {
          node: 'current',
          firefox: 'current',
          chrome: 'current',
          safari: 'current',
        },
      }],
    ],
};