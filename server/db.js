var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'abhinavDB',
    multipleStatements: true
});

connection.connect(function (err) {
    if (err)
        console.log("ConnectionError--" + err.sqlMessage);
    else {
        console.log("Connected! Radhe");
        const data = {
            name: "Raj",
            age: 20,
            batch: "5PM - 6PM",
            fee: 500,
            mobilenumber: 1234568890,
            date: "2021-01-01"
        };
        connection.query("SELECT * from yogaform", function (err, result, fields) {
            if (err)
                console.log(err);
            else
                console.log(result);
        });
        // connection.query("INSERT INTO yogaform SET ?", data, function (err, result, fields) {
        //     if (err) throw err;
        //     console.log(result);
        // });
    }
});

module.exports = connection;