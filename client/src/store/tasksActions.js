import { ADD_TASK, DELETE_TASK, SET_TASKS, TOGGLE_TASK_DONE, UPDATE_TASK } from './Types';

const urlBase = 'http://localhost:4000/api/v1/tasks';

export const addTask = async (task, dispatch) => {
  try {
    const res = await fetch(urlBase, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        Accept: 'application/json; charset=utf-8',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    const json = await res.json();
    dispatch({ type: ADD_TASK, payload: json });
    return true;
  } catch (error) {
    return false;
  }
};

export const getTasks = async (dispatch) => {
  try {
    const res = await fetch(urlBase);
    const json = await res.json();
    dispatch({ type: SET_TASKS, payload: json });
    return true;
  } catch (error) {
    return false;
  }
};

export const updateTask = async (task, dispatch) => {
  const { id, title, description } = task;
  try {
    const res = await fetch(`${urlBase}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, description }),
      headers: {
        Accept: 'application/json; charset=utf-8',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    const json = await res.json();
    dispatch({ type: UPDATE_TASK, payload: json });
    return true;
  } catch (error) {
    return false;
  }
};

export const deleteTask = async (id, dispatch) => {
  try {
    const res = await fetch(`${urlBase}/${id}`, {
      method: 'DELETE',
    });

    if (res.status !== 204) throw new Error('Error al borrar');
    dispatch({ type: DELETE_TASK, payload: id });
    return true;
  } catch (error) {
    return false;
  }
};

export const toggleTaskDone = async (id, dispatch) => {
  try {
    const res = await fetch(`${urlBase}/${id}`, {
      method: 'PATCH',
    });
    if (res.status !== 200) throw new Error('Error al actualizar');
    dispatch({ type: TOGGLE_TASK_DONE, payload: id });
    return true;
  } catch (error) {
    return false;
  }
};
