"use strict";

var HotelBuilder = require('./HotelBuilder')

var HotelRepository = fuction (connection, hotelBuilder) {
    this.connection = connection;
    this.hotelBuilder = hotelBuilder;
}

Hotel.prototype.getHotel = function (id) {
    var rawData = this.connection.select().table('hotels').where('id', id);
    return this.hotelBuilder.build(rawData);
}

module.export = HotelRepository;
