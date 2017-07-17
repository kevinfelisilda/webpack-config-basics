var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: "./index",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    plugins: [
        /* new webpack.optimize.UglifyJsPlugin() */
    ],
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
        ]
    }
}
