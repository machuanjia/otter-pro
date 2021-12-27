/*
 * @Author: D.Y.M
 * @Date: 2021-11-08 11:14:27
 * @LastEditTime: 2021-12-23 14:12:19
 * @FilePath: /mlplatform/web/pro/src/models/IModel.ts
 * @Description:
 */
export interface IModel {
  id: string;
  title: string;
  state: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'DELETED';
  description: string;
}
