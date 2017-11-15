const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

var todoItems = [
    {task: 'buy milk', completed: true},
    {task: 'sell ps4', completed: false},
]

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile('client/index.html', {root: __dirname})
})

app.get('/items', (req, res)=>{
    res.json(todoItems)
})

app.post('/items', (req, res)=>{
    console.log(req.body) // the item
    todoItems.push(req.body) // add item to list
    res.json(todoItems)
})

app.delete('/items/:index', (req, res) => {
	// remove a portion of the array, using the index:
	todoItems.splice(req.params.index, 1)
	res.json(todoItems)
})

app.listen(PORT, function(){
    console.log('Server started on port:', PORT)
})