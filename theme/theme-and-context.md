# 🧩 Expanso Slide Theme and LLM Context Manifest

This document contains **all global instructions**, **style rules**, and **interaction logic** for generating slide decks using the modern Expanso dark theme system.  
It merges all prior guidance from both David Aronchick and ChatGPT theme iterations into a single persistent context file.

---

## 🎯 Purpose

This theme is optimized for:
- Live conference talks, sales decks, and demos.  
- Projection readability on dark backgrounds.  
- Consistent visual identity across internal and external presentations.  
- Automated slide generation via LLMs using a single context load.

---

## 🧠 User Preferences and Context

- **Role:** CEO & Product Manager of a data company.  
- **Voice:** Direct, skeptical, and forward-looking — no fluff or filler.  
- **Tone Guidance:**  
  - Avoid passive voice.  
  - Prioritize clarity and strong structure.  
  - Value function and projection readability over decoration.  
- **Purpose of Slides:** For external audiences (sales, investors, and conferences), often later converted to PDFs.  
- **Design Principle:** Large, readable, modern, dark, minimalist.  
- **10/20/30 rule enforced:** No text smaller than 30px, maximum 20 minutes, 10 slides per concept group.

---

## 🎨 Global Theme Rules

### Base Design System
- **Mode:** Dark, modern, minimalistic  
- **Background:** #000000 or #0A0A0A  
- **Accent / Brand:** #9A6BFF (Expanso violet)  
- **Glow:** Soft, subtle, not distracting (15–25% opacity range)  
- **Borders:** 2px semi-transparent with glow or glass edge  
- **Contrast:** All text and icons meet WCAG AA readability on dark background

---

### Typography Scale

| Role | Size | Style |
|------|------|--------|
| Title | 72–90px | Bold |
| Subtitle | 36–48px | Regular |
| Section Header | 42–48px | Semi-bold |
| Body | 30–34px | Regular |
| Code/Label | 28–32px | Monospace |
| Caption | 26–28px | Regular |
| Minimum Projection Size | 28px | — |

- **Line spacing:** +10–12%  
- **Font:** Inter, SF Pro, or modern geometric sans  
- **Alignment:** Titles centered or left-aligned depending on layout  
- **Color Hierarchy:**
  - Primary Text: #FCFCFC  
  - Secondary Text: #B0B0B0  
  - Disabled Text: #8A8A8A  
  - Accent Text: #9A6BFF  

---

### Layout System

- **Grid:** 12-column responsive  
- **Baseline:** 8px  
- **Gutters:** 48–64px  
- **Vertical Padding:** 80–100px top/bottom  
- **Corner Radius:** 12–16px  
- **Panels:** Optional glassmorphism (blur: 8–12px, glow: #9A6BFF @ 20%)  
- **Balance:** Weighted slightly above vertical center for projection legibility

---

### Color System

| Type | Color | Use |
|------|--------|-----|
| Primary | #9A6BFF | Accent / Brand |
| Success | #4ADE80 | Positive |
| Warning | #FBBF24 | Alert |
| Error | #F87171 | Critical |
| Info | #38BDF8 | Contextual |
| Neutral Light | #E0E0E0 | High contrast text |
| Neutral Dark | #1A1A1A | Background surfaces |
| Muted BG | #0A0A0A | Secondary sections |

All colors meet **WCAG AA** for dark backgrounds.

---

### Animation & Motion Rules

- **Default Transitions:** Fade, Slide, Scale, Blur  
- **Timing:** 400–500ms (ease-in-out)  
- **Staggered Entry:** 100–150ms between elements  
- **Per-slide Motion Discipline:** Only one axis per animation (avoid chaos)  
- **Right-click menu (demo decks):**
  - Preview animation
  - Toggle light/dark mode
  - Export to PDF/PNG

---

### Common Slide Layouts

| Type | Description |
|------|--------------|
| Title Only | Large center-aligned title |
| Title + Bullets | Hierarchical information slide |
| Title + Bullets + Image | Split text/image for storytelling |
| Two-Column | Features or comparisons |
| Section Divider | Thematic break |
| Code Example | Highlight syntax and readability |
| Color / Typography | Reference test slides |
| Animation Demo | Validate transitions |
| Icon / Feature Grid | Branding or feature summary |
| Deployment / System Info | Command examples or workflows |

---

## 📊 Visual Guidance for Slide Construction

- Use **large, sparse content**. No clutter.  
- **Padding is good.** Never shrink boxes to fit — instead, scale up fonts.  
- Use **consistent grid spacing** even on variant layouts.  
- Ensure **text + image** slides preserve left-right symmetry.  
- All boxes and panels use **consistent border radius and glow**.  
- Include **emoji or icons** only for visual testing — not decoration.  

---

## 🧩 Workflow / Deployment

- Build command: `npm run build:gh`  
- PDF export: `npm run export:pdf`  
- PNG export: `npm run export:png`  
- GitHub Actions workflow: `.github/workflows/deploy.yml`  
- Exports use 300 DPI  
- Designed to render cleanly in PDF mode (no gradient banding)

---

## 🧠 LLM Usage Instructions

When building new slides from text input:

1. Load this `theme-and-context.md` into memory first.  
2. For each slide, respond in the following format:

For SLIDE [#] in [deck name]:

[Include GLOBAL THEME RULES]

SLIDE-SPECIFIC ADJUSTMENTS:
[List layout type, typography choices, spacing, animations, and visual intent]

GOAL:
[Describe what this slide is demonstrating or validating]

yaml
Copy code

3. Automatically detect layout type (title, bullets, code, two-column, etc.).  
4. Apply proportional typography scaling and padding for projection readability.  
5. Never compress text to fit — always favor readability and space.  
6. Suggest placeholder boxes for images, icons, or code when appropriate.  
7. Include layout balance notes and hover/transition suggestions when relevant.  
8. Maintain consistent tone — modern, professional, assertive.  

---

# ✅ Summary
This document defines everything the LLM needs to:
- Enforce visual consistency across decks  
- Generate slide prompts directly from ASCII or text outlines  
- Maintain Expanso’s visual tone and clarity standards  

Load this file in full before generating or updating any slides.
