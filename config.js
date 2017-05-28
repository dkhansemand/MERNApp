const env = process.env

export const nodeEnv = env.NODE_ENV || 'development'

export const logStars = (message) => {
    console.info('**************')
    console.info(message)
    console.info('**************')
}

export default {
  port: env.PORT || 1337,
  host: env.HOST || '127.0.0.1',
  get serverUrl() {
    return `http://${this.host}:${this.port}`
  }
};