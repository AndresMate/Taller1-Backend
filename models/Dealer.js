const monggose = require("mongoose");

const {Schema} = monggose;

const SchemaDelivery = new Schema({

    id : {
        type : String,
        required: true,
        unique: true
    },

    name  : {
        type: String,
        required: true
    },

    area : {
        type: String,
        required : true
    },

    cars : [
        {
            type: Schema.Types.ObjectId,
            ref: 'car'
        }
    ]
});

module.exports = monggose.model('dealer', SchemaDelivery);

//    nombre: String,
//    zona: String,
//    carros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Carro' }]
  