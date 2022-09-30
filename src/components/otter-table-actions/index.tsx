/*
 * @Author: D.Y.M
 * @Date: 2022-08-09 15:48:09
 * @LastEditTime: 2022-08-09 16:05:49
 * @FilePath: /web/pro/src/components/otter-table-actions/index.tsx
 * @Description:
 */
import { Space } from "antd"
import React from "react"
import { ReactChildren } from "react-dom/node_modules/@types/react"

import { LIB_PREFIX } from '../../constants'

const OtterTableActions = (props:{children:ReactChildren}) => {
  return (
    <Space align='center' className={`${LIB_PREFIX}-table-actions-wrap`}><>{props.children}</></Space>
  )
}
export default OtterTableActions
