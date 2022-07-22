const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
var fs = require('fs');
var readline = require('readline');
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});
var rl = readline.createInterface({
    input: fs.createReadStream('../carsdb.sql'),
    terminal: false
});
rl.on('line', function(chunk) {
    connection.query(chunk.toString('ascii'), function(err, sets, fields) {
        if (err) console.log(err);
    });
});
rl.on('close', function() {
    console.log("finished");
    connection.end();
})