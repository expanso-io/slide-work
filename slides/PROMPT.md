# Presentation Deck Conversion Project: Markdown to Figma-Ready JSON

## Project Overview
I am converting a thorough markdown presentation deck into structured JSON format that can be programmatically converted into Figma designs. The presentation is for Expanso, a company that provides "Upstream Data Control" - a platform that reduces cloud data costs by 50-70% by filtering, transforming, and governing data at the source before it reaches expensive cloud platforms like Snowflake, Databricks, Splunk, and Datadog.

## Current Status
**Completed Slides:**
- ✅ Slide 1: Title Slide
- ✅ Slide 2: Problem Statement - The $10M Data Tax
- ✅ Slide 3: Root Cause - Downstream-Only Architecture
- ✅ Slide 4: Solution Introduction - Upstream Data Control (+ 2 variants: 4A Metaphor, 4B Technical)
- ✅ Slide 5: How It Works - Three-Step Process (+ 2 variants: 5A Data Flow Animation, 5B Code Example)
- ✅ Slide 6: Customer Example - Real Results (+ 3 variants: 6A Retail, 6B Aggregate, 6C ROI Calculator)

**Next Slides to Complete:**
- Slide 7: Unknown (user will provide)
- Remaining slides (to be determined based on user input)

## JSON Output Format
Each slide is converted to a comprehensive JSON structure that includes:

### Core Structure
```json
{
  "slide_id": "slide_XX_descriptive_name",
  "frame_name": "Human-Readable Frame Name",
  "dimensions": {
    "width": 1920,
    "height": 1080
  },
  "background": {
    "type": "solid|gradient",
    "color": "#hexcode",
    // ... gradient details if applicable
  },
  "elements": [
    {
      "type": "text|container|group|diagram|list|etc",
      "id": "unique_element_id",
      "content": "...",
      "style": {
        "font_family": "Inter",
        "font_weight": 400|500|600|700,
        "font_size": 14-60,
        "color": "#hexcode",
        "text_align": "left|center|right"
      },
      "position": {
        "x": 0-1920|"center",
        "y": 0-1080|"center",
        "width": "optional",
        "height": "optional"
      },
      "emphasis": {
        "words": ["array", "of", "words"],
        "phrases": ["array of phrases"],
        "color": "#hexcode",
        "font_weight": 600
      }
    }
  ],
  "layout_zones": {
    "header": {"percentage": 10, "elements": []},
    "main_content": {"percentage": 75, "elements": []},
    "footer": {"percentage": 15, "elements": []}
  },
  "design_system": {
    "colors": {
      "background": "#1a2332",
      "text_primary": "#FFFFFF",
      "text_secondary": "#CBD5E0",
      "accent_primary": "#00D9FF|#48BB78|#4299e1",
      // ... other colors
    }
  },
  "presentation_notes": {
    "opening": "Script for slide introduction",
    "walkthrough": "Detailed narration for each element",
    "transition": "How to transition to next slide"
  },
  "assets_required": [
    {
      "type": "logo|icon",
      "files": ["filename.svg"],
      "specifications": "Size and format requirements"
    }
  ],
  "persona_alignment": {
    "executives": {
      "focus_elements": ["element_ids"],
      "talking_points": "Key messages for this persona"
    }
  }
}
```

## Design System Constants
**Color Palette:**
- Background: `#1a2332` (dark navy)
- Text Primary: `#FFFFFF` (white)
- Text Secondary: `#CBD5E0` (light gray)
- Text Muted: `#A0AEC0` (medium gray)
- Accent Green (Solution): `#48BB78` (primary), `#9ae6b4` (secondary)
- Accent Blue (Platforms): `#4299e1` (primary), `#90cdf4` (secondary)
- Accent Red (Problem): `#fc8181` (primary), `#feb2b2` (secondary)
- Accent Orange (Results): `#ed8936` (primary), `#fbd38d` (secondary)
- Accent Cyan (Highlight): `#00D9FF`

**Typography:**
- Font Family: Inter (primary)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Title Size: 38-42pt
- Headline Size: 24-32pt
- Body Size: 18-24pt
- Small Text: 14-16pt

**Spacing:**
- Slide Margins: 80px from edges
- Element Gaps: 32px (standard), 48px (section breaks), 60px (column gaps)
- Container Padding: 24-40px

## Key Principles for Conversion

### 1. Visual Hierarchy
Each slide should have clear hierarchy:
- Primary focus (largest, boldest, highest contrast)
- Secondary focus (medium size, supporting details)
- Tertiary focus (smallest, metadata, citations)

