/*
 * @Author: 吴占超
 * @Date: 2019-05-26 15:15:16
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-05-26 15:59:17
 */
import { providerWrapper } from 'midway';
import { Table, Column } from 'sequelize-typescript';
import { BaseModel } from '../../base/base.model';

// @provide 用 工厂模式static model
export const factory = () => UserModel;
providerWrapper([
  {
    id: 'UserModel',
    provider: factory
  }
]);
// 依赖注入用导出类型
export type IUserModel = typeof UserModel;

@Table({
  tableName: 't_user'
})
export class UserModel extends BaseModel {
  /**
   *  数据校验编码
   */
  @Column({ comment: '数据校验编码' })
  rules: string;

  /**
   *  用户名
   */
  @Column({ comment: '用户名' })
  username: string;

  /**
   *  密码
   */
  @Column({ comment: '密码' })
  password: string;

  /**
   *  当前token
   */
  @Column({ comment: '当前token' })
  token: string;

  /**
   *  最后操作时间
   */
  @Column({ comment: '最后操作时间' })
  lastTouch: Date;

  /**
   *  过期时间
   */
  @Column({ comment: '过期时间' })
  tokenEnd: Date;

  /**
   *  手机号
   */
  @Column({ comment: '手机号' })
  phoneNo: string;

  /**
   *  邀请二维码链接
   */
  @Column({ comment: '邀请二维码链接' })
  invitationUrl: string;

  /**
   *  指纹id
   */
  @Column({ comment: '指纹id' })
  fingerprintId: string;

  /**
   *  人脸id
   */
  @Column({ comment: '人脸id' })
  faceId: string;

  /**
   *  微信第三方open_id
   */
  @Column({ comment: '微信第三方open_id' })
  wxOpenId: string;

  /**
   *  QQ第三方open_id
   */
  @Column({ comment: 'QQ第三方open_id' })
  qqOpenId: string;

  /**
   *  支付宝id
   */
  @Column({ comment: '支付宝id' })
  alipayAppId: string;

  /**
   *  用户状态
   */
  @Column({ comment: '用户状态' })
  userStatus: string;

  /**
   *  真实姓名
   */
  @Column({ comment: '真实姓名' })
  realName: string;

  /**
   *  身份证号
   */
  @Column({ comment: '身份证号' })
  idNumber: string;

  /**
   *  邀请码
   */
  @Column({ comment: '邀请码' })
  invitationCode: string;

  /**
   *  头像地址
   */
  @Column({ comment: '头像地址' })
  profilePicture: string;

  /**
   *  权重10游客20普通用户30会员，注册后普通用户，审批通过后会员用户，拉黑后 -10
   */
  @Column({
    comment:
      '权重10游客20普通用户30会员，注册后普通用户，审批通过后会员用户，拉黑后 -10'
  })
  shiroRoles: number;

  /**
   *  信用积分
   */
  @Column({ comment: '信用积分' })
  creditScore: string;

  /**
   *  审批人
   */
  @Column({ comment: '审批人' })
  shiroUser: string;

  /**
   *  审批时间
   */
  @Column({ comment: '审批时间' })
  shiroTime: Date;

  /**
   *  审批备注
   */
  @Column({ comment: '审批备注' })
  shiroRemark: string;

  /**
   *  微信号
   */
  @Column({ comment: '微信号' })
  wxCode: string;

  /**
   *  家庭地址
   */
  @Column({ comment: '家庭地址' })
  addRess: string;
}
