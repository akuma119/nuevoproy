var consultas_sql = require("../modelo/consulta.js")

function resolver_peticion(unPedido) {
  return consultas_sql.consultar()
}
