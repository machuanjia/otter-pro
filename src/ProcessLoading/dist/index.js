"use strict";
exports.__esModule = true;
var react_1 = require("react");
var nprogress_1 = require("nprogress");
require("nprogress/nprogress.css");
nprogress_1["default"].configure({ showSpinner: false });
var ProcessLoading = function () {
    react_1.useEffect(function () {
        nprogress_1["default"].start();
        return function () {
            nprogress_1["default"].done();
        };
    }, []);
    return null;
};
exports["default"] = ProcessLoading;
