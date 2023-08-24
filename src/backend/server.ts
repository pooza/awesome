import express from 'express'
import router from './router'
import path from 'path'

const app = express()

app.use(router)

app.use(express.static(path.join(__dirname, 'public')))

export default app.listen(3000, () => {
  console.log('App is running at http://localhost:3000')
})
