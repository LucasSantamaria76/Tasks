import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskProvider } from './store/tasksContext';

createRoot(document.getElementById('root')).render(
  <TaskProvider>
    <App />
  </TaskProvider>
);
