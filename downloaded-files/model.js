const
	mongoose = require('mongoose'),
	artistSchema = new mongoose.Schema({
		name: String,
		bio: String,
		photo: String
	})

module.exports = mongoose.model('Artist', artistSchema)