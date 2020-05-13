const path = require("path")

module.exports = {

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

    watch: true,

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