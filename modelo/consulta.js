// traigo la conexion a la base de datos
// creada en el modulo conexion_pg.js
var mod_conexion = require('./conexion_pg.js');

function hacer_consulta() {
  // una consulta sql de ejemplo
  var query_sql = "select * from celular where id_prod=3000";
  return mod_conexion.con.query(query_sql);
};

// exporto la funcion de hacer consulta para
// usarla en el archivo app.js
exports.hacer_consulta = hacer_consulta;
