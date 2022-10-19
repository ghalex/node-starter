import { Application } from 'express'
import config from 'config'

const registerConfig = (app: Application) => {
  app.config = config
}

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace Express {
    export interface Application {
      config: typeof config
    }
  }
}

export default registerConfig
