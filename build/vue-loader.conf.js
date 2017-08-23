var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var px2rem = require('postcss-plugin-px2rem');
var px2remOpts = {
    rootValue: 75,
    unitPrecision: 5,
    propWhiteList: [],
    propBlackList: ["border","border-bottom","border-top"],
    selectorBlackList: [],
    ignoreIdentifier:false,
    replace: true,
    mediaQuery: false,
    minPixelValue: 0
};
module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
        extract: isProduction
    }),
    postcss: [px2rem(px2remOpts),
        require('autoprefixer')({
        browsers: ['iOS >= 7', 'Android >= 4.1']
    })]
}