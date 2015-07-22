/*jslint node:true, white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true, bitwise: true, regexp: true, sloppy: true, indent: 2, maxerr: 50, camelcase:false */
'use strict';

module.exports = {
  database: {
    host: 'localhost',
    database_name: 'app_production',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: '5432'
  }
};