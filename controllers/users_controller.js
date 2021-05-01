'use strict';

const response = require('../res');
const connection = require('../configs');

let full_name;
let email;
let username;
let password;
let address;
let phone;
// let avatar;

let sql;

// GET all users - http://localhost:3000/users
exports.users = function (res) {
    connection.query("SELECT * FROM users", function (err, rows) {
        if (err) {
            console.log(err);
        } else {
            response.ok(rows, res, rows.length, "");
        }
    })
}

// POST users login - http://localhost:3000/users//login
exports.login = function (req, res) {

    email = req.body.email;
    password = req.body.password;

    sql = `SELECT * FROM users WHERE email = ? AND password = ?`;

    connection.query(sql, [email, password], function (err, result) {
        if (err) response.err(result, res, "Internal Server Error");

        // result.forEach(user => {
        // email = user.email;
        // password = user.password;
        //     console.log(user.email + " " + user.password);
        // });

        if (result.length === 0) {
            response.badRequest(result, res, "Unautorized");
        } else {
            console.log(result);
            response.ok(result, res, result.length, "Login Success");
        }
    })

}

// POST users register - http://localhost:3000/users/register
exports.register = (req, res) => {

    full_name = req.body.full_name;
    email = req.body.email;
    username = req.body.username;
    password = req.body.password;
    address = req.body.address;
    phone = req.body.phone;

    sql = `INSERT INTO users (
        full_name, email, username, password, address, phone
        ) VALUES (
         ?, ?, ?, ?, ?, ?
    )`;

    connection.query(`SELECT email FROM users WHERE email = ?`, [email], (result) => {
        // if (err) console.log(err);
        // response.err(result, res, "Internal Server Error");

        if (result.length > 0) {
            const data = {
                status: 400,
                message: "Email is exist!",
            };
            res.json(data);
            res.end();
        } else {
            register();
        }
    });

    function register() {
        connection.query(sql, [full_name, email, username, password, address, phone], (err, result) => {
            if (err) {
                console.log(err);
                response.err(result, res, "Internal Server Error");
            } else {
                response.ok(result, res, result.length, "Register Success");
            }
        })
    }

}