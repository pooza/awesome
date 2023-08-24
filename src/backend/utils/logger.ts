import pino from 'pino'
import 'dotenv/config'

export const logger = pino({
	level: (process.env.LOGGER_LEVEL || 'info'),
})
