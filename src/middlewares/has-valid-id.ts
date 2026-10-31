import { NextFunction, Request, Response } from 'express';

import { BadRequestError } from '../errors/bad-request-error';

export const hasValidId = (req: Request, res: Response, next: NextFunction) => {
  if (Number.isNaN(+req.params.id)) {
    throw new BadRequestError('Invalid ID');
  }

  next();
};
