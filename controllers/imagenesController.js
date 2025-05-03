const db = require('../config/db'); // Conexión a la base de datos

// Obtener todas las imágenes
exports.index = (req, res) => {
  db.query('SELECT * FROM imagenes', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Almacenar una nueva imagen
exports.store = (req, res) => {
  const { ruta_imagen, id_propiedad } = req.body;

  if (!ruta_imagen || !id_propiedad) {
    return res.status(400).json({ error: 'Se requiere la ruta de la imagen y la propiedad asociada.' });
  }

  // Validar si la propiedad existe
  db.query('SELECT * FROM propiedads WHERE id_propiedad = ?', [id_propiedad], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) {
      return res.status(404).json({ error: 'La propiedad no existe.' });
    }

    // Crear la imagen
    db.query('INSERT INTO imagenes (ruta_imagen, id_propiedad) VALUES (?, ?)', [ruta_imagen, id_propiedad], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Imagen creada correctamente', id_imagen: result.insertId });
    });
  });
};

// Obtener una imagen por ID
exports.show = (req, res) => {
  const id = req.params.id;

  db.query('SELECT * FROM imagenes WHERE id_imagen = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Imagen no encontrada.' });
    res.json(results[0]);
  });
};

// Actualizar una imagen
exports.update = (req, res) => {
  const id = req.params.id;
  const { ruta_imagen, id_propiedad } = req.body;

  db.query('SELECT * FROM imagenes WHERE id_imagen = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Imagen no encontrada.' });

    // Actualizar la imagen
    db.query('UPDATE imagenes SET ruta_imagen = ?, id_propiedad = ? WHERE id_imagen = ?', [ruta_imagen, id_propiedad, id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Imagen actualizada correctamente' });
    });
  });
};

// Eliminar una imagen
exports.destroy = (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM imagenes WHERE id_imagen = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Imagen no encontrada.' });
    res.status(204).send(); // No content
  });
};
