import { app } from './app.js';
import { Task } from './models/Task.js';

const PORT = 4000;

const main = async () => {
  try {
    await Task.sync();
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

main();
