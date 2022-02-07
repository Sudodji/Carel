const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module:{
        rules:[
            { test: /\.(jpg|png|svg)$/, use: [
                { 
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:'./',
                        useRelativePath:true
                    }
                },
            ]},
            { test:/\.(s*)css$/, use: [ miniCss.loader, 'css-loader', 'sass-loader'] },
            { test: /\.pug$/, use: 'pug-loader' },
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug',
            output: './dist/index.html'
        }),
        new miniCss({
            filename: 'style.css',
         }),
        new CopyPlugin({
            patterns: [
              { 
              from: path.resolve(__dirname, './src/assets'), 
              to: path.resolve(__dirname, './dist/assets'),
            },
            
            ],
          }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
            }),
      ],
      mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}