export const development = {
  watchDirs: [
    'app',
    'lib',
    'service',
    'config',
    'app.ts',
    'agent.ts',
    'interface.ts'
  ],
  overrideDefault: true,
  // sequelize
  sequelize: {
    dialect: 'mysql',
    host: '39.106.49.196',
    port: '4406',
    database: 'sephiroth_base',
    username: 'root',
    password: 'Admin@123!9999',
    timezone: '+08:00'
  }
};
