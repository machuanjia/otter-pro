/*
 * @Author: D.Y
 * @Date: 2021-04-22 14:12:06
 * @LastEditTime: 2021-12-14 18:15:07
 * @LastEditors: Please set LastEditors
 * @FilePath: /doc-test/src/utils/request.ts
 * @Description:
 */

import axios from 'axios';

type IOption = {
  baseURL?: string;
  timeout?: number;
  requestAction?: (config: any) => {};
  responseAction?: any;
  responseErrorAction?: any;
};

export const defaultOptions: IOption = {
  baseURL: '/api',
  timeout: 5000,
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  requestAction: config => {},
  responseAction: null,
  responseErrorAction: null,
};

export const getRequest = (ops: IOption) => {
  const options = Object.assign(defaultOptions, ops);
  const service = axios.create({
    baseURL: options.baseURL,
    timeout: options.timeout,
  });

  service.interceptors.request.use(
    config => {
      options.requestAction && options.requestAction(config);
      return config;
    },
    error => {
      Promise.reject(error);
    },
  );
  service.interceptors.response.use(
    response => {
      if (options.responseAction) {
        return options.responseAction(response);
      }
      return response;
    },
    error => {
      if (options.responseErrorAction) {
        return options.responseErrorAction(error);
      }
      return Promise.reject(error);
    },
  );
  return service;
};
