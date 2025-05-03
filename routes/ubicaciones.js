const express = require('express');
const router = express.Router();
const ubicacionController = require('../controllers/ubicacionController');

// Obtener todas las ubicaciones
router.get('/', ubicacionController.index);

// Crear una nueva ubicación
router.post('/', ubicacionController.store);

// Obtener una ubicación por ID
router.get('/:id', ubicacionController.show);

// Actualizar una ubicación
router.put('/:id', ubicacionController.update);

// Eliminar una ubicación
router.delete('/:id', ubicacionController.destroy);

module.exports = router;
