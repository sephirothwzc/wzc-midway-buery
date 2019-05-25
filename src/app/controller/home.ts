/*
 * @Author: 吴占超
 * @Date: 2019-05-25 10:43:10
 * @Last Modified by:   吴占超
 * @Last Modified time: 2019-05-25 10:43:10
 */
import { controller, get, provide } from 'midway';

@provide()
@controller('/')
export class HomeController {
  @get('/')
  async index(ctx) {
    ctx.body = `Welcome to midwayjs!`;
  }
}
