var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema ({

	uid: {
		type: String,
		required: true,
		unique: true
	}
	// username: {
	// 	type: String,
	// 	required: true,
	// 	unique: true
	// },
	// email: {
	// 	type: String,
	// 	required: true,
	// 	unique: true
	// },
	// password: {
	// 	type: String,
	// 	required: true,
	// 	unique: true
	// },
	// profileImage: {
	// 	type: String
	// },
	// bands: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Band' }]
		
});

module.exports = mongoose.model('User', UserSchema)