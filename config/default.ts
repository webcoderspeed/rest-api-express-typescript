export default {
  PORT: 1337,
  MONGO_URI: 'mongodb://localhost:27017/rest-api-express-typescript',
  BASE_PATH: '/api/v1',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  accessTokenPrivateKey: ``,
  accessTokenPublicKey: ``,
  refreshTokenPrivateKey: ``,
  refreshTokenPublicKey: ``,
};
