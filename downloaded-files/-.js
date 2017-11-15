const
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	PORT = process.env.PORT || 3001

app.use(logger('dev'))
app.use(bodyParser.json())

const berries = [
	{_id: "293849238429384", type: "Blueberry"},
	{_id: "2038947348957345", type: "Raspberry"},
	{_id: "239472342342394", type: "Elderberry"},
]

app.get('/api', (req, res) => {
	res.json({message: "api root! 🎉"})
})

app.get('/api/berries', (req, res) => {
	res.json(berries)
})

app.post('/api/berries', (req, res) => {
	console.log(req.body)
	res.json({message: "berry created..."})
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})