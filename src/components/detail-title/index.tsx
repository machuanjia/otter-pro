/*
 * @Author: D.Y.M
 * @Date: 2022-04-19 14:18:07
 * @LastEditTime: 2022-04-29 15:00:48
 * @FilePath: /pro/src/components/detail-title/index.tsx
 * @Description:
 */
import React, { useState } from 'react'

import { Input } from 'antd'

const DetailTitle = (props: { title: string; onSuccess: (title: string) => void }) => {
  const { title, onSuccess } = props

  const [value, setValue] = useState(title)

  const inputChange = (e: any) => {
    setValue(e.target.value)
    onSuccess?.(e.target.value)
  }

  return (
    <>
      <Input
        value={value}
        maxLength={32}
        onChange={(e) => setValue(e.target.value)}
        onBlur={inputChange}
      />
    </>
  )
}

export default DetailTitle
