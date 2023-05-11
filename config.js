const mysql = require("mysql")
const connection = mysql.createConnection({
  host: 'mysql',
  user: process.env.MYSQLDB_USER || 'root',
  port: process.env.MYSQL_LOCAL_PORT || '3306',
  password: process.env.MYSQL_ROOT_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'users_db',
});

module.exports = { connection }