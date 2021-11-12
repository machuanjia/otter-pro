'use strict';
exports.__esModule = true;
/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 15:56:42
 * @LastEditTime: 2021-10-28 14:27:07
 * @FilePath: /doc-test/src/components/SimpleList/index.tsx
 * @Description:
 */
var react_1 = require('react');
var index_module_less_1 = require('./index.module.less');
var SimpleList = function(props) {
  var _a = props.list,
    list = _a === void 0 ? [] : _a,
    _b = props.className,
    className = _b === void 0 ? '' : _b,
    _c = props.itemClass,
    itemClass = _c === void 0 ? '' : _c,
    _d = props.propKey,
    propKey = _d === void 0 ? 'name' : _d,
    _e = props.selectKey,
    selectKey = _e === void 0 ? 'id' : _e,
    _f = props.selected,
    selected = _f === void 0 ? '' : _f,
    _g = props.onItemClick,
    onItemClick = _g === void 0 ? function() {} : _g,
    _h = props.Suffix,
    Suffix = _h === void 0 ? null : _h;
  var handleClick = function(e, n) {
    e.stopPropagation();
    onItemClick(n);
  };
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
            key: n[selectKey],
            onClick: function(e) {
              handleClick(e, n);
            },
            className:
              index_module_less_1['default']['list-item'] +
              ' ' +
              itemClass +
              ' ' +
              (n[selectKey] === selected ? 'bg-active' : 'bg-white'),
          },
          react_1['default'].createElement(
            'div',
            { className: index_module_less_1['default']['list-text'] },
            ' ',
            n[propKey],
          ),
          Suffix &&
            react_1['default'].createElement(
              'div',
              { className: index_module_less_1['default']['list-action'] },
              react_1['default'].createElement(Suffix, { entity: n }),
            ),
        );
      }),
    ),
  );
};
exports['default'] = SimpleList;
