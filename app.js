const express = require('express')
const app = app.express()
const bodyParser = require('body-parser')

app.set('view','./views')
app.set('view engine', 'ejs');




app.get('/movies',function(req,res){
  res.render('movies')
})

app.get('/prodHouse',),function(req,res){
  res.render('productionHouse')
})







app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