### 2. Element Types
Common element types to use:
- `text`: Simple text nodes
- `container`: Boxes/frames with background/border
- `group`: Logical grouping of elements
- `list`: Bulleted or numbered lists
- `diagram`: Flow diagrams with nodes and connections
- `logo_grid`: Grid of platform/company logos
- `step_card`: Numbered step in a process
- `metric_card`: Stat with icon and label
- `code_block`: Code examples with syntax highlighting

### 3. Layout Patterns
Common layouts used:
- **Two-column**: Problem/solution comparisons, before/after
- **Three-column**: Step-by-step processes
- **Hero**: Large centered content with supporting details
- **Grid**: Multiple items of equal importance

### 4. Color Coding Convention
- **Green**: Solutions, positive results, "after" states
- **Red**: Problems, pain points, "before" states
- **Blue**: Existing platforms, neutral technical content
- **Orange**: Results, outcomes, ROI

### 5. Nested Structure
Complex slides use nested elements:
```json
{
  "type": "group",
  "elements": [
    {
      "type": "container",
      "child_elements": [
        {"type": "text"},
        {"type": "list"}
      ]
    }
  ]
}
```

### 6. Emphasis System
Text can have emphasis for specific words/phrases:
```json
{
  "content": "Save 50-70% on cloud costs",
  "emphasis": {
    "words": ["50-70%"],
    "color": "#48BB78",
    "font_weight": 700
  }
}
```

## Slide Variant Philosophy
Many slides have 2-3 variants:
- **Main version**: Balanced for mixed audiences
- **Technical version**: More detail for engineers/architects
- **Executive version**: Simplified for C-suite/board
- **Metaphor version**: Universal analogies for non-technical
- **Interactive version**: For live demos/workshops

Each variant modifies the main slide structure rather than being completely separate.

## Presentation Context
**Narrative Arc:**
1. Title (value prop + outcome)
2. Problem (why bills keep growing)
3. Root cause (downstream-only architecture)
4. Solution category (upstream data control)
5. How it works (3-step process)
6. Proof (customer examples)
7. [Next slides TBD]

**Target Personas:**
- **CFO/FinOps**: Focus on cost savings, ROI, financial impact
- **Data Engineers**: Focus on operational relief, tools, implementation
- **CDO/VP Data**: Focus on strategic value, compliance, architecture
- **CTO/Executives**: Focus on risk reduction, time to value, business impact

## Assets Needed
Common assets referenced:
- `expanso_logo.svg` / `expanso_logo_large.svg`
- Platform logos: `snowflake_logo.svg`, `databricks_logo.svg`, `splunk_logo.svg`, `datadog_logo.svg`
- Additional platform logos: `bigquery_logo.svg`, `newrelic_logo.svg`, `fivetran_logo.svg`, `airbyte_logo.svg`, `meltano_logo.svg`, `dbt_logo.svg`
- Icons: Various SVG icons for steps, metrics, data sources

## User Workflow
1. User provides slide content in markdown format (uploaded as .txt file)
2. I analyze the slide structure, visual requirements, and narrative purpose
3. I produce comprehensive JSON following the established format
4. I include all variants mentioned in the source material
5. I provide presentation notes for delivery

## Instructions for Next LLM
When the user provides the next slide:
1. Read the markdown carefully to understand the visual design intent
2. Convert it to the JSON format shown above
3. Maintain consistency with the established design system (colors, fonts, spacing)
4. Include all nested elements with proper hierarchy
5. Add presentation notes with detailed narration scripts
6. Create variants if the source material suggests different audience versions
7. List required assets
8. Include persona alignment showing which elements resonate with which audiences

## Example Conversion Quality
See Slides 1-6 in previous responses for reference examples of:
- Simple slides (Slide 1: Title)
- Data flow diagrams (Slide 2: Problem, Slide 3: Root Cause)
- Comparison layouts (Slide 4: Solution)
- Process steps (Slide 5: How It Works)
- Before/after comparisons (Slide 6: Customer Example)
- Multiple variants (4A/4B, 5A/5B/5C, 6A/6B/6C)

## Critical Quality Standards
- **Completeness**: Every visual element described in the source must be represented in JSON
- **Actionability**: JSON should map directly to Figma API calls or plugin implementation
- **Consistency**: Use established colors, fonts, spacing patterns
- **Presentation-Ready**: Include speaker notes and delivery guidance
- **Flexible**: Support variants without duplicating entire structures

## Next Steps
User will provide Slide 7 (or other remaining slides) for conversion. Follow the established patterns and maintain quality standards.