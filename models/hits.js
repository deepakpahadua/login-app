var mongoose = require('mongoose');

// Hit Schema
var HitSchema = mongoose.Schema({
	name: {
		type: String
	},
	count: {
		type: Number
	},
});

var Hit = module.exports = mongoose.model('Hit', HitSchema);

module.exports.createHit = function(newHit, callback){

	        newHit.save(callback);
}

module.exports.gethits = function(callback){
	var query = {"name" : 'hits'};
	Hit.findOne(query, callback);
}

module.exports.updateHit = function(callback){
		console.log('i am in hittt')
		Hit.update({ name : "hits"},{$inc : {count : 1}},callback)

}
