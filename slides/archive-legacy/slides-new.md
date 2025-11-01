---
theme: ../theme
title: 'Expanso Presentation'
class: text-center
highlighter: shiki
transition: slide-left
mdc: true
---

<div class="flex flex-col items-center justify-center h-full">
  <img src="/expanso-logo-light.svg" class="logo mb-16" alt="Expanso" />
  
  <h1 class="tagline mb-12">
    Control Your Data. Everywhere.
  </h1>
  
  <div class="divider"></div>
  
  <div class="pillar-text mt-12">
    Reduce platform costs by 50–70%.
  </div>
  <div class="pillar-text">
    Accelerate engineering velocity.
  </div>
  <div class="pillar-text mb-0">
    Deploy AI-ready infrastructure.
  </div>
  
  <div class="abs-bl">
    <div class="footer-text">
      <div class="font-medium">David Aronchick, CEO</div>
      <div class="text-xl mt-1" style="font-size: 20pt;">aronchick@expanso.io</div>
    </div>
  </div>
</div>

---
layout: default
---

# The Centralization Bottleneck

<div class="mt-16">
  <div class="headline text-violet mb-8">
    More than 2/3 of all data is collected outside your data warehouse
  </div>
  
  <p class="body-text mb-16">
    and <strong>NEVER</strong> used for analytics or insights.
  </p>
</div>

<div class="mt-12 space-y-6">
  <p class="body-text">• Runaway platform spend on data you will never query.</p>
  <p class="body-text">• Brittle pipelines that break under modern data volume.</p>
  <p class="body-text">• Engineering teams stuck firefighting instead of building.</p>
</div>

<div class="abs-bl">
  <p class="footer-text italic">Source: Gartner, "Cost Optimization in the AI Era"</p>
</div>

---
layout: center
---

# The Data Tax: An Architectural Flaw

<div class="grid grid-cols-3 gap-12 items-center mt-16">
  <div class="text-center">
    <div class="text-8xl mb-4">📡</div>
    <div class="body-text font-bold">DATA SOURCES</div>
    <div class="subtext">(Edge, Servers, Apps)</div>
  </div>
  
  <div class="text-center">
    <div class="text-violet font-bold mb-2" style="font-size: 42pt;">100% VOLUME</div>
    <div class="text-6xl text-dim">→→→</div>
    <div class="text-error mt-2" style="font-size: 36pt;">Full Firehose</div>
  </div>
  
  <div class="text-center">
    <div class="text-8xl mb-4">🏢</div>
    <div class="body-text font-bold">PLATFORMS</div>
    <div class="subtext">(Snowflake, Databricks)</div>
  </div>
</div>

  <div class="text-center mt-16">
  <div class="text-7xl mb-4">💰💰💰</div>
  <p class="body-text text-error font-bold">(Runaway Costs)</p>
</div>

---
layout: center
---

# Filter, Transform, and Govern Data at the Source

<div class="grid grid-cols-2 gap-16 mt-16">
  <div class="box text-center">
    <h3 class="text-dim mb-8">BEFORE</h3>
    <div class="flex flex-col items-center gap-6">
      <div class="text-7xl">📊</div>
      <div class="text-cyan" style="font-size: 42pt;">↓</div>
      <div class="body-text">100% Data</div>
      <div class="text-cyan" style="font-size: 42pt;">↓</div>
      <div class="text-7xl">☁️</div>
    </div>
    <div class="text-7xl mt-8">💰💰💰</div>
  </div>
  
  <div class="box-violet text-center">
    <h3 class="text-white mb-8">AFTER</h3>
    <div class="flex flex-col items-center gap-6">
      <div class="text-7xl">📊</div>
      <div class="text-violet" style="font-size: 42pt;">↓</div>
      <div class="px-8 py-6 text-white font-bold rounded-xl" style="font-size: 36pt; background: #6823CD;">EXPANSO</div>
      <div class="text-violet" style="font-size: 42pt;">↓</div>
      <div class="body-text text-violet font-bold">30% Data</div>
      <div class="text-violet" style="font-size: 42pt;">↓</div>
      <div class="text-7xl">☁️</div>
    </div>
    <div class="text-7xl mt-8">💰</div>
  </div>
</div>

---
layout: center
---

# Reduce Platform Costs by 50-70%

<div class="metric-large text-center my-12">
  <span class="number">$1.77M</span>
</div>

<p class="text-center body-text mb-16">
  Annual savings for a Fortune 500 retail client<br/>
  by reducing data volume by 58%.
</p>

