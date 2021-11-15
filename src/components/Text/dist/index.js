'use strict';
/*
 * @Author: D.Y.M
 * @Date: 2021-11-15 14:01:47
 * @LastEditTime: 2021-11-15 14:28:38
 * @FilePath: /doc-test/src/components/Text/index.tsx
 * @Description:
 */
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
exports.__esModule = true;
var react_1 = require('react');
var index_module_less_1 = require('./index.module.less');
var Text = function(_a) {
  var _b = _a.type,
    type = _b === void 0 ? 'default' : _b,
    className = _a.className,
    children = _a.children,
    args = __rest(_a, ['type', 'className', 'children']);
  return react_1['default'].createElement(
    'span',
    __assign({}, args, {
      className:
        className + ' ' + index_module_less_1['default']['text-' + type],
    }),
    children,
  );
};
exports['default'] = Text;
