'use strict';

let response = require('./res');
let connection = require('./connection');
const { connect } = require('./connection');

exports.index = (req,res) => {
    connection.query('SELECT * FROM orders',(error,rows,fields) => {
        if (error) {
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
}

exports.show = (req,res) => {
    let id = rq.params.id
    connection.query('SELECT * FROM orders WHERE id=?',[id],(error,rows,fields) => {
        if (error) {
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
}

exports.store = (req,res) => {
    let orderNumber = req.body.ordernumber;
    let orderDate = req.body.orderdate;
    let userID = req.body.userid;
    let menuID = req.body.menuid;
    connection.query('INSERT INTO orders(OrderNumber,OrderDate,userID,menuID) VALUES(?,?,?,?)',
    [orderNumber,orderDate,userID,menuID], (error,rows,fields) => {
        if (error) {
            console.log(error);
        }else{
            response.ok('insert data successfully!',res);
        }
    });
}

exports.update = (req,res) => {
    let id = req.params.id
    let orderNumber = req.body.ordernumber;
    let orderDate = req.body.orderdate;
    let userID = req.body.userid;
    let menuID = req.body.menuid;

    connection.query('UPDATE orders SET OrderNumber=?, OrderDate=?, userID=?, menuID=? WHERE id=?',
    [orderNumber,orderDate,userID,menuID,id],
    (error,rows,fields) => {
        if (error) {
            console.log(error);
        }else{
            response.ok(`data orders with id ${id} updated successfully`,res);
        }
    });
}

exports.destroy = (req,res) => {
    let id = req.body.id
    connection.query('DELETE FROM orders WHERE id=?',[id],(error,rows,fields) => {
        if (error) {
            console.log(error)
        }else{
            response.ok(`data orders with id ${id} deleted successfully`,res);
        }
    });
}