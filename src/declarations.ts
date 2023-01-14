
import { Application, Service } from 'zapnode'
import { AppExpress, AppConfig } from 'zapnode-plugins'

interface Services {
  [key: string]: Service
}

export interface MyServices extends Services {}

export interface ConfigData {
  name: string
  host: string
  port: number
  version: string
  secret: string,
  mongodb: {
    user: string
    password: string
    host: string
    db: string
    protocol: string
  }
}

export interface Config extends ConfigData {
  util: {
    getEnv: (name: string) => string
  }
}

export type AppWithConfig = AppConfig<ConfigData>

export type AppExtend = Application<MyServices> & AppExpress & AppWithConfig
export interface App extends AppExtend {}

declare module 'zapnode' {
  // eslint-disable-next-line no-unused-vars
  interface Params {
    user?: any
  }
}
