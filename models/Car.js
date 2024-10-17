const mongoose = require("mongoose");

const { Schema } = mongoose;

const SchemaCar = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    model: {
        type: String,
        required: true
    },
    plate: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    town: {  // Corregido de 'tow' a 'town'
        type: String,
        required: true
    },
    dealer: {
        type: Schema.Types.ObjectId,
        ref: 'dealer'
    },
    imag:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('car', SchemaCar);