/*
 * @Author: D.Y.M
 * @Date: 2021-11-08 13:52:39
 * @LastEditTime: 2021-11-22 16:52:48
 * @FilePath: /doc-test/src/models/IList.ts
 * @Description:
 */
export interface IList {
  total_size?: number;
  page_size?: number;
  page?: number;
  [propname: string]: any;
}
