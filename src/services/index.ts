import { App } from '../declarations'

import { registerStatus } from './status/status'
import { registerMath } from './math/math'

const registerServices = (app: App) => {
  registerStatus(app)
  registerMath(app)
}

export default registerServices
