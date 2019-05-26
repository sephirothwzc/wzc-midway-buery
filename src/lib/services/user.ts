import { BaseService } from '../../base/base.service';
import { IUserModel } from '../models/user.model';
import { inject, provide } from 'midway';

export interface IUserService extends UserService {}

/*
 * @Author: 吴占超
 * @Date: 2019-05-26 15:25:06
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-05-26 17:10:52
 */
@provide()
export class UserService extends BaseService {
  @inject()
  private UserModel: IUserModel;

  async find() {
    return this.UserModel.findAll();
  }
}
