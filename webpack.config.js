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
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

let fs = require('fs');
let folders = fs.readdirSync('./src/pages/');

let entryList = {};
for (let i = 0; i < folders.length; i++) {
    entryList[folders[i]] = (PATHS.src + `/pages/${folders[i]}/${folders[i]}.js`);
};

let folderPlugins = folders.map(folder => new HtmlWebpackPlugin({
    filename: `${folder}.html`,
    chunks: new Array(folder),
    template: PATHS.src + `/pages/${folder}/${folder}.pug`
}));
let pluginsList = [
new CopyWebpackPlugin([{
    from: './src/fonts',
    to: './fonts'
}]),
new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
})
];
let allPlugins = folderPlugins.concat(pluginsList);

const common = merge([
{
    entry: entryList,
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },
    plugins: allPlugins
},
pug(),
images(),
fonts()
]);

module.exports = function(env) {
 //    optimization: {
 //        splitChunks: {
 //        chunks: "all"
 //        }
 //    }
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