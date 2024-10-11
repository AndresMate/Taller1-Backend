const mongoose = require('mongoose')
const URI = "mongodb+srv://MyProyect:EiH9DL3RKMBqQoTZ@proyecto.d9rgz.mongodb.net/?retryWrites=true&w=majority&appName=Proyecto";

mongoose.set('strictQuery', false)

mongoose.connect(URI)
    .then(()=>console.log('Connect DB Success'))
    .catch((err)=>console.log('Connect DB Fail ' + err))

module.exports = mongoose