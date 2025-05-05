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
  

router.get('/', propiedadesController.index);
router.post('/', propiedadesController.store);
router.get('/:id', propiedadesController.show);
router.get('/tipo/:nombre_tipo', propiedadesController.obtenerPorTipo);
//router.put('/:id', propiedadesController.update);
//router.delete('/:id', propiedadesController.destroy);
const upload = multer({ dest: 'storage/imagenes/' });


module.exports = router;
