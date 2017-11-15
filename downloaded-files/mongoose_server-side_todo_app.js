const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todo-spa', (err) => {
	console.log(err || 'Connected to MongoDB')
})

const todoItemSchema = new mongoose.Schema({
	task: String,
	completed: {type: Boolean, default: false}
})

const TodoItem = mongoose.model('TodoItem', todoItemSchema)

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile('client/index.html', {root: __dirname})
})

app.get('/items', (req, res)=>{
	TodoItem.find({}, (err, todoItems) => {
    res.json(todoItems)
	})
})

app.post('/items', (req, res)=>{
		TodoItem.create(req.body, (err) => {
			if(err) return console.log(err)
			res.redirect('/items')
		})
})

app.delete('/items/:id', (req, res) => {
	TodoItem.findByIdAndRemove(req.params.id, (err) => {
		if(err) return console.log(err)
		TodoItem.find({}, (err, todoItems) => {
			res.json(todoItems)
		})
	})
})

app.patch('/items/:id', (req, res) => {
	TodoItem.findById(req.params.id, (err, todoItem) => {
		todoItem.completed = !todoItem.completed
		todoItem.save((err) => {
			TodoItem.find({}, (err, todoItems) => {
				res.json(todoItems)
			})
		})
	})
})

app.listen(PORT, function(){
    console.log('Server started on port:', PORT)
})