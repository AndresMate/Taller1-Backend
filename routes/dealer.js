const routes = require('express').Router();
const {
    createDealer,
    listDealer,
    updateDealer,
    deleteDealer
} = require('../controllers/controll-dealer');

/**
 * @swagger
 * tags:
 *   name: Dealer
 *   description: API para la gestión de dealers (concesionarios)
 */

/**
 * @swagger
 * /dealer:
 *   post:
 *     summary: Crear un nuevo dealer
 *     tags: [Dealer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dealer'
 *     responses:
 *       201:
 *         description: Dealer creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dealer'
 *       400:
 *         description: Error al crear el dealer
 */
routes.post('/', createDealer);

/**
 * @swagger
 * /dealer:
 *   get:
 *     summary: Listar todos los dealers
 *     tags: [Dealer]
 *     responses:
 *       200:
 *         description: Lista de dealers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dealer'
 *       500:
 *         description: Error del servidor
 */
routes.get('/', listDealer);

/**
 * @swagger
 * /dealer:
 *   put:
 *     summary: Actualizar un dealer
 *     tags: [Dealer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dealer'
 *     responses:
 *       200:
 *         description: Dealer actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dealer'
 *       400:
 *         description: Error al actualizar el dealer
 */
routes.put('/', updateDealer);

/**
 * @swagger
 * /dealer:
 *   delete:
 *     summary: Eliminar un dealer
 *     tags: [Dealer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID del dealer a eliminar
 *                 example: "dealer123"
 *     responses:
 *       200:
 *         description: Dealer eliminado exitosamente
 *       400:
 *         description: Error al eliminar el dealer
 */
routes.delete('/', deleteDealer);

module.exports = routes;
