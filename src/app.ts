/*
 * @Author: 吴占超
 * @Date: 2019-05-25 09:56:11
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-05-25 12:30:09
 */
import { DBContext } from './lib/models/dbcontext';

module.exports = app => {
  app.beforeStart(async () => {
    console.log('====================================');
    console.log('🚀  Your awesome APP is launching...');
    console.log('====================================');

    await DBContext.initDB(app.config.development.sequelize);
    // console.log(db.sequelize.models);

    console.log('====================================');
    console.log('✅  Your awesome APP launched');
    console.log('====================================');
  });
};
