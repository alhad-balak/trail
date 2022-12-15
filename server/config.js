const mysql = require("mysql");

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "abhinavDB",
    multipleStatements: true,
    connectionLimit: 10
});

//To check if the database is connected.
// connection.connect(function (err) {
//     if (err)
//         console.log("ConnectionError--" + err.sqlMessage);
//     else
//         console.log("Database Connected");
// });

//Cheecing if the data can be retrived from the database.
// connection.query("SELECT * from yogaform", function (err, result, fields) {
//     if (err)
//         console.log(err);
//     else
//         console.log(result);
// });


module.exports = connection;