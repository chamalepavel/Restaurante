# Restaurante
Secciones de un menu
Que variables use y para qué?
1. const express = require('express');
e esta variable para importar el módulo Express, que nos permite crear el servidor y manejar las rutas fácilmente.

2. const app = express();
Cree una instancia de Express llamada app, que se usa para definir todas las rutas de nuestra API.

3. const PORT = 3000;
el puerto donde correrá nuestro servidor. Usamos el puerto 3000 por convención.

4. const menu = require('./data/menu');
los datos del menú desde otro archivo llamado menu.js. Este archivo contiene toda la información de los platos del restaurante.

5. const categoria = req.params.categoria.toLowerCase();
Esta variable se usa para capturar lo que el usuario escribe en la URL, por ejemplo: /menu/entradas. Convertimos la palabra a minúsculas para que siempre coincida con las categorías que tenemos guardadas.

6. const itemId = parseInt(req.params.id);
Convierte el parámetro del ID que viene como texto en un número. Lo usamos para buscar un plato por su número de ID.

7. let itemEncontrado = null;
esta variable para guardar temporalmente el plato que encontramos con ese ID, si existe
