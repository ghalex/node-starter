import { Application } from 'express'
import config from 'config'

interface ConfigData {
  name: string
  host: string
  port: number
  version: string
  secret: string
}

type ConfigDefinition<Data = any> = {
  get: <K extends keyof Data & string>(name: K) => Data[K]
  set<K extends keyof Data & string>(name: K, value: Data[K]): any
  util: {
    getEnv: (env: string) => string
  }
}

export type Config = ConfigDefinition<ConfigData> & ConfigData

const registerConfig = (app: Application) => {
  app.config = config
}

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace Express {
    export interface Application {
      config: Config
    }
  }
}

export default registerConfig
