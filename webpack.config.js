var config = require("./config");

module.exports = {
    entry: ['babel-polyfill', './lib/app.js'],
    output: {
        filename: "bundle.js",
        path: config.webDir,
        publicPath: config.publicPath
    },
};