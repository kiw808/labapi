import { Request, Response } from 'express';

export function getBookHandler(req: Request, res: Response) {
  const resData = {
    name: res.locals.name,
    bookId: req.params.bookId,
  };

  res.send(resData);
}
