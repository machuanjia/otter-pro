/*
 * @Author: D.Y.M
 * @Date: 2021-12-23 16:40:08
 * @LastEditTime: 2022-04-29 14:56:19
 * @FilePath: /pro/src/components/otter-avatar/index.tsx
 * @Description:
 */

import { Avatar } from "antd"
import React from "react"
import { LIB_PREFIX } from '../../constants'

const OtterAvatar = (props: {
  name: string
  [propname: string]: any;
}) => {
  const { name, className = '', ...args } = props
  return <Avatar {...args} className={`${LIB_PREFIX}-avatar ${className}`}>{name ? (name.length > 3 ? name[0] : name) : ''}</Avatar>
}
export default OtterAvatar
