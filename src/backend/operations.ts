import express from 'express'

export const operations = {
  getVersion: [
    (req: express.Request, res: express.Response) => {
      res.send({
        version: '0.0.1',
      })
    }
  ],
  getGreeting: [
    (req: express.Request, res: express.Response) => {
      res.send({
        greeting: 'hello',
      })
    }
  ],
}
