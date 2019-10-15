const postcss = require('rollup-plugin-postcss');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true,
      }),
    );
    return config;
  },
};
