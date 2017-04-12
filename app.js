"use strict";

var express = require('express')
var app = express()
var boot = require('./boot.js')

app.get('/hotel/:id', function (req, res) {
    var id = req.params.id;
    var hotelRepository = req.app.get('hotelRepository');
    hotelRepository.findById(id).then(function (hotel) {
        res.body = hotel;
    })
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
