const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "kyungmin",
  database: "myapp",
});

exports.pool = pool;
