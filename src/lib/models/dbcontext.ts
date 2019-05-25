/*
 * @Author: 吴占超
 * @Date: 2019-05-24 13:57:10
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-05-25 12:31:11
 */
import { provide, scope, ScopeEnum, config } from 'midway';
import { Sequelize } from 'sequelize-typescript';

interface ISequelizeConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  dialect: string;
  timezone: '+08:00';
}

@scope(ScopeEnum.Singleton)
@provide('DBContext')
export class DBContext {
  static sequelize: Sequelize;

  /**
   * Creates an instance of DBContext.
   * @param {ISequelizeConfig} config
   * @memberof DBContext
   */
  static initDB(@config('sequelize') config: ISequelizeConfig) {
    DBContext.sequelize = new Sequelize({
      dialect: 'mysql',
      host: config.host,
      timezone: config.timezone,
      port: config.port,
      database: config.database,
      username: config.username,
      password: config.password,
      storage: ':memory:',
      modelPaths: [__dirname + '/*.model.ts'],
      modelMatch: (filename, member) => {
        return (
          filename.substring(0, filename.indexOf('.model')).replace('-', '') +
            'model' ===
          member.toLowerCase()
        );
      },
      define: {
        timestamps: true,
        paranoid: true,
        charset: 'utf8'
      }
    });
    DBContext.sequelize
      .authenticate()
      .then(result => {
        console.log('DataBase Connection successfully!');
      })
      .catch(err => {
        throw new Error(`Unable to connect to the database:${err}`);
      });
  }
}
