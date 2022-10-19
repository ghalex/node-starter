import { Status } from './status.model'

class StatusClass {
  config: any

  constructor (config: any) {
    this.config = config
  }

  format (s: number) {
    function pad (s: number) {
      return (s < 10 ? '0' : '') + s
    }

    const hours = Math.floor(s / (60 * 60))
    const minutes = Math.floor(s % (60 * 60) / 60)
    const seconds = Math.floor(s % 60)

    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  }

  get (): Status {
    return {
      name: this.config.get('name'),
      port: this.config.get('port'),
      version: this.config.get('version'),
      host: this.config.get('host'),
      envirement: this.config.util.getEnv('NODE_ENV'),
      uptime: this.format(process.uptime()),
      secret: this.config.get('secret')
    }
  }
}

export default StatusClass
