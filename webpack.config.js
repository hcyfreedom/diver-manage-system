var path = require('path')
var config = {
    entry: path.resolve(__dirname, './src/component/main.js'),


    output: {
        path:path.resolve(__dirname,"./"),
        filename: 'index.js',
    },

    devServer: {
        // host: '0.0.0.0',
        // hot: true,
        port:7778,
        inline: true,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                secure: false
            }
        }
    },

    module: {
        loaders: [ {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
                presets: ['es2015', 'react']
            },

        },
            {
                test: /\.css$/,
                loader: 'style!css',
                include: __dirname,
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: "url?limit=8192"
            },

        ]
    },
    plugins: [
    ],

};

module.exports = config;
