import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes';

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
routes(app);

// Start listening
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
