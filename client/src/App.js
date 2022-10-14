import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FormTask, ListTasks } from './components';
import { Toaster } from 'react-hot-toast';
import { useTasks } from './store/tasksContext';
import { getTasks } from './store/tasksActions';

const App = () => {
  const { dispatch } = useTasks();

  useEffect(() => {
    getTasks(dispatch);
  }, [dispatch]);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={5} className='mb-5'>
          <FormTask />
        </Col>
        <Col xs={12} md={7}>
          <ListTasks />
        </Col>
      </Row>
      <Toaster />
    </Container>
  );
};

export default App;
