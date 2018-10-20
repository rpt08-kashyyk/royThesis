var mongoose = require('mongoose');

var propertySchema = new mongoose.Schema({
propertyID: Number,
lattitude: Number,
longitude: Number,
dailyRent: Number,
cleaningFees: Number,
serviceFees: Number,
taxesAndFees: Number,
randomPriceDeal: String,
existingReservations: [{startDate:Date,endDate:Date}]
});

var PropertyModel = mongoose.model('Property', propertySchema);

// findAll retrieves all stories
function findAll() {
   return new Promise(function(resolve, reject){
    PropertyModel.find({}, function(err, docs) {
      if(err) reject(err);
      resolve(docs);
    });
  })/*.then(function(docs) {
    console.log(LOG FROM SERVER : FOUND SO MANY STOREIES ",docs.length);
    return docs;
  });*/
}



// findOne will retrieve the Property associated with the given id
function findOne(id) {
   return new Promise(function(resolve, reject){
    PropertyModel.find({propertyID: id}, function(err, docs){
      if (err) reject(err);
      resolve(docs);
    });
  })/*.then(function(docs){
    console.log("LOG FROM SERVER : FOUND ONE Property");
    return docs;
  })*/

}

// insertOne inserts a Property into the db
function insertOne(Property, callback) {
   return new Promise(function(resolve, reject) {
    PropertyModel.create(Property, function(err){
      if (err) reject(err);
    }).then(function(){
      console.log("LOG FROM SERVER : INSERTED ONE Property");
    });
  });
}

//insert many documents to db at once
function insertMany(PropertyObjArray) {
   console.log("inside inerst many ", PropertyModel,PropertyObjArray.length);
   return new Promise(function(resolve, reject){
    PropertyModel.insertMany(PropertyObjArray, function(err){
      if (err) reject(err);
      resolve(PropertyObjArray)
    }).then(function(data){
      console.log("LOG FROM SERVER : INSERTED SO MANY DOCUMENTS TO DB ", data.length);
    });
  });

}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
exports.insertMany = insertMany;

