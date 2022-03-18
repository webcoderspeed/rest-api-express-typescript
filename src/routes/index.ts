import { Express } from 'express';
import config from 'config';
import userRoutes from './user.routes';

const basePATH = config.get<string>('BASE_PATH');

const routes = (app: Express) => {
  app.use(`${basePATH}/users`, userRoutes);
};

export default routes;
