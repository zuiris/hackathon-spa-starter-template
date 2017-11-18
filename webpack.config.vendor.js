var path = require("path");
var webpack = require("webpack");

module.exports = {
    stats: {
        modules: false
    },
    resolve: {
        extensions: [".js"]
    },
    entry: {
        vendor: [
            "bootstrap",
            "history",
            "react",
            "react-dom",
            "react-router-dom",
            "react-router",
            "jquery",
        ]
    },
    output: {
        path: path.join(__dirname, "public", "dist"),
        publicPath: "/public/dist",
        filename: "[name].js",
        library: "[name]_[hash]"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
        new webpack.NormalModuleReplacementPlugin(
            /\/iconv-loader$/,
            require.resolve("node-noop")
        ), // Workaround for https://github.com/andris9/encoding/issues/16
        new webpack.DllPlugin({
            path: path.join(__dirname, "public", "dist", "[name]-manifest.json"),
            name: "[name]_[hash]"
        })
    ]
};
