const express = require('express');
const router = express.Router();
const imagenesController = require('../controllers/imagenesController');

// Definir las rutas para imágenes
router.get('/', imagenesController.index);        // Listar todas las imágenes
router.post('/', imagenesController.store);       // Crear una nueva imagen
router.get('/:id', imagenesController.show);      // Mostrar una imagen por su ID
router.put('/:id', imagenesController.update);    // Actualizar una imagen
router.delete('/:id', imagenesController.destroy); // Eliminar una imagen

module.exports = router;
