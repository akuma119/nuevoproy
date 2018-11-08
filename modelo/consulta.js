var consulta_especifico = require("./consulta_mysql");
//var consulta_especifico = require("./consulta_pg");

function consultar() {
  return consulta_especifico.consultar()
};

// exporto la funcion de hacer consulta para
// usarla en el archivo app.js
exports.consultar = consultar;
