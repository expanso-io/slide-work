# PROJECT CONTEXT - Expanso Sales Deck Creation

## Current State: Ready to Create Slides

**Date:** October 27, 2025
**Phase:** Slide Generation
**Status:** All preparation complete, ready for Figma creation

---

## What This Project Is

Converting a comprehensive sales deck for **Expanso** (a data platform company) from detailed markdown specifications into professional Figma slides.

**Expanso's Value Proposition:**

- Upstream data platform
- Reduces cloud data costs by 50-70%
- Filters/transforms data before it hits expensive platforms (Snowflake, Databricks, Splunk, Datadog)

---

## What's Been Done

### ✅ Phase 1: Document Organization (COMPLETE)

**Original:** Single 10,361-line markdown file (`raw_slides_markdown.md`)

**Reorganized into:**

```markdown
/deck/
├── slides/
│   ├── core/          # 9 main slides (443 KB)
│   └── backup/        # 8 appendix slides (296 KB)
├── presentation/      # Scripts, timing guides
├── competitive/       # Competitive analysis
├── objections/        # Objection handling
├── personas/          # ICP and persona guides
├── proof-points/      # Customer stories, ROI data
├── design/            # Design system specs
└── usage-guides/      # Presentation strategy
```

**Documentation created:**

- Project structure and navigation guides
- Usage recommendations for different audiences
- Deck timing strategies (15/30/45/60 min variants)

### ✅ Phase 2: Figma Integration Setup (COMPLETE)

**Figma MCP Server:**

- Configured in Claude Desktop: ✅ Ready
- Configured in Claude Code (Zed): ⏳ Pending (optional)
- Access token: `figd_R74wW4E...` (configured)

**Figma File:**

- Created: ✅ Yes
- URL: <https://www.figma.com/design/8MvzPWZkA8JfW8tGknEP4D/2025-10-27-slides>
- FILE_KEY: `8MvzPWZkA8JfW8tGknEP4D`
- Name: "2025-10-27-slides"
- Owner: David (daaronch)

**Documentation:**

- Setup guides for both apps
- Automated setup script
- Quick start guide
- Troubleshooting reference

---

## What's Next: Phase 3 - Slide Creation

### Immediate Goal

Create 9 core presentation slides in Figma using the MCP server.

### Slide Content Available

**Core Slides (Priority):** `/Users/daaronch/code/Slide-Work/deck/slides/core/`

1. **01-title.md** (5.6 KB)
   - Value proposition: "50-70% cost reduction"
   - Platform positioning
   - Contact info

2. **02-problem.md** (12 KB)
   - "The $10M Data Tax"
   - Why cloud bills keep growing
   - Unfiltered data costs

3. **03-root-cause.md** (18 KB)
   - Downstream-only architecture problem
   - Why traditional approaches fail
   - Architecture diagrams

4. **04-solution.md** (54 KB)
   - Upstream Data Control concept
   - Category positioning
   - Multiple variants (outcome-first, architecture-first)

5. **05-product-intro.md** (36 KB)
   - Introducing Expanso
   - Product capabilities
   - Filter/Transform/Govern framework

6. **06-customer-proof.md** (50 KB)
   - FinTech case study
   - 67% cost reduction
   - Real metrics and ROI

7. **07-industry-breadth.md** (66 KB)
   - Success stories across industries
   - Retail, healthcare, manufacturing examples
   - Scalability proof

8. **08-process.md** (72 KB)
   - Implementation roadmap
   - 4-8 week timeline
   - Step-by-step process

9. **09-cta.md** (84 KB)
   - Data Value Assessment offer
   - Clear next steps
   - Low-friction entry point

**Backup Slides:** `/Users/daaronch/code/Slide-Work/deck/slides/backup/`

- 10-17 available if needed (enterprise, pricing, competitive, FAQ, etc.)

---

## Design System (CRITICAL - Must Follow)

### Slide Dimensions

- **Width:** 1920px
- **Height:** 1080px

### Color Palette

```markdown
Background:      #1a2332 (dark navy)
Text Primary:    #FFFFFF (white)
Text Secondary:  #CBD5E0 (light gray)
Text Muted:      #A0AEC0 (medium gray)

Accent Green:    #48BB78 (solutions, positive, "after")
Accent Blue:     #4299e1 (platforms, technical)
Accent Red:      #fc8181 (problems, "before")
Accent Cyan:     #00D9FF (highlights, emphasis)
```

### Typography

```markdown
Font:            Inter

Title:           42pt, weight 700 (bold)
Headline:        32pt, weight 600 (semibold)
Body:            24pt, weight 400 (regular)
Small:           16pt, weight 400 (regular)
```

### Spacing

```markdown
Slide margins:   80px from all edges
Element gaps:    32px (standard), 48px (sections)
Padding:         24-40px in containers
```

---

