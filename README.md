# Expanso Presentation Decks

Multi-deck presentation system for Expanso, built with Slidev and optimized for LLM-based slide generation.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Show help and list all available decks
npm run dev              # Shows error + help + deck list
npm run dev:list         # Same as above

# Build and preview the deck directory (IMPORTANT: Build first!)
npm run build:all        # Build all decks
npm run dev:index        # Preview built decks at http://localhost:3030

# Open a specific deck in dev mode
npm run dev:deck --deck=2025-11-01-sales-demo

# Build all decks for production
npm run build:all

# Build a specific deck
npm run build:deck --deck=2025-11-01-sales-demo
```

## 📁 Project Structure

```
/
├── README.md                          # You are here
├── index.html                         # Deck directory page (lists all decks)
├── package.json                       # Build configuration
├── slides/
│   ├── 2025-11-01-sales-demo.md      # Active sales demo deck
│   ├── archive-ascii/                 # Preserved ASCII slides
│   └── archive-legacy/                # Old deck structures
├── theme/
│   ├── theme-and-context.md          # Expanso theme configuration
│   ├── theme-config.json             # Theme settings
│   ├── components/                    # Vue components (GlowBackground, etc.)
│   ├── layouts/                       # Slide layouts (cover, center, two-cols, etc.)
│   └── styles/                        # Theme CSS
├── prompts/
│   ├── LLM_EVERGREEN_PROMPT.md       # Brand guidelines & viewport rules
│   └── VIEWPORT_CALCULATOR.md        # Pre-build size verification
├── docs/archive/                      # Documentation archive
├── scripts/
│   └── build-all-decks.js            # Multi-deck build script
├── .github/workflows/
│   └── deploy.yml                     # GitHub Pages deployment
└── dist/                              # Build output (gitignored)
    ├── index.html                     # Deck directory
    ├── 2025-11-01-sales-demo/         # Built deck 1
    └── [future-deck-slug]/            # Built deck 2, 3, etc.
```

## 📋 Key Documents

### 1. **prompts/LLM_EVERGREEN_PROMPT.md** (MUST READ)
Permanent brand guidelines and design rules including:
- **Viewport enforcement**: 850px hard limit, calculate BEFORE building
- Expanso brand voice & messaging (technical clarity without jargon)
- Visual design system (dark theme with purple accents)
- Target audience pain points
- Key metrics library (50-70% reduction, $1.77M savings, etc.)

### 2. **prompts/VIEWPORT_CALCULATOR.md**
Pre-build viewport verification system:
- Step-by-step height calculation checklist
- Formula for size reduction: `[(Total - 750) / Total × 100]%`
- Examples and common pitfalls
- **CRITICAL**: Always run before building

### 3. **theme/theme-and-context.md**
Theme configuration and component library:
- Available layouts (cover, center, two-cols, default)
- Custom components (GlowBackground)
- Typography scale and color system
- Layout best practices

## 🎨 Design System

### Colors
- **Primary**: Navy Blue (#0A1628) → Charcoal (#1A2332)
- **Accent**: Purple (#9A6BFF) with glow effects
- **Success**: Green (#4ADE80)
- **Text**: White (#FCFCFC), Light Gray (#D4D9E0), Medium Gray (#8A95A3)

### Typography
- **Font**: Inter (modern sans-serif, system fallbacks)
- **Headlines**: 3-4rem (48-64px), Semi-bold (600)
- **Subheadlines**: 1.5-2rem (24-32px), Medium (500)
- **Body**: 1-1.25rem (16-20px), Regular (400)
- **Code**: JetBrains Mono (monospace)

### Layout
- **Format**: 16:9 (960px × 720px Slidev viewport)
- **CRITICAL**: 850px max content height, 750-800px recommended
- **Viewport rule**: Calculate BEFORE building (see VIEWPORT_CALCULATOR.md)
- **Whitespace**: Generous padding, no cramming
- **Focal Points**: One clear message per slide

## 🎯 Current Decks

### 2025-11-01 Sales Demo
**File**: `slides/2025-11-01-sales-demo.md`  
**Status**: Active  
**Slides**: 22  

Comprehensive sales demonstration deck showcasing Expanso's data control platform with customer proof points, industry breadth, and technical architecture.

## 🛠️ Workflow

### Adding a New Deck

1. **List existing decks** to see examples:
   ```bash
   npm run dev:list
   ```

2. **Create markdown file** in `slides/` with naming pattern:
   ```
   slides/YYYY-MM-DD-deck-name.md
   ```

3. **Add frontmatter** at the top:
   ```yaml
   ---
   theme: ../theme
   class: text-center
   highlighter: shiki
   lineNumbers: false
   drawings:
     persist: false
   ---
   ```

4. **Write slides** using markdown + Slidev syntax:
   ```markdown
   # Slide Title
   
   Content here
   
   ---
   layout: two-cols
   ---
   
   # Two Column Slide
   
   ::left::
   Left content
   
   ::right::
   Right content
   ```

5. **Test locally**:
   ```bash
   npm run dev:deck --deck=YYYY-MM-DD-deck-name
   ```

6. **Update index.html** registry (lines 175-185):
   ```javascript
   const decks = [
       {
           date: 'YYYY-MM-DD',
           title: 'Deck Name',
           slug: 'YYYY-MM-DD-deck-name',
           description: 'Brief description',
           slides: 22,
           active: true
       }
   ];
   ```

7. **Build and verify**:
   ```bash
   npm run build:all
   npm run dev:index   # Preview the index page
   ```

### Editing Existing Slides

1. **Edit markdown file** in `slides/`
2. **Calculate viewport** (CRITICAL):
   - Follow `prompts/VIEWPORT_CALCULATOR.md`
   - Ensure max 850px total height
   - Reduce elements if needed
3. **Test locally with live reload**:
   ```bash
   npm run dev:deck --deck=2025-11-01-sales-demo
   ```
   This opens the deck in dev mode with hot reload (no build needed)

4. **Build and preview final result**:
   ```bash
   npm run build:all      # Build all decks
   npm run dev:index      # Preview deck directory
   ```

## 📦 Dependencies

- **@slidev/cli** ^0.49.0 - Presentation framework
- **@slidev/theme-default** ^0.25.0 - Base theme (customized)
- **Node.js** 20+ - Runtime environment

## 🎤 Keyboard Shortcuts (Slidev)

- `→` / `Space` - Next slide
- `←` - Previous slide
- `F` - Fullscreen
- `O` - Slide overview
- `D` - Dark mode toggle
- `C` - Camera (record presentation)
- `G` - Go to slide (type number)
- `?` - Show help

## 🚀 Deployment

### GitHub Pages (Automatic)

1. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Update presentation"
   git push origin main
   ```

