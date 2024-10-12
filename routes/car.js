const  routes = require('express').Router();

const {
    createCar,
    listCar,
    updateCar,
    deleteCar
} = require('../controllers/controll-car')

routes.post('/', createCar);
routes.get('/', listCar);
routes.put('/', updateCar);
routes.delete('/', deleteCar);

module.exports = routes;