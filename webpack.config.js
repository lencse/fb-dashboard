const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const commandLineArgs = require('command-line-args')
const webpackMerge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const args = commandLineArgs([
    { name: 'watch', type: Boolean }
])

const devMode = true === args.watch

const dirs = {
    dist: 'public',
    views: 'build/views'
}

const extra = devMode ?
    {
        mode: 'development',
        devtool: 'inline-source-map',
        plugins: [
            new LiveReloadPlugin()
        ]
    } : {
        mode: 'production',
        plugins: [
            new UglifyJsPlugin()
        ]
    }

module.exports = webpackMerge(
    {
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
            })
        ]
    }, extra
)