3. **GitHub Actions will**:
   - Build all decks in `slides/*.md`
   - Generate deck directory page
   - Deploy to GitHub Pages
   - URL: `https://expanso-io.github.io/slide-code/`

### Local Build

```bash
# Build all decks
npm run build:all

# Output structure:
# dist/
#   ├── index.html (deck directory)
#   ├── 2025-11-01-sales-demo/ (deck 1)
#   └── [other-deck-slug]/ (deck 2, etc.)

# Serve locally to test
npx serve dist
```

## 📝 Brand Messaging Rules

### ✅ DO:
- Lead with measurable outcomes: "50-70% reduction", "$1.77M savings"
- Use active verbs: "Cut", "Filter", "Deploy", "Control"
- Name specific platforms: "Snowflake", "Databricks", "Splunk", "Datadog"
- Show before/after contrast with clear metrics
- Use technical clarity (no buzzwords)

### ❌ DON'T:
- Use marketing jargon or vague claims
- Say "significant savings" without numbers
- Use passive voice for key benefits
- Create villain narratives about competitors
- Promise perfection or 100% solutions

## 🔍 Quality Standards

Every slide must:
- [ ] **VIEWPORT CHECK**: Max 850px height (use VIEWPORT_CALCULATOR.md)
- [ ] Have one clear concept/message
- [ ] Include specific metrics when relevant
- [ ] Maintain generous whitespace (no cramming)
- [ ] Use consistent typography scale
- [ ] Meet WCAG AA contrast standards (4.5:1 minimum)
- [ ] Be readable in presenter view

## 📚 Additional Resources

- **Slidev Documentation**: https://sli.dev/
- **Theme Components**: See `theme/components/` for Vue components
- **Layout Reference**: See `theme/layouts/` for available layouts
- **Archived Decks**: See `slides/archive-legacy/` for historical files
- **ASCII Slides**: See `slides/archive-ascii/` for text-only versions

## 🤝 Contributing

When adding new decks or content:
1. Always check `prompts/LLM_EVERGREEN_PROMPT.md` first
2. **CRITICAL**: Run viewport calculation before building
3. Follow naming convention: `YYYY-MM-DD-deck-name.md`
4. Test locally with `npm run dev:deck`
5. Update `index.html` deck registry
6. Build and verify with `npm run build:all`

## 📧 Contact

**David Aronchick**, CEO
aronchick@expanso.io
www.expanso.io

---

**Last Updated**: November 1, 2025  
**Framework**: Slidev v0.49.29  
**Theme**: Expanso Custom Theme v1.0  
**Structure**: Multi-deck with automated builds
