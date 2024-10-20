---
id: troubleshooting
title: Troubleshooting
---

If you run into problems, try to enable verbose output:

```bash
DEBUG=ginger-book* pnpm ginger-book serve
DEBUG=ginger-book* pnpm ginger-book build
```

You can also enable verbose output in the browser console by adding an item into local storage `debug: ginger-book*` where `debug` is the key and `ginger-book*` the value. In Chrome, you can do that by opening the dev tools and insert this into the console:

```
localStorage.debug = 'ginger-book*'
```

## Create Issue

You can also search [existing issues](https://github.com/ginger-society/ginger-book/issues) or add a new one.

## Discord

Join our [community](https://discord.gg/H6FSHjyW7e).

## ES Modules

GingerBook embraces ES Modules and is implemented as an ES module. That requires `Node 18+` and environment that fully supports ESM.
