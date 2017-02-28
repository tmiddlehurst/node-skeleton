var ejs            = require('ejs');
var express        = require('express');
var mongoose       = require('mongoose');
var layouts		   = require('express-ejs-layouts');
var app            = express();
// var config         = require('./config/config');

app.listen(process.env.PORT || 3000);

app.use(express.static('public'));

// mongoose.connect(process.env.MONGOLAB_URI || config.database);
app.set('view engine', ejs);

// var routes = require('./config/routes');
// app.use("/api", routes);

app.get('/', function(req, res){
  res.render('index.html.ejs')
});

module.exports = app;