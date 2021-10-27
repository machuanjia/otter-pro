'use strict';
exports.__esModule = true;
/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 15:56:42
 * @LastEditTime: 2021-10-27 16:12:02
 * @FilePath: /doc-test/src/components/SimpleList/index.tsx
 * @Description:
 */
var react_1 = require('react');
var SimpleList = function(props) {
  var _a = props.list,
    list = _a === void 0 ? [] : _a,
    _b = props.className,
    className = _b === void 0 ? '' : _b,
    _c = props.propKey,
    propKey = _c === void 0 ? 'name' : _c,
    _d = props.selectKey,
    selectKey = _d === void 0 ? 'id' : _d,
    _e = props.selected,
    selected = _e === void 0 ? '' : _e;
  return react_1['default'].createElement(
    react_1['default'].Fragment,
    null,
    react_1['default'].createElement(
      'div',
      { className: '' + className },
      list.map(function(n) {
        return react_1['default'].createElement(
          'div',
          {
            className:
              'text-secondary cursor-pointer hover:bg-hover hover:text-primary p-2 ' +
              (n[selectKey] === selected ? 'bg-active' : 'bg-white'),
          },
          n[propKey],
        );
      }),
    ),
  );
};
exports['default'] = SimpleList;
