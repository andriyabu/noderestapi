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

// show users data by id
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

// insert data to users table
exports.store = (req,res) => {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;

    connection.query('INSERT INTO users(name,email,phone,address) VALUES(?,?,?,?)',
    [name,email,phone,address], (error,rows,fields) => {
        if (error) {
            console.log(error);
        }else{
            response.ok('users data inserted successfully',res);
        }
    });
}

//update users data by id
exports.update = (req,res) => {
    let id = req.params.id
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;

    connection.query('UPDATE users SET name=? , email=?,phone=?,address=? WHERE id=?',
    [name,email,phone,address,id], (error,rows,fields) => {
        if (error) {
            console.log(error);
        }else{
            response.ok(`users data witdh id:${id} updated successfully`,res);
        }
    });
}

exports.destroy = (req,res) =>{
    let id = req.params.id

    connection.query('DELETE FROM users WHERE id=?',[id],(error,rows,fields) => {
        if (error) {
            console.log(error);
        }else{
            response.ok(`users data with id: ${id} deleted successfully`,res);
        }
    });
}