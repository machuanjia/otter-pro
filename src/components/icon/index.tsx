/*
 *
 * <Icon name="node-tree"/>
 * <Icon name="node-tree" size={20} scale={1.2}/>
 */
import React, { useEffect, useState, memo } from 'react'

import { LIB_PREFIX } from '../../constants'

type Props = {
  // icon 名称
  name: string
  // 自定义class
  className?: string
  // 设置大小
  size?: number
  // 缩放比例
  scale?: number
  // 点击事件
  onClick?: () => void
}

const Icon = memo(
  React.forwardRef(({ name, className = '', size, scale, onClick }: Props) => {
    const [styles, setStyles] = useState<{
      fontSize?: number
      transform?: string
    }>({})

    useEffect(() => {
      const temp = {}
      // @ts-ignore
      size && (temp.fontSize = size)
      // @ts-ignore
      scale && (temp.transform = `scale(${scale})`)
      setStyles(temp)
    }, [size, scale])

    return (
      <i
        className={`iconfont ml-${name} ${LIB_PREFIX}-icon-default ${className}`}
        style={styles}
        onClick={onClick}
      />
    )
  }),
)

export default Icon;
