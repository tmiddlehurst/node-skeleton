var ejs            = require('ejs');
var express        = require('express');
var bodyParser 	   = require('body-parser');
var mongoose       = require('mongoose');
var router 	 	   = require('./config/routes');
var layouts		   = require('express-ejs-layouts');
var app            = express();
// var config         = require('./config/config');

app.use(express.static('public'));

// mongoose.connect(process.env.MONGOLAB_URI || config.database);
app.set('view engine', ejs);

app.use("/api", routes);

// body parser for json data
app.use(bodyParser.json());

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.render('index.html.ejs')
});

module.exports = app;

app.listen(process.env.PORT || 3000);