const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'pegar host',
  user: 'pegar user',
  password: 'pegar pass',
  database: 'pegar data'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
