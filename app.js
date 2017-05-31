// Modules ==============================
var express        = require('express');
var app            = express();
var bodyParser 	   = require('body-parser');

// Set Port
var port = process.env.PORT || 3000

//set up mongoose
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/takeOneDb');

//Static files location
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // For JSON data

//routes
var routes = express.Router();  
app.use('/', routes);  
require('./app/routes')(routes); // configure our routes

// Set app to listen at desired port number
app.listen(port);

module.exports = app;