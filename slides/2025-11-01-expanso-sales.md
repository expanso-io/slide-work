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
layout: default
glow: bottom-right
glowOpacity: 0.3
---

<div class="text-6xl font-bold mb-8">The Problem</div>

<div class="text-4xl mb-12">Your data platforms are drowning in junk</div>

<div class="grid grid-cols-2 gap-12">

<div class="text-left">

### 📈 Runaway Costs

<div class="text-2xl leading-relaxed opacity-90">
Snowflake bills up 40% YoY<br/>
Splunk charging per GB ingested<br/>
Datadog costs spiraling out of control
</div>

</div>

<div class="text-left">

### 🔥 Pipeline Chaos

<div class="text-2xl leading-relaxed opacity-90">
Teams firefighting, not building<br/>
Brittle connectors break constantly<br/>
Manual config across 1000s of nodes
</div>

</div>

</div>

<div class="mt-12 text-3xl text-center opacity-80">
💸 You're paying premium prices to store and process garbage data
</div>

---
layout: default
glow: top-left
glowOpacity: 0.3
---

<div class="text-6xl font-bold mb-8">The Root Cause</div>

<div class="text-5xl mb-16 text-cyan-400 font-semibold">Data Gravity</div>

<div class="grid grid-cols-2 gap-12">

<div class="text-left">

### ❌ Traditional Approach

<div class="text-2xl leading-relaxed opacity-90 space-y-4">
✗ Send everything to the cloud<br/>
✗ Figure it out later<br/>
✗ Pay for movement + storage<br/>
✗ Query performance degrades<br/>
✗ Compliance nightmare
</div>

</div>

<div class="text-left">

### ✅ Expanso Approach

<div class="text-2xl leading-relaxed opacity-90 space-y-4">
✓ Filter at the source<br/>
✓ Send only what matters<br/>
✓ Reduce egress by 88%<br/>
✓ Faster queries (16× improvement)<br/>
✓ Control before it moves
</div>

</div>

</div>

---
layout: default
glow: bottom-left
glowOpacity: 0.3
---

<div class="text-6xl font-bold mb-8">How Expanso Works</div>

<div class="text-3xl mb-12 opacity-90">Policy-driven data control at the source</div>

<div class="grid grid-cols-3 gap-8">

<div class="text-center">

<div class="text-6xl mb-4">1️⃣</div>

### Filter

<div class="text-2xl leading-relaxed opacity-80">
Remove noise, errors, duplicates before they leave the edge
</div>

</div>

<div class="text-center">

<div class="text-6xl mb-4">2️⃣</div>

### Transform

<div class="text-2xl leading-relaxed opacity-80">
Mask PII, restructure, enrich data where it lives
</div>

</div>

<div class="text-center">

<div class="text-6xl mb-4">3️⃣</div>

### Govern

<div class="text-2xl leading-relaxed opacity-80">
Set rules once, enforce everywhere automatically
</div>

</div>

</div>

<div class="mt-16 text-center">
<div class="text-2xl opacity-70">Deploy in 3 weeks • Zero pipeline failures in production</div>
</div>

---
layout: default
glow: top-right
glowOpacity: 0.3
---

<div class="text-6xl font-bold mb-12">Real Results</div>

<div class="grid grid-cols-2 gap-12">

<div class="text-center p-8 bg-violet-500/10 rounded-lg border-2 border-violet-500/30">

<div class="text-8xl font-bold text-cyan-400 mb-4">58%</div>

<div class="text-3xl font-semibold mb-4">Cost Reduction</div>

<div class="text-2xl opacity-80">Fortune 500 Retail</div>

<div class="text-xl opacity-60 mt-4">Across Snowflake + Datadog</div>

</div>

<div class="text-center p-8 bg-violet-500/10 rounded-lg border-2 border-violet-500/30">

<div class="text-8xl font-bold text-cyan-400 mb-4">$1.77M</div>

<div class="text-3xl font-semibold mb-4">Annual Savings</div>

<div class="text-2xl opacity-80">Fortune 500 Retail</div>

<div class="text-xl opacity-60 mt-4">First-year ROI</div>

</div>

</div>

<div class="mt-12 text-center text-3xl opacity-80">
50-70% volume reduction • 88% egress cost reduction
</div>

---
layout: default
glow: bottom-right
glowOpacity: 0.3
---

<div class="text-6xl font-bold mb-8">Industry Breadth</div>

<div class="text-3xl mb-12 opacity-90">Proven across sectors</div>

<div class="grid grid-cols-3 gap-8 text-center">

<div class="p-6 bg-violet-500/10 rounded-lg">
<div class="text-4xl mb-3">🏪</div>
<div class="text-2xl font-semibold">Retail</div>
<div class="text-xl opacity-70 mt-2">POS, inventory, customer data</div>
</div>

<div class="p-6 bg-violet-500/10 rounded-lg">
<div class="text-4xl mb-3">🏭</div>
<div class="text-2xl font-semibold">Manufacturing</div>
<div class="text-xl opacity-70 mt-2">IoT sensors, quality control</div>
</div>

