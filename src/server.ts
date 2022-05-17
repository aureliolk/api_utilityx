import express from 'express';
import { routes } from './routes';

const app = express();
const port = process.env.PORT || 3000;
export var pingCount = 0

app.use(routes);

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});


