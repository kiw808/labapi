import 'dotenv/config';
import express, { Express, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app: Express = express();
const PORT = process.env.APP_PORT || '9000';

app.use(helmet());
app.use(express.json());
app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization',
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');

  next();
});

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Server is working',
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on http://localhost:${PORT}`);
});
