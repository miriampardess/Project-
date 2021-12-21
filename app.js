const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./rouets/api')
dotenv.config();
const app = express();
app.use(bodyParser.json())

app.get('/dea', (req, res) => {
    res.status(200).json({
        mymassage: "success",
        age: req.query.age,
    })
})
app.use(router);
let port = 3000 ;
app.listen(port, () => console.log(`Listening on http://loclhost: ${port}`));

