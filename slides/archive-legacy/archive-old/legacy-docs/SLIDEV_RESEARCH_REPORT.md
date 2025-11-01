# Slidev Research Report: Feasibility for Expanso Slide Migration

**Research Date:** October 27, 2025
**Purpose:** Evaluate Slidev as a migration target from Figma-based JSON slides
**Status:** Complete

---

## Executive Summary

Slidev is a **web-based presentation platform designed for developers** that enables markdown-driven slide creation with Vue 3 integration, comprehensive theming, and interactive components. It offers substantial advantages over traditional presentation tools for technical content but has limitations that should be considered for your Expanso presentation deck.

**Verdict:** Slidev is **highly suitable** for migrating technical content from Figma-based JSON slides, particularly if your audience includes developers and technical stakeholders. It excels at code snippets, diagrams, and interactive content but differs fundamentally from visual design tools.

---

## 1. Theming System

### Capabilities

✓ **Custom Color Palettes**
- Define theme colors via `themeConfig` object in frontmatter
- Colors injected as CSS variables accessible throughout slides
- Supports full CSS color ecosystem (hex, rgb, gradients)
- Example configuration:
  ```yaml
  ---
  themeConfig:
    primary: '#48BB78'
    secondary: '#CBD5E0'
    background: '#1a2332'
  ---
  ```

✓ **Font Customization**
- Default fonts: Sans (Roboto), Serif (Roboto Slab), Mono (Fira Code)
- **Inter font fully supported** - native Google Fonts integration
- Automatic font import from Google Fonts CDN
- Font weight configuration (default: 200, 400, 600)
- Local font support via `fonts.local` configuration
- Example:
  ```yaml
  ---
  fonts:
    sans: 'Inter'
    serif: 'Inter'
    mono: 'Fira Code'
  ---
  ```

✓ **Theme Structure**
- Three theme options: default themes, npm packages, local custom themes
- Themes are npm packages prefixed with `@slidev/theme-` or custom local folders
- Theme inheritance and override capability
- Official themes available: seriph, default, and community themes

✓ **Design System Integration**
- CSS variables for colors, fonts, sizing, spacing
- Compatible with your existing Expanso design system:
  - Background: `#1a2332` (dark navy) ✓
  - Text colors: White, secondary, muted ✓
  - Accent colors: Green, Blue, Red, Orange, Cyan ✓

### Limitations

✗ **Visual Editor** - No drag-and-drop design interface; code-first approach
✗ **Advanced Typography** - Limited beyond standard font weights/sizes
✗ **Real-time Preview During Editing** - Requires build/serve process

---

## 2. Layout Capabilities

### Built-in Layouts (17 Total)

**Basic:**
- `center` - Content centered on slide
- `default` - Generic slide container
- `full` - Uses entire screen space
- `none` - No predefined styling

**Presentation Structures:**
- `cover` - Title slide
- `intro` - Introduction with metadata
- `section` - Section divider
- `end` - Closing slide

**Content Emphasis:**
- `fact` - Prominent data/facts display
- `quote` - Quotations
- `statement` - Affirmations

**Media Layouts:**
- `image`, `image-left`, `image-right` - Image content
- `iframe`, `iframe-left`, `iframe-right` - Embedded web content
- `two-cols`, `two-cols-header` - Multi-column layouts

### Custom Layouts

✓ **Vue Component-Based**
- Create layouts as `.vue` files in `layouts/` directory
- Automatically discovered and available to slides
- Full Vue 3 capabilities: reactivity, computed properties, composables
- Named slots for content organization
- Example structure:
  ```vue
  <template>
    <div class="slidev-layout custom">
      <div class="left">
        <slot name="left" />
      </div>
      <div class="right">
        <slot name="right" />
      </div>
    </div>
  </template>
  ```

✓ **Grid & Positioning System**
- **UnoCSS integration** (Tailwind-compatible utility classes)
- Full CSS Grid support: `<div class="grid grid-cols-2 gap-4">`
- Flexible column definitions: `grid-cols-[200px_1fr_10%]`
- Flexbox and Masonry layout options
- Complete CSS control via scoped styles

✓ **Responsive Design**
- Mobile-first approach with breakpoint support
- UnoCSS responsive modifiers: `sm:`, `md:`, `lg:`, `xl:`

### Layout Organization

