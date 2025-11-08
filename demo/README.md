![Banner](./../images/banner.png)

# PROYECTO 4: Demo

**DEMO EN PRODUCCIÓN:** [LINK](https://sevenm-fullstack-m4-proy.onrender.com/)

En esta demo, se desarrolló una plataforma de pedidos de comida en línea utilizando Node.js y Express como backend.

La plataforma permitirá a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en sus pedidos y aplicar filtros de búsqueda para encontrar pedidos específicos.

La API también será documentada utilizando Swagger y OpenAPI, y la aplicación se desplegará en Render.

## Planteamiento

Los restaurantes en línea enfrentan desafíos en la gestión de sus pedidos y la comunicación con sus clientes. Necesitan una solución que les permita administrar fácilmente los pedidos de comida y ofrecer una experiencia de usuario eficiente y confiable.

Por ello, la necesidad en esta industria con aplicaciones web es latente, y, se requiere una infraestructura `Backend` sólida para manejar correctamente todos los movimientos del negocio, puntualmente la logística de pedidos.

## Requerimientos

-   Utilizar Node.js y Express para el desarrollo del servidor.
-   Implementar los siguientes 4 endpoints:

| Descripción                                    | Método | Endpoint                             | Caso de uso                           |
| ---------------------------------------------- | ------ | ------------------------------------ | ----- |
| Obtener información de un pedido específico    | GET    | /api/pedidos/:id                     | Como empleado del restaurante, necesito verificar los detalles del pedido del cliente que acaba de llamar para confirmar su orden.                                                                      | Su número de pedido es 12345. |
| Actualizar información de un pedido específico | PUT    | /api/pedidos/:id                     | Como cliente, necesito cambiar mi pedido en el restaurante "La buena mesa". Originalmente ordené una pizza margherita, pero ahora deseo cambiarla por una pizza hawaiana. Mi número de pedido es 12345. |
| Eliminar un pedido específico                  | DELETE | /api/pedidos/:id                     | Como cliente, tuve un cambio de planes y ya no necesito el pedido que hice en el restaurante "La buena mesa". Mi número de pedido es 12345.                                                             |
| Filtrar pedidos por restaurante                | GET    | /api/pedidos?restaurante=RESTAURANTE | Como gerente de una cadena de restaurantes, quiero ver todos los pedidos para "La buena mesa" para la próxima semana.                                                                                   |

-   Documentar todos los endpoints utilizando Swagger y OpenAPI, incluyendo parámetros, respuestas y ejemplos de uso.
-   Configurar el proyecto para el despliegue en Render.

## Usar el proyecto

-   Clona este repositorio: https://github.com/UDDBootcamp/7M_FULLSTACK_M4_PROY.git
-   Sitúate en la carpeta de "demo".

```
$ cd demo
```

-   Instala las dependencias

```
$ npm install
```

-   Asegúrate de tener un archivo `.env` con las variables de entorno. En este caso, configuraré de esta forma:

```
PORT=3005
SERVER_URL=http://localhost:3005
```

-   Levanta el proyecto:

```
$ npm run dev
```

-   Accede al proyecto a través del navegador. Si te encuentras en el puerto 9000, deberías acceder a `localhost:9000/`. Recuerda que también puedes usar otros clientes para manejo de datos.

Cuando accedas al sitio, verás está página:

![](./../images/swagger2.gif)

Cada uno de los rectángulos permite ejecutar diferentes procesos. En la imagen de arriba, se presiona el botón de "Try it out" para activar el área de edición, y luego, usamos "Execute", el cual permite ejecutar una petición al servidor y recibir la respuesta del mismo.

Esta interfaz aparece porque integramos `Swagger UI`, lo cual simula un cliente como "Postman". Se utiliza principalmente para documentación dentro de equipos grandes para confirmar funcionamiento y diferentes ejemplos.

## Detalles de la implementación

En esta demo, se realizaron diferentes actividades:

-   Definición de arquitectura de carpetas.

```

├─ demo
│ ├─ .env
│ ├─ .env.example
│ ├─ .prettierrc
│ ├─ README.md
│ ├─ controllers
│ │ └─ ordersController.js
│ ├─ package-lock.json
│ ├─ package.json
│ ├─ routes
│ │ └─ orders.js
│ └─ server.js

```

-   Uso de `package.json` para establecer dos scripts. `start` para usarlo en producción y `dev` para ambiente de desarrollo.

```
{
    "name": "demo",
    "version": "1.0.0",
    "description": "Order Management API",
    "main": "index.js",
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js"
    },
    "keywords": [],
    "author": "Mike Nieva. Powered by Ucamp.",
    "license": "ISC",
    "dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^16.0.3",
        "express": "^4.18.2",
        "nodemon": "^2.0.22",
        "swagger-jsdoc": "^6.2.8",
        "swagger-ui-express": "^4.6.2"
    }
}

```

-   Uso de un archivo `.env`, el cual puedes encontrarlo en el `.env.example`, que funciona como ejemplo para indicar las variables de entorno que necesitas para correr el proyecto.

-   Uso de `.gitignore` para establecer los archivos y carpetas que serán ignorados por el proceso que GIT realiza.

-   Instalación de estas depedendencias:

    -   **cors (v2.8.5):** CORS es un paquete de Node.js que proporciona un middleware para habilitar CORS (Intercambio de Recursos de Origen Cruzado) en tus aplicaciones Express. CORS es una especificación de W3C que permite a un servidor relajar las restricciones Same-Origin, que normalmente impiden que los scripts de un origen accedan y manipulen recursos de otro origen.

    -   **dotenv (v16.0.3):** Dotenv es una librería de Node.js que permite cargar variables de entorno de un archivo .env en process.env. Esto es útil para ocultar datos sensibles (como claves API, contraseñas de base de datos, etc.) y para manejar configuraciones específicas del entorno.

    -   **express (v4.18.2):** Express.js es un framework web para Node.js que proporciona un conjunto robusto de características para desarrollar aplicaciones web y móviles. Facilita la construcción de aplicaciones con diversas características, como el enrutamiento, el manejo de solicitudes HTTP, la configuración de middleware, etc.

    -   **nodemon (v2.0.22):** Nodemon es una utilidad que monitorea los cambios en tu código fuente y reinicia automáticamente tu servidor. Es especialmente útil durante el desarrollo, ya que no necesitas detener y reiniciar tu servidor cada vez que hagas un cambio en tu código.

    -   **swagger-jsdoc (v6.2.8):** Swagger JSDoc es una librería de Node.js que permite generar una documentación Swagger (OpenAPI) para tu aplicación Express a partir de comentarios JSDoc en tu código fuente. Esto facilita la creación y el mantenimiento de la documentación de tu API.

    -   **swagger-ui-express (v4.6.2):** Swagger UI Express es una librería que permite servir la interfaz de usuario de Swagger desde tu aplicación Express. Swagger UI proporciona una interfaz gráfica interactiva para explorar y probar tu API basada en la documentación Swagger (OpenAPI) de tu API.

-   Integración de un archivo llamado `.prettierrc`, el cual se utiliza junto con la extensión de [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) en VS Code, para realizar formato de código.

-   Uso de `server.js` como acceso principal.

```javascript
// Importamos las librerías necesarias
const express = require('express') // Express.js para la creación del servidor
const cors = require('cors') // CORS para permitir solicitudes de origen cruzado
const swaggerUI = require('swagger-ui-express') // swagger-ui-express para la interfaz de documentación de la API
const swaggerJsDoc = require('swagger-jsdoc') // swagger-jsdoc para generar la documentación a partir de comentarios en el código
const path = require('path') // path para trabajar con rutas de archivos y directorios

// Cargamos las variables de entorno del archivo .env
require('dotenv').config()

// Definimos el puerto de la aplicación
const port = process.env.PORT || 3005

// Definimos la URL del servidor que se utilizará en la configuración de Swagger
// Si la variable de entorno SERVER_URL no está definida, usamos 'http://localhost:{port}' por defecto
const serverUrl = process.env.SERVER_URL || `http://localhost:${port}`

// Configuramos las opciones para swaggerJsDoc
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node API for Order Management',
            version: '1.0.0',
        },
        servers: [
            {
                url: serverUrl,
            },
        ],
    },
    // Ruta de los archivos donde se buscarán los comentarios para generar la documentación
    apis: [`${path.join(__dirname, './routes/*.js')}`],
}

