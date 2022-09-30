/*
 * @Author: D.Y.M
 * @Date: 2021-12-30 19:20:16
 * @LastEditTime: 2021-12-30 20:14:29
 * @FilePath: /pro/src/components/otter-table-field-date/index.tsx
 * @Description:
 */
import moment from "moment"
import React from "react"
import { Text } from ".."

const OtterTableFieldDate = (props: { date: Date, format?: string }) => {
  const { date, format = 'YYYY-MM-DD HH:mm:ss' } = props
  return <Text type="info">{date ? moment(date).format(format) : '-'}</Text>
}

export default OtterTableFieldDate
