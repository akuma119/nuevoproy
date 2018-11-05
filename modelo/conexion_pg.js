// solo crea la conexion a la base de datos
// este sirve para PostgreSQL
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'faster4me',
  port: 5432,
})

exports.con = pool
