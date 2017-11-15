const express = require('express')
const app = express()
const PORT = 3000

var booksList = [
    {title: 'bible'}, {title: 'dianetics'}, {title: 'torah'}]

app.get('/', (req, res) => {
    res.sendFile('client/index.html', {root: __dirname})
})

app.post('/books', (req, res)=>{
    booksList.push({title: 'romantic novel'})
    res.json(booksList)
})

app.get('/books', (req, res)=>{
    res.json(booksList)
})

app.listen(PORT, function(){
    console.log("Server started on port:", PORT)
})