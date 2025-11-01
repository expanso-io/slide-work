# Expanso Presentation Master System

## Executive Summary

This document defines the **Master Presentation System** for Expanso—a comprehensive set of slide archetypes, design rules, and usage guidelines that ensure every presentation embodies clarity, authority, and brand cohesion.

**Purpose**: Enable anyone in the organization to create professional, on-brand presentations without design expertise.

**Core Philosophy**: Minimalist, data-centric, authoritative.

---

## Table of Contents

1. [Guiding Principles](#guiding-principles)
2. [Brand Identity Rules](#brand-identity-rules)
3. [Master Layout System](#master-layout-system)
4. [Slide Archetypes](#slide-archetypes)
5. [Diagram Guidelines](#diagram-guidelines)
6. [Data Visualization Standards](#data-visualization-standards)
7. [Usage Guidelines](#usage-guidelines)
8. [Implementation Notes](#implementation-notes)

---

## I. Guiding Principles

### The Four Pillars

**1. Clarity and Authority**
- Professional, trustworthy, expert positioning
- Technical complexity made digestible
- No ambiguity in visual hierarchy

**2. Minimalist & Spacious**
- Every element has a purpose
- Generous whitespace (minimum 80px margins)
- Remove decorative elements that don't add value
- Let the content breathe

**3. Data-Centric**
- Diagrams, charts, and figures are heroes
- Precision in visual representation
- Data tells the story, design supports it

**4. Brand Cohesive**
- Unmistakable Expanso identity
- Consistent application across all materials
- Dark, sophisticated aesthetic

### The "Vibe"

**What We Are:**
- Modern, crisp, precise
- Confident without being flashy
- Technical yet approachable
- Enterprise-grade professional

**What We're NOT:**
- Cluttered or busy
- Dated corporate templates
- Overly decorative
- Light/pastel themes

---

## II. Brand Identity Rules

### Color Palette (Non-Negotiable)

#### Primary Backgrounds

**Expanso Navy** (Primary): `#101921`
- **Usage**: Default background for all content slides
- **RGB**: 16, 25, 33
- **Contrast ratio**: 19.2:1 with white text (AAA)

**Expanso Slate** (Secondary): `#1D2D39`
- **Usage**: Section dividers, alternating slides, emphasis containers
- **RGB**: 29, 45, 57
- **Contrast ratio**: 14.8:1 with white text (AAA)

**Gradient (Hero slides)**:
```css
linear-gradient(180deg, #101921 0%, #1D2D39 100%)
```

#### Text Colors

**White** (Primary): `#FFFFFF`
- **Usage**: All headlines, body copy, standard text
- **Contrast**: 19.2:1 on Expanso Navy (AAA)

**Off-White** (Softer): `#F0F4F8`
- **Usage**: Secondary text, captions, less emphasis
- **RGB**: 240, 244, 248
- **Contrast**: 17.5:1 on Expanso Navy (AAA)

**Light Gray** (Tertiary): `#CBD5E0`
- **Usage**: Metadata, timestamps, footnotes
- **RGB**: 203, 213, 224
- **Contrast**: 12.4:1 on Expanso Navy (AAA)

#### Accent Colors (Strategic Use Only)

**Expanso Blue** (Primary Accent): `#00A9E0`
- **Usage**: Links, active states, primary CTAs, key highlights
- **RGB**: 0, 169, 224
- **Use sparingly**: Maximum 2-3 instances per slide

**Expanso Green** (Secondary Accent): `#63F5B4`
- **Usage**: Success states, positive metrics, growth indicators
- **RGB**: 99, 245, 180
- **Pair with**: Blue for emphasis

#### Semantic Colors

**Success**: `#48BB78` (Green)
- Positive outcomes, achievements, "after" states

**Warning**: `#F59E0B` (Amber)
- Caution, attention-needed, moderate urgency

**Error/Danger**: `#EF4444` (Red)
- Problems, critical issues, "before" states

**Info**: `#00A9E0` (Expanso Blue)
- Informational callouts, tips, notes

### Typography (Inter Font Family)

#### Type Scale

**H1 - Slide Title**: Inter Bold, 48-56px
- **Usage**: Once per slide maximum
- **Line height**: 1.1
- **Letter spacing**: -0.5px
- **Color**: Always #FFFFFF

**H2 - Section Header**: Inter SemiBold, 32-36px
- **Usage**: Major content blocks within slide
- **Line height**: 1.2
- **Color**: #FFFFFF or #F0F4F8

**Body Text**: Inter Regular, 18-22px
- **Usage**: Paragraphs, bullet points, descriptions
- **Line height**: 1.6
- **Color**: #FFFFFF or #F0F4F8
- **Optimal**: 20px for presentations

**Captions & Labels**: Inter Regular/Medium, 14-16px
- **Usage**: Chart labels, annotations, footer
- **Line height**: 1.5
- **Color**: #CBD5E0 or #F0F4F8

**Emphasis**: Inter Bold or #00A9E0 color
- **Avoid**: Italics (use bold or color instead)
- **Usage**: Key phrases, statistics, highlights

#### Typography Rules

1. **Never use more than 3 font sizes per slide**
2. **Maintain consistent hierarchy**: H1 → H2 → Body → Caption
3. **Line length**: Maximum 70 characters
4. **Alignment**: Left-align body text, center only titles
5. **Spacing**: 24px minimum between paragraphs

### Logo Usage

#### Full Expanso Logo

**Title Slide**:
- Position: Top-left (60px margin) or centered
- Size: 180-220px width
- Format: SVG preferred, PNG fallback
- Clear space: 60px on all sides

**Final Slide**:
- Position: Centered or top-center
- Size: 200-240px width

#### Logomark/Compact Logo

**Content Slides (Footer)**:
- Position: Bottom-left corner
- Size: 40-50px height
- Color: White or #F0F4F8
- Alternative: Text "Expanso" in Inter Medium, 14px

**Placement Rules**:
- Left margin: 60px
- Bottom margin: 40px
- Never obscure content

---

## III. Master Layout System

### Grid System

**12-Column Grid** (1920×1080):
```
Total width: 1920px
Usable width: 1800px (60px margins each side)
Column width: 130px
Gutter: 20px
```

**Margins**:
- Top: 80px
- Right: 60px
- Bottom: 80px
- Left: 60px

**Safe Area**: 1800×920px (after margins)

### Consistent Elements

#### Global Footer (All Content Slides)

**Left Side**:
```
Company Name: "Expanso"
Font: Inter Medium, 14px
Color: #CBD5E0
Position: 60px from left, 40px from bottom
```

**Right Side**:
```
Slide Number: "12"
Font: Inter Regular, 14px
Color: #CBD5E0
Position: 60px from right, 40px from bottom
```

**Center** (Optional):
```
Presentation Title (abbreviated)
Font: Inter Regular, 12px
Color: #CBD5E0 with 60% opacity
```

#### Title Area (Content Slides)

**Position**: Always at top of safe area
```
Top: 80px from slide edge
Left: 60px from slide edge
Max width: 1400px
```

**Divider** (Optional):
```
Height: 2px
Color: #00A9E0 or rgba(0, 169, 224, 0.3)
Width: 100px
Position: Below title, 16px gap
```

---

## IV. Slide Archetypes

### 1. Title Slide (Hero)

**Purpose**: Opening slide, maximum impact

**Layout**:
```
┌────────────────────────────────────────────┐
│  [EXPANSO LOGO]                            │ ← 60px from top-left
│                                            │
│                                            │
│         PRESENTATION TITLE                 │ ← Centered, 54px Bold
│         Subtitle or tagline                │ ← 28px Regular, off-white
│                                            │
│                                            │
│    Presenter Name                          │ ← 20px Regular
│    Title, Date                             │ ← 16px Regular, gray
│                                            │
└────────────────────────────────────────────┘
```

**Specifications**:
- Background: Gradient (Expanso Navy → Slate)
- Title: 48-56px, Inter Bold, centered
- Subtitle: 24-28px, Inter Regular, #F0F4F8
- Presenter: 18-20px, Inter Regular, #CBD5E0
- Logo: 200px width, top-left or centered above title

**Example Code**:
```markdown
---
layout: cover
background: 'linear-gradient(180deg, #101921 0%, #1D2D39 100%)'
---

# Upstream Data Control Platform

Reducing cloud data costs by 50-70% through intelligent filtering

<div class="absolute bottom-20 left-20">
David Aronchick, CEO<br/>
October 2025
</div>
```

---

### 2. Section Divider Slide

**Purpose**: Signal major topic transitions

**Layout**:
```
┌────────────────────────────────────────────┐
│                                            │
│                                            │
│    02                                      │ ← Large number, accent blue
│                                            │
│    The Problem                             │ ← 48px Bold
│                                            │
│    ──────                                  │ ← Accent line, 100px
│                                            │
└────────────────────────────────────────────┘
```

**Specifications**:
- Background: Solid Expanso Slate (#1D2D39)
- Number: 120px, Inter Bold, #00A9E0
- Section Title: 48px, Inter Bold, #FFFFFF
- Accent Line: 4px height, 100px width, #00A9E0
- No footer on divider slides

**Example Code**:
```markdown
---
layout: section-divider
---

<div class="text-8xl font-bold" style="color: #00A9E0;">02</div>
<h1 class="mt-8 text-5xl font-bold">The Problem</h1>
<div class="mt-4 h-1 w-24" style="background: #00A9E0;"></div>
```

---

### 3. Standard Content Slide (Text)

**Purpose**: The workhorse for presenting information

**Layout**:
```
┌────────────────────────────────────────────┐
│  Slide Title                               │ ← 48px Bold
│  ────                                      │ ← Optional accent
│                                            │
│  • First bullet point with clear text     │
│                                            │
│  • Second point maintaining rhythm        │
│                                            │
│  • Third point completing thought         │
│                                            │
│  Expanso           12                      │ ← Footer
└────────────────────────────────────────────┘
```

**Specifications**:
- Title: 48px, Inter Bold, #FFFFFF
- Bullets: Custom styled (not default dots)
  - Use colored dash: `—` in #00A9E0
  - Or use custom SVG bullet point
- Body: 20px, Inter Regular, line-height 1.6
- Spacing: 24px between bullets

**Bullet Style**:
```css
ul {
  list-style: none;
  padding-left: 0;
}

li::before {
  content: "—";
  color: #00A9E0;
  font-weight: bold;
  display: inline-block;
  width: 1.5em;
  margin-left: -1.5em;
}
```

---

### 4. Two-Column / Three-Column Slide

**Purpose**: Comparisons, parallel arguments, team listings

**Two-Column Layout**:
```
┌─────────────────────┬──────────────────────┐
│  Title Spanning Both Columns              │
│  ──────────────────────────────────────   │
│                     │                      │
│  Left Column        │  Right Column        │
│                     │                      │
│  Content here       │  Content here        │
│                     │                      │
└─────────────────────┴──────────────────────┘
```

**Specifications**:
- Columns: Equal width (880px each) or 60/40 split
- Gutter: 60px
- Vertical divider: Optional, 1px solid rgba(255,255,255,0.1)
- Alignment: Top-aligned content

**Three-Column Layout**:
```
Grid: 3 columns of 560px each
Gutter: 40px
Use for: Feature comparisons, team members, metrics
```

**Example Code**:
```markdown
# Feature Comparison

<div class="grid grid-cols-2 gap-16">
<div>

## Traditional Approach

- Post-ingestion filtering
- High data volumes
- Expensive storage

</div>
<div>

## Expanso Approach

- Pre-ingestion filtering
- Reduced volumes
- Cost savings

</div>
</div>
```

---

### 5. Diagram & Flowchart Slide

**Purpose**: Visual system diagrams, process flows

**Layout**:
```
┌────────────────────────────────────────────┐
│  Architecture Diagram                      │
│  ────                                      │
│                                            │
│         [Large open area]                  │
│         for custom diagram                 │
│                                            │
└────────────────────────────────────────────┘
```

**Diagram Style Guide**:

**Boxes/Nodes**:
```css
Standard Box:
  Border: 2px solid rgba(255, 255, 255, 0.2)
  Background: rgba(255, 255, 255, 0.05)
  Border radius: 8px
  Padding: 24px 32px
  Font: Inter Medium, 18px

Active/Highlighted Box:
  Border: 2px solid #00A9E0
  Background: rgba(0, 169, 224, 0.1)
  Box-shadow: 0 4px 16px rgba(0, 169, 224, 0.3)

System Component (Expanso):
  Border: 3px solid #63F5B4
  Background: rgba(99, 245, 180, 0.1)
  Font: Inter Bold
```

**Connectors/Arrows**:
```css
Line weight: 2-3px
Color: #00A9E0 (active) or rgba(255, 255, 255, 0.3) (inactive)
Arrow style: Solid triangle, 12px
Dashed lines: For optional/conditional paths
```

**Labels**:
```
Font: Inter Medium, 16px
Color: #F0F4F8
Background: Slightly darkened rectangle for readability
```

---

### 6. Data Visualization Slide

**Purpose**: Charts, graphs, quantitative data

**Layout**:
```
┌────────────────────────────────────────────┐
│  Chart Title                               │
│                                            │
│                                            │
│         [Chart Area]                       │
│                                            │
│                                            │
│  ┌──────────────────────────────────────┐ │
│  │ Key Insight: 50-70% cost reduction   │ │
│  └──────────────────────────────────────┘ │
└────────────────────────────────────────────┘
```

**Chart Specifications**:

**Color Assignments**:
```
Series 1 (Primary): #00A9E0 (Expanso Blue)
Series 2 (Secondary): #63F5B4 (Expanso Green)
Series 3 (Tertiary): #F59E0B (Amber)
Series 4: #EF4444 (Red)
Series 5: #8B5CF6 (Purple)

Neutral/Baseline: rgba(255, 255, 255, 0.3)
```

**Chart Elements**:
- **Axes**: 1px, rgba(255, 255, 255, 0.2)
- **Grid lines**: 1px, rgba(255, 255, 255, 0.1)
- **Labels**: Inter Regular, 14px, #CBD5E0
- **Values**: Inter Medium, 16px, #FFFFFF
- **Legend**: Inter Regular, 14px, positioned top-right

**Key Insight Box**:
```css
Background: rgba(0, 169, 224, 0.1)
Border-left: 4px solid #00A9E0
Padding: 20px 24px
Font: Inter Medium, 18px
Color: #FFFFFF
```

---

### 7. "Big Number" / Statistic Slide

**Purpose**: Emphasize single powerful metric

**Layout**:
```
┌────────────────────────────────────────────┐
│                                            │
│                                            │
│             50–70%                         │ ← 120px Bold, cyan
│                                            │
│      Cost Reduction Achieved               │ ← 28px Regular
│                                            │
│                                            │
└────────────────────────────────────────────┘
```

**Specifications**:
- Number: 96-120px, Inter Bold, #00A9E0 or #63F5B4
- Description: 24-28px, Inter Regular, #F0F4F8
- Centered alignment
- Optional: Small supporting text below (16px, #CBD5E0)

**Example Code**:
```markdown
---
layout: statement
---

<div class="text-9xl font-bold" style="color: #00A9E0;">50–70%</div>
<div class="text-3xl mt-8" style="color: #F0F4F8;">Cost Reduction Achieved</div>
<div class="text-lg mt-4" style="color: #CBD5E0;">Average across enterprise customers</div>
```

---

### 8. Image-Centric Slide

#### Full-Bleed Image

**Layout**:
```
┌────────────────────────────────────────────┐
│  [Full background image]                   │
│                                            │
│  ┌──────────────────────────────────────┐ │
│  │  Text overlay with scrim             │ │
│  │  for legibility                      │ │
│  └──────────────────────────────────────┘ │
└────────────────────────────────────────────┘
```

**Specifications**:
- Image: 1920×1080, high quality
- Scrim: `linear-gradient(to top, rgba(16, 25, 33, 0.9), transparent)`
- Text: Bottom-aligned, 60px from edges
- Title: 48px, Inter Bold, #FFFFFF with text-shadow

#### Image with Caption

**Layout**:
```
┌────────────────────────────────────────────┐
│  Title                                     │
│                                            │
│  ┌──────────────┐  Explanatory text       │
│  │              │  describing the image   │
│  │   Image      │  and its significance   │
│  │              │  in the presentation    │
│  └──────────────┘                          │
└────────────────────────────────────────────┘
```

**Specifications**:
- Image: 800×600px or 16:9 aspect ratio
- Border: Optional, 1px rgba(255, 255, 255, 0.2)
- Caption: 18px, Inter Regular, left-aligned
- Image position: Left or right, 60px gap to text

---

### 9. Quote / Testimonial Slide

**Purpose**: Customer quotes, testimonials, impactful statements

**Layout**:
```
┌────────────────────────────────────────────┐
│                                            │
│    "                                       │ ← Large quote mark
│                                            │
│    Quote text spanning multiple lines      │
│    in an elegant, readable format          │
│                                            │
│                      "                     │
│                                            │
│    — Attribution Name                      │
│      Title, Company                        │
└────────────────────────────────────────────┘
```

**Specifications**:
- Quote marks: 120px, Inter Light, #00A9E0 with 30% opacity
- Quote text: 32px, Inter Regular, #FFFFFF, centered
- Max width: 1200px
- Attribution: 18px, Inter Medium, #CBD5E0
- Attribution title: 16px, Inter Regular, #CBD5E0

**Example Code**:
```markdown
---
layout: quote
---

<div class="text-9xl opacity-30" style="color: #00A9E0;">"</div>

<div class="text-3xl text-center max-w-4xl mx-auto">
Expanso reduced our Splunk costs by 68% while maintaining full compliance coverage.
</div>

<div class="text-9xl opacity-30 text-right" style="color: #00A9E0;">"</div>

<div class="text-xl mt-12 text-center" style="color: #CBD5E0;">
— Sarah Chen<br/>
VP Data Engineering, Fortune 500 Financial Services
</div>
```

---

### 10. Final / Contact Slide

**Purpose**: Closing slide with contact information

**Layout**:
```
┌────────────────────────────────────────────┐
│                                            │
│         [EXPANSO LOGO]                     │ ← Centered, large
│                                            │
│         Thank You                          │ ← 48px
│                                            │
│    David Aronchick                         │ ← 24px
│    CEO, Expanso                            │ ← 18px
│    aronchick@expanso.io                    │ ← 18px, blue
│                                            │
│    www.expanso.io                          │ ← 18px, blue
└────────────────────────────────────────────┘
```

**Specifications**:
- Logo: 240px width, centered
- "Thank You": 48px, Inter SemiBold, #FFFFFF
- Name: 24px, Inter Bold, #FFFFFF
- Title: 18px, Inter Regular, #F0F4F8
- Email/Website: 18px, Inter Medium, #00A9E0 (clickable)
- All elements centered

---

## V. Diagram Guidelines

### Node Styles

**Standard Node**:
```css
width: auto (fit content + padding)
min-width: 140px
padding: 16px 24px
background: rgba(255, 255, 255, 0.05)
border: 2px solid rgba(255, 255, 255, 0.2)
border-radius: 8px
font: Inter Medium, 18px
color: #FFFFFF
text-align: center
```

**Highlighted Node** (Expanso system):
```css
border: 2px solid #00A9E0
background: rgba(0, 169, 224, 0.1)
box-shadow: 0 4px 16px rgba(0, 169, 224, 0.3)
font: Inter Bold, 18px
```

**Success Node**:
```css
border: 2px solid #63F5B4
background: rgba(99, 245, 180, 0.1)
```

**Warning Node**:
```css
border: 2px solid #F59E0B
background: rgba(245, 158, 11, 0.1)
```

### Connectors

**Active Connection**:
```css
stroke: #00A9E0
stroke-width: 3px
marker-end: arrow (filled triangle, 12px)
```

**Inactive/Background Connection**:
```css
stroke: rgba(255, 255, 255, 0.3)
stroke-width: 2px
stroke-dasharray: 5, 5 (for conditional)
```

**Bidirectional**:
```css
marker-start: arrow
marker-end: arrow
```

### Labels and Annotations

**Connection Label**:
```
Font: Inter Regular, 14px
Color: #CBD5E0
Background: rgba(16, 25, 33, 0.8)
Padding: 4px 8px
Border-radius: 4px
```

**Annotation Callout**:
```
Font: Inter Medium, 16px
Color: #00A9E0
Leader line: 1px dashed #00A9E0
```

---

## VI. Data Visualization Standards

### Chart Types & Usage

**Bar Chart**: Comparisons, rankings
- Horizontal bars: Better for labels
- Vertical bars: Time series, categories

**Line Chart**: Trends over time
- Max 4 lines per chart
- Use different line styles if colors insufficient

**Pie/Donut Chart**: Proportions (use sparingly)
- Max 5 segments
- Start largest at 12 o'clock, go clockwise

**Area Chart**: Volume over time
- Stack for cumulative values
- Use transparency (40-60%)

### Color Assignments

**Single Series**: #00A9E0 (Expanso Blue)

**Two Series**:
- Primary: #00A9E0 (Blue)
- Secondary: #63F5B4 (Green)

**Three+ Series**:
1. #00A9E0 (Blue)
2. #63F5B4 (Green)
3. #F59E0B (Amber)
4. #8B5CF6 (Purple)
5. #EC4899 (Pink)

**Comparison** (Good vs. Bad):
- Positive: #63F5B4 (Green)
- Negative: #EF4444 (Red)

### Chart Elements

**Title**: Inter SemiBold, 28px, #FFFFFF, above chart

**Axes**:
- Line: 1px, rgba(255, 255, 255, 0.2)
- Labels: Inter Regular, 14px, #CBD5E0
- Title: Inter Medium, 16px, #F0F4F8

**Grid**:
- Major: 1px, rgba(255, 255, 255, 0.1)
- Minor: 0.5px, rgba(255, 255, 255, 0.05)

**Data Labels**:
- Font: Inter Medium, 14px
- Color: #FFFFFF
- Position: Above bars/points
- Format: Add units (%, $, K, M)

**Legend**:
- Position: Top-right or bottom
- Font: Inter Regular, 14px
- Color: #F0F4F8
- Markers: 12px circles or squares

---

## VII. Usage Guidelines

### Do's

✓ **Use the grid**: Align all elements to the 12-column grid
✓ **Maintain hierarchy**: H1 → H2 → Body → Caption
✓ **Be consistent**: Same slide types should look identical
✓ **Use whitespace**: 80px margins minimum, generous spacing
✓ **Test contrast**: All text must meet WCAG AA standards
✓ **Keep it simple**: One idea per slide
✓ **Use accents sparingly**: 2-3 blue/green highlights max per slide
✓ **Include slide numbers**: Except title and divider slides
✓ **Add speaker notes**: For every content slide

### Don'ts

✗ **Don't clutter**: Remove unnecessary elements
✗ **Don't use light backgrounds**: Always dark (#101921 or #1D2D39)
✗ **Don't mix fonts**: Inter only
✗ **Don't use default bullets**: Custom styled only
✗ **Don't skip the footer**: Every content slide needs it
✗ **Don't use too many colors**: Stick to palette
✗ **Don't ignore the grid**: Everything must align
✗ **Don't use small text**: Minimum 14px
✗ **Don't overcrowd diagrams**: One clear message per visual

### Content Guidelines

**Bullet Points**:
- Maximum 5 bullets per slide
- Keep to single lines when possible
- Use parallel structure
- Start with action verbs when appropriate

**Headlines**:
- Clear, descriptive, actionable
- Not questions (state the answer)
- Maximum 60 characters

**Numbers**:
- Use commas: 1,000 not 1000
- Use symbols: 50% not 50 percent
- Round when appropriate: $5M not $4,847,392
- Add context: "50% reduction" not just "50%"

---

## VIII. Implementation Notes

### Slidev Implementation

**Theme Configuration** (`theme/index.ts`):
```typescript
export default {
  colorSchema: 'dark',
  defaults: {
    layout: 'default',
    background: '#101921',
  },
}
```

**Custom Layouts** (`theme/layouts/`):
- `cover.vue` - Title slide
- `section-divider.vue` - Section breaks
- `default.vue` - Standard content
- `two-cols.vue` - Two-column layout
- `statement.vue` - Big number slide
- `quote.vue` - Testimonial slide

**Component Library** (`components/`):
- `ExpansoMetricCard.vue` - Metric display
- `ExpansoStepCard.vue` - Process steps
- `ExpansoDiagram.vue` - Diagram container
- `ExpansoChart.vue` - Chart wrapper

### Asset Requirements

**Logo Files**:
- `public/expanso-logo.svg` - Full logo (vector)
- `public/expanso-logomark.svg` - Compact mark
- `public/expanso-logo-white.png` - Raster fallback (2x, 4x)

**Icons** (if needed):
- SVG format, 24×24px base size
- Monochrome (white or accent color)
- 2px stroke weight

**Fonts**:
- Inter: Hosted via Google Fonts or self-hosted
- Weights: 300, 400, 500, 600, 700

### File Organization

```
/
├── slides.md                   # Main presentation
├── theme/
│   ├── index.ts               # Theme config
│   ├── layouts/               # Custom layouts
│   │   ├── cover.vue
│   │   ├── section-divider.vue
│   │   ├── default.vue
│   │   ├── two-cols.vue
│   │   ├── statement.vue
│   │   └── quote.vue
│   └── styles/
│       ├── colors.css
│       ├── typography.css
│       └── layout.css
├── components/                # Vue components
│   ├── ExpansoMetricCard.vue
│   ├── ExpansoStepCard.vue
│   ├── ExpansoDiagram.vue
│   └── ExpansoChart.vue
└── public/                    # Static assets
    ├── expanso-logo.svg
    ├── expanso-logomark.svg
    └── icons/
```

---

## IX. Quality Checklist

Before finalizing any presentation, verify:

**Brand Compliance**:
- [ ] Background is #101921 or #1D2D39
- [ ] All text is white (#FFFFFF) or off-white (#F0F4F8)
- [ ] Accent colors used sparingly (blue/green)
- [ ] Logo appears on title and final slides
- [ ] Footer on all content slides

**Typography**:
- [ ] Inter font family throughout
- [ ] Clear hierarchy (H1 → H2 → Body)
- [ ] No text below 14px
- [ ] Line length under 70 characters
- [ ] Consistent alignment

**Layout**:
- [ ] 80px top/bottom margins, 60px left/right
- [ ] Elements aligned to grid
- [ ] Consistent spacing between elements
- [ ] No orphaned elements

**Accessibility**:
- [ ] All text contrast > 4.5:1 (AA)
- [ ] Charts have legends/labels
- [ ] Color not sole differentiator
- [ ] Alt text for images (if applicable)

**Content**:
- [ ] One idea per slide
- [ ] Speaker notes added
- [ ] Slide numbers present
- [ ] No typos or grammatical errors
- [ ] Data sources cited (if applicable)

---

## X. Version History

**v1.0** - October 27, 2025
- Initial master system created
- 10 slide archetypes defined
- Complete brand guidelines
- Diagram and data viz standards
- Slidev implementation notes

---

## Questions or Updates?

This master system is a living document. Propose changes through:

1. Design review process
2. Feedback to brand/marketing team
3. Direct updates to this file (version controlled)

**Maintained by**: Expanso Design & Marketing Team
**Last Updated**: October 27, 2025
**Next Review**: Quarterly
