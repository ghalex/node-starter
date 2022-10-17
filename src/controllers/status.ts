import env from '@/env'

function format (s: number) {
  function pad (s: number) {
    return (s < 10 ? '0' : '') + s
  }

  const hours = Math.floor(s / (60 * 60))
  const minutes = Math.floor(s % (60 * 60) / 60)
  const seconds = Math.floor(s % 60)

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
}

const getStatus = async (req, res, next) => {
  try {
    res.status(200).json(
      {
        name: env.app.name,
        port: env.app.httpPort,
        version: env.app.version,
        envirement: env.app.environment,
        uptime: format(process.uptime())
      }
    )
  } catch (err) {
    next(err)
  }
}

export default {
  getStatus
}
