---
title: NavTabs
nav:
  path: /components
  title: Components
  order: 0
group:
  path: /components/NavTabs
  title: NavTabs
  order: 0
---

## NavTabs

Demo:

```tsx
import React from 'react';
import { NavTabs } from 'otter-pro';

export default () => (
  <NavTabs
    active={'a'}
    tabs={[
      { name: 'a', path: '/a', key: 'a' },
      { name: 'b', path: '/b', key: 'b' },
    ]}
  />
);
```

<API src="./index.tsx"></API>
