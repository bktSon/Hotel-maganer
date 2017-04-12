"use strict";

var Hotel = require('./hotel.js');

var HotelBuilder = function () {

}

HotelBuilder.prototype.build(rawData) {
    var hotel = new Hotel(rawData.id);
    hotel.setName(rawData.name);
    hotel.setAdress(rawData.address);

    return hotel;
}


HotelBuilder.prototype.buildMany(rawData) {
    var self = this;
    var hotelsList = []
    rawData.forEach(function (row) {
        hotelsList.push(self.build(row));
    })

    return hotelsList;
}

module.export = HotelBuilder;
