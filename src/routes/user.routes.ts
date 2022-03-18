import { Router } from 'express';
import * as userController from '../controller/user.controller';
import validateResource from '../middlewares/validateResource';
import { CreateUserSchema } from '../schema/user.schema';

const router = Router();

router.post(
  '/',
  validateResource(CreateUserSchema),
  userController.createUserHandler
);

export default router;
