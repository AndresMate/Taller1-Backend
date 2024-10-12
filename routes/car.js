const  routes = require('express').Router();

const {
    createCar,
    listCar,
    updateCar,
    deleteCar
} = require('../controllers/controll-car')

routes.post('/car', createCar);
routes.get('/car', listCar);
routes.put('/car', updateCar);
routes.delete('/car', deleteCar);

module.exports = routes;