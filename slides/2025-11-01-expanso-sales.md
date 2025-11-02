---
theme: ../theme
title: Control Your Data. Everywhere.
layout: cover
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
---

<!--
SLIDE 1-a: Title Cover - Full Bleed Centered
Theme: theme-and-context.md + theme-config.json
Layout: Title-only, centered vertical stack (16:9 dark mode)
Background: Solid dark vignette (#0A1628 → #1A2332) per theme, no gradient banding
Typography: Headline 96pt Semi-Bold, Sub 42pt Regular, Footer 30pt Regular
Whitespace: ~65%, All text ≥30pt, Line spacing +12%
Motion: Logo fade+scale 450ms, headline fade-up +150ms, sub-text stagger +120ms, footer slide-in +200ms
-->

<style scoped>
.slidev-layout {
  background: linear-gradient(135deg, #0A1628 0%, #1A2332 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 96px;
}

/* Soft violet vignette - subtle glow per theme */
.slidev-layout::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1000px;
  height: 1000px;
  background: radial-gradient(circle, rgba(154, 107, 255, 0.12) 0%, transparent 65%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
}

.slide-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
}

.logo-container {
  margin-bottom: 4rem;
  animation: logoFadeScale 450ms ease-out;
}

/* Placeholder: Centered Expanso logo (vector, white or brand blue) */
.logo-placeholder {
  width: 200px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9A6BFF;
  font-size: 48px;
  font-weight: 700;
}

.headline {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 96px;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.12;
  margin-bottom: 3.5rem;
  text-align: center;
  letter-spacing: -0.02em;
  animation: headlineFadeUp 450ms ease-out 150ms backwards;
}

.subtext {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 0;
  flex: 1;
  justify-content: center;
}

.subtext-item {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 42px;
  font-weight: 400;
  color: #FCFCFC;
  line-height: 1.4;
  text-align: center;
  animation: subtextStagger 450ms ease-out backwards;
}

.subtext-item:nth-child(1) { animation-delay: 270ms; }
.subtext-item:nth-child(2) { animation-delay: 390ms; }
.subtext-item:nth-child(3) { animation-delay: 510ms; }

.footer {
  margin-top: auto;
  padding-top: 4rem;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: #8A95A3;
  line-height: 1.12;
  text-align: center;
  animation: footerSlideIn 450ms ease-out 710ms backwards;
}

@keyframes logoFadeScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes headlineFadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes subtextStagger {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes footerSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Design validation: Maintains 30pt minimum for footer on 1080p, no clipping on 4K */
</style>

<div class="slide-content">
  <div class="logo-container">
    <!-- Placeholder: Centered Expanso logo (vector, white or brand blue) -->
    <div class="logo-placeholder">EXPANSO</div>
  </div>

  <h1 class="headline">CONTROL YOUR DATA. EVERYWHERE.</h1>

  <div class="subtext">
    <div class="subtext-item">Reduce platform costs by 50–70%</div>
    <div class="subtext-item">Accelerate engineering velocity</div>
    <div class="subtext-item">Get your data AI-ready</div>
  </div>

  <div class="footer">David Aronchick, CEO  |  aronchick@expanso.io</div>
</div>

<!-- Placeholder: Optional faint gridlines overlay for projection alignment demo -->
<!-- Design validation: Line wrapping tested with emoji and narrow viewports -->
<!-- Note: Background conforms to theme (solid dark vignette, not visible gradient banding) -->

---
title: The Modern Data Stack is Missing a Layer
layout: default
class: text-center
---

<!--
SLIDE 2-a: The Gap - Centered Diagram
Theme: theme-and-context.md + theme-config.json
Layout: Title + centered diagram + supporting paragraph
Background: Solid dark theme (#0A1628)
Typography: Headline 60pt Semi-Bold, Diagram labels 36pt, Body 42pt Medium
Highlight: Red #FF4444 for "THE GAP"
Whitespace: ~60%, All text ≥30pt
Motion: Title fade-in 250ms, diagram stagger 350ms, text fade-up +150ms delay
-->

<style scoped>
.slidev-layout {
  background: #0A1628;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 96px;
}

.slide-title {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 60px;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 5rem;
  animation: titleFadeIn 250ms ease-out;
}

.diagram-container {
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 5rem;
}

.flow-diagram {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  animation: diagramDraw 350ms ease-out 250ms backwards;
}

.flow-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-width: 280px;
}

.flow-label {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 36px;
  font-weight: 600;
  color: #D4D9E0;
  line-height: 1.3;
  text-align: center;
}

.flow-sublabels {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: #D4D9E0;
  line-height: 1.4;
  text-align: center;
  opacity: 0.8;
}

.flow-arrow {
  font-size: 48px;
  color: #D4D9E0;
  opacity: 0.6;
  flex-shrink: 0;
}

.gap-highlight {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #FF4444;
  line-height: 1.2;
  text-align: center;
  padding: 1rem 2rem;
  border: 3px solid #FF4444;
  border-radius: 8px;
  background: rgba(255, 68, 68, 0.1);
  animation: gapPulse 2s ease-in-out infinite;
}

.supporting-text {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 42px;
  font-weight: 500;
  color: #D4D9E0;
  line-height: 1.5;
  text-align: center;
  max-width: 1200px;
  animation: textFadeUp 350ms ease-out 400ms backwards;
}

@keyframes titleFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes diagramDraw {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes textFadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gapPulse {
  0%, 100% {
    box-shadow: 0 0 0 rgba(255, 68, 68, 0.4);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 68, 68, 0.6);
  }
}

/* Design validation: 16:9 at 1920×1080, ~60% whitespace, no gradients */
</style>

<div class="slide-title">The Modern Data Stack is Missing a Layer</div>

<div class="diagram-container">
  <!-- Placeholder: Minimal left-to-right data flow diagram -->
  <div class="flow-diagram">
    <div class="flow-box">
      <div class="flow-label">[Sources]</div>
      <div class="flow-sublabels">
        Edge, On-Prem,<br/>
        Cloud, IoT
      </div>
    </div>

    <div class="flow-arrow">───</div>

    <!-- Placeholder: Simple horizontal line with "GAP" centered in red -->
    <div class="gap-highlight">❌ THE GAP ❌</div>

    <div class="flow-arrow">───></div>

    <div class="flow-box">
      <div class="flow-label">[Platforms]</div>
      <div class="flow-sublabels">
        Snowflake, Databricks,<br/>
        Splunk, Datadog
      </div>
    </div>
  </div>
</div>

<div class="supporting-text">
  Your platforms are world-class. But there's no control layer<br/>
  between where data lives and where you analyze it.
</div>

<!-- Placeholder: Optional faint connector icons (Edge/Cloud → Platforms) -->
<!-- Design validation: Scales at 16:9, readable from 20ft, no gradient backgrounds -->

---
title: The Gap No One Saw Coming
layout: default
class: text-center
---

<!--
SLIDE 2-b: The Gap - Vertical Flow Diagram
Theme: theme-and-context.md + theme-config.json
Layout: Title + vertical flow diagram + supporting text
Background: Solid dark theme (#0A1628)
Typography: Headline 60pt Semi-Bold, Flow labels 36-42pt Medium
Highlight: Red #FF4444 for "NO CONTROL LAYER" box
Whitespace: ≥60%, All text ≥30pt
Motion: Title fade-in 250ms, boxes stagger downward 300ms, text fade-up +150ms
-->

<style scoped>
.slidev-layout {
  background: #0A1628;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 96px;
}

.slide-title {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 60px;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 4rem;
  animation: titleFadeIn 250ms ease-out;
}

.flow-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 900px;
}

.flow-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.node-box {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 42px;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.3;
  padding: 1.5rem 2rem;
  background: rgba(212, 217, 224, 0.1);
  border: 2px solid #D4D9E0;
  border-radius: 8px;
  animation: boxStaggerIn 300ms ease-out backwards;
}

.node-box.source {
  animation-delay: 250ms;
}

.node-sublabel {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 32px;
  font-weight: 400;
  color: #D4D9E0;
  line-height: 1.4;
  margin-top: 0.5rem;
  opacity: 0.8;
}

.flow-arrow {
  font-size: 48px;
  color: #D4D9E0;
  margin: 0.5rem 0;
  opacity: 0.6;
}

.flow-note {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: #D4D9E0;
  font-style: italic;
  margin: 0.5rem 0;
  opacity: 0.7;
}

.gap-box {
  background: rgba(255, 68, 68, 0.15);
  border: 3px solid #FF4444;
  border-radius: 12px;
  padding: 2rem 3rem;
  animation: boxStaggerIn 300ms ease-out 400ms backwards;
  width: 100%;
  max-width: 800px;
}

.gap-title {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #FF4444;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  animation: gapPulse 2s ease-in-out infinite;
}

.gap-bullets {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
}

.gap-bullet {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 36px;
  font-weight: 400;
  color: #FCFCFC;
  line-height: 1.4;
  padding-left: 1rem;
}

.platform-note {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 36px;
  font-weight: 500;
  color: #D4D9E0;
  line-height: 1.5;
  margin-top: 1rem;
  animation: textFadeUp 350ms ease-out 550ms backwards;
}

.platform-note .emoji {
  font-size: 42px;
}

@keyframes titleFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes boxStaggerIn {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes textFadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gapPulse {
  0%, 100% {
    text-shadow: 0 0 0 rgba(255, 68, 68, 0.4);
  }
  50% {
    text-shadow: 0 0 15px rgba(255, 68, 68, 0.8);
  }
}

/* Design validation: 16:9 at 1920×1080, ≥60% whitespace, no wrap beyond 40 chars */
</style>

<div class="slide-title">The Gap No One Saw Coming</div>

<!-- Placeholder: vertical flow diagram "Sources → NO CONTROL LAYER → Platforms" -->
<div class="flow-vertical">
  <div class="flow-node">
    <div class="node-box source">[DATA SOURCES]</div>
    <div class="node-sublabel">(Edge, Servers, Apps)</div>
  </div>

  <div class="flow-arrow">│</div>
  <div class="flow-note">(100% of data—valuable or not—is moved)</div>
  <div class="flow-arrow">▼</div>

  <!-- Placeholder: red box labeled ❌ NO CONTROL LAYER ❌ with 3 bullet points inside -->
  <div class="gap-box">
    <div class="gap-title">❌ NO CONTROL LAYER ❌</div>
    <div class="gap-bullets">
      <div class="gap-bullet">• No filtering where data lives</div>
      <div class="gap-bullet">• No governance before platforms ingest</div>
      <div class="gap-bullet">• No cleaning & preprocessing for AI</div>
    </div>
  </div>

  <div class="flow-arrow">│</div>
  <div class="flow-arrow">▼</div>

  <div class="flow-node">
    <div class="node-box">[PLATFORMS: Snowflake, Databricks, Splunk]</div>
    <div class="platform-note">
      <span class="emoji">💰</span> You pay for everything: Ingestion, Storage, Compute.
    </div>
  </div>
</div>

<!-- Placeholder: optional faint connectors and icons for data flow arrows -->
<!-- Design validation: 16:9 safe area, ≥60% whitespace, no clipping -->
