# Customization Guide

## Custom CSS

You can add your own custom styles to override the default theme without modifying the core files.

1.  Create a file named `custom.css` in the `assets/` directory.
2.  Add your CSS rules.
3.  Run `./build.py` to rebuild your site.

The `custom.css` file will be automatically detected and included after the main stylesheet, allowing you to override any styles.

## Print Styles

The site includes built-in print styles that:
- Hide navigation, footer, and search overlay.
- Use high-contrast colors (black text on white background).
- Remove max-width constraints to use the full paper width.
- Display URLs after links for reference.

You can test this by using the "Print" feature in your browser (Cmd+P or Ctrl+P).

## Accessibility

The site includes a "Skip to content" link that is visible when focused (e.g., by pressing Tab). This helps keyboard users navigate directly to the main content.
