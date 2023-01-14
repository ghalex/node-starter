/* eslint-disable no-unused-vars */
import { Plugin } from 'zapnode'
import { MongoClient, Db } from 'mongodb'
import { App } from '@/declarations'

declare module '@/declarations' {
  interface App {
    getDb: () => Db
  }

  interface ConfigData {
    mongodb: {
      user: string
      password: string
      host: string
      db: string
      protocol: string
    }
  }
}

export default (): Plugin => {
  function init (app: App): void {
    app.requirePlugin('config', 'mongodb')

    const { user, password, host, db, protocol } = app.config.mongodb
    const uri = `${protocol}://${user}:${password}@${host}`
    console.log(uri)

    console.log('try to connect')
    const mongoClient = MongoClient.connect(uri).then((client) => {
      const database = client.db(db)
      app.getDb = () => database
    })
  }

  return {
    name: 'mongodb',
    init
  }
}
