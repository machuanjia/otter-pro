"use strict";
exports.__esModule = true;
/*
 * @Author: D.Y.M
 * @Date: 2021-10-09 16:06:52
 * @LastEditTime: 2021-10-27 13:57:43
 * @FilePath: /doc-test/src/GlobalLoading/index.tsx
 * @Description:
 */
var react_1 = require("react");
var GlobalLoading = function (props) {
    var description = props.description, _a = props.className, className = _a === void 0 ? '' : _a;
    return (react_1["default"].createElement("div", { className: "max-w-xs m-auto flex flex-col justify-center items-center " + className },
        react_1["default"].createElement("div", { className: "w-16 h-16 border-4 border-primary border-dashed rounded-full animate-spin" }),
        description && react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { className: " text-secondary text-lg mt-4" }, description))));
};
exports["default"] = GlobalLoading;
