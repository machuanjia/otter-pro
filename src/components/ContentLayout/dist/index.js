'use strict';
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-11-12 08:27:40
 * @LastEditors: Please set LastEditors
 * @FilePath: /doc-test/src/components/ContentLayout/index.tsx
 * @Description:
 */
var react_1 = require('react');
var index_module_less_1 = require('./index.module.less');
var ContentLayout = /** @class */ (function(_super) {
  __extends(ContentLayout, _super);
  function ContentLayout() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ContentLayout.prototype.render = function() {
    var _a = this.props,
      children = _a.children,
      _b = _a.className,
      className = _b === void 0 ? '' : _b,
      _c = _a.hLeft,
      hLeft = _c === void 0 ? null : _c,
      _d = _a.hRight,
      hRight = _d === void 0 ? null : _d,
      _e = _a.hCenter,
      hCenter = _e === void 0 ? null : _e;
    var Left = null;
    var Right = null;
    var Center = null;
    if (hLeft) {
      Left = react_1['default'].createElement(
        'div',
        {
          className:
            index_module_less_1['default']['content-layout-header-left'],
        },
        hLeft,
      );
    }
    if (hCenter) {
      Center = react_1['default'].createElement(
        'div',
        {
          className:
            index_module_less_1['default']['content-layout-header-center'],
        },
        hCenter,
      );
    }
    if (hRight) {
      Right = react_1['default'].createElement(
        'div',
        {
          className:
            index_module_less_1['default']['content-layout-header-right'],
        },
        hRight,
      );
    }
    return react_1['default'].createElement(
      'section',
      {
        className:
          index_module_less_1['default']['content-layout'] + ' ' + className,
      },
      (Left || Center || Right) &&
        react_1['default'].createElement(
          react_1['default'].Fragment,
          null,
          react_1['default'].createElement(
            'header',
            {
              className:
                index_module_less_1['default']['content-layout-header'],
            },
            Left,
            Center,
            Right,
          ),
        ),
      react_1['default'].createElement(
        'div',
        { className: index_module_less_1['default']['content-layout-main'] },
        children,
      ),
    );
  };
  return ContentLayout;
})(react_1.Component);
exports['default'] = ContentLayout;
