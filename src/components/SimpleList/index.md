---
title: SimpleList
nav:
  path: /components
  title: Components
  order: 0
group:
  path: /components/SimpleList
  title: SimpleList
  order: 0
---

## SimpleList

Demo:

```tsx
import React from 'react';
import { SimpleList } from 'otter-pro';

export default () => (
  <SimpleList
    selected="2"
    list={[
      { id: '1', name: 'sdasdasdas' },
      { id: '2', name: 'sdasdasdas' },
      { id: '3', name: 'sdasdasdas' },
    ]}
    propKey="name"
  />
);
```

<API src="./index.tsx"></API>
