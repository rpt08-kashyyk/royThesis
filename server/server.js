var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var data = require('./seed_data.js');
console.log(data.dummyData.length)
var app = express();

mongoose.connect('mongodb://localhost/propertyBookingDetails',{useNewUrlParser:true});

app.use(bodyParser.json());


 app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(8000, function() {
  console.log('listening on port 8000');
});
