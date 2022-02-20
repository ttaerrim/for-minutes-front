module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'bootstrap-loader',
        'webpack/hot/only-dev-server',
        './src/js/index.js'
    ],
    output: {
        path: __dirname + "/build",
        publicPath: "/build/",
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'react-hot!babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass'
            },
            { test: /\.(woff2?|ttf|eot|svg|otf)$/, loader: 'url?limit=10000' },
            {
              test: 'path/to/your/module/wow.min.js',
              loader: "expose?WOW"
            },
            {
                test: require.resolve('wow.js/dist/wow.js'), 
                loader: 'exports?this.WOW'
             }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    postcss: [autoprefixer]
};

