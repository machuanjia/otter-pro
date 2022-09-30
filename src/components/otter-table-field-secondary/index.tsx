/*
 * @Author: D.Y.M
 * @Date: 2022-07-18 14:32:40
 * @LastEditTime: 2022-07-18 14:35:45
 * @FilePath: /pro/src/components/otter-table-field-secondary/index.tsx
 * @Description:
 */
import React from "react"
import { Text } from ".."

const OtterTableFieldSecondary = (props: { text: string }) => {
  const { text, ...args } = props
  return <Text {...args} type="info">{text || '-'}</Text>
}

export default OtterTableFieldSecondary
