var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Properties = require('../database/propertyDB.js')

mongoose.connect('mongodb://localhost/propertyBookingDetails',{useNewUrlParser:true});

var seedDb = function(data) {
  // we have the dummy data here. Now we need to insert data into mongo.
  //use insertMany function of stories
  //call insert many to save all mapped documents to db
  Properties.insertMany(data);
  return;
};



seedDb(data.dummyData);
