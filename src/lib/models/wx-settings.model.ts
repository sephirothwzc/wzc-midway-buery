/*
 * @Author: 吴占超
 * @Date: 2019-05-24 14:57:02
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-05-25 16:51:49
 */
import { providerWrapper } from 'midway';
import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType
} from 'sequelize-typescript';
import { BaseModel } from '../../base/base.model';
const { BIGINT } = DataType;

// @provide 用 工厂模式static model
export const factory = () => WxSettingsModel;
providerWrapper([
  {
    id: 'WxSettingsModel',
    provider: factory
  }
]);
// 依赖注入用导出类型
export type IWxSettingsModel = typeof WxSettingsModel;

@Table({
  tableName: 'wx_settings'
})
export class WxSettingsModel extends BaseModel {
  @Column({
    type: BIGINT,
    primaryKey: true,
    autoIncrement: false
  })
  id: string;

  @Column({
    comment: '编码'
  })
  code: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  @DeletedAt
  @Column
  deletedAt: Date;

  @Column({ comment: '标识' })
  key: string;

  @Column({ comment: '设置值' })
  ofvalue: string;

  @Column({ comment: '上级关联' })
  parentId: string;

  @Column({ comment: '自定义' })
  remark: string;
}
