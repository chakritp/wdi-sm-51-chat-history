const
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	PORT = 3000,
	httpClient = require('request'),
	giphyApiKey = 'RAzF1SYfgLVKyj8u9FGzYv9mmnsLzp2b'

app.get('/search', (req, res) => {
	var apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=RAzF1SYfgLVKyj8u9FGzYv9mmnsLzp2b&limit=25&offset=0&rating=G&lang=en&q=' + req.query.term
	
	httpClient.get(apiUrl, (err, response, body) => {
		var data = JSON.parse(body)
		var results = ``
		for(var i = 0; i < data.data.length; i += 1) {
			var imageUrl = data.data[i].images.original.url
			var imgTag = `<img src="${imageUrl}" />`
			results += imgTag
		}
		res.send(results)
	})
})

app.get('/random', (req, res) => {
	var apiUrl = 'https://api.giphy.com/v1/gifs/random?api_key=RAzF1SYfgLVKyj8u9FGzYv9mmnsLzp2b&tag=&rating=G'


	httpClient.get(apiUrl, (err, response, body) => {
		var data = JSON.parse(body)
		var imgUrl = data.data.image_url
		res.send(`<img src="${imgUrl}" />`)
	})
})

app.get('/test', (req, res) => {
	var issAPIUrl = 'http://api.open-notify.org/iss-now.json'
	httpClient.get(issAPIUrl, (err, response, body) => {
		var data = JSON.parse(body)
		res.send(`<h1>ISS Position: ${data.iss_position.latitude}, ${data.iss_position.longitude}</h1>`)
	})
})

app.get('/reddit', (req, res) => {
	var redditAPIUrl = 'https://www.reddit.com/r/funny.json'
	httpClient.get(redditAPIUrl, (err, response, body) => {
		var data = JSON.parse(body)
		var latestTitle = data.data.children[0].data.title
		res.send(response)
	})
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on ${PORT} 🎉`)
})