var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, '/client'),
                loaders: ['react-hot-loader', 'babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};