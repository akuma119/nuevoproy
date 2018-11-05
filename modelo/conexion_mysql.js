// crea la conexion a MySQL
var mysql = require('mysql');
//var mysql = require('promise-mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "faster4me",
  database: "pruebas"
});

exports.con = con;
