---
layout: post
---

# Tailwind

Utility first css framework, lets write css classes in html. file size is small, so fast.
sat

## Installation

```bash
$ npm init -y
$ npm install tailwindcss
```

- Create source folder src in root and add style.css file.In source style.css we add three @tailwind directives, which are importing certain part of utiities and components into dist folder when we run npm build command.

- Also, create dist folder for output. In dist create a index.html and style.css.

```css
@tailwind base
@tailwind components
@utilities;
```

- In package json file, in script, add `build:css`: `tailwind build src/style.css -o dist/style.css`

Then we run `npm run build:css` command on terminal. We check `dist/style.css` for styles added by tailwind.

```

```
