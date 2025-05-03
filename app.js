const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); // Importar path
const propiedadesRoutes = require('./routes/propiedades');
const imagenesRoutes = require('./routes/imagenes');
const usuariosRoutes = require('./routes/usuarios');
const rolesRoutes = require('./routes/roles');
const ubicacionesRoutes = require('./routes/ubicaciones');
const tipoPropiedadesRoutes = require('./routes/tipoPropiedades');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Definir las rutas para las propiedades e imágenes
app.use('/api/propiedades', propiedadesRoutes);
app.use('/api/imagenes', imagenesRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/ubicaciones', ubicacionesRoutes);
app.use('/api/tipo-propiedades', tipoPropiedadesRoutes);

// Ruta estática para las imágenes (correcta, sin duplicados)
app.use('/storage', express.static(path.join(__dirname, 'storage')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
