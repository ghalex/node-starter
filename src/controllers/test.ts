import { Application } from 'express'

const controller = (app: Application) => {
  const runTest = async (req, res, next) => {
    const { test } = req.body

    try {
    // const result = await runner.dostuff(code)
      res.status(200).json({ test, sum: app.services.math.sum(2, 3) })
    } catch (err) {
      next(err)
    }
  }

  return {
    runTest
  }
}

export default controller
