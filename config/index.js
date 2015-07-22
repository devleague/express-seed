/*jslint node:true, white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true, bitwise: true, regexp: true, sloppy: true, indent: 2, maxerr: 50 */
'use strict';

var _ = require('lodash');
var fs = require('fs');

process.env.NODE_ENV = ~fs.readdirSync('./config/env').map(function(file){
  return file.slice(0, -3);
}).indexOf(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';

//extend base configuration in all.js with env specific configuration
module.exports = _.extend(
  require('./env/all'),
  require('./env/' + process.env.NODE_ENV) || {}
);