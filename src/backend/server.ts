import express from 'express'
import router from './router'
import path from 'path'
import fs from 'fs'
import { logger } from './utils/logger'
import { ExpressLogger } from './utils/express_logger'
import 'dotenv/config'

const app = express()
app.use(router)
app.use(ExpressLogger)
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 3000
const root_dir = path.dirname(__dirname)

export default app.listen(port, () => {
  fs.readFile(path.join(root_dir, 'package.json'), (err, data) => {
    if (err) {
      logger.error(err)
    } else {
      const config = JSON.parse(data.toString())
      logger.info({
        name: config.name,
        version: config.version,
        url: `http://localhost:${port}`,
      })
    }
  })
})
