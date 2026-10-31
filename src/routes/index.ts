import { Request, Response, Router } from 'express';

import { NotFoundError } from '../errors/not-found-error';
import todosRouter from './todos';

const router = Router();

router.use('/todos', todosRouter);

router.all('/{*splat}', (req: Request, res: Response) => {
  throw new NotFoundError('Nothing found');
});

export default router;
