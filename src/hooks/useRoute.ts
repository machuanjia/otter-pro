/*
 * @Author: D.Y.M
 * @Date: 2021-11-14 14:48:37
 * @LastEditTime: 2022-06-14 16:55:42
 * @FilePath: /main/src/hooks/useRoute.ts
 * @Description:
 */
import { useEffect } from 'react';

import { matchRoutes, useLocation } from 'react-router-dom';

export const useRoute = ({ routes, setCurrentRoute, setBread }: any) => {
  const location = useLocation();

  const setRoute = () => {
    const matches = matchRoutes(routes, { pathname: location.pathname });
    if (!matches || matches.length === 0) {
      return;
    }
    const { route }: any = matches[matches.length - 1];
    if (route) {
      setCurrentRoute && setCurrentRoute(route);
      setBread &&
        setBread([
          {
            icon: route.meta.icon,
            name: route.meta.name,
          },
        ]);
    }
  };

  useEffect(() => {
    setRoute();
  }, [location]);
};

export default useRoute
