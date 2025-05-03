const db = require('../config/db'); // Conexión a la base de datos

// Obtener todos los tipos de propiedad
const getTipoPropiedades = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tipo_propiedads', (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

// Crear un nuevo tipo de propiedad
const createTipoPropiedad = (tipoPropiedad) => {
    return new Promise((resolve, reject) => {
        const { nombre } = tipoPropiedad;
        db.query('INSERT INTO tipo_propiedads (nombre) VALUES (?)', [nombre], (err, results) => {
            if (err) return reject(err);
            resolve(results.insertId); // Devuelve el id del tipo de propiedad creado
        });
    });
};

// Obtener un tipo de propiedad por ID
const getTipoPropiedadById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tipo_propiedads WHERE id_tipo = ?', [id], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]); // Retorna el tipo de propiedad encontrado
        });
    });
};

// Actualizar un tipo de propiedad
const updateTipoPropiedad = (id, tipoPropiedad) => {
    return new Promise((resolve, reject) => {
        const { nombre } = tipoPropiedad;
        db.query('UPDATE tipo_propiedads SET nombre = ? WHERE id_tipo = ?', [nombre, id], (err, results) => {
            if (err) return reject(err);
            resolve({ id_tipo: id, nombre });
        });
    });
};

// Eliminar un tipo de propiedad
const deleteTipoPropiedad = (id) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM tipo_propiedads WHERE id_tipo = ?', [id], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

module.exports = {
    getTipoPropiedades,
    createTipoPropiedad,
    getTipoPropiedadById,
    updateTipoPropiedad,
    deleteTipoPropiedad
};
