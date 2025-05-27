const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'byn86ln264izy3ppnkdt-mysql.services.clever-cloud.com',
  user: 'ukgvixfa1lq6nvxm',
  password: '11HASD8AmwZjSw1yXJnO',
  database: 'byn86ln264izy3ppnkdt'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
