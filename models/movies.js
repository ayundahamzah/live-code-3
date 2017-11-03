const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db')


class Movie {

  static findAll(callback){
    let query = `SELECT M.*, P.name_prodHouse
                   FROM Movies AS M
                   LEFT JOIN ProductionHouses AS P
                   ON P.id = M.prodHouseId`
    db.all(query, function(err,rowsMovie){
      if(!err) {
            callback(null,{rowsMovie});
          } else {
            console.log(err)
          }
        })




    }


  }
  // app.get('/movies', function(req,res) {
  //   let query = `SELECT M.*, P.name_prodHouse
  //                FROM Movies AS M
  //                LEFT JOIN ProductionHouses AS P
  //                ON P.id = M.prodHouseId`
  //
  //   db.all(query, function(err,rowsMovie) {
  //     if(!err) {
  //       res.render('movie', {dataMovie: rowsMovie});
  //     } else {
  //       res.send(err)
  //     }
  //   })
  // })







module.exports = Movie
