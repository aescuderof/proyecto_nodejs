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