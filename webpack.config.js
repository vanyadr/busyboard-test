const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.module\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                                namedExport: false,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.module\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                                namedExport: false,
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `@use "@/app/styles/variables/global.scss";`,
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /\.module\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'dist', 'index.html'),
            publicPath: '/',
        }),
    ],
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
};
