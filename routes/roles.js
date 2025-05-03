const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');

// Obtener todos los roles
router.get('/', rolController.index);

// Crear un nuevo rol
router.post('/', rolController.store);

// Obtener un rol por ID
router.get('/:id', rolController.show);

// Actualizar un rol
router.put('/:id', rolController.update);

// Eliminar un rol
router.delete('/:id', rolController.destroy);

module.exports = router;
