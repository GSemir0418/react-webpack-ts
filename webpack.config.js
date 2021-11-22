const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/main',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].[hash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ["main"],
            filename: "index.html",
            template: "index.html"
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devServer: {
        hot: true
    }
}