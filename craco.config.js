const webpack = require("webpack");

module.exports = {
    webpack: {
        configure: {
            resolve: {
                fallback: {
                    util: require.resolve("util"),
                    buffer: require.resolve("buffer"),
                    crypto: require.resolve("crypto-browserify"),
                    stream: require.resolve("stream-browserify"),
                    process: require.resolve("process/browser"),
                    url: require.resolve("url"),
                },
            },
            plugins: [
                new webpack.ProvidePlugin({
                    Buffer: ["buffer", "Buffer"],
                    process: "process/browser.js",
                }),
            ],
        },
    },
};
