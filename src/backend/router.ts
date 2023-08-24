import express from 'express'

const router: express.Router = express.Router()

router.get('/api/version', (req: express.Request, res: express.Response) => {
  res.json({
    version: '0.0.1',
  })
})

router.get('/api/greeting', (req: express.Request, res: express.Response) => {
  res.json({
    greeting: 'hello',
  })
})

export default router
