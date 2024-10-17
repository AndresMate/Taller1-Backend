const routes = require('express').Router();
const {
    createCar,
    listCar,
    updateCar,
    deleteCar,
    findById,
    findByModel
} = require('../controllers/controll-car');

/**
 * @swagger
 * tags:
 *   name: Car
 *   description: API para la gestión de carros
 */

/**
 * @swagger
 * /car/{id}:
 *   post:
 *     summary: Crear un nuevo carro
 *     tags: [Car]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del dealer al que se asocia el carro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Car'
 *     responses:
 *       201:
 *         description: Carro creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       404:
 *         description: Dealer no encontrado
 *       500:
 *         description: Error del servidor
 */
routes.post('/:id', createCar);

/**
 * @swagger
 * /car:
 *   get:
 *     summary: Listar todos los carros
 *     tags: [Car]
 *     responses:
 *       200:
 *         description: Lista de todos los carros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'
 *       500:
 *         description: Error del servidor
 */
routes.get('/', listCar);

/**
 * @swagger
 * /car/{id}:
 *   put:
 *     summary: Actualizar un carro
 *     tags: [Car]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del carro a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Car'
 *     responses:
 *       200:
 *         description: Carro actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       404:
 *         description: Carro no encontrado
 *       500:
 *         description: Error del servidor
 */
routes.put('/:id', updateCar);

/**
 * @swagger
 * /car/{id}:
 *   delete:
 *     summary: Eliminar un carro
 *     tags: [Car]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del carro a eliminar
 *     responses:
 *       200:
 *         description: Carro eliminado exitosamente
 *       404:
 *         description: Carro no encontrado
 *       500:
 *         description: Error del servidor
 */
routes.delete('/:id', deleteCar);

/**
 * @swagger
 * /car/{id}:
 *   get:
 *     summary: Obtener un carro por ID
 *     tags: [Car]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del carro a obtener
 *     responses:
 *       200:
 *         description: Carro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       404:
 *         description: Carro no encontrado
 *       500:
 *         description: Error del servidor
 */
routes.get('/:id', findById);

/**
 * @swagger
 * /car/model/{model}:
 *   get:
 *     summary: Buscar carros por modelo
 *     tags: [Car]
 *     parameters:
 *       - in: path
 *         name: model
 *         schema:
 *           type: string
 *         required: true
 *         description: Modelo del carro a buscar
 *     responses:
 *       200:
 *         description: Lista de carros encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'
 *       404:
 *         description: No se encontraron carros
 *       500:
 *         description: Error del servidor
 */
routes.get('/model/:model', findByModel);
module.exports = routes;
