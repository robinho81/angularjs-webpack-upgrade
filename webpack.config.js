var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeModulesDir = path.resolve(__dirname, '../node_modules');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/app.ts',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.html'],
      alias: {
        "@angular/upgrade/static": "@angular/upgrade/bundles/upgrade-static.umd.js"
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
            test: /\.html$/,
            loader: 'raw-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[hash].[ext]'
        }
        ]
    },
    
    output: {
      filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            /*chunksSortMode: function (chunk1, chunk2) {
                var orders = ['vendor', 'polyfills', 'app'];
                var order1 = orders.indexOf(chunk1.names[0]);
                var order2 = orders.indexOf(chunk2.names[0]);
                if (order1 > order2) {
                  return 1;
                } else if (order1 < order2) {
                  return -1;
                } else {
                  return 0;
                }
              }*/
        }),
        new webpack.ContextReplacementPlugin(
          /angular(\\|\/)core(\\|\/)@angular/,
          path.resolve(__dirname, '../src')
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills'] 
        })
    ]
};