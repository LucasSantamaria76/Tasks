import { Button, Card, Row, Col } from 'react-bootstrap';
import { deleteTask, toggleTaskDone } from '../store/tasksActions';
import { useTasks } from '../store/tasksContext';
import { SET_EDIT } from '../store/Types';
import { formatDate } from './../utils/formatDate';

export const TaskCard = ({ task: { description, done, createdAt, id, title, updatedAt } }) => {
  const { dispatch } = useTasks();

  return (
    <Card className='m-3'>
      <Card.Header>
        <Row>
          <Col xs={12} lg={9}>
            <Card.Title>{title}</Card.Title>
          </Col>
          <Col xs={12} lg={3} className='text-end'>
            <Button variant={done ? 'success' : 'danger'} onClick={() => toggleTaskDone(id, dispatch)}>
              {done ? 'Completada' : 'Incompleta'}
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Button variant='warning' onClick={() => dispatch({ type: SET_EDIT, payload: id })}>
          🖋️
        </Button>
        <Button variant='danger' className='mx-3' onClick={() => deleteTask(id, dispatch)}>
          🗑️
        </Button>
      </Card.Body>
      <Card.Footer className='text-muted'>{`Tarea creada el: ${formatDate(
        new Date(createdAt)
      )} - Ultima modificación: ${formatDate(new Date(updatedAt))}`}</Card.Footer>
    </Card>
  );
};
