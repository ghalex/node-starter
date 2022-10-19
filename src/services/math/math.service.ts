import { Application } from 'express'
import MathClass from './math.class'

const createService = (_: Application) => {
  return new MathClass()
}

export default createService
