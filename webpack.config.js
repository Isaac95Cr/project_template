const path = require('path')

const htmlWebpackPlugin =require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    { loader: "style-loader" }, 
                    {
                    loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[local]_[hash:6]",
                            sourceMap: true
                        }
                    }, 
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                loaders: ['file-loader']
            }
        ]
    },
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}