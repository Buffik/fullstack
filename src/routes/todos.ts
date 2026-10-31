import { Router } from 'express';

import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from '../controllers/todos';
import { hasValidId } from '../middlewares/has-valid-id';
import { validateTodoBody } from '../validators/todos';
import { validateParamId } from '../validators/params';

const router = Router();

router.get('/', getAllTodos);

router.get('/:id', validateParamId, getTodoById);

router.post('/', validateTodoBody, createTodo);

router.put('/:id', [hasValidId], updateTodo);

router.delete('/:id', [hasValidId], deleteTodo);

export default router;
