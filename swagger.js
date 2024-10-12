const swaggerJSDoc = require('swagger-jsdoc')

const  swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API REST',
        version: '1.0.0',
        description: 'Taller de Node.js con Express y MongoDB creacion de API REST',
        license: {
            name: 'MIT',
            url: 'https://opensource.org/licenses/MIT'
        },
        contact: {
            name : 'Andres Felipe Mateus Riaño \n John Jaime',
            url : 'https://github.com/AndresMate/Taller1-Backend'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server'
            }
        ]
    }
}
const options = {
    swaggerDefinition,
    apis:['./routes/*.js'],
}
const swaggerSpec = swaggerJSDoc(options)
module.exports = swaggerSpec