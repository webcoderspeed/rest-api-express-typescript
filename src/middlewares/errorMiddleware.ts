import { Request, Response, NextFunction } from 'express';
import { isArray } from 'lodash';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);

  if (error.message[0] === '[') {
    const messages = JSON.parse(error.message);
    const errorMessages = messages.map((message: any) => {
      return {
        path: message.path[1],
        message: message.message,
      };
    });

    res.json({
      message: errorMessages,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
    });
  }

  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
  });
};

export { notFound, errorHandler };
