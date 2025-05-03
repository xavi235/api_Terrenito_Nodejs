const Rol = require('../models/Rol'); // Modelo de Rol

// Obtener todos los roles
const index = (req, res) => {
    Rol.getRoles()
        .then(roles => {
            res.status(200).json(roles);
        })
        .catch(err => {
            res.status(500).json({ mensaje: 'Error al obtener los roles', error: err });
        });
};

// Crear un nuevo rol
const store = (req, res) => {
    const { nombre, descripcion } = req.body;

    // Validar los datos de entrada
    if (!nombre || nombre.length > 255) {
        return res.status(400).json({ mensaje: 'El nombre es obligatorio y debe ser único' });
    }

    if (descripcion && descripcion.length > 255) {
        return res.status(400).json({ mensaje: 'La descripción no puede exceder 255 caracteres' });
    }

    // Crear el rol en la base de datos
    Rol.createRol({ nombre, descripcion })
        .then((idRol) => {
            res.status(201).json({ id_rol: idRol, nombre, descripcion });
        })
        .catch(err => {
            res.status(500).json({ mensaje: 'Error al crear el rol', error: err });
        });
};

// Obtener un rol por ID
const show = (req, res) => {
    const { id } = req.params;

    Rol.getRolById(id)
        .then(rol => {
            if (!rol) {
                return res.status(404).json({ mensaje: 'Rol no encontrado' });
            }
            res.status(200).json(rol);
        })
        .catch(err => {
            res.status(500).json({ mensaje: 'Error al obtener el rol', error: err });
        });
};

// Actualizar un rol
const update = (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    // Validar los datos de entrada
    if (nombre && nombre.length > 255) {
        return res.status(400).json({ mensaje: 'El nombre no puede exceder 255 caracteres' });
    }

    Rol.getRolById(id)
        .then(rol => {
            if (!rol) {
                return res.status(404).json({ mensaje: 'Rol no encontrado' });
            }

            // Actualizar los datos
            rol.nombre = nombre || rol.nombre;
            rol.descripcion = descripcion || rol.descripcion;

            return Rol.updateRol(id, rol);
        })
        .then(updatedRol => {
            res.status(200).json(updatedRol);
        })
        .catch(err => {
            res.status(500).json({ mensaje: 'Error al actualizar el rol', error: err });
        });
};

// Eliminar un rol
const destroy = (req, res) => {
    const { id } = req.params;

    Rol.getRolById(id)
        .then(rol => {
            if (!rol) {
                return res.status(404).json({ mensaje: 'Rol no encontrado' });
            }

            // Eliminar el rol
            return Rol.deleteRol(id);
        })
        .then(() => {
            res.status(204).send(); // No content
        })
        .catch(err => {
            res.status(500).json({ mensaje: 'Error al eliminar el rol', error: err });
        });
};

module.exports = {
    index,
    store,
    show,
    update,
    destroy
};
