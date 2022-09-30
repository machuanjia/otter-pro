/*
 * @Author: D.Y.M
 * @Date: 2021-12-30 19:18:10
 * @LastEditTime: 2021-12-30 19:19:42
 * @FilePath: /pro/src/components/otter-table-field-description/index.tsx
 * @Description:
 */
import React from "react"
import { Text } from ".."

const OtterTableFieldDescription = (props: { description: string }) => {
  const { description } = props
  return <Text type="info">{description || '-'}</Text>
}

export default OtterTableFieldDescription
