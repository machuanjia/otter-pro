/*
 * @Author: D.Y.M
 * @Date: 2022-08-10 14:46:54
 * @LastEditTime: 2022-08-10 14:49:48
 * @FilePath: /web/pro/src/utils/update.mask.ts
 * @Description:
 */
import { isObject } from 'lodash'

export const GetUpdateMask = (payload: {}) => {
  if(!isObject(payload)){
    throw new Error("update mask payload is not an object");
  }
  return {
    update_mask:Object.keys(payload).join()
  }
};
