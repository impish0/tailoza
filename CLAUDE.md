# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tailoza is a minimal static site generator built in Python with zero external dependencies (stdlib only). It converts markdown files to a fully-featured blog with categories, pagination, RSS, search, and SEO support.

## Commands

```bash
# Development server (builds + watches + serves at localhost:8000)
python serve.py

# Production build only (outputs to output/)
python build.py

# Run tests
python -m unittest test_templates.py
```

## Architecture

### Build Pipeline (`build.py`)

The entry point that orchestrates the build:
1. Loads and validates `config.json`
2. Parses all markdown files in `posts/` (skips `_prefixed` drafts)
3. Generates HTML for each post with prev/next navigation
4. Creates paginated index and category pages
5. Generates RSS feed, sitemap, search index, and 404 page
6. Copies assets from `assets/` to `output/`

### Core Modules

- **`parser.py`** - Markdown parsing and HTML conversion
  - `parse_frontmatter()` - Extracts YAML-like frontmatter from markdown
  - `markdown_to_html()` - Custom markdown-to-HTML converter (headers, lists, tables, code blocks, etc.)
  - `extract_headings()` / `generate_toc()` - Table of contents generation

- **`templates.py`** - HTML template functions (Python f-strings)
  - `post_template()` - Individual post pages with SEO meta tags and structured data
  - `index_template()` - Homepage with post list, categories dropdown, search overlay
  - `category_template()` - Category archive pages
  - `error_404_template()` - Custom 404 page
  - `generate_pagination_html()` - Pagination navigation with ellipsis handling

- **`rss_generator.py`** - RSS feed generation using ElementTree
- **`sitemap_generator.py`** - XML sitemap for SEO
- **`utils.py`** - Shared utilities (`category_slug()`, `copy_asset()`, `favicon_link()`)

### Development Server (`serve.py`)

- Builds site on startup
- Watches `posts/`, `assets/`, `images/`, and config files for changes
- Auto-rebuilds on file changes
- Serves from `output/` directory with custom 404 handling

### Key Design Decisions

- **No dependencies**: Uses only Python stdlib (pathlib, json, re, xml.etree, http.server)
- **Clean URLs**: Posts output as `output/[slug]/index.html` for `/slug/` URLs
- **Configurable post prefix**: `post_url_prefix` in config controls URL structure (e.g., `/posts/slug/` vs `/slug/`)
- **Theme via CSS variables**: `data-theme` attribute on `<html>` switches between dark/light modes
- **Custom CSS support**: Place `assets/custom.css` for additional styles (auto-detected)

### Output Structure

```
output/
├── index.html          # Homepage
├── page/2/index.html   # Pagination pages
├── [slug]/index.html   # Post pages (or posts/[slug]/ if prefix set)
├── categories/[cat]/   # Category pages
├── rss.xml
├── sitemap.xml
├── search-index.json   # Client-side search data
├── 404.html
└── assets/             # CSS and JS
```

### Post Frontmatter

Required: `title`, `date` (YYYY-MM-DD)
Optional: `description`, `author`, `categories` (comma-separated), `keywords`, `image`, `toc` (true/false)