```
your-project/
├── layouts/
│   ├── default.vue        # Overrides built-in
│   ├── two-cols-custom.vue
│   └── metric-cards.vue
├── slides.md              # Main entry point
└── pages/
    ├── intro.md
    ├── section1.md
    └── conclusion.md
```

---

## 3. Advanced Features

### Presenter Notes & Speaker Support

✓ **Full Presenter Mode**
- HTML comments treated as speaker notes
- Accessible via `/presenter` route in browser
- Notes displayed in presenter window or mobile device
- Next slide preview in presenter view
- Timer and click counter
- Camera view support

Example:
```markdown
# Slide Title

Your visible content here

<!--
This is a speaker note that only appears in presenter mode.
Include key talking points, timings, and delivery notes.
-->
```

✓ **Exporting Notes**
- Notes preserved when exporting to PPTX
- One-to-one mapping of notes to slides
- Accessible in presentation software that supports speaker notes

### Diagram Support

✓ **Mermaid Diagrams** (Fully Integrated)
- Flowcharts, sequence diagrams, class diagrams, state machines
- Syntax highlighting and real-time rendering
- Configurable diagram styling
- Example:
  ```markdown
  ```mermaid
  graph LR
    A[Start] --> B[Process]
    B --> C{Decision}
    C -->|Yes| D[End]
  ```
  ```

✓ **Other Diagram Options**
- LaTeX math rendering via KaTeX
- PlantUML support (via third-party integration)
- Custom SVG/canvas elements via Vue components
- Drawing/annotation tool (Drauu integration)

✗ **Limitation:** Mermaid click animation (step-by-step reveal) is a requested feature, not yet built-in

### Vue Component Integration

✓ **Seamless Component Usage**
- Auto-imported Vue components (unplugin-vue-components)
- No manual imports required
- Create reusable components in `components/` directory
- Full Vue 3 ecosystem accessible
- Reactive state and computed properties

✓ **Built-in Components**
- Arrow, AutoFitText, LightOrDark, SlidevVideo
- v-click, v-clicks, v-after - animation components
- Extensible component library

✓ **Component File Structure**
```
components/
├── MetricCard.vue         # Reusable metric display
├── CodeBlock.vue          # Custom code styling
├── TimelineStep.vue       # Process timeline
└── LogoGrid.vue           # Company/platform logos
```

### Animations and Transitions

✓ **Click Animations (Interactive Steps)**
- `<v-click>` component for reveal animations
- `<v-after>` for dependent visibility
- `<v-clicks>` for batch child animations
- Absolute and relative click positioning

Example:
```markdown
# Multi-Step Reveal

<v-click>Step 1 appears first</v-click>
<v-click>Step 2 appears on next click</v-click>
<v-after>Shows after previous v-click</v-after>

<!-- Using v-clicks for list animations -->
<v-clicks>
- Bullet 1
- Bullet 2
- Bullet 3
</v-clicks>
```

✓ **Motion Effects (v-motion Directive)**
- Built-in @vueuse/motion integration
- Position, scale, rotate, opacity transitions
- Click-triggered animations: `:click-1="{y: 30}"`
- Slide entry/exit animations

✓ **Slide Transitions**
Five built-in transition types:
- `fade` - Crossfade
- `slide-left`, `slide-right`, `slide-up`, `slide-down` - Directional
- `view-transition` - Modern View Transitions API

✓ **Keyboard Controls**
- Navigate with arrow keys, space, or keyboard shortcuts
- Customizable keyboard bindings

✗ **Limitations:**
- Vue internal bug: v-motion and v-click must be on same element for click-triggered motion
- Mermaid diagrams don't have native step-by-step reveal (workaround: multiple diagram variants)

---

## 4. Content Organization

### Multiple Slide Files

✓ **File Splitting via `src` Feature**
- Reference external markdown files using frontmatter `src`
- Enables modular slide organization
- Each imported file can contain multiple slides (separated by `---`)
- Reusable slide files across presentations

Example main entry point (`slides.md`):
```markdown
---
theme: seriph
title: Expanso Presentation
---

# Title Page

---
src: ./pages/01-intro.md
---

---
src: ./pages/02-problem-section.md
---

---
src: ./pages/03-solution.md
---
```

Individual file (`pages/01-intro.md`):
```markdown
# Introduction

Company overview content

---

# Team Background

Team details
```

