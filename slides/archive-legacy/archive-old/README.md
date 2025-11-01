# Archive Directory

This directory contains legacy files from previous iterations of the Expanso presentation project.

## Directory Structure

### `/original-content/`
Original slide content and specifications:
- `raw_slides_markdown.md` - Original slide content with design specifications
- `slides.md` - Slidev version of the presentation

### `/legacy-json-slides/`
Old Figma-based workflow JSON slide definitions (50 files):
- Individual JSON files representing structured slide definitions
- Used for programmatic conversion to Figma via API
- Superseded by direct reveal.js HTML workflow

### `/legacy-docs/`
Previous documentation files (consolidated into main repo docs):
- Various markdown files documenting the project history
- Design system specifications
- Research reports on Slidev
- System prompts and context files

### `/legacy-slidev/`
Slidev framework files (migrated to reveal.js):
- Vue components for custom slide elements
- Slidev theme configuration
- Layout files

### `/legacy-scripts/`
JavaScript scripts from previous workflows:
- Slide generation utilities
- JSON manipulation scripts
- Figma API integration scripts

## Migration History

**Oct 28, 2024**: Repository reorganized
- Moved from Slidev to reveal.js for better HTML/CSS control
- Consolidated 15+ documentation files into 3 main guides
- Archived legacy JSON/Figma workflow in favor of direct HTML editing
- Created clear LLM-based slide generation workflow

## Why These Files Were Archived

1. **JSON slides**: No longer using programmatic Figma generation; moved to reveal.js HTML
2. **Slidev files**: Framework limitations led to migration to reveal.js
3. **Documentation sprawl**: 15+ markdown files consolidated into streamlined guides
4. **Scripts**: Old generation scripts no longer compatible with reveal.js workflow

## If You Need These Files

All content is preserved. If you need to reference:
- **Original slide content**: See `/original-content/raw_slides_markdown.md`
- **Design specifications**: See main repo `LLM_EVERGREEN_PROMPT.md`
- **Old JSON structure**: See `/legacy-json-slides/slides/`
