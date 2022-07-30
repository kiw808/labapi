import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line import/prefer-default-export
export const headers =
  () => (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization',
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');

    next();
  };
