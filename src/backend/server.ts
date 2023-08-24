import express from 'express'
import router from './router'
import path from 'path'
import 'dotenv/config'

const app = express()
app.use(router)
app.use(express.static(path.join(__dirname, 'public')))

export default app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`)
})
