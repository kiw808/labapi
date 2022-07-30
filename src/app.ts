import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { headers } from './middlewares/headers';
import { PORT } from './config';

const app: Express = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

app.use(headers());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Server is working',
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on http://localhost:${PORT}`);
});
