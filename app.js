const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');


var app = express();

// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(bodyParser());
app.use(express.static(__dirname + '/tut'));
app.use('/bower_components', express.static(path.dirname(__dirname) + '/bower_components'));

// define routes
app.use(require('./todo'));

//start server
app.listen(1337,function () {
  console.log(' veikia serveris.');
});
