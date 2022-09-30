/*
 * @Author: D.Y.M
 * @Date: 2021-11-25 16:37:07
 * @LastEditTime: 2022-03-11 14:30:30
 * @FilePath: /mlplatform/web/pro/src/hooks/useRedirect.ts
 * @Description:
 */
import { useHistory, useLocation } from 'react-router-dom'
const useRedirect = () => {
  const history = useHistory()
  const location = useLocation()
  const redirect = (from: string, to: string) => {
    if (from && to && location.pathname === from) {
      history.push(to)
    }
  }
  return [redirect]
}

export default useRedirect
