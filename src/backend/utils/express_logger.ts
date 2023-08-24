import expressPino from 'express-pino-logger'
import 'dotenv/config'

export const ExpressLogger = expressPino({
  level: (process.env.LOGGER_LEVEL || 'info'),
  enabled: true,
})
