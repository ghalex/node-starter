import express from 'express'

import { status, test } from '@/controllers'

const router = express.Router()

const createRoutes = () => {
  router.use('/', status.getStatus)
  router.use('/test', test.runTest)

  return router
}

export default createRoutes
