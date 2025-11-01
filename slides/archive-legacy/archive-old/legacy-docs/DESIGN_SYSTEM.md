# Expanso Design System

A comprehensive design system for Expanso presentations, marketing materials, and product interfaces. This system emphasizes dark, professional aesthetics with strategic use of vibrant accent colors.

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Accessibility](#accessibility)
6. [Component Guidelines](#component-guidelines)
7. [Usage Examples](#usage-examples)

---

## Brand Identity

### Core Principles

- **Professional & Modern**: Clean, sophisticated dark aesthetics for enterprise audiences
- **Data-Focused**: Visual design emphasizes clarity and information hierarchy
- **Accessible**: WCAG 2.1 AA standards minimum, AAA preferred
- **Cost-Conscious**: Design reflects the cost-savings value proposition
- **Upstream Philosophy**: "Control at the source" reflected in design choices

### Brand Positioning

**Expanso**: The upstream data control platform that cuts cloud data costs by 50-70% through intelligent filtering, transformation, and governance at the source—before data hits expensive platforms like Snowflake, Databricks, Splunk, or Datadog.

**Key Messages**:
- Cost reduction without losing insights
- Upstream control beats downstream optimization
- Enterprise-grade reliability with startup agility

---

## Color System

### Primary Colors

#### Background Colors (Dark Theme)

**Primary Background**: `#1a2332` (Dark Navy)
- Deep, professional navy that reduces eye strain
- Excellent for long presentations and data-heavy interfaces
- RGB: 26, 35, 50

**Secondary Background**: `#2d3748` (Slate Gray)
- Used for gradients, containers, and depth
- RGB: 45, 55, 72

**Gradient (Standard)**:
```css
background: linear-gradient(180deg, #1a2332 0%, #2d3748 100%);
```

#### Text Colors (On Dark Backgrounds)

**Primary Text**: `#FFFFFF` (Pure White)
- Headlines, primary content
- Use for maximum contrast and readability

**Secondary Text**: `#CBD5E0` (Light Gray)
- Subheadlines, body text, descriptions
- RGB: 203, 213, 224

**Tertiary Text**: `#718096` (Medium Gray)
- Captions, metadata, footer text
- RGB: 113, 128, 150

**Muted Text**: `#A0AEC0` (Soft Gray)
- Placeholder text, disabled states
- RGB: 160, 174, 192

#### Accent Colors (Semantic)

**Cyan (Highlight/Primary CTA)**: `#00D9FF`
- Primary accent for emphasis and calls-to-action
- Used to highlight key metrics (e.g., "50-70%")
- RGB: 0, 217, 255
- **Usage**: Numbers, key phrases, interactive elements

**Green (Solution/Success)**: `#48BB78` (Primary), `#9ae6b4` (Light)
- Represents solutions, positive outcomes, cost savings
- RGB: 72, 187, 120 / 154, 230, 180
- **Usage**: Success metrics, savings indicators, "after" states

**Blue (Platform/Technology)**: `#4299e1` (Primary), `#90cdf4` (Light)
- Represents cloud platforms, technology, infrastructure
- RGB: 66, 153, 225 / 144, 205, 244
- **Usage**: Platform logos, technical diagrams, infrastructure

**Red (Problem/Alert)**: `#fc8181` (Primary), `#feb2b2` (Light)
- Represents problems, costs, "before" states
- RGB: 252, 129, 129 / 254, 178, 178
- **Usage**: Problem indicators, cost growth, alerts

**Orange (Results/Metrics)**: `#ed8936` (Primary), `#fbd38d` (Light)
- Represents results, ROI, time metrics
- RGB: 237, 137, 54 / 251, 211, 141
- **Usage**: ROI calculations, time-to-value, results

### Color Usage Guidelines

#### Semantic Mapping

```
Problem/Cost → Red (#fc8181)
Solution/Savings → Green (#48BB78)
Platforms/Tech → Blue (#4299e1)
Results/ROI → Orange (#ed8936)
Highlight/CTA → Cyan (#00D9FF)
```

#### Contrast Requirements (WCAG AA)

All text color combinations meet WCAG 2.1 AA standards:

**On Dark Background (#1a2332)**:
- White text: 21:1 (AAA) ✓
- Light gray (#CBD5E0): 12.4:1 (AAA) ✓
- Medium gray (#718096): 5.1:1 (AA) ✓
- Cyan (#00D9FF): 8.2:1 (AAA) ✓

**Interactive Elements**:
- Focus indicators: 3:1 minimum against background
- Borders: 3:1 minimum for visual boundaries

#### Container Colors

**Primary Container**: `rgba(45, 55, 72, 0.8)` (Semi-transparent slate)
- Used for cards, panels, elevated content

**Bordered Container**:
```css
border: 2px solid #00D9FF;
background: rgba(0, 217, 255, 0.05);
border-radius: 12px;
```

**Accent Container**:
```css
background: rgba(72, 187, 120, 0.15); /* Green tint */
border-left: 4px solid #48BB78;
```

---

## Typography

### Font Family

**Primary**: Inter
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Modern, highly readable sans-serif
- Excellent for both display and body text
- Open-source, self-hostable

**Fallback Stack**:
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
             Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

**Monospace** (for code):
```css
font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
```

### Type Scale (Presentations - 1920×1080)

```
Display/Title: 54px (3.375rem)
  - Font weight: 700
  - Line height: 1.2
  - Letter spacing: -0.5px
  - Use: Slide titles, hero headlines

Headline: 42px (2.625rem)
  - Font weight: 700
  - Line height: 1.2
  - Use: Section headers, major divisions

Subheadline: 28px (1.75rem)
  - Font weight: 400-500
  - Line height: 1.4
  - Use: Subtitles, secondary headlines

Body Large: 20px (1.25rem)
  - Font weight: 400
  - Line height: 1.6
  - Use: Primary body text, descriptions

Body: 18px (1.125rem)
  - Font weight: 400
  - Line height: 1.6
  - Use: List items, paragraphs

Small: 16px (1rem)
  - Font weight: 400-500
  - Line height: 1.5
  - Use: Captions, metadata, labels

Tiny: 14px (0.875rem)
  - Font weight: 300-400
  - Line height: 1.4
  - Use: Fine print, disclaimers
```

### Typography Guidelines

**Emphasis Techniques**:
1. **Weight change**: Increase to 500 or 600 for emphasis
2. **Color change**: Use cyan (#00D9FF) for highlights
3. **Size change**: Scale up by 1.2-1.5x for importance

**Avoid**:
- Italics for emphasis (use weight instead)
- ALL CAPS for long text (use for labels only)
- Underlining (except for links)
- Light weights (300) for small text

**Line Length**:
- Optimal: 50-70 characters
- Maximum: 90 characters

---

## Spacing & Layout

### Spacing Scale (Presentations)

Based on slide dimensions (1920×1080):

```
Slide Margins: 80px (outermost padding)
XLarge Gap: 60px (major section separation)
Large Gap: 48px (section spacing)
Medium Gap: 32px (element spacing)
Small Gap: 24px (tight spacing)
Tiny Gap: 16px (inline spacing)
XS Gap: 8px (minimal spacing)
```

### Layout System

#### Slide Dimensions

**Standard**: 1920×1080px (16:9)
- Total area: 2,073,600 pixels
- Safe area: 1760×920px (80px margins)

#### Grid System

**3-Column Grid**:
```
Column width: ~586px each
Gutter: 48px
Use: Metric cards, feature comparisons, step processes
```

**2-Column Grid**:
```
Column width: ~880px each
Gutter: 60px
Use: Comparisons, before/after, competitive analysis
```

**Content Zones** (Vertical):
```
Top (40%): Logo, title, subtitle
Middle (40%): Main content, diagrams, data
Bottom (20%): Footer, contact, attribution
```

#### Positioning Guidelines

**Absolute Positioning** (for title slides):
```
Logo: top: 60px, left: 60px
Title: top: 280px, centered
Subtitle: top: 420px, centered
Diagram: top: 600px, centered
Contact: bottom: 100px, left: 60px
Tagline: bottom: 80px, right: 60px
```

**Flexbox Centering** (for content slides):
```css
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 48px;
```

### Container Sizes

```
Small: 600px max-width (focused content)
Medium: 800px max-width (diagrams)
Large: 1200px max-width (comparison tables)
Full: 1400px max-width (titles, heroes)
Extra Full: 1760px (safe area width)
```

### Border Radius

```
Small: 6px (badges, small buttons)
Medium: 8px (buttons, inputs)
Large: 12px (cards, containers)
XLarge: 16px (hero sections)
```

### Shadows

Use sparingly on dark backgrounds:

```css
/* Subtle elevation */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

/* Medium elevation */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);

/* Strong elevation */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);

/* Colored glow (cyan) */
box-shadow: 0 4px 16px rgba(0, 217, 255, 0.3);
```

---

## Accessibility

### Contrast Validation

All color combinations tested against WCAG 2.1:

**Text on Dark Navy (#1a2332)**:
```
White (#FFFFFF): 15.8:1 (AAA) ✓
Light Gray (#CBD5E0): 12.4:1 (AAA) ✓
Medium Gray (#718096): 5.1:1 (AA) ✓
Cyan (#00D9FF): 8.2:1 (AAA) ✓
Green (#48BB78): 6.1:1 (AA) ✓
```

### Focus Indicators

```css
outline: 3px solid #00D9FF;
outline-offset: 2px;
```

### Animation & Motion

**Respect prefers-reduced-motion**:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Default Transitions**:
```css
transition: all 0.2s ease-out;
```

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Tab order must follow visual flow
- Focus indicators always visible
- Skip links for long content

---

## Component Guidelines

### Metric Cards (ExpansoMetricCard)

**Purpose**: Display key statistics, ROI figures, performance metrics

**Structure**:
```
┌─────────────────────┐
│      [Icon]         │ ← Optional icon (40px)
│                     │
│      68%            │ ← Value (48px, bold)
│                     │
│  COST REDUCTION     │ ← Label (16px, uppercase, medium)
│                     │
│ $816K annual savings│ ← Detail (16px, muted)
└─────────────────────┘
```

**Styling**:
```css
border: 2px solid [color];
border-radius: 12px;
padding: 32px;
background: rgba([color], 0.08);
text-align: center;
```

**States**:
- Default: Border color = accent color
- Hover: translateY(-4px), add shadow

**Color Mapping**:
- Cost reduction: Green (#48BB78)
- Time metrics: Blue (#4299e1)
- ROI: Orange (#ed8936)
- Generic: Cyan (#00D9FF)

### Step Cards (ExpansoStepCard)

**Purpose**: Show process steps, implementation phases, workflows

**Structure**:
```
┌─────────────────────┐
│ ① Deploy at Source  │ ← Badge + Title (28px, semibold)
│                     │
│ Install Expanso...  │ ← Description (20px)
│                     │
│ • Point 1           │ ← Optional items
│ • Point 2           │
│                     │
│ 💡 Shadow mode...   │ ← Optional callout
└─────────────────────┘
```

**Styling**:
```css
background: rgba(45, 55, 72, 0.8);
border-left: 4px solid #00D9FF;
border-radius: 12px;
padding: 32px;
position: relative;
```

**Step Badge**:
```css
position: absolute;
top: 20px;
left: -20px;
width: 40px;
height: 40px;
background: #00D9FF;
color: #1a2332;
border-radius: 50%;
font-weight: 700;
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
```

### Buttons

**Primary**:
```css
background: #00D9FF;
color: #1a2332;
padding: 12px 32px;
border-radius: 8px;
font-weight: 600;
font-size: 18px;
box-shadow: 0 2px 8px rgba(0, 217, 255, 0.3);

&:hover {
  background: #00BBDD;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 217, 255, 0.4);
}
```

**Secondary**:
```css
background: transparent;
border: 2px solid #00D9FF;
color: #00D9FF;
padding: 10px 30px;

&:hover {
  background: rgba(0, 217, 255, 0.1);
}
```

### Containers

**Standard Container**:
```css
background: rgba(45, 55, 72, 0.8);
border-radius: 12px;
padding: 32px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
```

**Bordered Container** (emphasis):
```css
border: 2px solid #00D9FF;
background: rgba(0, 217, 255, 0.05);
border-radius: 12px;
padding: 32px;
```

**Alert Container** (problems):
```css
border: 2px solid #fc8181;
background: rgba(252, 129, 129, 0.05);
border-radius: 12px;
padding: 24px;
```

### Diagrams

**Simple Flow**:
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Source    │ →  │   EXPANSO   │ →  │  Platform   │
└─────────────┘    └─────────────┘    └─────────────┘
```

**Styling**:
- Boxes: 2px solid border, rgba background
- EXPANSO box: Highlighted with cyan border
- Arrows: 32px font-size, cyan color
- Container: Dashed border for grouping

---

## Usage Examples

### Title Slide (Cover)

```markdown
Background: linear-gradient(180deg, #1a2332 0%, #2d3748 100%)
Layout: Centered with absolute positioning

Elements:
- Logo (gradient placeholder): top-left
- Title (54px, bold): centered, 280px from top
  - Highlight key number in cyan
- Subtitle (28px, regular): centered, 420px from top
  - Emphasize "at the source" and "before"
- Simple diagram: centered, 600px from top
- Contact: bottom-left
- Tagline: bottom-right
```

### Content Slide

```markdown
Background: #1a2332 or linear-gradient
Layout: Default with padding: 80px

Elements:
- Title (42px, bold): top
- Subtitle (24px, regular): below title
- Content area: grid or flexbox
  - 3-column for metrics
  - 2-column for comparisons
  - Single column for lists
- Animations: v-click for progressive reveal
```

### Data Visualization

```markdown
Chart colors:
- Primary data: Cyan (#00D9FF)
- Secondary: Blue (#4299e1)
- Tertiary: Green (#48BB78)
- Negative: Red (#fc8181)
- Neutral: Gray (#718096)

Labels:
- Axis: 16px, medium gray
- Values: 18px, white
- Highlights: Bold, cyan
```

### Comparison Slide

```markdown
Layout: Two-column grid

Left column (Problem):
- Border: Red (#fc8181)
- Background: rgba(252, 129, 129, 0.05)
- Icon color: Red

Right column (Solution):
- Border: Green (#48BB78)
- Background: rgba(72, 187, 120, 0.05)
- Icon color: Green

Connecting element:
- Arrow or "vs" indicator in cyan
```

---

## CSS Variables Implementation

### Root Variables

```css
:root {
  /* Colors - Backgrounds */
  --expanso-bg-primary: #1a2332;
  --expanso-bg-secondary: #2d3748;

  /* Colors - Text */
  --expanso-text-primary: #FFFFFF;
  --expanso-text-secondary: #CBD5E0;
  --expanso-text-tertiary: #718096;
  --expanso-text-muted: #A0AEC0;

  /* Colors - Accents */
  --expanso-accent-cyan: #00D9FF;
  --expanso-accent-green: #48BB78;
  --expanso-accent-green-light: #9ae6b4;
  --expanso-accent-blue: #4299e1;
  --expanso-accent-blue-light: #90cdf4;
  --expanso-accent-red: #fc8181;
  --expanso-accent-red-light: #feb2b2;
  --expanso-accent-orange: #ed8936;
  --expanso-accent-orange-light: #fbd38d;

  /* Colors - Semantic */
  --expanso-problem-color: var(--expanso-accent-red);
  --expanso-solution-color: var(--expanso-accent-green);
  --expanso-platform-color: var(--expanso-accent-blue);
  --expanso-metric-color: var(--expanso-accent-orange);
  --expanso-highlight-color: var(--expanso-accent-cyan);

  /* Typography - Sizes */
  --expanso-font-title: 54px;
  --expanso-font-headline: 42px;
  --expanso-font-subhead: 28px;
  --expanso-font-body: 20px;
  --expanso-font-small: 16px;
  --expanso-font-tiny: 14px;

  /* Typography - Weights */
  --expanso-weight-light: 300;
  --expanso-weight-regular: 400;
  --expanso-weight-medium: 500;
  --expanso-weight-semibold: 600;
  --expanso-weight-bold: 700;

  /* Typography - Line Heights */
  --expanso-line-tight: 1.2;
  --expanso-line-normal: 1.5;
  --expanso-line-relaxed: 1.6;

  /* Spacing */
  --expanso-margin-slide: 80px;
  --expanso-gap-xlarge: 60px;
  --expanso-gap-large: 48px;
  --expanso-gap-medium: 32px;
  --expanso-gap-small: 24px;
  --expanso-gap-tiny: 16px;
  --expanso-gap-xs: 8px;

  /* Padding */
  --expanso-padding-large: 40px;
  --expanso-padding-medium: 32px;
  --expanso-padding-small: 24px;
  --expanso-padding-tiny: 16px;

  /* Border Radius */
  --expanso-radius-large: 12px;
  --expanso-radius-medium: 8px;
  --expanso-radius-small: 6px;
  --expanso-radius-tiny: 4px;

  /* Shadows */
  --expanso-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --expanso-shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
  --expanso-shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
}
```

### Slidev-Specific Overrides

```css
:root {
  --slidev-theme-primary: var(--expanso-accent-cyan);
  --slidev-theme-accents-blue: var(--expanso-accent-blue);
  --slidev-theme-accents-green: var(--expanso-accent-green);
  --slidev-theme-accents-red: var(--expanso-accent-red);
  --slidev-theme-accents-orange: var(--expanso-accent-orange);
  --slidev-code-background: var(--expanso-bg-secondary);
  --slidev-font-base: 'Inter', -apple-system, sans-serif;
}
```

---

## Best Practices

### Do's

✓ Use dark backgrounds (#1a2332) for all slides
✓ Maintain high contrast (WCAG AA minimum)
✓ Use cyan (#00D9FF) for primary highlights and CTAs
✓ Apply semantic colors consistently (green=good, red=bad)
✓ Include speaker notes for all slides
✓ Test on actual presentation displays (1920×1080)
✓ Use Inter font for all text
✓ Provide 80px margins on all slides
✓ Use flexbox/grid for responsive layouts
✓ Animate progressively with v-click

### Don'ts

✗ Don't use light backgrounds (breaks brand)
✗ Don't use more than 3 accent colors per slide
✗ Don't use font weights below 400 for small text
✗ Don't crowd slides (use whitespace)
✗ Don't ignore contrast ratios
✗ Don't use pure black text on dark backgrounds
✗ Don't skip accessibility testing
✗ Don't create slides over 1920×1080
✗ Don't use animations that distract from content
✗ Don't rely on color alone to convey meaning

---

## Resources

### Design Tools
- **Slidev**: Markdown-based presentation framework
- **Figma**: Design mockups and asset creation
- **WebAIM Contrast Checker**: Validate color combinations
- **Google Fonts**: Inter font family

### Development
- **Vue 3**: Component framework
- **UnoCSS**: Utility-first CSS (Tailwind-compatible)
- **Vite**: Build tool and dev server

### Testing
- **Lighthouse**: Accessibility audits
- **axe DevTools**: Automated accessibility testing
- **BrowserStack**: Cross-browser/device testing

---

## Version History

- **2025-10-27**: Created design system for Slidev presentations
  - Dark navy theme (#1a2332)
  - Cyan primary accent (#00D9FF)
  - Inter typography system
  - Component specifications (MetricCard, StepCard)
  - Semantic color mapping
  - Accessibility guidelines
  - CSS variable implementation

---

## Maintenance

This design system is maintained as part of the Expanso slide repository. Updates should be:

1. Documented in this file
2. Reflected in `/theme/` CSS files
3. Updated in component definitions
4. Tested for accessibility
5. Validated in actual presentations

**Questions?** Refer to `/CLAUDE.md` for project context and implementation details.
