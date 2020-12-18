'use strict';

let response = require('./res');
let connection = require('./connection');

exports.index = (req,res) => {
    connection.query('SELECT * FROM users',(error,rows,fields) => {
        if (error) {
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
}

exports.show = (req,res) => {
    let id = req.params.id
    connection.query('SELECT * FROM users WHERE id = ?',[id], (error,rows,fields) => {
        if (error){
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
}