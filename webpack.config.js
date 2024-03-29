'use strick'

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
    ],

    output: {
        path: path.join(__dirname, 'src', 'index'),
        filename: 'bundle.js',
        publicPath: '/static/' /* esse static está apenas em memória. */   
        // publicPath: '/index/' /* também  pode ser usado assim se estiver em produção. */     
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        preLouders: [{
            text: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'standart'
        }],

        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        }]
    }
}
 