var express=require('express');
const bodyParser = require('body-parser');
var cors=require('cors');

var app= express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

const { mongoose } = require('./db.js');
var expense= require('./controllers/expenseController');

app.listen(8080,console.log("Port Listening"));
app.use('/',expense);