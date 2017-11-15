const express = require('express')
const app = express()
const PORT = 3000

var moviesArr = ['T2', 'TMNT']

app.get('/', (req, res) => { res.send('Welcome') } )
app.get('/movies', (req, res) => { res.send(moviesArr)} ) //All them movies

app.get('/movies/:id', (req, res) => {
    res.send('You want movie number:' + req.params['id'])}
) //A single movie

app.post('/movies', (req, res) => {
    moviesArr.push('good looking hero saves the world')
    res.send(moviesArr)
})

app.get('/change_name/:old/:new', (req, res)=>{
    console.log(req.params)
    res.send('old is: ' + req.params['old'] + ' new will be:' + req.params['new'] )
})

app.listen(PORT, () => {
    console.log('Server started on port', PORT)
})