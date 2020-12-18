const mysql = require('mysql2');


// create connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'abeleon',
    password: 'showmethecode',
    database: 'noderestapidb'
});

conn.connect((error) => {
    if (error) throw error;
    console.log('mysql connecting successfully');
});

module.exports = conn;
