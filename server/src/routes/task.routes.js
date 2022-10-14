import { Router } from 'express';
import { createTask, deleteTask, getTask, getTasks, taskDone, updateTask } from './../controllers/task.controller.js';

const router = Router();

// Routes
router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/:id', getTask);
router.patch('/:id', taskDone);

export default router;
