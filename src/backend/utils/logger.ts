import pino from 'pino'
import 'dotenv/config'

const level = process.env.LOGGER_LEVEL || 'info'

export const logger = pino({
	level: level,
})
