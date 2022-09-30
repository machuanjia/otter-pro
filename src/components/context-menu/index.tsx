/*
 * @Author: D.Y.M
 * @Date: 2021-11-29 19:37:56
 * @LastEditTime: 2021-12-31 10:55:08
 * @FilePath: /pro/src/components/context-menu/index.tsx
 * @Description:
 */

import React from "react"
import { SimpleList } from ".."

import { LIB_PREFIX } from '../../constants'

const ContextMenu = (props: {
  x: number
  y: number
  isVisible: boolean
  list: any
  action: (id: string) => void
  [propname:string]:any
}) => {
  const { x, y, isVisible, list, action, ...args } = props
  // @ts-ignore
  const handleAction = ({ id }) => {
    action(id)
  }
  return <>{isVisible && <div {...args} className={`${LIB_PREFIX}-context-menu`} style={{
    top: y,
    left: x,
  }}>
    <SimpleList
      list={list}
      onItemClick={handleAction}
    />
  </div>}</>
}
export default ContextMenu
