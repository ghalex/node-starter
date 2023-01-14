import { App } from '@/declarations'
import MathClass from './math.class'

export const registerMath = (app: App) => {
  app.addService('math', new MathClass(), { hooks: {} })
}

declare module '../../declarations' {
    // eslint-disable-next-line no-unused-vars
    interface MyServices {
      math: MathClass
    }
  }
