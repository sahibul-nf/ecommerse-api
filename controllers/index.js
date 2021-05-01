'use strict';

const response = require('../res');

exports.index = function (res) {
    response.ok("Welcome to hicommerse App API", res);
}