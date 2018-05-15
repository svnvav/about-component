var webpack = require('webpack');
var isProduction = true;

var pluginsList = [];

if(isProduction) {
    pluginsList.push(new webpack.optimize.UglifyJsPlugin({ sourceMap: false }));
    pluginsList.push(new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify('production')
      }
    }));
}

module.exports = {
    entry: './src/app-about.js',
    output: {
        filename: 'about-component.js',
        path: __dirname + '/dist-about'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ],
            },
            {
               test: /\.json$/,
               loader: 'json-loader'
            }
        ]
    },
    plugins: pluginsList,
    devtool: 'source-map',
    devServer: {
        contentBase: './dist-about',
    }
};
