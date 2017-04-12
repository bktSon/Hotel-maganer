"use strict"
var Promise = require('bluebird');
var hotelProvider = require('./app/hotel/hotel.repository.provider.js');
var sharedProvider = require('./shared');

module.export = function (app) {
    return Promise.resolve(app)
    .then(hotelProvider)
    .then(sharedProvider.knextProvider)
}
