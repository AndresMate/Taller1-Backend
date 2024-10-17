const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const { Schema } = mongoose;

const SchemaCar = new Schema({
    id: {
        type: Number,
        unique: true,
    },
    model: {
        type: String,
        required: true
    },
    plate: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    town: {
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

SchemaCar.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('car', SchemaCar);