## Markdown Slide Structure

Each slide markdown file contains:

**Visual Specifications:**

- Layout descriptions (top/middle/bottom zones)
- Element positioning (x, y coordinates)
- Text alignment (left/center/right)
- Color usage for emphasis
- Font sizes and weights

**Content:**

- Headlines and subheadlines
- Bullet points
- Key messages
- Statistics and metrics

**Presentation Notes:**

- Opening lines
- Delivery scripts
- Transition suggestions
- Timing guidance

**Variants:**

- Technical audience versions
- Executive audience versions
- Metaphor versions for non-technical

**Design Notes:**

- Color rationale
- Visual hierarchy
- Why certain choices work
- When to use variants

---

## Technical Setup

### Environment

- **Platform:** macOS (Darwin 24.6.0)
- **Location:** `/Users/daaronch/code/Slide-Work/`
- **Git:** Clean repo, committed state

### Tools Available

- **Claude Desktop:** Figma MCP configured ✅
- **Claude Code (Zed):** MCP pending ⏳
- **Node.js:** Available for scripts
- **Figma API:** Access via MCP tools

### MCP Servers Configured

```json
{
  "figma": "✅ Ready in Claude Desktop",
  "sequential-thinking": "Available",
  "memory": "Available",
  "filesystem": "Available",
  "fetch": "Available",
  "chrome-devtools": "Available",
  "svgmaker": "Available"
}
```

---

## User Information

**Name:** David Aronchick
**Role:** CEO, Expanso
**Email:** <aronchick@expanso.io>

**Preferences:**

- Pragmatic, action-oriented
- Prefers clean, professional design
- Values speed over perfection for drafts
- Iterative refinement approach
- Uses both Claude Desktop and Claude Code (Zed)

**Working Style:**

- Direct communication
- Clear task descriptions
- Provides specific feedback
- Open to suggestions
- Comfortable with technical details

---

## Project Files Reference

### Documentation

- `README_FIGMA.md` - Master index
- `SYSTEM_PROMPT.md` - Instructions for Claude Desktop (this handoff)
- `TODO_LIST.md` - Remaining tasks
- `CONTEXT.md` - This file (project state)
- `QUICKSTART.md` - Quick reference guide
- `MCP_STATUS.md` - Configuration status

### Setup Materials

- `SETUP_MCP_BOTH.md` - Complete MCP setup
- `FIGMA_INTEGRATION_GUIDE.md` - Integration options
- `setup-figma-mcp.sh` - Automated setup script

### Slide Organization

- `deck/README.md` - Slide directory guide
- `deck/usage-guides/deck-strategy.md` - Presentation strategy
- `STRUCTURE.md` - Original reorganization plan
- `REORGANIZATION_SUMMARY.md` - What was done

### Original Source

- `raw_slides_markdown.md` - Now contains pointer to new structure (original backed up in git)

---

## Success Criteria

**Phase 3 Complete When:**

- [ ] All 9 core slides created in Figma
- [ ] Design system applied consistently
- [ ] Text content matches markdown specs
- [ ] Slides have correct dimensions (1920x1080)
- [ ] Proper spacing and hierarchy
- [ ] David approves for manual refinement

**Quality Standards:**

- ✅ Draft quality acceptable (not pixel-perfect)
- ✅ Content accuracy critical
- ✅ Design system adherence required
- ✅ Speed valued over perfection
- ✅ Ready for manual polish in Figma

---

## Known Limitations

**What Claude Can Create:**

- ✅ Frames (slides)
- ✅ Text nodes with styling
- ✅ Basic shapes (rectangles, circles)
- ✅ Colors and fonts
- ✅ Layout and spacing

**What Needs Manual Work:**

- ❌ Company logos (import manually)
- ❌ Complex diagrams (create manually)
- ❌ Images and screenshots
- ❌ Custom icons
- ❌ Fine-tuning and polish

---

## Estimated Effort

**Remaining Work:**

- Slide creation: ~30-60 minutes (via Claude Desktop)
- Manual refinement: ~2-4 hours (David in Figma)
- Asset addition: ~1 hour (logos, images)
- Final polish: ~1-2 hours

**Total:** ~4-8 hours to complete deck

---

## Important Notes

1. **Design system is non-negotiable** - Follow specs exactly
2. **Start with 1-2 test slides** - Verify before batch creation
3. **Iterate based on feedback** - Adjust as David requests
4. **Keep momentum** - Draft quality first, refinement later
5. **Figma MCP is ready** - Use it in Claude Desktop now

---

## Current Blocker: NONE ✅

Everything is ready. Just need to:

1. Open Claude Desktop
2. Start creating slides with Figma MCP
3. Iterate based on David's feedback

---

**Status:** READY TO PROCEED
**Next Action:** Create slides in Figma via Claude Desktop
**Handoff Complete:** All context provided for new Claude session
