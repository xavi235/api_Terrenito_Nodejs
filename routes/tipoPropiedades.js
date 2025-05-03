const express = require('express');
const router = express.Router();
const tipoPropiedadController = require('../controllers/tipoPropiedadController');

// Obtener todos los tipos de propiedad
router.get('/', tipoPropiedadController.index);

// Crear un nuevo tipo de propiedad
router.post('/', tipoPropiedadController.store);

// Obtener un tipo de propiedad por ID
router.get('/:id', tipoPropiedadController.show);

// Actualizar un tipo de propiedad
router.put('/:id', tipoPropiedadController.update);

// Eliminar un tipo de propiedad
router.delete('/:id', tipoPropiedadController.destroy);

module.exports = router;
