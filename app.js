var ejs            = require('ejs');
var express        = require('express');
var mongoose       = require('mongoose');
var app            = express();
// var config         = require('./config/config');

// mongoose.connect(process.env.MONGOLAB_URI || config.database);
app.use(express.static(__dirname + '/public'));
app.set('view engine', ejs);


// var routes = require('./config/routes');
// app.use("/api", routes);

app.get('/', function(req, res){
  res.render('index.html.ejs')
});

app.listen(process.env.PORT || 3000);