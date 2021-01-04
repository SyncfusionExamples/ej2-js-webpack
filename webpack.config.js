const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/index.js'),
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    devtool: false,
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin(
            {parallel: true,}
        )],
        usedExports: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                },   
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        extensions: [".js"]
    },
};