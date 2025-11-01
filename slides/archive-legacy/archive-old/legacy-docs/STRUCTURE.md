# Document Organization Framework

## Overview
The raw_slides_markdown.md file (10,361 lines) contains a comprehensive sales deck with extensive supporting materials. This document outlines how we'll reorganize it into a structured directory system.

## Proposed Directory Structure

```
/deck/
├── slides/
│   ├── core/                    # Slides 1-9 (main presentation)
│   │   ├── 01-title.md
│   │   ├── 02-problem.md
│   │   ├── 03-root-cause.md
│   │   ├── 04-solution.md
│   │   ├── 05-product-intro.md
│   │   ├── 06-customer-proof.md
│   │   ├── 07-industry-breadth.md
│   │   ├── 08-process.md
│   │   └── 09-cta.md
│   └── backup/                  # Slides 10-17 (appendix/backup)
│       ├── 10-enterprise-readiness.md
│       ├── 11-pricing-roi.md
│       ├── 12-technical-architecture.md
│       ├── 13-competitive-comparison.md
│       ├── 14-customer-stories.md
│       ├── 15-roadmap.md
│       ├── 16-faq.md
│       └── 17-additional-backup.md
├── presentation/
│   ├── scripts/                 # Delivery scripts for each slide
│   │   ├── opening-script.md
│   │   ├── slide-transitions.md
│   │   └── closing-script.md
│   ├── timing/
│   │   ├── 15-min-executive.md
│   │   ├── 30-min-standard.md
│   │   ├── 45-min-deep-dive.md
│   │   └── board-presentation.md
│   └── audience-variants/       # Audience-specific adaptations
│       ├── technical-audience.md
│       ├── executive-audience.md
│       ├── cfo-finops.md
│       └── data-engineering.md
├── competitive/
│   ├── overview.md              # Competitive landscape
│   ├── cribl-comparison.md
│   ├── fivetran-comparison.md
│   ├── monte-carlo-comparison.md
│   ├── battle-cards.md
│   └── tco-analysis.md
├── objections/
│   ├── objection-handling.md    # Master objection list
│   ├── pricing-objections.md
│   ├── competitive-objections.md
│   ├── technical-objections.md
│   └── timing-objections.md
├── personas/
│   ├── icp-definition.md        # Ideal Customer Profile
│   ├── cfo-persona.md
│   ├── data-engineer-persona.md
│   ├── cdo-vp-data-persona.md
│   └── cto-executive-persona.md
├── proof-points/
│   ├── customer-stories/
│   │   ├── fintech-case.md
│   │   ├── healthcare-case.md
│   │   ├── retail-case.md
│   │   └── manufacturing-case.md
│   ├── roi-calculations.md
│   └── industry-stats.md
├── design/
│   ├── design-system.md         # Colors, fonts, spacing
│   ├── visual-patterns.md       # Common layout patterns
│   └── asset-requirements.md    # Logos, icons needed
└── usage-guides/
    ├── deck-strategy.md         # When to use which slides
    ├── leave-behind-materials.md
    ├── sales-enablement.md
    └── follow-up-materials.md
```

## Content Categories Identified

### 1. **Slide Content** (~7,200 lines)
- 17 complete slides with visual specifications
- Multiple variants per slide (technical/executive/metaphor)
- Design notes and layout specifications

### 2. **Presentation Scripts** (~800 lines)
- Opening lines for each slide
- Transition scripts between slides
- Closing statements
- Pause timing and delivery notes

### 3. **Objection Handling** (~600 lines)
- Built-in objections per slide
- Standalone objection handling frameworks
- Response scripts
- Defensive positioning

### 4. **Competitive Analysis** (~900 lines)
- Cribl, Fivetran, Monte Carlo, dbt comparisons
- TCO calculations
- Win/loss analysis
- Complementary positioning

### 5. **Persona/ICP Content** (~400 lines)
- Target audience definitions
- Persona-specific focus elements
- When to use audience variants

### 6. **Usage Guides** (~500 lines)
- Deck timing strategies (15/30/45 min)
- Which slides for which audiences
- Follow-up materials
- Sales enablement guidance

### 7. **Design System** (~300 lines)
- Color palettes
- Typography specifications
- Spacing rules
- Visual hierarchy

### 8. **Proof Points** (~700 lines)
- Customer case studies
- Industry statistics
- ROI calculations
- Credibility citations

## Extraction Order

1. ✅ Create directory structure
2. Extract core slides (1-9)
3. Extract backup slides (10-17)
4. Extract presentation scripts
5. Extract competitive analysis
6. Extract objection handling
7. Extract persona/ICP content
8. Extract design system
9. Extract proof points
10. Extract usage guides
11. Clean up original document (delete extracted sections)
