const db = require('../config/db');
const Rol = require('./Rol');

const getUsuarios = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios', (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

const getUsuarioById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]); // Retorna el usuario encontrado
        });
    });
};

const getUsuarioByCorreo = (correo) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios WHERE correo = ?', [correo], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]); // Devuelve un único usuario
        });
    });
};


const createUsuario = (usuario) => {
    return new Promise((resolve, reject) => {
        const { nombre_usuario, correo, contraseña, contacto, id_rol } = usuario;
        db.query('INSERT INTO usuarios (nombre_usuario, correo, contraseña, contacto, id_rol) VALUES (?, ?, ?, ?, ?)', 
            [nombre_usuario, correo, contraseña, contacto, id_rol], (err, results) => {
            if (err) return reject(err);
            resolve(results.insertId);
        });
    });
};

module.exports = {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    getUsuarioByCorreo
};
