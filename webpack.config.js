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

const filenames = {
    js: devMode ? '[name].js' : '[name].[hash].js',
    css: devMode ? '[name].css' : '[name].[contentHash].css'
}

module.exports = webpackMerge(
    {
        entry: [
            './build/src/Frontend/main.js',
            // './styles/main.css',
            './node_modules/material-design-lite/src/material-design-lite.scss'
            // './node_modules/material-design-lite/material.min.css'
        ],
        output: {
            filename: filenames.js,
            path: path.resolve(__dirname, dirs.dist)
        },
        plugins: [
            new CleanWebpackPlugin([dirs.dist]),
            new HtmlWebpackPlugin({
                template: `${dirs.views}/index.ejs`,
                filename: 'index.html',
                inject: 'body'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    }, extra
)
