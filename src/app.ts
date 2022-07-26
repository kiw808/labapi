import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.APP_PORT || "3001"

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
