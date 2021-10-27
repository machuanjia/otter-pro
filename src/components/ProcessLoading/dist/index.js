'use strict';
exports.__esModule = true;
/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 13:58:45
 * @LastEditTime: 2021-10-27 14:19:26
 * @FilePath: /doc-test/src/ProcessLoading/index.tsx
 * @Description:
 */
var react_1 = require('react');
var nprogress_1 = require('nprogress');
require('nprogress/nprogress.css');
nprogress_1['default'].configure({ showSpinner: false });
var ProcessLoading = function() {
  react_1.useEffect(function() {
    nprogress_1['default'].start();
    return function() {
      nprogress_1['default'].done();
    };
  }, []);
  return react_1['default'].createElement(react_1['default'].Fragment, null);
};
exports['default'] = ProcessLoading;
