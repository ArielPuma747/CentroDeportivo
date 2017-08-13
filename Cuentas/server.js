// Dependencies
// -----------------------------------------------------
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var methodOverride  = require('method-override');
var app = express();

// Express Configuration
// -----------------------------------------------------
// Sets the connection to MongoDB
mongoose.connect('mongodb://localhost:27017/cuentas', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

app.listen(2000, function() {  
    console.log('App listening on port 2000');
});