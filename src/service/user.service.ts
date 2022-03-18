import User from '../models/user.model';
import { CreateUserType } from '../schema/user.schema';

export const createUser = async (user: CreateUserType) => {
  try {
    return await User.create(user);
  } catch (error: any) {
    throw new Error(error);
  }
};
