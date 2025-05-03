const express = require('express');
const router = express.Router();
const propiedadesController = require('../controllers/propiedadesController');
const imagenesController = require('../controllers/imagenesController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'storage/imagenes');
    },
    filename: function (req, file, cb) {
      const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
      cb(null, uniqueName);
    }
  });
  
// Rutas para manejar las propiedades
router.get('/', propiedadesController.index); // Listar propiedades
router.post('/', propiedadesController.store); // Crear propiedad
router.get('/:id', propiedadesController.show); // Mostrar propiedad por ID
router.get('/tipo/:nombre_tipo', propiedadesController.obtenerPorTipo); // Filtrar propiedades por tipo
//router.put('/:id', propiedadesController.update); // Actualizar propiedad
//router.delete('/:id', propiedadesController.destroy); // Desactivar propiedad
const upload = multer({ dest: 'storage/imagenes/' });


module.exports = router;
