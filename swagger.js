const swaggerJSDoc = require('swagger-jsdoc');

// Definición básica de Swagger
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API REST - Taller de Node.js con Express y MongoDB',
        version: '1.0.0',
        description: 'Documentación de la API REST para la gestión de carros y concesionarios.',
        license: {
            name: 'MIT',
            url: 'https://opensource.org/licenses/MIT'
        },
        contact: {
            name: 'Andres Felipe Mateus Riaño, John Jaime',
            url: 'https://github.com/AndresMate/Taller1-Backend'
        }
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor de desarrollo'
        },
        {
            url: 'http://158.247.122.111:3000',
            description: 'Servidor de producción'
        }
    ],
    components: {
        schemas: {
            Car: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        description: 'Identificador único del carro',
                        example: 'car123'
                    },
                    model: {
                        type: 'string',
                        description: 'Modelo del carro',
                        example: 'Toyota Hilux'
                    },
                    plate: {
                        type: 'string',
                        description: 'Placa del carro',
                        example: 'ABC123'
                    },
                    department: {
                        type: 'string',
                        description: 'Departamento donde está registrado el carro',
                        example: 'Boyacá'
                    },
                    town: {
                        type: 'string',
                        description: 'Ciudad o pueblo donde está registrado el carro',
                        example: 'Sogamoso'
                    },
                    dealer: {
                        type: 'string',
                        description: 'ID del dealer asociado al carro',
                        example: 'dealer123'
                    }
                },
                required: ['id', 'model', 'plate', 'department', 'town']
            },
            Dealer: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        description: 'Identificador único del dealer',
                        example: 'dealer123'
                    },
                    name: {
                        type: 'string',
                        description: 'Nombre del dealer',
                        example: 'FastDelivery Dealer'
                    },
                    area: {
                        type: 'string',
                        description: 'Área o zona donde opera el dealer',
                        example: 'Sogamoso'
                    },
                    cars: {
                        type: 'array',
                        description: 'Lista de IDs de carros asociados al dealer',
                        items: {
                            type: 'string',
                            description: 'ID del carro',
                            example: 'car123'
                        }
                    }
                },
                required: ['id', 'name', 'area']
            }
        }
    }
};

// Configuración de Swagger
const options = {
    swaggerDefinition,
    // Especifica las rutas donde se encuentran las anotaciones de Swagger
    apis: ['./routes/*.js'], // Asegúrate de que este path coincida con la ubicación de tus rutas
};

// Generar la especificación de Swagger
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
