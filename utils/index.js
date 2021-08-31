const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'dbone',
});

connection.connect();

const sql = 'select * from student';
connection.query(sql, (err, result) => {
    if (err) {
        console.error('error', err);
        return;
    }
    console.log('result', result);
});

connection.end();
