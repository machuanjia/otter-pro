---
title: 异步请求
nav:
  path: /utils
  title: Utils
  order: 0
group:
  path: /utils/request
  title: 异步请求
  order: 0
---

## 使用

```
// import { message } from 'antd'
import { getRequest } from 'otter-pro'

export default getRequest({
  baseURL: '/api',//APP_CONFIGRATION.api,
  // @ts-ignore
  requestAction: (config: any) => {
    config.headers.authorization = `Bearer 11111111212121`
  },
  responseAction: (res) => {
    // eslint-disable-next-line no-debugger
    const { code, data } = res
    if (code !== 200) {
      // if (code === 10001) {
      //   message.error('没有权限登录，请联系渠道经理!')
      // } else if (code === 10003) {
      //   message.error('验证码无效!')
      // } else if (code === 10004) {
      //   message.error('用户没有登录，请重新登录!')
      //   logout()
      // } else if (code === 10010) {
      //   logout()
      // }
      return Promise.reject(res)
    }
    return data
  },
})

```
