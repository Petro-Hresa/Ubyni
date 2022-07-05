const path = require('path');
const webpack = require('webpack');
const HWP = require('html-webpack-plugin');
const MCEP = require('mini-css-extract-plugin');


module.exports = {
   mode : ( process.env.NODE_ENV === 'production') ? 'production' : 'development',
   entry: ['./client/public/'],
   devtool: 'inline-source-map',
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HWP({
         filename: 'index.html',
         template: './client/public/index.html',
         inject: 'body',
      }),
      new MCEP({filename: 'styles/style.css'})

   ],

   performance : {
      hints : false
   },
   
   optimization: {
      mangleWasmImports: true,
      minimize: true,
      splitChunks:{
         cacheGroups:{
            vendor:{
               name:'vendors',
               test: /node_modules/,
               chunks: 'all',
               enforce: true,
               filename: 'scripts/[name].[fullhash].js',
            }
         }
      }
   },

   resolve:{
      extensions: ['.js', '.jsx', '.tsx', 'json'],
   },

   devtool: "source-map",

   output: {
      filename:  'scripts/index.[fullhash].js',
      assetModuleFilename: 'images/[hash][ext][query]',
      path: path.resolve(__dirname, 'client/dist/'),
      clean: true,
      publicPath: '/',
   },

   module:{
      rules:[
         {//styles
            test: /\.(s[ac]|c)ss$/i,
            use: [ MCEP.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            exclude: /node_modules/,
         },

         {//images
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset',
         },

         {//html
            test: /\.html$/i,
            loader: "html-loader",
         },

         {//fonts
            test: /\.(woff(2)?|eot|ttf|otf)$/,
            exclude: /node_modules/,
            type: 'asset/resource',
            generator: {filename: "fonts/[name].[hash][ext]"},
         },

         {//scripts
            test: /\.[jt]s(x)?$/,
            use:['babel-loader', 'ts-loader'],
            exclude: /node_modules/
         },
      ]

   }

}
