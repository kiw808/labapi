import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT || '3001';

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => res.send('Welcome on LabAPI'));

app.get('/api/books/:bookId', (req: Request, res: Response) => {
  console.log(req.params);

  return res.send(req.params);
});

// Start listening
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
