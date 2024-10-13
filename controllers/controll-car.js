const Car = require("../models/Car");
const Dealer = require("../models/Dealer");

module.exports = {
    'createCar': async (req, res) => {
        const car = new Car(req.body);
        const { id } = req.params;
        try {
            const dealer = await Dealer.findById(id);
            if (dealer) {
                dealer.cars.push(car);
                await dealer.save();
                car.dealer = dealer;
                const result = await car.save();
                return res.status(201).json({ state: true, data: car });
            } else {
                return res.status(404).json({ state: true, message: null });
            }
        } catch (error) {
            return res.status(500).json({ state: false, message: error });
        }
    },

    'listCar': async (req, res) => {
        try {
            const cars = await Car.find();
            return res.status(200).json({ state: true, data: cars });
        } catch (error) {
            return res.status(500).json({ state: false, message: error });
        }
    },

    'updateCar': async (req, res) => {
        const { id } = req.params;
        const { make, model, year } = req.body;
        try {
            const car = await Car.findByIdAndUpdate(id, { make, model, year }, { new: true });
            if (car) {
                return res.status(200).json({ state: true, data: car });
            } else {
                return res.status(404).json({ state: false, message: 'Car not found' });
            }
        } catch (error) {
            return res.status(500).json({ state: false, message: error });
        }
    },

    'deleteCar': async (req, res) => {
        const { id } = req.params; // Obtener el id del carro de los parámetros de la solicitud

        try {
            // Buscar el carro por ID
            const car = await Car.findById(id);

            if (!car) {
                return res.status(404).json({ state: false, message: 'Carro no encontrado' });
            }

            // Eliminar el carro encontrado usando su _id
            await Car.deleteOne({ _id: id });

            return res.status(200).json({ state: true, message: 'Carro eliminado exitosamente' });
        } catch (error) {
            return res.status(500).json({ state: false, message: 'Error en el servidor', error });
        }
    },

    'findById': async (req, res) => {
        const { id } = req.params;
        try {
            const car = await Car.findById(id);
            if (car) {
                return res.status(200).json({ state: true, data: car });
            } else {
                return res.status(404).json({ state: false, message: 'Car not found' });
            }
        } catch (error) {
            return res.status(500).json({ state: false, message: error });
        }
    }
};