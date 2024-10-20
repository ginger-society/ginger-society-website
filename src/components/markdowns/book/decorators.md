---
id: decorators
title: Decorators
---

GingerBook supports story decorators, so you can wrap all stories in a file with additional React component(s). This is useful if your stories/components rely on [React Context](https://reactjs.org/docs/context.html) and libraries like `react-router`, `redux` or [next](https://docs.gingersociety.org/docs/ginger-book/nextjs/). In the example below, we are adding an extra `margin: 3em` to each story:

```tsx
import type { StoryDefault } from "@ginger-society/ginger-book";

export default {
  decorators: [
    (Component) => (
      <div style={{ margin: "3em" }}>
        <Component />
      </div>
    ),
  ],
} satisfies StoryDefault;
```

`decorators` is an array, so you can compose multiple components together. You can also set a [global decorator or provider](./providers).

Decorators can be also applied to a specific story:

```tsx
import type { Story } from "@ginger-society/ginger-book";

export const MyStory: Story = () => <div>My Story</div>;

MyStory.decorators = [
  (Component) => (
    <div style={{ margin: "3em" }}>
      <Component />
    </div>
  ),
];
```

## Context Parameter

You can also access GingerBook's context through the second parameter. This way, your decorators can control every aspect of GingerBook, including the state of controls and other addons:

```tsx
import type { StoryDefault, Story } from "@ginger-society/ginger-book";

type Props = { label: string };

export default {
  decorators: [
    (Component, context) => (
      <div style={{ margin: "3em" }}>
        {context.globalState.control.label.value}
        <Component />
      </div>
    ),
  ],
} satisfies StoryDefault<Props>;

const Card: Story<Props> = ({ label }) => <p>Label: {label}</p>;
Card.args = {
  label: "Hello",
};
```
