/*
 * @Author: 吴占超
 * @Date: 2019-05-25 10:38:27
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-05-26 15:58:20
 */
import { provide, controller, Context, get, inject } from 'midway';
import { IUserService } from '../../lib/services/user';

@provide()
@controller('/user')
export class TUserController {
  @inject()
  private userService: IUserService;

  @get('/')
  async index(ctx: Context) {
    ctx.body = await this.userService.find();
  }
}
