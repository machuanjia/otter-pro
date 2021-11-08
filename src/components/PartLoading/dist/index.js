'use strict';
exports.__esModule = true;
var react_1 = require('react');
var index_module_less_1 = require('./index.module.less');
var PartLoading = function() {
  return react_1['default'].createElement(
    'div',
    { className: ' h-full flex flex-row items-center' },
    react_1['default'].createElement(
      'div',
      { className: index_module_less_1['default'].loading },
      react_1['default'].createElement('span', null),
      react_1['default'].createElement('span', null),
      react_1['default'].createElement('span', null),
    ),
  );
};
exports['default'] = PartLoading;
