const path = require("path")

let config = {

    entry: {
        index: "./src/index.js",
        produit: "./src/produit.js",
        panier: "./src/panier.js",
        confirm: "./src/confirm.js"
    },

    output: {
        path: path.resolve("./dist"),
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ["babel-loader"]
            }
        ]
    }
}


module.exports = function (env, argv) {
    if (argv.mode === "development") {
        config.devtool = "eval-cheap-module-source-map"
    } else {config.devtool="source-map"}
    return config
}