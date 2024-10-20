---
id: typescript
title: TypeScript
---

# TypeScript

GingerBook is written in TypeScript and provides first-class support for TypeScript.

## `tsconfig.json`

GingerBook uses [jsx-runtime](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) so there is not need to import React at the top of each module. However, you need to let TypeScript know:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "jsx": "react-jsx"
  },
  "include": ["src", ".ginger-book"]
}
```

## Exported Types

You can import [many types](https://github.com/ginger-society/ginger-book/blob/main/packages/ginger-book/lib/app/exports.ts#L52-L115) from `@ginger-society/ginger-book` to improve your development experience:

```ts
import type { StoryDefault, Story } from "@ginger-society/ginger-book";

type Props = { label: string };

export default {
  title: "New title",
} satisfies StoryDefault<Props>;

const Card: Story<Props> = ({ label }) => <p>Label: {label}</p>;
Card.args = {
  label: "Hello",
};
```
