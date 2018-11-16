// descomentar el que vamos a usar (postgre o mysql)
//var consulta_especifico = require("./consulta_mysql.js");
var consulta_especifico = require("./consulta_pg.js");


function consultar() {
  return new Promise((resolve,reject) => {
    resolve(consulta_especifico.hacer_consulta())
    reject("hubo un error!")
  })
};
// ASI NO ANDA:
/*
  function consultar() {
    return consulta_especifico.hacer_consulta()
  }
*/

// exporto la funcion de hacer consulta para
// usarla en el archivo app.js
exports.consultar = consultar;
