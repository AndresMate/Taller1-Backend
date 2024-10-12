const Dealer = require("../models/Dealer");

module.exports = {
    'createDealer': async (req, res) => {
        try {
            const { id, name, area } = req.body;
            const dealer = await Dealer.create({ id, name, area });
            return res.status(201).send(dealer);
        } catch (error) {
            return res.status(400).send({ error: 'Error creating new dealer' });
        }
    },
    'listDealer': async (req, res) => {
        try {
            const dealer = await Dealer.find();
            return res.status(200).json({state:true, data: dealer})
        } catch (error) {
            return res.status(500).json({state:false, message:error});
        }
    },
    'updateDealer': async (req, res) => {
        const { id, name, area } = req.body;
        try {
            const dealer = await Dealer.findOneAndUpdate({ id }, { name, area }, { new: true });
            return res.status(200).send(dealer);
        } catch (error) {
            return res.status(400).send({ error: 'Error updating dealer' });
        }
    },
    'deleteDealer': async (req, res) => {
        const { id } = req.body;
        try {
            await Dealer.findOneAndDelete({ id });
            return res.status(200).send({ message: 'Dealer deleted' });
        } catch (error) {
            return res.status(400).send({ error: 'Error deleting dealer' });
        }
    },
    'findById': async (req, res) => {
        const { id } = req.params;
        try {
            const result = await Dealer.findById(id).populate('cars');
            if (result) {
                return res.status(200).json({ state: true, data: result });
            }
            return res.status(404).json({ state: false, message: 'Dealer not found' });
        } catch (error) {
            return res.status(500).json({ state: false, message: error });
        }
    }
};