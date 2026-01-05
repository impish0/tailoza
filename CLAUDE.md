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

# Run all tests
python -m unittest tests/test_templates.py

# Run specific test class
python -m unittest tests.test_templates.TestGeneratePaginationHtml

# Run specific test method
python -m unittest tests.test_templates.TestGeneratePaginationHtml.test_single_page_returns_empty
```

## Architecture

### Project Structure

```
tailoza/
├── build.py              # User-facing build script (imports from tailoza package)
├── serve.py              # User-facing dev server script
├── config.json           # User configuration
│
├── tailoza/             # Core application package (can be updated by replacing this folder)
│   ├── __init__.py      # Package exports
│   ├── builder.py       # Core build orchestration logic
│   ├── parser.py        # Markdown parsing and HTML conversion
│   ├── templates.py     # HTML template functions
│   ├── rss_generator.py # RSS feed generation
│   ├── sitemap_generator.py # XML sitemap generation
│   ├── categorize.py    # Auto-categorization logic
│   └── utils.py         # Shared utilities
│
├── tests/               # Test suite
│   └── test_templates.py
│
├── posts/               # User content (markdown files)
├── images/              # User images
├── assets/              # User assets (CSS, JS)
└── output/              # Generated static site
```

**Key Design**: The `tailoza/` directory contains all core application code. Users can update Tailoza by simply replacing this directory, keeping their content (`posts/`, `images/`, `assets/`, `config.json`) intact.

### Build Pipeline

**Entry Point**: `build.py` → imports `build_site()` from `tailoza.builder`

The build process:
1. Loads and validates `config.json`
2. Parses all markdown files in `posts/` (skips `_prefixed` drafts)
3. Generates HTML for each post with prev/next navigation
4. Creates paginated index and category pages
5. Generates RSS feed, sitemap, search index, and 404 page
6. Copies assets from `assets/` to `output/`

### Core Modules (in `tailoza/`)

- **`builder.py`** - Build orchestration
  - `build_site()` - Main build function (includes auto-categorization)
  - `load_config()` - Config loading and validation
  - `generate_search_index()` - Client-side search index generation
  - `calculate_reading_time()` - Reading time estimation
  - `ensure_directories()` - Output directory management

- **`categorize.py`** - Automatic content categorization
  - `analyze_post_content()` - Analyzes post content to suggest categories
  - `load_category_rules()` - Loads category keyword rules
  - Auto-categorizes posts without explicit categories during build

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
- Watches for changes (1-second interval):
  - Directories: `posts/`, `assets/`, `images/`, `tailoza/`
  - Files: `config.json`, `build.py`, `serve.py`
- Auto-rebuilds on file changes (skips hidden files and `~` temp files)
- Serves from `output/` directory on port 8000 with custom 404 handling

### Key Design Decisions

- **No dependencies**: Uses only Python stdlib (pathlib, json, re, xml.etree, http.server)
- **Modular structure**: Core application in `tailoza/` package, easily updatable without affecting user content
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

**Draft Posts**: Prefix filename with `_` (e.g., `_draft-post.md`) to skip during build

**Auto-Categorization**: Posts without explicit categories are automatically categorized based on content analysis using keyword matching rules. Default categories: Business, Technology, Marketing, Development, Design, Personal, Tutorial, News. Custom rules can be defined in `category_rules.json`.

### Testing

- **`tests/test_templates.py`** - Comprehensive unit tests for pagination functions
  - Tests URL building, page links, navigation buttons, ellipsis logic
  - Covers edge cases: single page, category pages, many pages
  - All pagination logic is test-driven with 100% coverage of core functions
  - Imports from `tailoza.templates` package

### Updating Tailoza

To update to a new version of Tailoza:
1. Replace the `tailoza/` directory with the new version
2. Replace `build.py` and `serve.py` if they've changed
3. Your content (`posts/`, `images/`, `assets/`, `config.json`) remains untouched
