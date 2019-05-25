/*
 * @Author: 吴占超
 * @Date: 2019-05-25 10:38:27
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-05-25 11:21:03
 */
import { provide, controller, Context, get, inject } from 'midway';
import { IWxSettingsService } from '../../lib/services/wx-settings';

@provide()
@controller('/wx-settings')
export class WxSettingsController {
  @inject()
  wxSettingsService: IWxSettingsService;

  @get('/')
  async index(ctx: Context) {
    ctx.body = await this.wxSettingsService.find();
  }
}