// Generamos la documentación de la API
const swaggerDocs = swaggerJsDoc(swaggerOptions)

// Creamos una nueva aplicación Express
const app = express()

// Añadimos el middleware CORS a la aplicación
app.use(cors())
// Añadimos el middleware para parsear el cuerpo JSON de las solicitudes
app.use(express.json())

// Definimos las rutas de la API
app.use('/api/orders', require('./routes/orders')) // Rutas para '/api/orders'
// Servimos la interfaz de usuario de Swagger con la documentación generada en la ruta raíz
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

// Iniciamos el servidor en el puerto definido
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))
```

-   Uso de una ruta `./routes/orders.js`. En esta, se aplica `Swagger` para establecer la documentación. Lo que parece que es comentario, no lo es. Es la indicación de que `Swagger` se ejecute ahí mismo y lea las diferentes rutas con sus controladores. Accede al archivo y revísalo con cuidado.

```javascript
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
```

-   Uso de controlador con `./controllers/ordersController.js`

```javascript
// Inicializamos los pedidos
let orders = [ ... ]

// a. Crear pedido
exports.create = async (req, res) => {
    const newOrder = req.body // Obtenemos la información del pedido desde el cuerpo de la solicitud
    newOrder.id = orders.length + 1 // Asignamos un ID al pedido
    orders.push(newOrder) // Agregamos el pedido a la lista de pedidos

    res.status(201).json({ // Respondemos con un código de estado 201 (Created) y el nuevo pedido
        msg: 'Pedido creado con éxito.',
        data: newOrder,
    })
}

