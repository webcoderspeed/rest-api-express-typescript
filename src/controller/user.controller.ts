import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import { createUser } from '../service/user.service';
import { CreateUserType } from '../schema/user.schema';

export const createUserHandler = asyncHandler(
  async (req: Request<{}, {}, CreateUserType>, res: Response) => {
    try {
      const user = await createUser(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      throw new Error(error);
    }
  }
);
