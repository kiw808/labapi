import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT || '3001';

// Middlewares
app.use(express.json());

// Custom middleware
// The middleware is a curried function (a functioin that returns a function)
const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name;

    next();
  };

app.use(middleware({ name: 'PierreMu' }));

// Routes
app.get('/', (req: Request, res: Response) => res.send('Welcome on LabAPI'));
app.get('/api/books/:bookId', (req: Request, res: Response) => {
  const resData = {
    name: res.locals.name,
    bookId: req.params.bookId,
  };

  res.send(resData);
});

// Start listening
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
