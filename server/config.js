const mysql = require("mysql");

const mysql_pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "abhinavDB",
});

console.log("Database ");
const express = require('express');
const e = require("express");
const app = express();

app.get('/', (req, res) => {
    mysql_pool.getConnection(function (err, connection) {
        if (err)
            res.send("Error occured!");
        else {

            console.log("Database Connected");
        }

    });

});
module.exports = mysql_pool;