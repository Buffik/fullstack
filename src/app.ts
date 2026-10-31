import express from 'express';
import path from 'path';
import { errors } from 'celebrate';
import cors from 'cors';

import appRouter from './routes';
import { errorHandler } from './middlewares/error-handler';
// import { customCors } from './middlewares/custom-cors';

const app = express();

// app.use(customCors);
app.use(
  cors({
    origin: 'https://www.w3.org',
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(appRouter);

app.use(errors());

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Start');
});
