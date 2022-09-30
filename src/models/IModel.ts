/*
 * @Author: D.Y.M
 * @Date: 2021-11-08 11:14:27
 * @LastEditTime: 2022-03-11 11:47:26
 * @FilePath: /mlplatform/web/pro/src/models/IModel.ts
 * @Description:
 */

export interface OperatorInfo {
  avatar_url: string
  create_time: string
  email: string
  id: string
  name: {
    family_name: string
    given_name: string
  }
  phone: string
  state: string
}

export interface UpdateOperation {
  update_time: string
  updater: OperatorInfo
}


export interface CreateOperation {
  create_time: string
  creator: OperatorInfo
}

export interface IModel {
  id: string;
  title: string;
  // state: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'DELETED';
  state: string;
  description: string;
  create_operation: CreateOperation
  update_operation: UpdateOperation
}
