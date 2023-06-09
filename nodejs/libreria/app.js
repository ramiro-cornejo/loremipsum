const express = require('express')
const userRoutes = require('./src/routes/user-routes')
const { errorHandlerMiddleware } = require('./src/middlewares/error-handler')

const app = express()
const port = 3000

app.use(express.json())
app.use('/users', userRoutes)
app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log("API con express corriendo en el puerto " + port)
})