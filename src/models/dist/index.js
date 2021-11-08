'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function() {
            return m[k];
          },
        });
      }
    : function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __exportStar =
  (this && this.__exportStar) ||
  function(m, exports) {
    for (var p in m)
      if (p !== 'default' && !exports.hasOwnProperty(p))
        __createBinding(exports, m, p);
  };
exports.__esModule = true;
/*
 * @Author: D.Y.M
 * @Date: 2021-11-08 11:12:56
 * @LastEditTime: 2021-11-08 13:57:01
 * @FilePath: /doc-test/src/models/index.ts
 * @Description:
 */
__exportStar(require('./IModel'), exports);
__exportStar(require('./IList'), exports);
__exportStar(require('./IResponse'), exports);
