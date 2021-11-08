---
title: ContentLayout
nav:
  path: /components
  title: Components
  order: 0
group:
  path: /components/ContentLayout
  title: ContentLayout
  order: 0
---

## ContentLayout

Demo:

```tsx
import React, { Fragment } from 'react';
import { ContentLayout } from 'otter-pro';

export default () => (
  <ContentLayout>
    <Fragment key="hLeft">left</Fragment>
    <Fragment key="hCenter">center</Fragment>
    <Fragment key="hRight">right</Fragment>
    <Fragment key="main">main</Fragment>
  </ContentLayout>
);
```

<API src="./index.tsx"></API>
