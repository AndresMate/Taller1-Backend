const Dealer = require("../models/Dealer");

module.exports = {
    'createDealer': async (req, res) => {
        try {
            const { id, name, area } = req.body;
            const dealer = await Dealer.create({ id, name, area });
            return res.status(201).json(dealer);
        } catch (error) {
            return res.status(400).json({ error: 'Error creating new dealer' });
        }
    },
    'listDealer': async (req, res) => {
        try {
            const dealer = await Dealer.find();
            return res.status(200).json({ state: true, data: dealer });
        } catch (error) {
            return res.status(500).json({ state: false, message: error });
        }
    },
    'updateDealer': async (req, res) => {
        const { id } = req.params;
        const { name, area } = req.body;
        try {
            const dealer = await Dealer.findByIdAndUpdate(id, { name, area }, { new: true });
            if (dealer) {
                return res.status(200).json(dealer);
            } else {
                return res.status(404).json({ error: 'Dealer not found' });
            }
        } catch (error) {
            return res.status(400).json({ error: 'Error updating dealer' });
        }
    },
    'deleteDealer': async (req, res) => {
        const { id } = req.params;
        try {
            const dealer = await Dealer.findByIdAndDelete(id);
            if (dealer) {
                return res.status(200).json({ message: 'Dealer deleted' });
            } else {
                return res.status(404).json({ error: 'Dealer not found' });
            }
        } catch (error) {
            return res.status(400).json({ error: 'Error deleting dealer' });
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