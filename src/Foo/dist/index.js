"use strict";
exports.__esModule = true;
/*
 * @Author: D.Y.M
 * @Date: 2021-10-08 19:46:32
 * @LastEditTime: 2021-10-27 10:59:45
 * @FilePath: /doc-test/src/Foo/index.tsx
 * @Description:
 */
var react_1 = require("react");
var index_module_less_1 = require("./index.module.less");
exports["default"] = (function (_a) {
    var title = _a.title;
    return react_1["default"].createElement("h1", { className: index_module_less_1["default"].foo }, title);
});
