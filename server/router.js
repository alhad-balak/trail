const express = require("express");

const router = express.Router()
const db = require("./db");
router.get('/', (req, res) => {
    res.send('Welcome Abhinav!');
});

router.get('/db', (req, res) => {
    db.query('SELECT * FROM form', (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

module.exports = router;