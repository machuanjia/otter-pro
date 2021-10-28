'use strict';
exports.__esModule = true;
exports.DRAWER_SIZE = exports.STATUS = void 0;
/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 15:29:37
 * @LastEditTime: 2021-10-28 13:53:53
 * @FilePath: /doc-test/src/constants/index.ts
 * @Description:
 */
var STATUS;
(function(STATUS) {
  STATUS[(STATUS['LOADING'] = 1)] = 'LOADING';
  STATUS[(STATUS['IDLE'] = 2)] = 'IDLE';
  STATUS[(STATUS['FAILED'] = 3)] = 'FAILED';
})((STATUS = exports.STATUS || (exports.STATUS = {})));
var DRAWER_SIZE;
(function(DRAWER_SIZE) {
  DRAWER_SIZE[(DRAWER_SIZE['SM'] = 360)] = 'SM';
  DRAWER_SIZE[(DRAWER_SIZE['MD'] = 480)] = 'MD';
  DRAWER_SIZE[(DRAWER_SIZE['LG'] = 620)] = 'LG';
})((DRAWER_SIZE = exports.DRAWER_SIZE || (exports.DRAWER_SIZE = {})));
