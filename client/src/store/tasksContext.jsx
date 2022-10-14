import { createContext, useContext, useReducer } from 'react';
import { initialState, tasksReducer } from './tasksReducer';

const TasksContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return <TasksContext.Provider value={{ state, dispatch }}>{children}</TasksContext.Provider>;
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) throw new Error('useTasks debe usarse dentro de un Provider');
  return context;
};
