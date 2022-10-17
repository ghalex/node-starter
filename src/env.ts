import pk = require('../package.json');

export default {
  app: {
    name: process.env.NAME as string || 'api',
    httpPort: process.env.HTTP_PORT || 5000,
    httpsPort: process.env.HTTPS_PORT || 5500,
    environment: process.env.NODE_ENV,
    secret: process.env.SECRET as string,
    version: pk.version
  }
}
