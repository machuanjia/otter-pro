'use strict';
exports.__esModule = true;
exports.LAYOUT_TYPE = exports.DRAWER_SIZE = exports.MODAL_SIZE = exports.STATUS = void 0;
/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 15:29:37
 * @LastEditTime: 2021-11-12 11:32:34
 * @FilePath: /doc-test/src/constants/index.ts
 * @Description:
 */
var STATUS;
(function(STATUS) {
  STATUS[(STATUS['LOADING'] = 1)] = 'LOADING';
  STATUS[(STATUS['IDLE'] = 2)] = 'IDLE';
  STATUS[(STATUS['FAILED'] = 3)] = 'FAILED';
})((STATUS = exports.STATUS || (exports.STATUS = {})));
var MODAL_SIZE;
(function(MODAL_SIZE) {
  MODAL_SIZE[(MODAL_SIZE['XS'] = 360)] = 'XS';
  MODAL_SIZE[(MODAL_SIZE['SM'] = 480)] = 'SM';
  MODAL_SIZE[(MODAL_SIZE['MD'] = 620)] = 'MD';
  MODAL_SIZE[(MODAL_SIZE['LG'] = 980)] = 'LG';
  MODAL_SIZE[(MODAL_SIZE['XL'] = 1024)] = 'XL';
})((MODAL_SIZE = exports.MODAL_SIZE || (exports.MODAL_SIZE = {})));
var DRAWER_SIZE;
(function(DRAWER_SIZE) {
  DRAWER_SIZE[(DRAWER_SIZE['XS'] = 360)] = 'XS';
  DRAWER_SIZE[(DRAWER_SIZE['SM'] = 480)] = 'SM';
  DRAWER_SIZE[(DRAWER_SIZE['MD'] = 620)] = 'MD';
  DRAWER_SIZE[(DRAWER_SIZE['LG'] = 980)] = 'LG';
  DRAWER_SIZE[(DRAWER_SIZE['XL'] = 1024)] = 'XL';
})((DRAWER_SIZE = exports.DRAWER_SIZE || (exports.DRAWER_SIZE = {})));
var LAYOUT_TYPE;
(function(LAYOUT_TYPE) {
  LAYOUT_TYPE['NORMAL'] = 'normal';
  LAYOUT_TYPE['FULL'] = 'full';
})((LAYOUT_TYPE = exports.LAYOUT_TYPE || (exports.LAYOUT_TYPE = {})));
