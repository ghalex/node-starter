import express from 'express'
import cors from './cors'
import routes from './routes'
import env from './env'

const app = express()

// Config express app
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Mount routes
app.use('/', cors('*'), routes())

// Handle errors
app.use((err: any, _: any, res: any, __: any) => {
  console.error(err.message)

  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized')
    return
  }

  res.status(400).send(err.message)
})

const start = async () => {
  app.set('port', env.app.httpPort)
  app.listen(app.get('port'), () => {
    console.log('API ready at http://localhost:%s', app.get('port'))
    console.log('API version: %s', env.app.version)
  })
}

start()
