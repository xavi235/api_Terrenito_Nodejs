const mysql = require('mysql');

const db = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
