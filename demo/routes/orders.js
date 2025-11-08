// Importamos las librerías necesarias
const express = require('express') // Express.js para manejo de rutas
const router = express.Router() // Creamos un router Express

// Importamos el controlador de pedidos
const ordersController = require('../controllers/ordersController')

// Definimos la especificación de Swagger para la entidad Order
/**
 * @swagger
 * components:
 *  schemas:
 *    Order: { ... }
 */

// Endpoint para crear un nuevo pedido
/**
 * @swagger
 * /api/orders:
 *  post:
 *    ...
 */
router.post('/', ordersController.create) // Asociamos el controlador de creación de pedidos

// Endpoint para obtener la lista de pedidos
/**
 * @swagger
 * /api/orders:
 *  get:
 *    ...
 */
router.get('/', ordersController.readAll) // Asociamos el controlador de lectura de todos los pedidos

// Endpoint para actualizar un pedido específico
/**
 * @swagger
 * /api/orders/{id}:
 *  put:
 *    ...
 */
router.put('/:id', ordersController.update) // Asociamos el controlador de actualización de un pedido

// Endpoint para eliminar un pedido específico
/**
 * @swagger
 * /api/orders/{id}:
 *  delete:
 *    ...
 */
router.delete('/:id', ordersController.delete) // Asociamos el controlador de eliminación de un pedido

// Endpoint para buscar pedidos con varios filtros
/**
 * @swagger
 * /api/orders/search:
 *  get:
 *    ...
 */
router.get('/search', ordersController.filter) // Asociamos el controlador de búsqueda con filtros

// Endpoint para obtener información de un pedido específico
/**
 * @swagger
 * /api/orders/{id}:
 *  get:
 *    ...
 */
router.get('/:id', ordersController.readOne) // Asociamos el controlador de lectura de un pedido específico

// Exportamos el router
module.exports = router // Exportamos el router para usarlo en otras partes de la aplicación