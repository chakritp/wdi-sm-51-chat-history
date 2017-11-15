const
	mongoose = require('mongoose'),
	videoSchema = new mongoose.Schema({
		title: {type: String, required: true},
		category: {type: String, default: "Uncategorized"},
		url: {type: String, required: true}
	}, {timestamps: true})

	module.exports = mongoose.model('Video', videoSchema)