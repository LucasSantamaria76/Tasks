import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useTasks } from '../store/tasksContext';
import { addTask, updateTask } from '../store/tasksActions';

export const FormTask = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const {
    state: { toEdit },
    dispatch,
  } = useTasks();

  useEffect(() => {
    setValue('title', toEdit.title);
    setValue('description', toEdit.description);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toEdit]);

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        !toEdit.id ? addTask(data, dispatch) : updateTask({ ...data, id: toEdit.id }, dispatch);
        reset();
      })}>
      <h2 className='text-center'>{!!toEdit.id ? 'Editar tarea' : 'Crear tarea'}</h2>
      <FloatingLabel controlId='floatingInput' label='Título' className='mb-3'>
        <Form.Control type='text' {...register('title', { required: true })} placeholder='Título' required />
      </FloatingLabel>
      <FloatingLabel controlId='floatingTextarea2' label='Descripción'>
        <Form.Control
          {...register('description')}
          as='textarea'
          style={{ height: '100px' }}
          className='mb-3'
          placeholder='Descripción'
        />
      </FloatingLabel>
      <div className='d-grid gap-2'>
        <Button variant={!!toEdit.id ? 'warning' : 'primary'} type='submit' size='lg'>
          {!!toEdit.id ? 'Editar tarea' : 'Crear tarea'}
        </Button>
      </div>
    </Form>
  );
};
