var mongoose = require('mongoose');

// Hit Schema
var HitSchema = mongoose.Schema({
	hits: {
		type: Number
	}
});

var Hit = module.exports = mongoose.model('Hit', HitSchema);

module.exports.gethits = function(callback){
	var query = {};
	User.findOne(query, callback);
}

module.exports.saveHit = function(callback){
  Hit.find({}, function(hits){
  console.log(hits);
  })
}
