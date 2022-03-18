import { UserDocument } from '../models/user.model';
import { object, string } from 'zod';

export type CreateUserType = Pick<UserDocument, 'name' | 'email' | 'password'>;

export const CreateUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password must be at least 6 characters long'),
    confirmPassword: string({
      required_error: 'Confirm password is required',
    }),
    email: string({
      required_error: 'Email is required',
    }).email('Email is invalid'),
  }).refine((data) => data.password === data.confirmPassword, {
    message: 'Password and confirm password must match',
    path: ['confirmPassword'],
  }),
});
