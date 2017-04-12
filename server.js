"use strict";

var config = require('./config');
var app = require('./app.js');
var boot = require('./boot.js');

boot(app).then(function () {
    app.listen(config.app.port, function () {
      console.log('Example app listening on port: ' +  config.app.port)
    });
}).catch(function (error) {
    console.error(error);
})
