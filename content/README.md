# Content Management Guide

This directory contains all the text content for the Alteryss website. Content is organized by language and section, making it easy for non-technical editors to update website text without touching code.

## Directory Structure

```
content/
├── en/          # English content
│   ├── nav.md
│   ├── hero.md
│   ├── sponsors.md
│   ├── vision.md
│   ├── missions.md
│   ├── team.md
│   ├── partners.md
│   ├── contact.md
│   ├── legal.md
│   ├── footer.md
│   └── messages.md
└── fr/          # French content
    ├── nav.md
    ├── hero.md
    ├── sponsors.md
    ├── vision.md
    ├── missions.md
    ├── team.md
    ├── partners.md
    ├── contact.md
    ├── legal.md
    ├── footer.md
    └── messages.md
```

## File Format: YAML Front Matter + Markdown

Each file uses **YAML Front Matter** for structured data. This means:
- Content is between `---` markers at the top of the file
- Uses simple `key: value` format
- Nested content uses indentation (2 spaces)

### Example Structure

```markdown
---
title: My Section Title
subtitle: A short description
items:
  item1: First item text
  item2: Second item text
  nested:
    key: value
---
```

## Editing Content

### Basic Editing

1. Find the file you want to edit (e.g., `en/hero.md` for the English hero section)
2. Edit the text values after the colon `:`
3. Keep the structure (indentation and keys) the same
4. Save the file

### Important Rules

✅ **DO:**
- Edit text values after the colons
- Preserve indentation (use 2 spaces for nested items)
- Keep HTML tags like `<strong>` if they exist
- Use proper YAML syntax

❌ **DON'T:**
- Change the keys (before the colon)
- Remove the `---` markers
- Mix tabs and spaces for indentation
- Add or remove structural elements without updating the code

### Markdown Formatting

You can use these formatting options in text values:

- **Bold text:** `<strong>Bold</strong>` or `**Bold**`
- *Italic text:* `<em>Italic</em>` or `*Italic*`
- Links: `<a href="url">Link text</a>` or `[Link text](url)`
- Line breaks: Use `\n` or actual line breaks in multi-line values

### Multi-line Text

For longer text, use the pipe `|` symbol:

```yaml
description: |
  This is a long description
  that spans multiple lines.
  Each line will be preserved.
```

Or use `>` to fold lines into a single paragraph:

```yaml
description: >
  This is a long description
  that will be joined into
  a single paragraph.
```

## Section Descriptions

### nav.md
Navigation menu items at the top of the page.

### hero.md
Main hero section with subtitle, description, three pillars, and call-to-action buttons.

### sponsors.md
Information about sponsors and their messages.

### vision.md
Organization's vision including origin, long-term goals, core values, and differentiators.

### missions.md
Services and missions offered, including partnership information.

### team.md
Team member information including names, roles, and descriptions.

### partners.md
Partner organizations and feedback statistics.

### contact.md
Contact form labels, location, and how to get involved information.

### legal.md
Legal notices, GDPR compliance, cookies policy, and intellectual property information.

### footer.md
Footer content including tagline and copyright.

### messages.md
UI messages like form success notifications.

## Need Help?

If you encounter any issues or need assistance:
1. Check that your YAML syntax is correct (proper indentation, colons, etc.)
2. Make sure the `---` markers are present at the top and bottom
3. Verify that HTML tags are properly closed if you use them
4. Contact the development team if something doesn't work

## Testing Your Changes

After editing:
1. Save the file
2. Refresh the website in your browser
3. Switch between languages to verify both versions work correctly
4. Check that formatting (bold, links, etc.) appears correctly

---

**Remember:** These files control what visitors see on the website. Always double-check your changes before saving!