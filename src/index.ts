import express from 'express'
import cors from './cors'
import createRoutes from './routes'
import registerServices from './services'
import registerConfig from './config'
import errorHandler from './errorHandler'

const app = express()

// Config express app
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Mount routes
app.use('/', cors('*'), createRoutes(app))
app.use(errorHandler)

// Register
registerConfig(app)
registerServices(app)

const start = async () => {
  app.set('port', app.config.get('port'))
  app.listen(app.get('port'), () => {
    console.log('API ready at http://localhost:%s', app.get('port'))
    console.log('API version: %s', app.config.get('version'))
  })
}

start()
