---
id: programmatic
title: Programmatic
---

GingerBook can be also used through its JavaScript API:

```tsx
import serve from "@ginger-society/ginger-book/serve";
import build from "@ginger-society/ginger-book/build";
import preview from "@ginger-society/ginger-book/preview";

await serve({
  // config: {}
});
await build({
  // config: {}
});
await preview({
  // config: {}
});
```

Explore all config.mjs [options](./config#ginger-bookconfigmjs).
