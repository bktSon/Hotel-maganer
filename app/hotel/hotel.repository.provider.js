"use strict";

var HotelBuilder = require('./hotelBuilder');
var HotelRepository = require('./HotelRepository');

module.export = function(app) {

    var hotelRepository = new HotelRepository( app.get('connection') ,new HotelBuilder());
    app.set('hotelRepository', hotelRepository);

    return app;
}
