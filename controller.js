'use strict';

let response = require('./res');
let connection = require('./connection');

exports.index = (req,res) => {
    response.ok("REST API Application running seccessfully",res);
};

exports.allusers = (req,res) => {
    connection.query('SELECT * FROM users',(error,rows,fileds) => {
        if (error) {
            connection.log(error);
        }else{
            response.ok(rows,res);
        }
    });
}