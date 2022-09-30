/*
 * @Author: D.Y.M
 * @Date: 2022-07-18 14:32:40
 * @LastEditTime: 2022-07-18 14:33:31
 * @FilePath: /pro/src/components/otter-table-field-primary/index.tsx
 * @Description:
 */
import React from "react"
import { Text } from ".."

const OtterTableFieldPrimary = (props: { text: string }) => {
  const { text, ...args } = props
  return <Text {...args} type="default">{text || '-'}</Text>
}

export default OtterTableFieldPrimary
