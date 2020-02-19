const BundleTracker = require("webpack-bundle-tracker");

/* add vue apps here */
const PAGES = {
  'blog-app': {
    entry: './src/main.js',
    chunks: ['chunk-vendors'],
  },
};

module.exports = {
    pages: PAGES,
    filenameHashing: false,
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? ''
        : 'http://localhost:8080/',
    outputDir: 'vue_bundles/',
    chainWebpack: (config) => {
      Object.keys(PAGES).forEach((page) => {
        config.plugins.delete(`html-${page}`);
        config.plugins.delete(`preload-${page}`);
        config.plugins.delete(`prefetch-${page}`);
      });
      config
        .plugin('BundleTracker')
        .use(BundleTracker, [{ filename: '../webpack-stats.json' }]);
      config.resolve.alias
        .set('__STATIC__', 'static');
      config.devServer
        .public('http://localhost:8080')
        .host('localhost')
        .port(8080)
        .hotOnly(true)
        .watchOptions({ poll: 1000 })
        .https(false)
        .headers({ 'Access-Control-Allow-Origin': ['*'] });
  }
};
