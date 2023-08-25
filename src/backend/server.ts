import express from 'express'
import path from 'path'
import fs from 'fs'
import { logger } from './utils/logger'
import { ExpressLogger } from './utils/express_logger'
import { operations } from './operations'
import { initialize } from "express-openapi";
import 'dotenv/config'

const app = express()
app.use(ExpressLogger)
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 3000
const root_dir = path.dirname(__dirname)

initialize({
  app: app,
  apiDoc: path.resolve(root_dir, 'openapi.json'),
  validateApiDoc: true,
  operations,
})

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
