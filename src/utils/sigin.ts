/*
 * @Author: D.Y.M
 * @Date: 2021-12-14 19:14:15
 * @LastEditTime: 2022-03-02 15:15:58
 * @FilePath: /data/src/utils/sigin.ts
 * @Description:
 */
export const login = () => {
  window.location.href = `${window.location.protocol}//${window.location.host}/oauth2/login`
}

export const logout = () => {
  window.location.href = `${window.location.protocol}//${window.location.host}/oauth2/logout`
}

export const notFond = () => {
  window.location.href = `${window.location.protocol}//${window.location.host}/404`
}
