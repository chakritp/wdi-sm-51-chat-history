const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000

// Connect to MongoDB
const mongodDBURL = 'mongodb://localhost/movies_api'
mongoose.connect(mongodDBURL, function(err){
    if(err){
        console.log(err)
    } else {
        console.log("Succesfully connected to", mongodDBURL)
    }
})

// Create model
const Movie = mongoose.model('Movie', {title: String, year: Number} )

app.get('/movies', (req, res)=>{
    Movie.find({}, function(err, result){
        if (err) console.log(err)
        else res.json(result)
    })
})

app.get('/movies/:id', (req, res)=>{
    Movie.findById("59d6732b1d84ec28404beb25", function(err, result){
        res.json(result)
    })
})

app.post('/movies/test', (req, res)=>{
    console.log('inside of post movie/test')
    var testMovie = new Movie({title: 'test', year: 2000})     // Create test document
    console.log('about to save testMovie')
    testMovie.save(function(err, m){
        if(err) console.log(err)
        console.log('just saved testMovie', m)    
        console.log('sending the response')
        res.send(testMovie)
        console.log('done')        
    })
    console.log("Hi :)")
})

app.listen(PORT, function() {
    console.log(`Server started on port: ${PORT}`)
})