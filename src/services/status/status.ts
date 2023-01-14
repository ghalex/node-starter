import { App } from '@/declarations'
import StatusClass from './status.class'

/**
 *
 * ctx.data
 * ctx.id
 * ctx.method
 * ctx.params
 */
const addHelloHook = (ctx: any) => {
  ctx.result = { ...ctx.result, msg: 'Hello' }
}

const addUser = (ctx: any) => {
  ctx.params.user = { id: 1, email: 'ghalex@gmail.com' }
}

export const registerStatus = (app: App) => {
  app.addService('status', new StatusClass(app), {
    hooks: {
      before: {
        all: [addUser]
      },
      after: {
        all: [addHelloHook]
      }
    },
    customMethods: {
      say: { path: 'say' }
    }
  })
}

declare module '../../declarations' {
    // eslint-disable-next-line no-unused-vars
    interface MyServices {
      status: StatusClass
    }
  }