// b. Obtener la lista de pedidos
exports.readAll = async (req, res) => {
    res.json({ // Respondemos con la lista de pedidos
        msg: 'Pedidos obtenidos con éxito.',
        data: orders,
    })
}

// c. Obtener información de un pedido específico
exports.readOne = async (req, res) => {
    const orderId = parseInt(req.params.id) // Obtenemos el ID del pedido desde los parámetros de la ruta
    const order = orders.find((o) => o.id === orderId) // Buscamos el pedido en la lista de pedidos

    if (!order) { // Si no encontramos el pedido, respondemos con un código de estado 404 (Not Found)
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    res.json({ // Si encontramos el pedido, respondemos con el pedido
        msg: 'Pedido obtenido con éxito.',
        data: order,
    })
}

// d. Actualizar información de un pedido específico
exports.update = async (req, res) => {
    const orderId = parseInt(req.params.id) // Obtenemos el ID del pedido desde los parámetros de la ruta
    const orderIndex = orders.findIndex((o) => o.id === orderId) // Buscamos el índice del pedido en la lista de pedidos

    if (orderIndex === -1) { // Si no encontramos el pedido, respondemos con un código de estado 404 (Not Found)
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    orders[orderIndex] = { ...orders[orderIndex], ...req.body } // Actualizamos el pedido con la información del cuerpo de la solicitud

    res.json({ // Respondemos con el pedido actualizado
        msg: 'Pedido actualizado con éxito.',
        data: orders[orderIndex],
    })
}

// e. Eliminar un pedido específico
exports.delete = async (req, res) => {
    const orderId = parseInt(req.params.id) // Obtenemos el ID del pedido desde los parámetros de la ruta
    const orderIndex = orders.findIndex((o) => o.id === orderId) // Buscamos el índice del pedido en la lista de pedidos

    if (orderIndex === -1) { // Si no encontramos el pedido, respondemos con un código de estado 404 (Not Found)
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    orders.splice(orderIndex, 1) // Eliminamos el pedido de la lista de pedidos
    res.json({ msg: 'Pedido eliminado con éxito.' }) // Respondemos con un mensaje de éxito
}

// f-j. Filtros
exports.filter = async (req, res) => {
    const { name, restaurant, date, status } = req.query
    // Obtenemos los posibles filtros desde la cadena de consulta de la URL

    // Filtramos la lista de pedidos según los criterios proporcionados
    const filteredOrders = orders.filter((order) => {
        if (name && order.name !== name) { // Si se proporcionó un nombre y no coincide con el del pedido, descartamos el pedido
            return false
        }
        if (restaurant && order.restaurant !== restaurant) { // Si se proporcionó un restaurante y no coincide con el del pedido, descartamos el pedido
            return false
        }
        if (date && order.date !== date) { // Si se proporcionó una fecha y no coincide con la del pedido, descartamos el pedido
            return false
        }
        if (status && order.status !== status) { // Si se proporcionó un estado y no coincide con el del pedido, descartamos el pedido
            return false
        }
        return true // Si todos los criterios coinciden, conservamos el pedido
    })

    if (filteredOrders.length === 0) { // Si no encontramos pedidos que coincidan, respondemos con un código de estado 404 (Not Found)
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    res.json({ // Si encontramos pedidos que coincidan, respondemos con los pedidos
        msg: 'Pedidos filtrados con éxito.',
        data: filteredOrders,
    })
}


```

Con esto listo, tenemos un demo que incluyen diferentes servicios.

## Despliegue con [render.com](render.com)

-   Sube todo tu proyecto a un repositorio en GitHub.

-   Creamos una cuenta en su sitio principal.

-   Damos a click a "New". Elegimos "Web Service".

![](./../images/nav.png)

-   Conectamos nuestro repositorio. Da acceso a tus repositorios públicos y privados.

-   Sigue esta configuración:

![](./../images/render-repo.png)

-   Observa los `logs`, los cuales son mensajes del servidor en el momento que está desplegando tu proyecto. Puede que en ese momento surjan errores. Te recomiendo utilizar Google o `ChatGPT` para ubicar por dónde corregirlos.

-   Toma la URL de la parte superior.

![](./../images/deploy.png)

-   Agrega tus variables de entorno. Solo será necesario agregar `SERVER_URL`, con la URL de producción que te dio `render`.

![](./../images/env-render.png)
