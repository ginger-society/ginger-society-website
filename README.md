# Ginger Society

Ginger Society Home page repository.

## Features

- Pre-built pages
- Pre-styled components
- Blog with pagination and category pages
- Configurable navigation and footer
- Multiple hero options
- Configurable theme colors
- Live, visual editing powered by [Bookshop](https://github.com/CloudCannon/bookshop)

## Develop

Ginger Society is built with [Astro](https://astro.build/).

```bash
$ yarn
$ yarn dev
```

### Posts

- Add, update or remove a post in the _Posts_ collection.
- The **Staff Author** field links to members in the **Staff** collection.
- Change the defaults when new posts are created in `content/posts/_defaults.md`.

### Company details

- Reused around the site to save multiple editing locations.
- Set in the _Data_ / _Company_ section.

### Nav/footer details

- Reused around the site to save multiple editing locations.
- Set in the _Data_ section with respective names

### Theme colors

- Theme colors can be set in _Data_ / _Theme_
- The main colors are set and variants of them are computed
- The colors will update on the next build
