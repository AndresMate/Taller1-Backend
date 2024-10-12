const  routes = require('express').Router();

const {
    createDealer,
    listDealer,
    updateDealer,
    deleteDealer
} = require('../controllers/controll-dealer')

routes.post('/', createDealer);
routes.get('/', listDealer);
routes.put('/', updateDealer);
routes.delete('/', deleteDealer);

module.exports = routes;