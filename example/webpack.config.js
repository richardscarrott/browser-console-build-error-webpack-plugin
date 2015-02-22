// webpack --config example/webpack.config.js

var BrowserConsoleBuildErrorPlugin = require('browser-console-build-error-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './example.js',
    output: {
        path: __dirname,
        filename: 'output.js'
    },
    plugins: [
        new BrowserConsoleBuildErrorPlugin()
    ]
};