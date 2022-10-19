import { Application } from 'express'

const controller = (app: Application) => {
  const getStatus = async (req, res, next) => {
    const statusService = app.services.status

    try {
      res.status(200).json(statusService.get())
    } catch (err) {
      next(err)
    }
  }

  return {
    getStatus
  }
}

export default controller
