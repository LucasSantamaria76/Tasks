import { useTasks } from '../store/tasksContext';
import { TaskCard } from './TaskCard';

export const ListTasks = () => {
  const {
    state: { tasks },
  } = useTasks();

  return (
    <>
      <h2 className='text-center'>Listado de tareas</h2>
      {!!tasks.length && tasks.map((task) => <TaskCard key={task.id} task={task} />)}
    </>
  );
};
