import express from 'express'
import router from './router'
import path from 'path'
import { logger } from './utils/logger';
import 'dotenv/config'

const app = express()
app.use(router)
app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 3000

export default app.listen(port, () => {
  logger.info(`http://localhost:${port}`)
})
