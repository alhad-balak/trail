const express = require('express');
const app = express();

const connection = require("./config.js");


const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


app.get('/', (req, res) => {
    connection.query("SELECT * from yogaform", function (err, result) {
        if (err)
            res.send(err);
        else {
            res.send("Hey! I am working");
        }
    });
});



app.use(express.json());
app.post("/", (req, res) => {

    const today = new Date();
    const todayDate = (today.getFullYear()) + '-' + (today.getMonth() + 1) + '-' + (today.getDate());

    const data = { ...req.body, date: todayDate };

    connection.query('INSERT INTO yogaform SET ?', data, (err, result) => {
        if (err) {
            // console.log(err);
            res.send(err);
        }
        else {
            // res.send(result);
            console.log("Data inserted into the table");
            res.send("Data inserted");
        }
    });
});


if (process.env.NODE_ENV === 'production') {
    const path = require('path');

    app.get('/', (req, res) => {
        app.use(express.static(path.join(__dirname, '../build')));
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    })
}

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

