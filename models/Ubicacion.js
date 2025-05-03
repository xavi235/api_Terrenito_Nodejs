const db = require('../config/db');

// Función para obtener todas las ubicaciones
const getUbicaciones = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM ubicacions', (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

// Función para obtener una ubicación por ID
const getUbicacionById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM ubicacions WHERE id_ubicacion = ?', [id], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]); // Retorna la ubicación encontrada
        });
    });
};

module.exports = {
    getUbicaciones,
    getUbicacionById
};
