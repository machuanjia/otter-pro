/*
 * @Author: D.Y.M
 * @Date: 2021-11-08 13:53:59
 * @LastEditTime: 2021-11-08 13:54:00
 * @FilePath: /doc-test/src/models/IResponse.ts
 * @Description:
 */
export interface IResponse {
  code: number;
  data: any;
  msg?: string;
}
