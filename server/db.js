const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "473473",
    host: "localhost",
    port: 5432,
    database: "node_psql"
})

module.exports = pool


