var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');

config.output = {
    filename: '[name].bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, './../API/public')
};

config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
        mangle: false
    })
]);

module.exports = config;
