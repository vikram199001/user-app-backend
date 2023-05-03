const mysql = require("mysql")
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: 'users_db'
});

module.exports = { connection }