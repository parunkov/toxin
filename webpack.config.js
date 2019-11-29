const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const CopyWebpackPlugin= require('copy-webpack-plugin');


const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
    entry: {
        // 'index': PATHS.source + '/pages/index/index.js',
        // 'blog': PATHS.source + '/pages/blog/blog.js',
        'colors_types': PATHS.source + '/pages/colors_types/colors_types.js',
        'form_elements': PATHS.source + '/pages/form_elements/form_elements.js'
    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     chunks: ['index'],
        //     template: PATHS.source + '/pages/index/index.pug'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'blog.html',
        //     chunks: ['blog'],
        //     template: PATHS.source + '/pages/blog/blog.pug'
        // }),
        new HtmlWebpackPlugin({
            filename: 'colors_types.html',
            chunks: ['colors_types'],
            template: PATHS.source + '/pages/colors_types/colors_types.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'form_elements.html',
            chunks: ['form_elements'],
            template: PATHS.source + '/pages/form_elements/form_elements.pug'
        }),
        new CopyWebpackPlugin([{
            from: './source/fonts',
            to: './fonts'
        }]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
        ]
    },
    pug(),
    images(),
    fonts()
    ]);

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS()
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass(),
            css()
        ]);
    }
};