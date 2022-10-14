import { Task } from '../models/Task.js';

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = await Task.create({
      title,
      description,
    });
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTasks = async (_req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const updateOk = await Task.update(req.body, { where: { id } });
    if (updateOk[0]) {
      const newTask = await Task.findOne({ where: { id } });
      res.json(newTask);
    } else res.status(404).json({ error: 'Error al actualizar' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.destroy({ where: { id } });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ where: { id } });
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const taskDone = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ where: { id } });

    const updateOk = await Task.update({ done: !task.done }, { where: { id } });

    !!updateOk[0] ? res.sendStatus(200) : res.sendStatus(404);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
