"use strict";

var Hotel = function (id) {
    this.attributes = {
        id: id
    };
}

Hotel.prototype.setName = function (name) {
    this.attributes.name = name
}

Hotel.prototype.setAdress = function (address) {
    this.attributes.address = address
}

Hotel.prototype.getId = function () {
    return this.attributes.id;
}

Hotel.prototype.getName = function () {
    return this.attributes.name;
}

Hotel.prototype.getAdress = function () {
    return this.attributes.address;
}

module.export = Hotel;
