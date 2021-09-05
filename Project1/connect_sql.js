// 教程链接：https://www.runoob.com/nodejs/nodejs-mysql.html
// local SQL Admin Panel address:
// http://localhost/phpmyadmin/index.php?route=/server/privileges&viewing_mode=server

// 链接 database fincol，
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'fincol'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});