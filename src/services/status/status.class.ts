
import { App } from '@/declarations'
import { Params } from 'zapnode'

class StatusClass {
  // eslint-disable-next-line no-useless-constructor
  constructor (protected app: App) {}

  protected format (s: number) {
    function pad (s: number) {
      return (s < 10 ? '0' : '') + s
    }

    const hours = Math.floor(s / (60 * 60))
    const minutes = Math.floor(s % (60 * 60) / 60)
    const seconds = Math.floor(s % 60)

    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  }

  async find (params?: Params) {
    const config = this.app.config
    const data = await this.app.getDb().collection('systems').find({}).toArray()

    return {
      port: config.port,
      version: config.version,
      host: config.host,
      uptime: this.format(process.uptime()),
      secret: config.secret,
      user: params?.user,
      data
    }
  }
}

export default StatusClass
