---
id: cli
title: CLI
---

`@ginger-society/ginger-book` provides a CLI so you can `serve` (dev) or `build` your application:

```bash
Usage: ginger-book [options] [command]

Options:
  -h, --help           display help for command

Commands:
  serve|dev [options]  start developing
  build [options]      build static production app
  preview [options]    start a server to preview the build in outDir
  help [command]       display help for command
```

## Serve command

```bash
Usage: ginger-book serve|dev [options]

start developing

Options:
  -h, --host [string]    host to serve the application
  -p, --port [number]    port to serve the application
  --stories [string]     glob to find stories
  --theme [string]       theme light, dark or auto
  --config [string]      folder where config is located, default .ginger-book
  --viteConfig [string]  file with Vite configuration
  --base [string]        base URL path for build output
  --mode [string]        Vite mode
  --noWatch [string]     disable file system watcher
  -h, --help             display help for command

```

## Build command

```bash
Usage: ginger-book build [options]

build static production app

Options:
  -o, --outDir <path>    output directory
  --stories [string]     glob to find stories
  --theme [string]       theme light, dark or auto
  --config [string]      folder where config is located, default .ginger-book
  --viteConfig [string]  file with Vite configuration
  --base [string]        base URL path for build output
  --mode [string]        Vite mode
  -h, --help             display help for command

```

## Preview command

```bash
Usage: ginger-book preview [options]

start a server to preview the build in outDir

Options:
  -o, --outDir <path>    output directory
  -h, --host [string]    host to serve the application
  -p, --port [number]    port to serve the application
  --config [string]      folder where config is located, default .ginger-book
  --viteConfig [string]  file with Vite configuration
  --base [string]        base URL path for build output
  --mode [string]        Vite mode
  -h, --help             display help for command

```
