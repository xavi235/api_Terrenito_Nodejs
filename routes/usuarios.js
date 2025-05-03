const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Definir las rutas
router.get('/', usuarioController.index);   // Obtener todos los usuarios
router.post('/', usuarioController.store);  // Crear un nuevo usuario
router.get('/:id', usuarioController.show); // Obtener un usuario por id
router.put('/:id', usuarioController.update); // Actualizar un usuario
router.delete('/:id', usuarioController.destroy); // Eliminar un usuario

module.exports = router;
