const express = require('express');
const app = express();
const routes = require('./routes');

const PORT = 3000;

// Middleware JSON
app.use(express.json());

// Rutas
app.use('/', routes);

app.get('/', (req, res) => {
  res.json({
    mensaje: "API de Productos funcionando correctamente",
    rutas: {
      listar: "GET /productos",
      crear: "POST /productos",
      obtener: "GET /productos/:id",
      actualizar: "PUT /productos/:id",
      eliminar: "DELETE /productos/:id"
    }
  });
});

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
