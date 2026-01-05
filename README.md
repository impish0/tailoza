# Tailoza

A static site generator that doesn't get in your way.

---

## Why This Exists

I got tired of over-engineered blogging platforms.

Every time I wanted to write something, I'd spend hours updating dependencies, fighting with build tools, or getting lost in configuration. The tools were keeping me from... actually writing.

So I built something simpler. You write markdown. It spits out HTML. That's it.

---

## Features

- **Markdown to HTML** - Full markdown support with code blocks, tables, lists
- **Categories & Pagination** - Organize posts, paginate automatically
- **RSS Feed** - Full content or excerpts, your choice
- **Client-Side Search** - Fast, no server required
- **Dark/Light Mode** - Set in config, uses CSS variables
- **Syntax Highlighting** - Prism.js for code blocks
- **Reading Time** - Auto-calculated per post
- **Table of Contents** - Optional, per-post
- **SEO Basics** - Sitemap, meta tags, Open Graph, structured data
- **Dev Server** - Hot reload on file changes

What I left out on purpose: complex theming, plugins, databases, auth, comments, analytics. If you need those, use something else.

---

## Quick Start

```bash
git clone https://github.com/impish0/Tailoza.git my-blog
cd my-blog
rm -rf .git && git init
python serve.py
```

Clone it, make it yours, run it. Open `http://localhost:8000` and start writing.

---

## Configuration

Edit `config.json`:

```json
{
    "site_title": "My Blog",
    "site_url": "https://yourdomain.com",
    "site_description": "A blog about things I care about.",
    "author": "Your Name",
    "footer_text": "Built with Tailoza",
    "theme": "dark",
    "posts_per_page": 20,
    "timezone": "+0000",
    "post_url_prefix": "/",
    "rss_full_content": true
}
```

| Option | Description |
|--------|-------------|
| `site_title` | Your blog name |
| `site_url` | Full URL (with https://) |
| `site_description` | Used in RSS and meta tags |
| `author` | Default author for posts |
| `footer_text` | Appears at bottom of pages (HTML allowed) |
| `theme` | `"dark"`, `"light"`, `"sepia"`, `"nord"`, or `"forest"` |
| `posts_per_page` | How many posts per page |
| `timezone` | UTC offset for RSS dates (e.g., `"+0500"`, `"-0800"`) |
| `post_url_prefix` | URL path for posts (`"/"` for root, `"/posts"` for /posts/slug/) |
| `rss_full_content` | `true` for full posts in RSS, `false` for excerpts |

---

## Writing Posts

Create markdown files in `posts/`:

```markdown
---
title: My First Post
date: 2025-01-01
description: Shows in previews and meta tags.
author: Your Name
categories: Life, Tech
---

Your content here.
```

### Frontmatter Options

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `date` | Yes | YYYY-MM-DD format |
| `description` | No | SEO description, post previews |
| `author` | No | Overrides config author |
| `categories` | No | Comma-separated list |
| `keywords` | No | Meta keywords |
| `image` | No | OG image (path relative to images/) |
| `toc` | No | Set to `true` for table of contents |

### Drafts

Prefix filename with underscore to skip it: `_work-in-progress.md`

---

## Project Structure

```
├── posts/           # Markdown files
├── images/          # Post images
├── assets/
│   ├── style.css    # Main stylesheet
│   ├── prism.css    # Code highlighting theme
│   └── js/          # Search, code copy, Prism
├── config.json      # Site config
├── build.py         # Build script
├── serve.py         # Dev server
└── output/          # Generated site (don't edit)
```

---

## Customization

### Favicon

Drop a favicon file in `assets/`:
- `favicon.ico`, `favicon.png`, or `favicon.svg`

The build script finds it automatically. No config needed.

### Styling

The core styles live in `tailoza/assets/style.css`. To customize without modifying core files, create `assets/custom.css` in your project root - it will be automatically detected and included.

---

## Building & Deploying

**Development:**
```bash
python serve.py
```
Builds site, starts server at :8000, watches for changes.

**Production build:**
```bash
python build.py
```
Generates everything in `output/`. Upload that folder anywhere - Netlify, Vercel, GitHub Pages, your own server. It's just static files.

---

## Requirements

Python 3.6+

No pip install. No dependencies. Standard library only.

---

## License

MIT
