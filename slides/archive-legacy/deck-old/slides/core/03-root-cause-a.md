# LLM Prompt: Expanso Slide 3 - Root Cause (Sales Deck - Reveal.js)

Generate a professional presentation slide for Reveal.js with the following exact specifications:

## SLIDE SPECIFICATIONS

  - **Format**: 16:9 widescreen presentation slide (1920px × 1080px)
  - **Safe margins**: 80px from all edges
  - **Purpose**: Diagnose the architectural root cause to set up the need for a new approach
  - **Framework**: Reveal.js HTML/CSS slide

## BACKGROUND

Consistent with previous slides:

  - Deep navy blue (`#0A1628`) to dark charcoal (`#1A2332`) diagonal gradient at a 135° angle.
  - Subtle noise texture at 3% opacity.
  - **Optional**: Very subtle data flow lines (`0.5px`, white at 4% opacity) on the right side.

## CONTENT ELEMENTS

### 1\. HEADLINE (Top, Left-Aligned)

  - **Text**: `The Missing Layer`
  - **Typography**:
      - **Font**: Modern sans-serif (Inter Bold, Helvetica Neue Bold, or SF Pro Display Bold)
      - **Weight**: Bold (700)
      - **Size**: 60pt (80px)
      - **Color**: Pure white (`#FFFFFF`)
      - **Letter spacing**: -1%
      - **Line height**: 1.1
  - **Position**:
      - **Horizontal**: 80px from left edge
      - **Vertical**: 100px from top edge
  - **Design Rationale**:
      - Short and punchy.
      - Left-aligned to maintain energy from Slide 2.
      - Sets up "what's missing" without being defensive.

### 2\. CONTEXT STATEMENT (Below Headline)

  - **Text**:
    > For decades, best practice was simple:
    > **Collect everything → Move centrally → Process there.**
    > When volumes were small, this worked.
    > Today? It's \<span style="color:\#00D9FF;"\>bankrupting enterprises.\</span\>
  - **Typography**:
      - **Font**: Same sans-serif, Regular weight (400)
      - **Size**: 30pt (40px)
      - **Color**: Light gray (`#D4D9E0`)
      - **Line height**: 1.5
  - **Special Formatting**:
      - `"Collect everything → Move centrally → Process there"` in a slightly bolder weight (500).
      - `"bankrupting enterprises"` in cyan (`#00D9FF`) for emphasis.
  - **Position**:
      - **Horizontal**: 80px from left edge
      - **Vertical**: 200px from top edge
      - **Maximum width**: 1000px

### 3\. PRIMARY VISUAL: ARCHITECTURE GAP DIAGRAM (Center)

A three-tier architecture diagram showing the missing control layer.

#### Tier 1: Sources (Top)

```
┌─────────────────────┐
│   DATA SOURCES      │
│ Edge • Cloud • Apps │
└─────────────────────┘
```

  - **Box Specifications**: 500px width, 100px height; 2px solid light gray (`#B8BFC7`) border; Semi-transparent dark (`#1A2332` at 40% opacity) background.
  - **Text**: 28pt, white, centered.
  - **Position**: Centered horizontally, 420px from top.

#### Tier 2: The Gap (Middle - KEY ELEMENT)

```
         ↓
┌──────────────────────────────┐
│  ❌ NO CONTROL LAYER         │ ← THE PROBLEM
│  • No filtering              │
│  • No optimization           │
│  • No governance             │
│                              │
│  Everything moves downstream │
└──────────────────────────────┘
         ↓
```

  - **Box Specifications**: 600px width, 200px height; 3px solid warning red/orange (`#FF6B35`) border; Semi-transparent red (`#FF6B35` at 15% opacity) background.
  - **Position**: Centered horizontally, 560px from top.
  - **Content**:
      - **"❌ NO CONTROL LAYER"**: 36pt, bold, white, at the top of the box.
      - **Arrow indicator**: `← THE PROBLEM` - 28pt, regular, cyan (`#00D9FF`).
      - **Bullets**: 26pt, regular, light gray (`#D4D9E0`), simple dot style.
      - **Final line**: `"Everything moves downstream"` - 28pt, italic, white.

#### Tier 3: Platforms (Bottom)

