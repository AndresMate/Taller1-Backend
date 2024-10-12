const  routes = require('express').Router();

const {
    createDealer,
    listDealer,
    updateDealer,
    deleteDealer
} = require('../controllers/controll-dealer')

routes.post('/dealer', createDealer);
routes.get('/dealer', listDealer);
routes.put('/dealer', updateDealer);
routes.delete('/dealer', deleteDealer);

module.exports = routes;