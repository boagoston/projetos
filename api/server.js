
// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');


mongoose.connect('mongodb://localhost/teste');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port





// Error Handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

routes = require('./routes')(app);
app.use('/api', router);

exports = module.exports = app;


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);