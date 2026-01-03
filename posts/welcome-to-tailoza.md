---
title: Welcome to Tailoza
date: 2025-01-01
description: Your first post with Tailoza - a minimal static site generator that just works.
author: Your Name
categories: Getting Started
toc: true
---

This is your first post with Tailoza. Delete this file and start writing your own content.

## What You Can Do

Tailoza supports all the markdown features you'd expect:

### Text Formatting

You can make text **bold**, *italic*, or ***both***. You can also use ~~strikethrough~~ for deleted text.

### Code Blocks

Inline code looks like `this`. For longer code, use fenced blocks:

```javascript
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

greet('Tailoza');
```

```html
<article class="post">
    <h1>My Post Title</h1>
    <p>Content goes here.</p>
</article>
```

### Lists

Unordered lists:
- First item
- Second item
- Third item

Ordered lists:
1. Step one
2. Step two
3. Step three

Task lists:
- [x] Install Tailoza
- [x] Create your first post
- [ ] Deploy to the web

### Blockquotes

> "The best time to plant a tree was 20 years ago. The second best time is now."

### Tables

| Feature | Supported |
|---------|-----------|
| Markdown | Yes |
| Categories | Yes |
| RSS Feed | Yes |
| Search | Yes |
| Dark Mode | Yes |

### Images

Drop your images in the `images/` folder and reference them:

![Desert landscape](neom-0SUho_B0nus-unsplash.jpg)
*Photo by [NEOM](https://unsplash.com/@neaborly) on [Unsplash](https://unsplash.com)*

### Links

Link to [external sites](https://example.com) or reference other posts.

---

## Getting Started

1. Edit `config.json` with your site details
2. Create markdown files in the `posts/` folder
3. Run `python build.py` to generate your site
4. Run `python serve.py` for local development

That's it. No complicated setup. No dependencies hell. Just write and publish.
