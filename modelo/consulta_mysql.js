var mod_conexion = require('./conexion_mysql.js');

function hacer_consulta() {
  // una consulta sql de ejemplo
  var query_sql = "select * from celular where id_prod=3000";
  return mod_conexion.con.then(
    function(conn) {
      return conn.query(query_sql);
    }
  );
};
function consultar() {
  hacer_consulta().then((res) => {
    //console.log(res)
    return res
  })
}

// exporto la funcion de hacer consulta para
// usarla en el archivo app.js
exports.hacer_consulta = hacer_consulta;
exports.consultar = consultar
