import express from 'express';
import config from 'config';
import connectDB from './utils/connectDB';
import logger from './utils/logger';
import morgan from 'morgan';
import routes from './routes';
import { errorHandler, notFound } from './middlewares/errorMiddleware';

const app = express();

app.use(morgan('dev'));

app.use(express.json());

const PORT = config.get<number>('PORT');

app.listen(PORT, async () => {
  logger.info(`App is running at port http://localhost:${PORT}`);

  await connectDB();

  routes(app);

  // error handler
  app.use(notFound);
  app.use(errorHandler);
});
