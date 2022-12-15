console.log("Welcome back, baby!");

const express = require("express");
const app = express();
const db = require("./db");

app.get('/', (req, res) => {
    res.send('Welcome Abhinav!');
});
app.post('/api', (req, res) => {
    console.log("Welcome Abhinav!");
    const today = new Date();
    const todayDate = (today.getFullYear()) + '-' + (today.getMonth() + 1) + '-' + (today.getDate());
    // const data = {
    //     name: req.body.name,
    //     age: req.body.age,
    //     batch: req.body.batch,
    //     fee: req.body.fee,
    //     mobilenumber: req.body.mobilenumber,
    //     date: todayDate
    // };
    const data = {
        name: "Rajendra",
        age: 20,
        batch: "5PM - 6PM",
        fee: 500,
        mobilenumber: 1234452890,
        date: todayDate
    };

    console.log(data);
    db.query('INSERT INTO yogaform SET ?', data, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
            res.send("Data inserted");
        }
    });

});
app.listen(5000, () => console.log("Server running on 5000"));
