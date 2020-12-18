'use strict';

let response = require('./res');
let connection = require('./connection');

exports.index = (req,res) => {
    connection.query('SELECT * FROM menus',(error,rows,fields)=> {
        if (error) {
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
}

exports.show = (req,res) => {
    let id = req.params.id
    connection.query('SELECT * FROM menus WHERE id=?',[id],(error,rows,fields) => {
        if (error) {
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
}

exports.store = (req,res) => {
    let name = req.body.name;
    let price = req.body.price;

    connection.query('INSERT INTO menus(name,price) VALUES(?,?)',[name,price],(error,rows,fields)=>{
        if (error) {
            console.log(error);
        }else{
            response.ok(`Data inserted successfully!`,res);
        }
    });
}


exports.update = (req,res) => {
    let id = req.params.id;
    let name = req.body.name;
    let price = req.body.price;

    connection.query('UPDATE menus SET name=?,price=? WHERE id=?',[name,price,id],(error,rows,fields) => {
        if (error) {
            console.log(error)
        }else{
            response.ok(`Users data with id: ${id}updated successfully!`,res);
        }
    });
}

exports.destroy = (req,res) =>{
    let id = req.params.id

    connection.query('DELETE FROM menus WHERE id=?',[id],(error,rows,fields) => {
        if (error) {
            console.log(error);
        }else{
            response.ok(`menus data with id: ${id} deleted successfully`,res);
        }
    });
}