const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/movie.db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.set('views','./views')
app.set('view engine', 'ejs');

app.get('/movies', function(req,res) {
db.all(`SELECT * FROM Movies
  LEFT JOIN ProductionHouse ON Movies.id=ProductionHouse.id `,function(err,rowsmovie,rowsPH){
    res.render('movie',{rowsmovie},{rowsPH});
  })
})

app.get('/movies/edit/:id',function(req,res){
  db.each(``)

})

app.get('/prodHouses', function(req,res){
  db.all(`SELECT * FROM ProductionHouse`,function(err,rows){
    res.render('prodHouse',{rows});
  })
})



app.listen(3000, function() {
  console.log(`Are you looking for me? 3000`);
})
