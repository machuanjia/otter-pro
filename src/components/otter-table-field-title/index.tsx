import React from "react"
import { Text } from ".."

const OtterTableFieldTitle = (props: { title: string }) => {
  const { title, ...args } = props
  return <Text {...args} type="default">{title || '-'}</Text>
}

export default OtterTableFieldTitle
