import express, { Application } from 'express'
import { status, test } from '@/controllers'

const createRoutes = (app: Application) => {
  const router = express.Router()

  router.get('/', status(app).getStatus)
  router.get('/test', test(app).runTest)

  return router
}

export default createRoutes
