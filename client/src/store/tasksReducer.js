import { ADD_TASK, DELETE_TASK, SET_EDIT, SET_TASKS, TOGGLE_TASK_DONE, UPDATE_TASK } from './Types';

export const initialState = {
  tasks: [],
  toEdit: {},
};

export const tasksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      let newTasks = [...state.tasks, payload];
      return { ...state, tasks: newTasks };

    case SET_TASKS:
      return { ...state, tasks: payload };

    case UPDATE_TASK: {
      const task = state.tasks.find((task) => task.id === payload.id);
      const idxTask = state.tasks.indexOf(task);
      const newTasks = [...state.tasks];
      newTasks[idxTask] = payload;
      return { toEdit: {}, tasks: newTasks };
    }

    case DELETE_TASK: {
      const newTasks = state.tasks.filter((task) => task.id !== payload);
      return { ...state, tasks: newTasks };
    }

    case TOGGLE_TASK_DONE: {
      const task = state.tasks.find((task) => task.id === payload);
      const idxTask = state.tasks.indexOf(task);
      const newTasks = [...state.tasks];
      task.done = !task.done;
      newTasks[idxTask] = task;
      return { ...state, tasks: newTasks };
    }
    case SET_EDIT: {
      const task = state.tasks.find((task) => task.id === payload);
      return { ...state, toEdit: task };
    }

    default:
      return state;
  }
};