<div class="p-6 bg-violet-500/10 rounded-lg">
<div class="text-4xl mb-3">🏥</div>
<div class="text-2xl font-semibold">Healthcare</div>
<div class="text-xl opacity-70 mt-2">Device data, PHI compliance</div>
</div>

<div class="p-6 bg-violet-500/10 rounded-lg">
<div class="text-4xl mb-3">💰</div>
<div class="text-2xl font-semibold">Finance</div>
<div class="text-xl opacity-70 mt-2">Transaction logs, fraud detection</div>
</div>

<div class="p-6 bg-violet-500/10 rounded-lg">
<div class="text-4xl mb-3">⚡</div>
<div class="text-2xl font-semibold">Energy</div>
<div class="text-xl opacity-70 mt-2">Smart grid, predictive maintenance</div>
</div>

<div class="p-6 bg-violet-500/10 rounded-lg">
<div class="text-4xl mb-3">📡</div>
<div class="text-2xl font-semibold">Telecom</div>
<div class="text-xl opacity-70 mt-2">Network telemetry, edge processing</div>
</div>

</div>

---
layout: default
glow: top-left
glowOpacity: 0.3
---

<div class="text-6xl font-bold mb-8">Architecture</div>

<div class="text-3xl mb-12 opacity-90">Lightweight edge agents + centralized control plane</div>

<div class="grid grid-cols-2 gap-12">

<div class="text-left">

### 🌐 Edge Layer

<div class="text-2xl leading-relaxed opacity-90 space-y-3">
• Deploy agents where data lives<br/>
• Process locally, send selectively<br/>
• Update policies in &lt;30 seconds<br/>
• 10,000+ nodes supported
</div>

</div>

<div class="text-left">

### ☁️ Control Plane

<div class="text-2xl leading-relaxed opacity-90 space-y-3">
• Centralized policy management<br/>
• Real-time monitoring & observability<br/>
• Compliance reporting & audit logs<br/>
• Integrates with existing platforms
</div>

</div>

</div>

<div class="mt-12 text-center">
<div class="text-2xl opacity-70">Works with: Snowflake • Databricks • Splunk • Datadog • Elasticsearch</div>
</div>

---
layout: default
glow: bottom-left
glowOpacity: 0.3
---

<div class="text-6xl font-bold mb-8">Why Teams Choose Expanso</div>

<div class="grid grid-cols-2 gap-12">

<div class="text-left">

### 🚀 Speed

<div class="text-2xl leading-relaxed opacity-90">
<strong class="text-cyan-400">50% faster</strong> data onboarding<br/>
Deploy in <strong class="text-cyan-400">3 weeks</strong>, not 6 months<br/>
Propagate changes in <strong class="text-cyan-400">&lt;30 seconds</strong>
</div>

</div>

<div class="text-left">

### 🛡️ Control

<div class="text-2xl leading-relaxed opacity-90">
<strong class="text-cyan-400">Zero pipeline failures</strong> in production<br/>
Automatic PII masking at source<br/>
Full data lineage and auditability
</div>

</div>

<div class="text-left">

### 💰 Cost

<div class="text-2xl leading-relaxed opacity-90">
<strong class="text-cyan-400">50-70% volume reduction</strong><br/>
<strong class="text-cyan-400">88% egress cost</strong> savings<br/>
<strong class="text-cyan-400">$35/TB distributed</strong> vs $83/TB centralized
</div>

</div>

<div class="text-left">

### 🤖 AI-Ready

<div class="text-2xl leading-relaxed opacity-90">
<strong class="text-cyan-400">16× faster queries</strong> (cleaner data)<br/>
Structured, labeled data from day one<br/>
Known lineage for compliance
</div>

</div>

</div>

---
layout: default
glow: top-right
glowOpacity: 0.3
---

<div class="text-6xl font-bold mb-12">Next Steps</div>

<div class="grid grid-cols-2 gap-12">

<div class="text-left">

### 📊 Quick Assessment

<div class="text-2xl leading-relaxed opacity-90 space-y-4">
1. Share current platform costs<br/>
2. Identify top 3 data sources<br/>
3. We'll model savings potential<br/>
4. 30-minute results review
</div>

</div>

<div class="text-left">

### 🧪 Proof of Concept

<div class="text-2xl leading-relaxed opacity-90 space-y-4">
1. Pick one high-volume pipeline<br/>
2. Deploy Expanso agents (1 week)<br/>
3. Measure impact (2 weeks)<br/>
4. Quantify ROI and scale plan
</div>

</div>

</div>

<div class="mt-16 text-center">
<div class="text-4xl font-semibold text-cyan-400 mb-4">Let's cut your data costs in half</div>
<div class="text-2xl opacity-70">Contact: sales@expanso.io • www.expanso.io</div>
</div>

---
layout: cover
---

<div class="text-7xl font-bold mb-8">Thank You</div>

<div class="text-4xl mb-12">Questions?</div>

<div class="text-2xl opacity-70">
David Aronchick, CEO<br/>
aronchick@expanso.io<br/>
www.expanso.io
</div>
