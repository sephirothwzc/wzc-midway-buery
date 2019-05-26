/*
 * @Author: 吴占超
 * @Date: 2019-05-24 13:57:10
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-05-26 15:50:37
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
  sequelize: Sequelize;

  /**
   * Creates an instance of DBContext.
   * @param {ISequelizeConfig} config
   * @memberof DBContext
   */
  constructor(@config('sequelize') config: ISequelizeConfig) {
    this.sequelize = new Sequelize({
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
        console.log(filename);
        return (
          filename.substring(0, filename.indexOf('.model')).replace('-', '') +
            'model' ===
          member.toLowerCase()
        );
      },
      define: {
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        underscored: true
      }
    });
    return this.sequelize
      .authenticate()
      .then(result => {
        console.log('DataBase Connection successfully!');
      })
      .catch(err => {
        throw new Error(`Unable to connect to the database:${err}`);
      });
  }
}
