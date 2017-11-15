const
	express = require('express'),
	videosRouter = new express.Router(),
	Video = require('../models/Video.js')

videosRouter.get('/', (req, res) => {
	Video.find({}, (err, videos) => {
		if(err) return console.log(err)
		res.json(videos)
	})
})

module.exports = videosRouter