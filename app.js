const express = require('express')
const cors= require('cors')
const jwt = require('jsonwebtoken');
const authenticateJWT = require('./authenticateJWT')

const app = express()

const key = 'GLE53 Coupe';
console.log(key+ " -> LLAVE");

//Connect DB
require('./drivers/conectDB')

const swaggerUI = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

app.set('PORT',process.env.PORT || 3000 )
app.use(express.json())
app.use(cors())
app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))

//middleware


app.listen(app.get('PORT'), () => console.log(`Server Ready at http://localhost:${app.get('PORT')}`))