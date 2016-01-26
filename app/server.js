
// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var routes = require('./routes/bear');

mongoose.connect('mongodb://localhost/teste');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port




//require('routes')(app);
require('./bears')(app);



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api




// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

exports = module.exports = app;