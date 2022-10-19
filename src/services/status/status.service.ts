import { Application } from 'express'
import StatusClass from './status.class'

const createService = (app: Application) => {
  return new StatusClass(app.config)
}

export default createService
