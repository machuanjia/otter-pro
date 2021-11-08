---
title: 类型定义
nav:
  path: /models
  title: Models
  order: 0
group:
  path: /models/index
  title: 类型定义
  order: 0
---

## 数据返回

```
export interface IResponse {
  code: number;
  data: any;
  msg?: string;
}

```

## 对象公共类型，其他对象继承该对象

```
export interface IModel {
  id: number;
  name: string;
  status: number;
  description: string;
}

```

## 列表对象

```
export interface IList {
  total: number;
  page_size: number;
  page_index: number;
  value: any;
}

```
