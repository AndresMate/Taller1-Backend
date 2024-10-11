const express = require('express')

const app = express()

//Connect DB
require('./drivers/conectDB')

const swaggerUI = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

app.set('PORT',process.env.PORT || 3000 )

app.use(express.json())
app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))

//middleware


app.listen(app.get('PORT'), () => console.log(`Server Ready at http://localhost:${app.get('PORT')}`))