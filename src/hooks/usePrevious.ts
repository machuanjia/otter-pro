/*
 * @Author: D.Y.M
 * @Date: 2021-11-25 16:37:07
 * @LastEditTime: 2021-11-25 16:41:17
 * @FilePath: /otter-data/src/hooks/useRedirect.ts
 * @Description:
 */
import React from 'react'

const usePrevious = (data:any) => {
  const ref = React.useRef()
  React.useEffect(() => {
    ref.current = data
  }, [data])
  return ref.current
}

export default usePrevious
