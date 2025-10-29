export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  MONGODB: process.env.MONGODB,
  PORT: process.env.PORT || 3002,
});
