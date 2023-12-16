const express = require('express');
const app = express();
const mongoose = require('mongoose');
var routes = require('./route/routes');
const cors = require('cors');
app.use(cors({
    origin: '*' 
}))
mongoose.set('strictQuery', false);

app.listen(8080, function check(error) {
    if (error) {
        console.log("error");
    } else {
        console.log("started......");
    }
});

mongoose.connect("mongodb://127.0.0.1:27017/company");

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('Error connecting to DB:', err);
});

db.once('open', () => {
    console.log('Successfully Connected to DB');
});

app.use(express.json());
app.use(routes);