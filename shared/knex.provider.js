"use strict";

module.export = function (app) {
    var config = app.config;
    var knex = require('knex')(config.db.knex);
}
