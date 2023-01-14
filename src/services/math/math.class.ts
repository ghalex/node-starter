import { Id, Params } from 'zapnode'

class MathClass {
  async get (id: Id, params?: Params) {
    return parseInt(id.toString()) * 2
  }
}

export default MathClass
