'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'uSNF',
    password: 'uSNF',   
    database: 'ecommerse'
});

connection.connect(function (err) {
    if (err) console.log("ADA YANG SALAH");
});

module.exports = connection;