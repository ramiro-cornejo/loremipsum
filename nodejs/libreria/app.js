const express = require('express')
const userRoutes  = require('./src/routes/user-routes')
const libraryRoutes = require('./src/routes/library-routes')
const { errorHandlerMiddleware } = require('./src/middlewares/error-handler')
const { initializeAuthentication } = require('./src/authentication/authentication');

const app = express()
const PORT = 3000

initializeAuthentication()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/library', libraryRoutes)
app.use(errorHandlerMiddleware)

app.listen(PORT, () => {
  console.log(`API EXPRESS en puerto ${PORT}`)
})