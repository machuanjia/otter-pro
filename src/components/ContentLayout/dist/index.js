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
 * @LastEditTime: 2021-11-05 19:07:53
 * @LastEditors: Please set LastEditors
 * @FilePath: /doc-test/src/components/ContentLayout/index.tsx
 * @Description:
 */
var react_1 = require('react');
// @ts-ignore
var lodash_1 = require('lodash');
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
      className = _b === void 0 ? '' : _b;
    var childList = children;
    if (!childList) {
      throw new Error(
        'content layout children must be one of, item key must be [title | actions | bread | main]',
      );
    }
    if (!lodash_1.isArray(childList)) {
      childList = [childList];
    }
    var childrenMap = lodash_1.keyBy(childList, 'key');
    var hLeft = null;
    var hRight = null;
    var hCenter = null;
    var bread = null;
    var main = null;
    if (childrenMap.hLeft) {
      hLeft = react_1['default'].createElement(
        'div',
        {
          className:
            index_module_less_1['default']['content-layout-header-left'],
        },
        childrenMap.hLeft,
      );
    }
    if (childrenMap.hCenter) {
      hCenter = react_1['default'].createElement(
        'div',
        {
          className:
            index_module_less_1['default']['content-layout-header-center'],
        },
        childrenMap.hCenter,
      );
    }
    if (childrenMap.hRight) {
      hRight = react_1['default'].createElement(
        'div',
        {
          className:
            index_module_less_1['default']['content-layout-header-actions'],
        },
        childrenMap.hRight,
      );
    }
    if (childrenMap.main) {
      main = react_1['default'].createElement(
        'div',
        { className: index_module_less_1['default']['content-layout-main'] },
        childrenMap.main,
      );
    }
    return react_1['default'].createElement(
      'div',
      {
        className:
          index_module_less_1['default']['content-layout'] + ' ' + className,
      },
      (hLeft || hCenter || hRight) &&
        react_1['default'].createElement(
          react_1['default'].Fragment,
          null,
          react_1['default'].createElement(
            'div',
            {
              className:
                index_module_less_1['default']['content-layout-header'],
            },
            hLeft,
            hCenter,
            hRight,
          ),
        ),
      bread,
      main,
    );
  };
  return ContentLayout;
})(react_1.Component);
exports['default'] = ContentLayout;
