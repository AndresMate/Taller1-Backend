const monggose = require("mongoose");

const {Schema} = monggose;

const SchemaCar = new Schema({

    id : {
        type : String,
        required : true,
        unique : true
    },

    model : {
        type : String,
        required: true
    },

    plate : {
        type : String,
        required : true
    },

    department : {
        type : String,
        required : true
    },

    tow : {
        type : String,
        required : true
    },

    dealer : {
        type : Schema.Types.ObjectId,
        ref : 'dealer'
    }

})

module.exports = monggose.model('car', SchemaCar);


// Esquema de Carro
//const carroSchema = new mongoose.Schema({
//    modelo: String,
//    placa: String,
//    departamento: String,
//    ciudad: String,
//  });