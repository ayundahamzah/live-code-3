const express = require('express');
const router = express.Router()


//require file model
const Movie = require('../models/movies');


router.get('/', function(req,res){
  Movie.findAll((function(err,rowsMovie){
    res.render('movies',{rowsMovie:req.body})
  })
  )
})


module.exports= router
