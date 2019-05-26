/*
 * @Author: 吴占超
 * @Date: 2019-05-26 15:17:26
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-05-26 15:59:24
 */
import { providerWrapper } from 'midway';
import { Table, Column } from 'sequelize-typescript';
import { BaseModel } from '../../base/base.model';

// @provide 用 工厂模式static model
export const factory = () => IdcardImgModel;
providerWrapper([
  {
    id: 'IdcardImgModel',
    provider: factory
  }
]);
// 依赖注入用导出类型
export type IIdcardImgModel = typeof IdcardImgModel;

@Table({
  tableName: 't_idcard_img'
})
export class IdcardImgModel extends BaseModel {
  /**
   *  创建人id
   */
  @Column({ comment: '创建人id' })
  createBy: string;

  /**
   *  创建时间
   */
  @Column({ comment: '创建时间' })
  createAt: Date;

  /**
   *  修改人
   */
  @Column({ comment: '修改人' })
  updateBy: string;

  /**
   *  最后修改时间
   */
  @Column({ comment: '最后修改时间' })
  updateAt: Date;

  /**
   *  业务关联ID
   */
  @Column({ comment: '业务关联ID' })
  associateId: string;

  /**
   *  图片名称
   */
  @Column({ comment: '图片名称' })
  imgName: string;

  /**
   *  图片完整路径
   */
  @Column({ comment: '图片完整路径' })
  imgPath: string;

  /**
   *  图片大小
   */
  @Column({ comment: '图片大小' })
  imgSize: string;

  /**
   *  图片类型0=正面，1=反面
   */
  @Column({ comment: '图片类型0=正面，1=反面' })
  imgType: number;

  /**
   *  排序字段
   */
  @Column({ comment: '排序字段' })
  sort: string;
}
