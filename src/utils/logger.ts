import pino from 'pino';
import dayjs from 'dayjs';

const log = pino({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `Time: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
});

export default log;
