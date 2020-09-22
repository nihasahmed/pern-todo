const Pool = require("pg").Pool;

pool = new Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  port: "5432",
  database: "testapp",
});

module.exports = pool;
