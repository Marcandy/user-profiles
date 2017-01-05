var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

var config = require('./config.js');
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');

var app = express();


var corsOptions = {
  origin: 'http://localhost:4000'
}

app.use(cors(corsOptions));


app.use(bodyParser());
app.use(session({ secret: config.sessionSecret }));



app.listen(4000);