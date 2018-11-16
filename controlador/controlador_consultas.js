var consultas_sql = require("../modelo/consulta.js")

// luego vamos a usar el "unPedido", ahora no hace nada
// te prometo que "consuta_sql.consultar()" cuando se resuelva la promesa
function resolver_peticion(unPedido) {
  return new Promise ((resolve,reject) => {
    resolve(consultas_sql.consultar())
  })
}
exports.resolver_peticion = resolver_peticion
