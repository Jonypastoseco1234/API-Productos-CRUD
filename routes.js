const express = require('express');
const router = express.Router();
let productos = require('./data');

// 🔹 GET - Listar todos los productos
router.get('/productos', (req, res) => {
  res.status(200).json(productos);
});

// 🔹 GET - Obtener producto por ID
router.get('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.status(200).json(producto);
});

// 🔹 POST - Crear producto
router.post('/productos', (req, res) => {
  const { nombre, precio, categoria } = req.body;

  // Validaciones
  if (!nombre || precio === undefined) {
    return res.status(400).json({ error: "Nombre y precio son obligatorios" });
  }

  if (typeof precio !== "number") {
    return res.status(400).json({ error: "El precio debe ser un número" });
  }

  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    precio,
    categoria
  };

  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// 🔹 PUT - Actualizar producto
router.put('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  const { nombre, precio, categoria } = req.body;

  if (precio !== undefined && typeof precio !== "number") {
    return res.status(400).json({ error: "El precio debe ser un número" });
  }

  producto.nombre = nombre ?? producto.nombre;
  producto.precio = precio ?? producto.precio;
  producto.categoria = categoria ?? producto.categoria;

  res.status(200).json(producto);
});

// 🔹 DELETE - Eliminar producto
router.delete('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const existe = productos.find(p => p.id === id);

  if (!existe) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  productos = productos.filter(p => p.id !== id);
  res.status(200).json({ mensaje: "Producto eliminado correctamente" });
});

module.exports = router;
