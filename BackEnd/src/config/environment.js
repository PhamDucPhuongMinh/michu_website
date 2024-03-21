import 'dotenv/config'

const env = {
  MONGGODB_URI: process.env.MONGGODB_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
  APP_PORT: process.env.APP_PORT,
  APP_HOST: process.env.APP_HOST,
  BUILD_MODE: process.env.BUILD_MODE
}

export default env
