import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

const connectDB = async () => {
  const MONGO_URI = config.get<string>('MONGO_URI');

  try {
    const connection = await mongoose.connect(MONGO_URI);

    logger.info(`MongoDB connected: ${connection.connection.host}`);
  } catch (error: any) {
    logger.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
