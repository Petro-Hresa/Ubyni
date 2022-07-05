const express = require('express');
const webpack = require('webpack');
const WDM = require('webpack-dev-middleware');
const WHM = require("webpack-hot-middleware");

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);

app
.use( WDM(compiler))

.use( WHM(compiler, {
   publicPath: config.output.publicPath,
}))

.use( express.static('../client/dist'))

.listen( 3000 , ()=> console.log('App listening on port 3000!\n'));