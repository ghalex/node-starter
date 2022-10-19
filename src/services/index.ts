import { Application } from 'express'
import createMathService from './math/math.service'
import createStatusService from './status/status.service'

const registerServices = (app: Application) => {
  const services = {
    math: createMathService(app),
    status: createStatusService(app)
  }

  app.services = services

  return services
}

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace Express {
    export interface Application {
      services: ReturnType<typeof registerServices>
    }
  }
}

export default registerServices
