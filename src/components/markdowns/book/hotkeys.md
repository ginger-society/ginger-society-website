---
id: hotkeys
title: Hotkeys
---


GingerBook has a few hotkeys to make your life easier:

- `/` or `⌘ cmd ＋ p` - Focus search input in the sidebar
- `⌥ opt ＋ →` - Go to the next story
- `⌥ opt ＋ ←` - Go to the previous story
- `⌥ opt ＋ ↓` - Go to the next component
- `⌥ opt ＋ ↑` - Go to the previous component
- `c` - Toggle controls addon
- `d` - Toggle dark mode
- `f` - Toggle fullscreen mode
- `w` - Toggle width addon
- `r` - Toggle right-to-left mode
- `s` - Toggle story source addon
- `a` - Toggle accessibility addon

## Settings

These defaults can be customized through the [configuration](config#hotkeys).

Some stories might have utilize their own set of hotkeys. If you want to prevent conflicts with GingerBook, you can disable all GingerBook shortcuts for a specific story by using the `meta` parameter:

```tsx
export default {
  meta: {
    hotkeys: false,
  },
};
Story.meta = {
  hotkeys: false,
};
```

## Cheat Sheet

If you need a quick reminder of all the hotkeys, you can open the about addon:


![Hotkeys cheatsheet](/img/hotkeys.png)