<div class="grid grid-cols-3 gap-8">
  <div class="box-violet text-center p-8">
    <div class="text-5xl mb-4">🔍</div>
    <p class="body-text">
      Filter noise and duplicates at the source
    </p>
  </div>
  <div class="box-violet text-center p-8">
    <div class="text-5xl mb-4">💾</div>
    <p class="body-text">
      Route low-value data to cheaper storage
    </p>
  </div>
  <div class="box-violet text-center p-8">
    <div class="text-5xl mb-4">⚡</div>
    <p class="body-text">
      Eliminate redundant processing
    </p>
  </div>
</div>

---
layout: center
---

# Accelerate Engineering Velocity

<div class="metric-large text-center my-12">
  <span class="number">50%</span>
</div>

<p class="text-center body-text mb-16">
  Reduction in data onboarding time,<br/>
  from months to days.
</p>

<div class="grid grid-cols-3 gap-8">
  <div class="box text-center p-8">
    <div class="text-5xl mb-4">📋</div>
    <p class="body-text">
      Set policies once; enforce everywhere automatically
    </p>
  </div>
  <div class="box text-center p-8">
    <div class="text-5xl mb-4">🔧</div>
    <p class="body-text">
      Eliminate brittle, custom-coded pipelines
    </p>
  </div>
  <div class="box text-center p-8">
    <div class="text-5xl mb-4">⚡</div>
    <p class="body-text">
      Propagate updates in &lt;30 seconds
    </p>
  </div>
</div>

---
layout: center
---

# Deploy AI-Ready Infrastructure

<div class="metric-large text-center my-12">
  <span class="number">16×</span>
</div>

<p class="text-center body-text mb-16">
  Faster query performance<br/>
  for ML model training.
</p>

<div class="grid grid-cols-3 gap-8">
  <div class="box text-center p-8">
    <div class="text-5xl mb-4">✨</div>
    <p class="body-text">
      Deliver clean, structured data—not raw garbage
    </p>
  </div>
  <div class="box text-center p-8">
    <div class="text-5xl mb-4">📊</div>
    <p class="body-text">
      Provide full data lineage from source to model
    </p>
  </div>
  <div class="box text-center p-8">
    <div class="text-5xl mb-4">🤖</div>
    <p class="body-text">
      Perform real-time feature engineering where data lives
    </p>
  </div>
</div>

---
layout: center
---

# Complement Your Existing Stack

<div class="flex items-center justify-between gap-8 my-16">
  <div class="text-center">
    <div class="text-7xl mb-4">📡</div>
    <div class="body-text font-semibold">Data Sources</div>
  </div>
  
  <div class="text-5xl">→</div>
  
  <div class="box-violet p-8">
    <div class="text-white font-bold mb-4" style="font-size: 48pt;">EXPANSO</div>
    <div class="body-text">
      <div>• Filter</div>
      <div>• Transform</div>
      <div>• Govern</div>
    </div>
  </div>
  
  <div class="text-5xl">→</div>
  
  <div class="text-center">
    <div class="platform-logos flex-col gap-4">
      <img src="/logos/snowflake.svg" class="platform-logo" alt="Snowflake" />
      <img src="/logos/databricks.svg" class="platform-logo" alt="Databricks" />
      <img src="/logos/splunk.svg" class="platform-logo" alt="Splunk" />
      <img src="/logos/datadog.svg" class="platform-logo" alt="Datadog" />
    </div>
  </div>
</div>

<p class="text-center body-text text-violet font-semibold mt-12">
  No rip-and-replace required.
</p>

---
layout: center
---

# Let's Quantify Your Savings

<p class="text-center body-text mb-12">
  Schedule your complimentary Data Value Assessment.
</p>

<div class="text-center">
  <div class="inline-block px-16 py-8 rounded-2xl font-bold text-white" 
       style="background: #6823CD; font-size: 56pt;">
    expanso.io/assessment
  </div>
</div>

<div class="flex justify-center gap-12 mt-16">
  <div class="box text-center p-8">
    <div class="text-5xl mb-3">📊</div>
    <div class="body-text text-violet font-bold">Free Assessment</div>
  </div>
  <div class="box text-center p-8">
    <div class="text-5xl mb-3">💰</div>
    <div class="body-text text-violet font-bold">ROI Calculator</div>
  </div>
  <div class="box text-center p-8">
    <div class="text-5xl mb-3">🚀</div>
    <div class="body-text text-violet font-bold">Quick Deploy</div>
  </div>
</div>

<div class="abs-br">
  <p class="footer-text">David Aronchick | aronchick@expanso.io</p>
</div>
