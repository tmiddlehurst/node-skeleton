var mongoose = require('mongoose');
var scheme = mongoose.Schema;

var StudentSchema = new Schema({
	name: String,
	quote: String
});

module.exports = mongoose.model('Student' StudentSchema);