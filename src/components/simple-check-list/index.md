---
title: SimpleCheckList
nav:
  path: /components
  title: Components
  order: 0
group:
  path: /components/SimpleCheckList
  title: SimpleCheckList
  order: 0
---

## SimpleCheckList

Demo:

```tsx
import React from 'react';
import { SimpleCheckList } from 'otter-pro';

export default () => (
  <SimpleCheckList
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
