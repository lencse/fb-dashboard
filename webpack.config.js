const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')

const dirs = {
    dist: 'public',
    views: 'views'
}

module.exports = {
    mode: 'development',
    // mode: 'production',
    devtool: 'inline-source-map',
    entry: './build/src/Frontend/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, dirs.dist)
    },
    plugins: [
        new CleanWebpackPlugin([dirs.dist]),
        new HtmlWebpackPlugin({
            template: `${dirs.views}/index.ejs`,
            filename: 'index.html',
            inject: 'body'
        }),
        new LiveReloadPlugin({
            delay: 1500
        })
    ]
}
