'use strict';

let response = require('./res');
let connection = require('./connection');

exports.index = (req,res) => {
    response.ok("REST API Application running seccessfully",res);
};