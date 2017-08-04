var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackMerge = require('webpack-merge');
var path = require('path');

var base = {
    entry: {
        main: './front/main.js'
    },
    output: {
        path: path.join(__dirname, '/www/dist'),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /iview.src.*?js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /vue-preview.src.*?js$/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    plugins: [
        //生成视图，动态更新打包的app.js和style.css
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, 'view/home/index_index.html'),
            template: 'index_template.html'
        })
    ]
};

var dev = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    output: {
        filename: 'app.js'
    },
    devtool: '#eval-source-map'
};


var pro = {
    output: {
        filename: 'app.[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            }
        ]
    },
    devtool: '#source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        //提前CSS
        new ExtractTextPlugin('style.[chunkhash].css'),
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports = webpackMerge(base, pro)
} else {
    module.exports = webpackMerge(base, dev)
}