✓ **Recommended Organization**
```
slidev-project/
├── slides.md                 # Main entry point
├── pages/
│   ├── 01-intro.md
│   ├── 02-problem.md
│   ├── 03-solution.md
│   ├── 04-demo.md
│   └── 05-closing.md
├── layouts/
├── components/
├── styles/
└── public/
    ├── logos/
    ├── diagrams/
    └── screenshots/
```

✓ **Slide Reusability**
- Same file can be imported multiple times with different configurations
- Enables DRY (Don't Repeat Yourself) principle
- Great for maintaining consistent content across variants

### Slide Variants

✓ **Conditional Rendering for Multiple Audiences**
- Technical vs. Executive versions via conditional components
- Use Vue computed properties and component logic
- Example:
  ```vue
  <template v-if="audience === 'technical'">
    <!-- Technical deep dive -->
  </template>
  <template v-else>
    <!-- Executive summary -->
  </template>
  ```

✓ **Layout Variants**
- Same content with different layouts per audience
- Use `src` feature with layout override in parent slides.md

---

## 5. Styling System

### UnoCSS Integration

✓ **Atomic CSS Framework** (Default since v0.42.0)
- Tailwind/Windi CSS compatible utility classes
- Presets included:
  - `@unocss/preset-wind` - Tailwind utilities
  - `@unocss/preset-attributify` - Attributify syntax
  - `@unocss/preset-icons` - Iconify icon support
  - `@unocss/preset-web-fonts` - Font loading
  - `@unocss/transformer-directives` - @apply support

✓ **Grid & Layout Utilities**
```html
<!-- Two-column layout -->
<div class="grid grid-cols-2 gap-8">
  <div>Left content</div>
  <div>Right content</div>
</div>

<!-- Custom widths -->
<div class="grid grid-cols-[300px_1fr] gap-4">
  <div>Sidebar</div>
  <div>Main</div>
</div>

<!-- Responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Responsive columns -->
</div>
```

✓ **Responsive Utilities**
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Apply different styles at different screen sizes

### Scoped Styles (Per-Slide)

✓ **Slide-Level CSS**
- Use `<style scoped>` in markdown blocks
- Applies only to current slide
- Supports CSS nesting, @directives
- Example:
  ```markdown
  # My Slide

  <div class="custom-box">Content</div>

  <style scoped>
  .custom-box {
    @apply p-4 rounded-lg bg-blue-500;

    &:hover {
      @apply bg-blue-600;
    }
  }
  </style>
  ```

### Global Styles

✓ **Project-Wide Styling**
- Create `styles/` directory with CSS files
- Processed by UnoCSS and PostCSS
- CSS nesting and @directives supported
- Typical structure:
  ```
  styles/
  ├── main.css        # Global styles
  ├── colors.css      # Color palette
  ├── typography.css  # Font rules
  └── components.css  # Component styles
  ```

### Custom UnoCSS Configuration

✓ **uno.config.ts File**
- Customize preset configuration
- Define custom shortcuts
- Add custom themes/colors
- Extend color palettes

Example:
```typescript
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'btn-primary': 'px-4 py-2 rounded-lg bg-emerald-500 text-white',
    'card': 'rounded-lg border border-gray-200 p-4',
  },
  theme: {
    colors: {
      'expanso-dark': '#1a2332',
      'expanso-green': '#48BB78',
      'expanso-blue': '#4299e1',
    }
  }
})
```

### Windi CSS Alternative

✓ **Optional Legacy Support**
- Use Windi CSS instead of UnoCSS if needed
- Configured via: `css: windicss` in frontmatter
- Mostly compatible with UnoCSS

---

## 6. Best Practices for Technical Presentations

### Content Structure

✓ **Clear Section Organization**
- Use section dividers for topic transitions
- One topic per slide for focus
- Build complexity gradually

✓ **Code-First Approach**
- Markdown files in version control (git-friendly)
- Easy to diff and track changes
- Collaborative editing via GitHub/GitLab
- No binary file conflicts (unlike Figma)

✓ **Presenter Notes Discipline**
- Add comprehensive speaker notes in HTML comments
- Include: key points, timings, talking points, transitions
- Use for delivery consistency

### Design Consistency

✓ **Design System via CSS Variables**
```css
:root {
  /* Colors */
  --color-bg: #1a2332;
  --color-text-primary: #FFFFFF;
  --color-accent-green: #48BB78;

  /* Typography */
  --font-family: 'Inter', sans-serif;
  --font-size-title: 42px;
  --font-size-body: 18px;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-lg: 32px;
}
```

✓ **Reusable Component Library**
- Create MetricCard, CodeBlock, TimelineStep components
- Use consistently across slides
- Easy to update globally

✓ **Persona-Specific Variants**
- Create separate layout/component variants for audiences
- Use conditional rendering with Vue
- Maintain single source of truth for content

### Performance Optimization

✓ **Asset Management**
- Place assets in `public/` directory
- Use absolute paths or public URL references
- Optimize images (PNG/WebP for diagrams)
- Lazy-load videos and heavy components

✓ **Code Snippet Handling**
- Use syntax highlighting (Shiki integration)
- Keep code blocks focused and readable
- Link to full code in repositories when needed

### Interactive Elements

✓ **Click Animation Patterns**
- Use v-clicks for list reveals
- Use v-motion for data visualization builds
- Test keyboard navigation thoroughly
- Provide clear visual feedback for click states

✓ **Diagram Best Practices**
- Use Mermaid for flowcharts, sequences, dependencies
- Keep diagrams simple and legible
- Consider multiple variants for complex topics
- Test rendering at various zoom levels

---

## 7. Migration Path from Figma JSON Slides

### Translation Strategy

**From Current JSON Structure to Slidev:**

Your current slide structure:
```json
{
  "slide_id": "001",
  "frame_name": "Title Slide",
  "elements": [
    {
      "type": "text",
      "content": "Upstream Data Control",
      "styling": {"font-size": "42pt", "color": "#FFFFFF"}
    }
  ],
  "presentation_notes": "Opening statement about data costs"
}
```

Translates to Slidev markdown:
```markdown
---
layout: cover
---

# Upstream Data Control

Reducing cloud data costs by 50-70%

<!--
Opening statement about data costs.
Key point: Position as solution to major business problem.
Timing: 30 seconds
-->
```

**Key Mappings:**

| Figma JSON | Slidev Equivalent | Notes |
|-----------|------------------|-------|
| `slide_id` | Slide position in markdown | Sequential ordering |
| `frame_name` | Markdown heading or comment | For organization |
| `layout_zones` | Custom layout component | Named slots |
| `elements` array | Markdown + Vue components | Declarative markup |
| `design_system` colors | `uno.config.ts` theme | Global CSS variables |
| `presentation_notes` | HTML comments `<!-- -->` | Speaker notes |
| `persona_alignment` | Conditional Vue templates | v-if based on audience |
| Container styling | UnoCSS utility classes | @apply for custom |
| Animations | v-click/v-motion directives | Click-based reveals |
| Diagrams | Mermaid code blocks | Textual diagram syntax |

### Implementation Approach

1. **Create Slidev Project** with custom theme matching Expanso branding
2. **Migrate Content First** - Focus on markdown content structure
3. **Build Reusable Components** - MetricCard, LogoGrid, CodeBlock
4. **Add Styling** - Implement UnoCSS theme and custom layouts
5. **Enhance Interactivity** - Add animations using v-click/v-motion
6. **Test Presenter Mode** - Verify speaker notes and presentation flow
7. **Export & Deploy** - PDF for distribution, SPA for hosting

---

## 8. Recommended Packages & Plugins

### Core Dependencies

```json
{
  "dependencies": {
    "slidev": "^0.48.x",
    "@slidev/cli": "^0.48.x",
    "vue": "^3.3.x",
    "unocss": "^0.58.x"
  }
}
```

### Theme & Design

```json
{
  "@slidev/theme-seriph": "^0.15.x",  // or custom theme
  "tailwindcss": "^3.x",               // if not using UnoCSS
  "postcss": "^8.x"
}
```

### Addons & Integrations

| Addon | Purpose | Status |
|-------|---------|--------|
| `@slidev/addon-katex` | Math equations | Official |
| `@slidev/addon-mermaid` | Diagram support | Official |
| `slidev-addon-code-line-numbers` | Code highlighting | Community |
| `slidev-addon-drauu` | Drawing annotation | Community |
| `@vueuse/motion` | Motion animations | Built-in |
| `iconify-icon` | Icon library | Built-in |

### Development Tools

```json
{
  "devDependencies": {
    "typescript": "^5.x",
    "vite": "^5.x",
    "@unocss/cli": "^0.58.x",
    "playwright-core": "^1.40.x"  // for exports
  }
}
```

### Recommended Addons for Your Use Case

✓ **High Priority**
- Mermaid addon - For flowcharts, architecture diagrams
- KaTeX addon - For math/formulas in cost calculations
- Custom theme - Matches Expanso brand colors and typography

✓ **Nice-to-Have**
- Code line highlighting addon - For highlighting key code sections
- Drauu addon - For live annotation during presentations
- Recording addon - Built-in recording capability

✗ **Not Needed**
- PlantUML - Mermaid is sufficient
- Additional animation libraries - @vueuse/motion covers needs

---

## 9. What Slidev Can Do (Strengths)

✓ **Developer-Centric Presentations**
- Live code demos
- Interactive code editing with Monaco
- Version-controlled content

✓ **Technical Content**
- Complex diagrams (Mermaid)
- Math rendering (KaTeX)
- System architecture visualization

✓ **Customization**
- Unlimited layout freedom via Vue components
- Complete design system control
- Audience-specific variants

✓ **Interactivity**
- Click animations and motion effects
- Draggable elements
- Vue component integration
- Drawing/annotation tools

✓ **Content Reusability**
- Modular slide files
- Reusable components
- Template inheritance

✓ **Multi-Format Export**
- PDF, PPTX, PNG, SPA
- Speaker notes preserved in PPTX
- Presenter mode via web browser

✓ **Modern Web Stack**
- Fast build times (Vite)
- Hot module reloading during development
- Mobile-friendly responsive design

---

## 10. What Slidev Can't Do (Limitations)

✗ **Visual Design Tool Features**
- No drag-and-drop interface
- No pixel-perfect visual alignment UI
- No real-time collaborative editing (must use external tools)
- No live shape/object drawing in UI

✗ **Advanced Animations**
- Mermaid diagrams can't auto-reveal step-by-step
- Limited particle effects or complex transitions
- Custom animation scripting requires Vue knowledge

✗ **Asset Management**
- Relative asset paths break after build (use public/ instead)
- No built-in asset versioning
- Manual optimization required

✗ **Presenter Capabilities**
- No speaker notes while presenting locally (requires web presenter mode)
- Limited teleprompt features
- Timer less prominent than PowerPoint

✗ **Print/Export Limitations**
- PPTX export uses images (text not selectable)
- Complex animations lost in PDF/PPTX
- Chromium-based video support limitations

✗ **Accessibility Concerns**
- Steep learning curve for non-developers
- Requires Node.js >= 18.0
- Markdown-only editing (no visual alternative)
- Browser-based presentation (internet/server dependency)

---

## 11. Comparison: Current JSON Approach vs. Slidev

| Aspect | Current JSON | Slidev |
|--------|-------------|--------|
| **File Format** | JSON (proprietary) | Markdown + Vue + YAML |
| **Design Tool** | Figma (visual) | Code editor (text) |
| **Versioning** | Difficult (binary-like) | Excellent (git-friendly) |
| **Customization** | API-based (Figma) | Component-based (Vue) |
| **Deployment** | Custom hosting | Netlify/Vercel/GitHub Pages |
| **Interactive Elements** | Requires Figma plugin | Native support |
| **Speaker Notes** | In JSON structure | HTML comments |
| **Team Collaboration** | Figma workspace | Git workflow |
| **Learning Curve** | Figma UI familiarity | Markdown + Vue knowledge |
| **Export Options** | To Figma API | PDF, PPTX, PNG, SPA |
| **Presenter Mode** | None (external tool) | Built-in web-based |
| **Live Coding** | Not supported | First-class support |

---

## 12. Implementation Considerations

### Prerequisites for Your Team

✓ **Required Skills**
- Markdown writing (easy to learn)
- Basic HTML (for component templates)
- CSS fundamentals (for styling)
- Git/version control

✓ **Nice-to-Have**
- Vue 3 knowledge (for advanced components)
- UnoCSS/Tailwind familiarity (for styling)
- JavaScript (for interactive features)

### Project Structure Recommendation

```
expanso-slidev/
├── slides.md                    # Main entry point
├── uno.config.ts               # UnoCSS customization
├── vite.config.ts              # Build configuration
├── pages/                       # Modular slide sections
│   ├── 00-cover.md
│   ├── 01-intro.md
│   ├── 02-problem.md
│   ├── 03-solution.md
│   ├── 04-differentiators.md
│   ├── 05-demo.md
│   ├── 06-pricing.md
│   ├── 07-roadmap.md
│   └── 08-closing.md
├── layouts/                    # Custom layouts
│   ├── title.vue
│   ├── two-cols-metric.vue
│   ├── comparison.vue
│   └── testimonial.vue
├── components/                 # Reusable Vue components
│   ├── MetricCard.vue
│   ├── CodeBlock.vue
│   ├── LogoGrid.vue
│   ├── TimelineStep.vue
│   └── CostCalculator.vue
├── styles/                     # Global styles
│   ├── main.css
│   ├── colors.css
│   ├── typography.css
│   └── animations.css
├── public/                     # Static assets
│   ├── logos/
│   ├── diagrams/
│   ├── screenshots/
│   └── videos/
└── package.json
```

### Migration Effort Estimate

**Small presentation (10-15 slides):** 2-4 hours
**Medium presentation (20-30 slides):** 8-16 hours
**Large presentation (40+ slides with custom components):** 20-40 hours

*Includes: setup, content migration, styling, component creation, testing*

---

## 13. Decision Matrix: Should We Migrate?

### Migrate to Slidev If:

✓ Team has developers comfortable with Markdown/Vue
✓ Content includes code examples or technical diagrams
✓ Need version control and git-based workflows
✓ Want to eliminate Figma plugin dependencies
✓ Require interactive/dynamic elements
✓ Target audience includes technical professionals
✓ Plan to update content frequently

### Keep Current Approach If:

✗ Non-technical team maintains slides
✗ Require pixel-perfect visual design control
✗ Heavy reliance on Figma's visual collaboration
✗ Need drag-and-drop simplicity
✗ Primarily visual/design-focused presentations

### Hybrid Approach (Recommended):

- **Use Slidev** for: Technical presentations, code-heavy content, developer audiences
- **Keep Figma** for: Design mockups, brand asset management, executive decks
- **Migrate selectively** - Start with technical content, evaluate, then decide on full migration

---

## 14. Conclusion & Recommendations

### Summary

Slidev is a **powerful, developer-centric presentation platform** that would successfully replace your current JSON-based slide system. It offers superior customization, interactivity, and version control compared to traditional presentation tools.

### Key Advantages for Expanso:

1. **Markdown-First** - Version control and collaboration via git
2. **Custom Theming** - Perfect match for Expanso brand (Inter font, custom colors)
3. **Technical Content** - Mermaid diagrams, code integration, live demos
4. **Multi-Audience Support** - Component variants for technical/executive personas
5. **Modern Stack** - Built on Vue 3, Vite, UnoCSS
6. **Presenter Support** - Built-in speaker notes and presenter mode
7. **Flexible Export** - PDF, PPTX, PNG, and web SPA options

### Recommendations:

1. **Start with Pilot Project** - Migrate 1-2 key presentations to evaluate
2. **Build Component Library** - Create reusable components matching Expanso design
3. **Train Team** - Markdown + Vue fundamentals workshop
4. **Establish Workflow** - Git-based collaboration and CI/CD for exports
5. **Consider Hybrid** - Use Slidev for technical content, maintain Figma for design/strategy
6. **Plan Long-term** - Evaluate theme marketplace for future enhancements

### Risks to Mitigate:

- ⚠ Team skill gap (mitigate: training + documentation)
- ⚠ Animations complexity (mitigate: start simple, build gradually)
- ⚠ Export quality (mitigate: test exports early, adjust styling)

### Next Steps:

1. Create proof-of-concept Slidev presentation (2-3 hours)
2. Share with stakeholders for feedback
3. Build reusable component library
4. Establish style guide and best practices
5. Plan phased migration from Figma JSON

---

## References & Resources

**Official Documentation:**
- https://sli.dev/ - Main documentation
- https://sli.dev/guide/ - Getting started
- https://sli.dev/custom/ - Customization options
- https://sli.dev/resources/addon-gallery - Community addons

**Community Resources:**
- https://github.com/slidevjs/slidev - Source code and issues
- Discord community for real-time support
- Theme gallery for inspiration

**Related Tools:**
- UnoCSS: https://unocss.dev/ - Styling framework
- Mermaid: https://mermaid.js.org/ - Diagram syntax
- Vue 3: https://vuejs.org/ - Component framework
- Vite: https://vitejs.dev/ - Build tool

---

**Report Prepared By:** Research Agent
**Last Updated:** October 27, 2025
**Version:** 1.0
