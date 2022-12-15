const mysql = require("mysql");

const mysql_pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "abhinavDB",
});

module.exports = mysql_pool;