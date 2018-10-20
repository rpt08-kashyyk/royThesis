var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('../database/propertyDB.js')


var app = express();

mongoose.connect('mongodb://localhost/propertyBookingDetails',{useNewUrlParser:true});

app.use(bodyParser.json());


 app.use(express.static(__dirname + '/../react-client/dist'));

 app.get('/api/:propertyID', (req, res) =>{
  db.findOne((data) => {
    console.log("LOG FROM SERVER : FETCHED DATA FOR ID ", data[0].propertyID);
    res.json(data);
  }, req.params.propertyID);
 });

app.listen(8000, function() {
  console.log('listening on port 8000');
});
