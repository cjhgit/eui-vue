var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var ExtractPlugin = require('extract-text-webpack-plugin');
var  ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    externals: {
        jquery: "jQuery"
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            SRC: path.join(__dirname, '../src'),
            VIEW: path.join(__dirname, '../src/views'),
            COMPONENT: path.join(__dirname, '../src/components'),
            FILTER: path.join(__dirname, '../src/filters'),
            DIRECTIVE: path.join(__dirname, '../src/directives'),
            CONFIG: path.join(__dirname, '../src/config'),
            UTIL: path.join(__dirname, '../src/util')
        }
    },
    module: {
        rules: [

            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            /*{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },*/
           /*{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "style-loader!css-loader"
                })
            },*/
            {
                test: /\.scss$/,
                //loader: ''
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
                //loader: new ExtractTextPlugin("[name].scss$",{allChunks: true})//ExtractPlugin.extract('style-loader', 'css-loader!sass-loader')//ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })//
            }
        ],
    }

}
