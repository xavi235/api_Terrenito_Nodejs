const Usuario = require('../models/Usuario');

const index = async (req, res) => {
    try {
        const usuarios = await Usuario.getUsuarios();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al obtener los usuarios', error: err });
    }
};

const store = async (req, res) => {
    try {
        const { nombre_usuario, correo, contraseña, contacto, id_rol } = req.body;

        // Aquí podrías agregar la validación de la contraseña (encriptarla con bcrypt, por ejemplo)
        
        const usuarioId = await Usuario.createUsuario({ nombre_usuario, correo, contraseña, contacto, id_rol });
        res.status(201).json({
            mensaje: 'Usuario creado correctamente',
            id_usuario: usuarioId
        });
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al crear el usuario', error: err });
    }
};

const show = async (req, res) => {
    try {
        const usuario = await Usuario.getUsuarioById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al obtener el usuario', error: err });
    }
};

const update = async (req, res) => {
    try {
        const usuario = await Usuario.getUsuarioById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        
        const { nombre_usuario, correo, contraseña, contacto, id_rol } = req.body;
        
        await Usuario.updateUsuario(req.params.id, { nombre_usuario, correo, contraseña, contacto, id_rol });
        res.json({ mensaje: 'Usuario actualizado correctamente' });
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al actualizar el usuario', error: err });
    }
};

const destroy = async (req, res) => {
    try {
        const usuario = await Usuario.getUsuarioById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        await Usuario.deleteUsuario(req.params.id);
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al eliminar el usuario', error: err });
    }
};

module.exports = {
    index,
    store,
    show,
    update,
    destroy
};
