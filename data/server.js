// server.js

const express = require('express');
const app = express();
const menu = require('./data/menu');

const PORT = 3000;

// Rutas básicas
app.get('/entradas', (req, res) => {
  res.json(menu.entradas);
});

app.get('/platos-fuertes', (req, res) => {
  res.json(menu['platos-fuertes']);
});

app.get('/postres', (req, res) => {
  res.json(menu.postres);
});

app.get('/bebidas', (req, res) => {
  res.json(menu.bebidas);
});

// Rutas dinámicas
app.get('/menu/:categoria', (req, res) => {
  const categoria = req.params.categoria.toLowerCase();

  if (menu[categoria]) {
    res.json(menu[categoria]);
  } else {
    res.status(404).json({ error: 'Categoría no encontrada' });
  }
});

app.get('/item/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  let itemEncontrado = null;

  for (const categoria in menu) {
    const item = menu[categoria].find(plato => plato.id === itemId);
    if (item) {
      itemEncontrado = item;
      break;
    }
  }

  if (itemEncontrado) {
    res.json(itemEncontrado);
  } else {
    res.status(404).json({ error: 'Item no encontrado' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 El Puerquito Feliz API corriendo en http://localhost:${PORT}`);
});