```
┌─────────────────────┐
│ EXPENSIVE PLATFORMS │
│ 💰 💰 💰 💰        │
└─────────────────────┘
```

  - **Box Specifications**: 500px width, 120px height; 2px solid light gray (`#B8BFC7`) border; Semi-transparent dark (`#1A2332` at 40% opacity) background.
  - **Text**: 28pt, white, centered.
  - **Position**: Centered horizontally, 820px from top.
  - **Dollar signs**: 4 icons (💰), 42pt each, bright yellow/gold (`#FFD700`), spaced 30px apart.

#### Arrows between tiers:

  - **Style**: Bold downward arrows, 10px width, 40px length.
  - **Color**: White (`#FFFFFF`).
  - **Position**: Centered between each tier.

### 4\. BOTTOM STATEMENT (Below Diagram)

  - **Text**: By the time information reaches platforms, the \<span style="color:\#00D9FF;"\>financial damage\</span\> is done.
  - **Typography**:
      - **Font**: Same sans-serif, Medium weight (500)
      - **Size**: 36pt (48px)
      - **Color**: White (`#FFFFFF`) with "financial damage" in cyan (`#00D9FF`).
      - **Line height**: 1.3
  - **Position**:
      - **Horizontal**: Centered on slide
      - **Vertical**: 980px from top edge
      - **Maximum width**: 1400px
      - **Alignment**: Center-aligned

## LAYOUT STRUCTURE

  - **Visual Hierarchy**:
    1.  **Headline**: "The Missing Layer" (establishes frame)
    2.  **Context**: Why the old approach fails
    3.  **Diagram**: Visual proof of the architectural gap (focal point)
    4.  **Bottom statement**: Consequence of the gap (urgency)
  - **Whitespace**:
      - \~50% of the slide is empty space.
      - Clear separation between text elements and the diagram.
      - Generous margins (80px on all sides).

## REVEAL.JS SPECIFIC REQUIREMENTS

  - **HTML Structure**:
    ```html
    <section data-background-gradient="linear-gradient(135deg, #0A1628 0%, #0F1E2E 50%, #1A2332 100%)">
      <h2 style="text-align: left; margin-left: 80px;">The Missing Layer</h2>
      <p class="context-text">...</p>
      <div class="architecture-diagram">
        </div>
      <p class="bottom-statement">...</p>
    </section>
    ```
  - **CSS Classes Needed**:
      - `.context-text`: 30pt, light gray, max-width 1000px
      - `.architecture-diagram`: Flexbox container, centered, vertical stack
      - `.tier-box`: Border, background, padding specifications
      - `.gap-box`: Warning styling (red border, red tint background)
      - `.bottom-statement`: 36pt, centered, emphasis styling
  - **Fragment Animation (Optional)**:
    ```html
    <div class="fragment fade-in" data-fragment-index="1"></div>
    <div class="fragment fade-in" data-fragment-index="2"></div>
    <div class="fragment fade-in" data-fragment-index="3"></div>
    <div class="fragment fade-in" data-fragment-index="4"></div>
    <div class="fragment fade-in" data-fragment-index="5"></div>
    ```

## WHAT NOT TO INCLUDE

  - Platform-specific logos (Snowflake, Databricks, etc.).
  - Multiple competing diagrams.
  - "Then vs. Now" comparison boxes.
  - Text smaller than 26pt.
  - Defensive language about past decisions.
  - Criticism of specific tools or vendors.
  - Word repetition from previous slides ("drowning", "garbage", "control your data").

## DESIGN PRINCIPLES

  - **Clarity**: The diagram should be instantly readable (3-second comprehension). The architectural gap is visually obvious.
  - **Emphasis**: The red/orange warning color on the gap box signals the problem. Dollar signs reinforce the cost consequence.
  - **Simplicity**: One diagram, one concept. Minimal text and clean geometric shapes.

## ACCESSIBILITY

  - All text meets WCAG AAA contrast standards (7:1 minimum).
  - The diagram uses color, text, and position to convey meaning.
  - Clear reading order.
  - **Alt text for diagram**: `"Architecture diagram showing data flowing from sources through a missing control layer to expensive platforms."`

## OUTPUT FORMAT

  - **For Reveal.js**: Provide HTML structure with inline styles or CSS classes, background gradient, and optional fragments.
  - **For Static Export**: High-resolution PNG (3840 × 2160px) or PDF, sRGB color profile, under 5MB.
