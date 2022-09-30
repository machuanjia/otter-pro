/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 15:29:37
 * @LastEditTime: 2022-06-15 11:33:45
 * @FilePath: /pro/src/constants/index.ts
 * @Description:
 */
export * from './colors'

export const LIB_PREFIX = 'otter-pro'

export enum STATUS {
  LOADING = 1,
  IDLE = 2,
  FAILED = 3,
}
export enum MODAL_SIZE {
  XS = 360,
  SM = 480,
  MD = 620,
  LG = 980,
  XL = 1024,
}

export enum DRAWER_SIZE {
  XS = 360,
  SM = 480,
  MD = 620,
  LG = 980,
  XL = 1024,
}

export enum LAYOUT_TYPE {
  NORMAL = 'normal',
  FULL = 'full',
}

export enum STATE {
  STATE_UNSPECIFIED = 'STATE_UNSPECIFIED',
  ACTIVE = 'ACTIVE',
  DELETED = 'DELETED',
}
