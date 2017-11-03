const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.set('views','./views')
app.set('view engine', 'ejs');

app.get('/movies', function(req,res) {
db.all(`SELECT * FROM Movies
  LEFT JOIN ProductionHouses ON Movies.id = ProductionHouses.id `,function(err,rowsmovie){
    res.render('movie',{rowsmovie});
  })
})

app.get('/movies/edit/:id',function(req,res){
  db.each(``)

})

app.get('/prodHouses', function(req,res){
  db.all(`SELECT * FROM ProductionHouses`,function(err,rows){
    res.render('productionHouse',{rows});
  })
})



app.listen(3000, function() {
  console.log(`Are you looking for me? 3000`);
})
