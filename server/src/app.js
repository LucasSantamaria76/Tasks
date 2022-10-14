import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/task.routes.js';

export const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes

app.use('/api/v1/tasks', taskRoutes);
