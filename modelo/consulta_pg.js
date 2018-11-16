var mod_conexion = require('./conexion_pg.js');

function hacer_consulta() {
  // una consulta sql de ejemplo
  var query_sql = "select * from celular where id_prod=3000";
  return new Promise(function (resolucion, rechazo) {
    mod_conexion.con.query(query_sql).then(resultado =>
    resolucion(resultado.rows[0]))
  })
};

// exporto la funcion de hacer consulta para
// usarla en el archivo app.js
exports.hacer_consulta = hacer_consulta;
