---
title: 'Expanso'
theme: default
class: text-center
background: 'linear-gradient(135deg, #0A1628 0%, #0F1E2E 50%, #1A2332 100%)'
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Inter'
  serif: 'Inter'
  mono: 'Fira Code'
---

# Control Your Data. Everywhere.

<div class="text-5xl text-gray-300 mt-16 leading-relaxed">
Cut platform costs 50–70%.<br/>
Accelerate engineering velocity.<br/>
Deploy AI-ready infrastructure.
</div>

<div class="abs-bl m-10 text-2xl text-gray-400">
  <div class="font-medium">David Aronchick, CEO</div>
  <div class="text-xl text-gray-500 mt-1">aronchick@expanso.io</div>
</div>

---
layout: default
---

# The Centralization Bottleneck

<div class="mt-20">
  <div class="text-6xl font-bold text-cyan-400 leading-tight mb-2">
    MORE THAN 2/3 OF ALL DATA
  </div>
  <div class="text-5xl font-bold text-cyan-400 leading-tight">
    IS COLLECTED OUTSIDE YOUR DATA WAREHOUSE
  </div>
  <div class="text-4xl text-gray-300 mt-12">
    and NEVER used for analytics or insights.
  </div>
</div>

<div class="mt-20 text-3xl text-gray-300 space-y-4">
  <div>• Runaway platform spend on data you will never query.</div>
  <div>• Brittle pipelines that break under modern data volume.</div>
  <div>• Engineering teams stuck firefighting instead of building.</div>
</div>

<div class="abs-bl m-8 text-2xl text-gray-500 italic">
  Source: Gartner, "Cost Optimization in the AI Era"
</div>

---
layout: default
---

# You Built the Right Stack. The Rules Changed.

<div class="mt-16 space-y-10">
  <div class="flex items-center gap-6 text-4xl text-gray-300">
    <span class="text-6xl text-green-400">✓</span>
    <span>You invested in best-in-class platforms.</span>
  </div>

  <div class="flex gap-6 ml-20">
    <div class="px-8 py-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 text-3xl text-gray-300">Snowflake</div>
    <div class="px-8 py-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 text-3xl text-gray-300">Databricks</div>
    <div class="px-8 py-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 text-3xl text-gray-300">Splunk</div>
    <div class="px-8 py-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 text-3xl text-gray-300">Datadog</div>
  </div>

  <div class="flex items-center gap-6 text-4xl text-gray-300">
    <span class="text-6xl text-green-400">✓</span>
    <span>You centralized for a single source of truth.</span>
  </div>

  <div class="flex items-center gap-6 text-4xl text-gray-300">
    <span class="text-6xl text-red-400">❌</span>
    <span>But costs still exploded and pipelines remain brittle.</span>
  </div>

  <div class="flex items-center gap-6 text-4xl text-gray-300">
    <span class="text-6xl text-red-400">❌</span>
    <span>And adopting AI remains a dream for next year (or the year after).</span>
  </div>
</div>

<div class="text-5xl font-semibold text-white text-center mt-16">
  The problem isn't your tools. It's the architecture.
</div>

---
layout: center
---

# The Data Tax: An Architectural Flaw

<div class="grid grid-cols-3 gap-12 items-center">
  <div class="text-center">
    <div class="text-8xl mb-4">📡</div>
    <div class="text-3xl font-bold text-gray-300">DATA SOURCES</div>
    <div class="text-2xl text-gray-400">(Edge, Servers, Apps)</div>
  </div>

  <div class="text-center">
    <div class="text-4xl text-cyan-400 font-bold mb-2">100% VOLUME</div>
    <div class="text-6xl text-gray-500">→→→</div>
    <div class="text-3xl text-red-400 mt-2">Full Firehose</div>
  </div>

  <div class="text-center">
    <div class="text-8xl mb-4">🏢</div>
    <div class="text-3xl font-bold text-gray-300">PLATFORMS</div>
    <div class="text-2xl text-gray-400">(Snowflake, Databricks)</div>
  </div>
</div>

<div class="text-center mt-12">
  <div class="text-7xl mb-4">💰💰💰💰💰</div>
  <div class="text-4xl text-red-400 font-bold">(Runaway Costs)</div>
</div>

<div class="text-4xl text-gray-200 text-center mt-8">
  You pay to move, store, and process terabytes of data<br/>
  you will never use. By the time it lands, the damage is done.
</div>

---
layout: center
---

# The Modern Data Stack is Missing a Layer

<div class="flex items-center justify-center gap-12 mb-16">
  <div class="text-center">
    <div class="text-8xl mb-4">📊</div>
    <div class="text-4xl text-gray-300">[Sources]</div>
    <div class="text-2xl text-gray-400">(Edge, On-Prem)</div>
  </div>

  <div class="text-5xl text-gray-500">───</div>

  <div class="text-center">
    <div class="text-6xl px-12 py-8 border-4 border-red-400 rounded-2xl bg-red-900 bg-opacity-20 text-red-400 font-bold">
      ❌ THE GAP ❌
    </div>
    <div class="text-2xl text-red-300 mt-4">No Control Layer</div>
  </div>

  <div class="text-5xl text-gray-500">───</div>

  <div class="text-center">
    <div class="text-8xl mb-4">☁️</div>
    <div class="text-4xl text-gray-300">[Platforms]</div>
    <div class="text-2xl text-gray-400">(Snowflake, Databricks)</div>
  </div>
</div>

<div class="text-5xl text-gray-200 text-center mb-8">
  There is no control layer between where data lives<br/>
  and where you analyze it.
</div>

<div class="text-3xl text-gray-300 space-y-3 max-w-4xl mx-auto">
  <div>• Every byte is moved, stored, and processed—valuable or not.</div>
  <div>• By the time data reaches the cloud, the cost is locked in.</div>
  <div>• You can't fix a source problem with a downstream tool.</div>
</div>

---
layout: two-cols
---

# The Flawed Assumption

<div class="mt-12">
  <div class="p-8 bg-gray-800 bg-opacity-30 rounded-2xl border-2 border-gray-700 mb-12">
    <div class="text-4xl font-bold text-gray-400 mb-6 flex items-center gap-4">
      <span class="text-5xl">🤔</span>
      THE BELIEF
    </div>
    <div class="text-3xl text-gray-300">
      "Centralizing all data gives us more control and speed."
    </div>
  </div>

  <div class="p-8 bg-gradient-to-br from-red-900 to-red-800 bg-opacity-40 rounded-2xl border-2 border-red-500 border-opacity-50">
    <div class="text-4xl font-bold text-white mb-6 flex items-center gap-4">
      <span class="text-5xl">⚠️</span>
      THE REALITY
    </div>
    <div class="text-3xl text-gray-200 mb-6">
      You are paying to move, store, and process terabytes of low-value data before you use it.
    </div>
    <div class="space-y-3 text-3xl text-gray-300">
      <div>• Slow (network latency)</div>
      <div>• Expensive (egress fees)</div>
      <div>• Risky (data sprawl)</div>
    </div>
  </div>
</div>

---
layout: center
---

# An Architecture Built for a Different Era

<div class="grid grid-cols-2 gap-12 max-w-6xl mx-auto">
  <div class="p-10 bg-gray-800 bg-opacity-30 rounded-2xl border-2 border-gray-700">
    <div class="text-center mb-8">
      <div class="text-6xl mb-4">📼</div>
      <div class="text-5xl font-bold text-gray-400">THEN (2010)</div>
    </div>
    <div class="space-y-6 text-3xl text-gray-300">
      <div>• Gigabytes of data</div>
      <div>• Centralized sources</div>
      <div>• Predictable costs</div>
    </div>
  </div>

  <div class="p-10 bg-gradient-to-br from-purple-900 to-blue-900 bg-opacity-40 rounded-2xl border-2 border-cyan-500 border-opacity-50">
    <div class="text-center mb-8">
      <div class="text-6xl mb-4">🚀</div>
      <div class="text-5xl font-bold text-white">NOW (2025)</div>
    </div>
    <div class="space-y-6 text-3xl text-gray-200">
      <div>• <strong class="text-cyan-400">Petabytes</strong> of data (200% growth)</div>
      <div>• <strong class="text-cyan-400">Distributed</strong> (cloud, edge, IoT)</div>
      <div>• <strong class="text-red-400">Runaway</strong>, unpredictable spend</div>
    </div>
  </div>
</div>

<div class="text-4xl text-gray-200 text-center mt-12">
  The "centralize everything" model worked for a simpler time.<br/>
  <span class="text-red-400 font-semibold">Today, it's the most expensive way to operate.</span>
</div>

---
layout: center
---

# This is a Fight Against Gravity

<div class="mb-12">
  <div class="text-9xl font-bold text-cyan-400">
    200%
  </div>
</div>

<div class="text-6xl text-gray-200 mb-16">
  Annual data growth—driven by AI,<br/>
  IoT, and observability.
</div>

<div class="max-w-4xl mx-auto p-10 bg-gradient-to-r from-red-900 to-orange-900 bg-opacity-30 rounded-2xl border-2 border-orange-500 border-opacity-50">
  <div class="text-4xl text-gray-200">
    Everyone knows something's wrong. But we keep reaching for<br/>
    the same solution: <span class="text-red-400 font-bold">bigger, more expensive clouds</span>.
  </div>
</div>

<div class="flex justify-center gap-8 mt-12">
  <div class="text-7xl">📈</div>
  <div class="text-7xl">🤖</div>
  <div class="text-7xl">📡</div>
  <div class="text-7xl">👁️</div>
</div>

---
layout: center
---

# Filter, Transform, and Govern Data at the Source

<div class="grid grid-cols-2 gap-16 max-w-6xl mx-auto">
  <div class="p-10 bg-gray-800 bg-opacity-30 rounded-2xl border-2 border-gray-700">
    <div class="text-5xl font-bold text-gray-400 mb-8 text-center">BEFORE</div>
    <div class="flex flex-col items-center gap-6">
      <div class="text-7xl">📊</div>
      <div class="text-4xl text-cyan-400">↓</div>
      <div class="text-3xl text-gray-300">100% Data</div>
      <div class="text-4xl text-cyan-400">↓</div>
      <div class="text-7xl">☁️</div>
    </div>
    <div class="text-7xl mt-8 text-center">💰💰💰💰💰</div>
  </div>

  <div class="p-10 bg-gradient-to-br from-cyan-900 to-blue-900 bg-opacity-40 rounded-2xl border-2 border-cyan-500 border-opacity-70 shadow-2xl">
    <div class="text-5xl font-bold text-white mb-8 text-center">AFTER</div>
    <div class="flex flex-col items-center gap-6">
      <div class="text-7xl">📊</div>
      <div class="text-4xl text-cyan-400">↓</div>
      <div class="px-8 py-6 bg-cyan-500 text-white font-bold text-4xl rounded-xl">EXPANSO</div>
      <div class="text-4xl text-cyan-400">↓</div>
      <div class="text-3xl text-green-400 font-bold">30% Data</div>
      <div class="text-4xl text-cyan-400">↓</div>
      <div class="text-7xl">☁️</div>
    </div>
    <div class="text-7xl mt-8 text-center">💰💰</div>
  </div>
</div>

<div class="text-5xl text-gray-200 mt-16 text-center">
  Expanso sits where your data lives, sending only high-value,<br/>
  AI-ready data to your existing platforms.
</div>

---
layout: center
---

# Expanso's Control Layer

<div class="flex items-center justify-between gap-8 max-w-6xl mx-auto mb-12">
  <div class="text-center">
    <div class="text-7xl mb-4">📡</div>
    <div class="text-3xl text-gray-300 font-semibold">DATA SOURCES</div>
  </div>

  <div class="text-5xl text-gray-500">→</div>

  <div class="flex-1 p-8 bg-gradient-to-br from-cyan-900 to-blue-900 bg-opacity-50 rounded-2xl border-2 border-cyan-400">
    <div class="text-4xl font-bold text-white mb-6">
      ✅ EXPANSO CONTROL
    </div>
    <div class="space-y-3 text-3xl text-gray-200">
      <div>• <span class="text-cyan-400 font-bold">Filter</span> (Cut 50-70%)</div>
      <div>• <span class="text-cyan-400 font-bold">Transform</span> (AI-Ready)</div>
      <div>• <span class="text-cyan-400 font-bold">Govern</span> (Automated)</div>
    </div>
  </div>

  <div class="text-5xl text-gray-500">→</div>

  <div class="text-center">
    <div class="text-7xl mb-4">☁️</div>
    <div class="text-3xl text-gray-300 font-semibold">YOUR PLATFORMS</div>
    <div class="text-2xl text-gray-400 mt-2">
      <div>• Faster Queries</div>
      <div>• Lower Bills</div>
    </div>
  </div>
</div>

<div class="bg-gray-800 bg-opacity-30 rounded-2xl p-8 max-w-5xl mx-auto">
  <div class="text-3xl font-bold text-cyan-400 mb-6">HOW IT WORKS</div>
  <div class="grid grid-cols-2 gap-6 text-3xl text-gray-300">
    <div><span class="text-cyan-400 font-bold">1.</span> Filter noise and duplicates where data lives</div>
    <div><span class="text-cyan-400 font-bold">2.</span> Transform data into AI-ready formats before it moves</div>
    <div><span class="text-cyan-400 font-bold">3.</span> Govern with automated PII masking and full lineage</div>
    <div><span class="text-cyan-400 font-bold">4.</span> Route high-value data to platforms, low-value to cheap storage</div>
  </div>
</div>

<div class="text-4xl font-semibold text-white text-center mt-10">
  Filter once at the source → Save everywhere.
</div>

---
layout: center
---

# A New Architecture for the Data-Intensive Era

<div class="max-w-6xl mx-auto space-y-12">
  <div class="p-10 bg-gray-800 bg-opacity-30 rounded-2xl border-2 border-gray-700">
    <div class="flex items-center gap-8">
      <div class="text-6xl">❌</div>
      <div>
        <div class="text-4xl font-bold text-gray-400 mb-4">THE OLD WAY</div>
        <div class="text-3xl text-gray-300">Collect → Move → Process</div>
        <div class="text-3xl text-red-400 mt-3 italic">(Expensive, slow, and brittle)</div>
      </div>
    </div>
  </div>

  <div class="p-10 bg-gradient-to-br from-cyan-900 to-blue-900 bg-opacity-50 rounded-2xl border-2 border-cyan-400 shadow-2xl">
    <div class="flex items-center gap-8">
      <div class="text-6xl">✅</div>
      <div>
        <div class="text-4xl font-bold text-white mb-4">THE NEW WAY</div>
        <div class="text-3xl text-gray-200">Process at the Source → Move Selectively</div>
        <div class="text-3xl text-cyan-400 mt-3 italic font-semibold">(Cost-effective, real-time, resilient)</div>
      </div>
    </div>
  </div>
</div>

<div class="text-4xl text-gray-200 text-center mt-16">
  Expanso provides the control layer to enable this new architecture,<br/>
  <span class="text-cyan-400 font-bold text-5xl">reducing platform costs by 50-70%</span>.
</div>

---
layout: center
---

# Reduce Platform Costs by 50-70%

<div class="mb-10">
  <div class="text-9xl font-bold text-cyan-400">
    $1.77M
  </div>
</div>

<div class="text-5xl text-gray-200 mb-16">
  Annual savings for a Fortune 500 retail client<br/>
  by reducing data volume by 58%.
</div>

<div class="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
  <div class="p-8 bg-gradient-to-br from-blue-900 to-blue-800 bg-opacity-40 rounded-xl border border-cyan-400 border-opacity-30">
    <div class="text-5xl mb-4">🔍</div>
    <div class="text-3xl text-gray-300">
      Filter noise and duplicates at the source
    </div>
  </div>
  <div class="p-8 bg-gradient-to-br from-purple-900 to-purple-800 bg-opacity-40 rounded-xl border border-cyan-400 border-opacity-30">
    <div class="text-5xl mb-4">💾</div>
    <div class="text-3xl text-gray-300">
      Route low-value data to cheaper storage
    </div>
  </div>
  <div class="p-8 bg-gradient-to-br from-cyan-900 to-cyan-800 bg-opacity-40 rounded-xl border border-cyan-400 border-opacity-30">
    <div class="text-5xl mb-4">⚡</div>
    <div class="text-3xl text-gray-300">
      Eliminate redundant processing in Snowflake
    </div>
  </div>
</div>

---
layout: center
---

# The ROI of Source-Side Control

<div class="grid grid-cols-2 gap-12 max-w-6xl mx-auto">
  <div class="p-10 bg-gray-800 bg-opacity-30 rounded-2xl border-2 border-gray-700">
    <div class="text-5xl font-bold text-gray-400 mb-8 flex items-center gap-4">
      <span>📉</span>
      BEFORE
    </div>
    <div class="text-3xl text-red-400 mb-4">(Unpredictable Spend)</div>
    <div class="text-6xl font-bold text-red-400 mb-4">$5.5M</div>
    <div class="text-3xl text-gray-300">Annual Cost</div>
    <div class="text-3xl text-red-400 mt-4">(Growing 40% YoY)</div>
    <div class="text-5xl text-center mt-8">😰</div>
  </div>

  <div class="p-10 bg-gradient-to-br from-green-900 to-cyan-900 bg-opacity-40 rounded-2xl border-2 border-green-500 border-opacity-70 shadow-2xl">
    <div class="text-5xl font-bold text-white mb-8 flex items-center gap-4">
      <span>📈</span>
      AFTER
    </div>
    <div class="text-3xl text-green-400 mb-4">(Predictable ROI)</div>
    <div class="text-6xl font-bold text-green-400 mb-4">$1.9M</div>
    <div class="text-3xl text-gray-200">Annual Cost</div>
    <div class="text-3xl text-green-400 font-bold mt-4">(Costs drop 65%)</div>
    <div class="text-5xl text-center mt-8">🎉</div>
  </div>
</div>

<div class="mt-12 max-w-5xl mx-auto bg-cyan-900 bg-opacity-30 rounded-2xl p-8 border border-cyan-400 border-opacity-50">
  <div class="text-3xl text-gray-300 space-y-4">
    <div>• Filter data where it lives, before you pay to move it.</div>
    <div>• Pay a fixed cost for Expanso; cut variable platform spend.</div>
    <div>• Achieve <span class="text-cyan-400 font-bold">payback in 47 days</span> and an <span class="text-cyan-400 font-bold">8.2x first-year ROI</span>.</div>
  </div>
</div>

---
layout: center
---

# Policy-Driven Control Where Data Lives

<div class="grid grid-cols-2 gap-12 max-w-6xl mx-auto">
  <div class="p-10 bg-gray-800 bg-opacity-30 rounded-2xl border-2 border-gray-700">
    <div class="text-5xl font-bold text-gray-400 mb-8">BEFORE</div>
    <div class="text-3xl text-gray-400 mb-6">(Brittle Custom Scripts)</div>
    <div class="space-y-6 text-3xl text-gray-300">
      <div>❌ 40% of time firefighting</div>
      <div>❌ 6-month onboarding backlog</div>
      <div>❌ Manual PII scripts</div>
    </div>
    <div class="mt-8 p-6 bg-red-900 bg-opacity-30 rounded-xl">
      <div class="text-2xl text-red-300 font-mono">
        # 5,000 lines of brittle code
      </div>
    </div>
  </div>

  <div class="p-10 bg-gradient-to-br from-cyan-900 to-blue-900 bg-opacity-50 rounded-2xl border-2 border-cyan-500 border-opacity-70 shadow-2xl">
    <div class="text-5xl font-bold text-white mb-8">AFTER</div>
    <div class="text-3xl text-cyan-400 mb-6">(Declarative Policies)</div>
    <div class="space-y-6 text-3xl text-gray-200">
      <div>✓ 90% fewer incidents</div>
      <div>✓ Onboard in days, not months</div>
      <div>✓ Automated PII masking</div>
    </div>
    <div class="mt-8 p-6 bg-cyan-900 bg-opacity-30 rounded-xl">
      <div class="text-2xl text-cyan-300 font-mono">
        # Single policy declaration
      </div>
    </div>
  </div>
</div>

<div class="text-4xl text-gray-200 text-center mt-16">
  Replace thousands of lines of brittle code with a single,<br/>
  declarative policy layer at the source.
</div>

---
layout: center
---

# Enforce Governance Before Data Moves

<div class="grid grid-cols-2 gap-12 max-w-6xl mx-auto">
  <div class="p-10 bg-gray-800 bg-opacity-30 rounded-2xl border-2 border-gray-700">
    <div class="text-5xl font-bold text-gray-400 mb-8">BEFORE</div>
    <div class="text-3xl text-gray-400 mb-6">(Detecting Risk Downstream)</div>
    <div class="space-y-6 text-3xl text-gray-300">
      <div>⚠️ PII spreads across 10+ systems</div>
      <div>⚠️ Incomplete audit trails</div>
      <div>⚠️ Compliance is reactive</div>
    </div>
    <div class="text-center mt-8">
      <div class="text-6xl mb-3">🚨</div>
      <div class="text-2xl text-red-400">Always Catching Up</div>
    </div>
  </div>

  <div class="p-10 bg-gradient-to-br from-green-900 to-cyan-900 bg-opacity-40 rounded-2xl border-2 border-green-500 border-opacity-70 shadow-2xl">
    <div class="text-5xl font-bold text-white mb-8">AFTER</div>
    <div class="text-3xl text-cyan-400 mb-6">(Preventing Risk at the Source)</div>
    <div class="space-y-6 text-3xl text-gray-200">
      <div>✅ PII masked before it moves</div>
      <div>✅ Full lineage from source</div>
      <div>✅ Governance is automated</div>
    </div>
    <div class="text-center mt-8">
      <div class="text-6xl mb-3">🛡️</div>
      <div class="text-2xl text-green-400">Proactive Protection</div>
    </div>
  </div>
</div>

<div class="text-4xl text-white text-center mt-16 font-semibold">
  Don't chase compliance violations after the fact.<br/>
  <span class="text-cyan-400">Prevent them from ever happening.</span>
</div>

---
layout: center
---

# A Fundamentally Better Approach

<div class="grid grid-cols-2 gap-8 max-w-6xl mx-auto text-3xl">
  <div class="text-center mb-4">
    <div class="text-4xl font-bold text-gray-400">THE OLD WAY</div>
    <div class="text-3xl text-gray-400">(Centralize)</div>
  </div>
  <div class="text-center mb-4">
    <div class="text-4xl font-bold text-white">THE EXPANSO WAY</div>
    <div class="text-3xl text-cyan-400">(Control at Source)</div>
  </div>

  <div class="p-6 bg-gray-800 bg-opacity-20 rounded-xl">
    ❌ Move 100% of data, valuable or not
  </div>
  <div class="p-6 bg-cyan-900 bg-opacity-30 rounded-xl border border-cyan-400 border-opacity-50">
    ✅ Move only high-value data
  </div>

  <div class="p-6 bg-gray-800 bg-opacity-20 rounded-xl">
    ❌ Pay for everything you collect
  </div>
  <div class="p-6 bg-cyan-900 bg-opacity-30 rounded-xl border border-cyan-400 border-opacity-50">
    ✅ Pay only for what you need
  </div>

  <div class="p-6 bg-gray-800 bg-opacity-20 rounded-xl">
    ❌ Costs explode with data growth
  </div>
  <div class="p-6 bg-cyan-900 bg-opacity-30 rounded-xl border border-cyan-400 border-opacity-50">
    ✅ Costs are controlled
  </div>

  <div class="p-6 bg-gray-800 bg-opacity-20 rounded-xl">
    ❌ Governance is reactive
  </div>
  <div class="p-6 bg-cyan-900 bg-opacity-30 rounded-xl border border-cyan-400 border-opacity-50">
    ✅ Governance is automated, proactive
  </div>

  <div class="p-6 bg-red-900 bg-opacity-30 rounded-xl border border-red-400 border-opacity-50">
    ❌ <span class="font-bold text-red-400">$83/TB</span> Centralized
  </div>
  <div class="p-6 bg-green-900 bg-opacity-30 rounded-xl border border-green-400 border-opacity-50">
    ✅ <span class="font-bold text-green-400">$35/TB</span> Distributed
  </div>
</div>

<div class="text-4xl font-semibold text-white text-center mt-12">
  Stop paying the Data Tax on data you will never use.
</div>

---
layout: center
---

# Accelerate Engineering Velocity

<div class="mb-10">
  <div class="text-9xl font-bold text-white">
    50%
  </div>
</div>

<div class="text-5xl text-gray-200 mb-16">
  Reduction in data onboarding time,<br/>
  from months to days.
</div>

<div class="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
  <div class="p-8 bg-gradient-to-br from-blue-900 to-blue-800 bg-opacity-40 rounded-xl border border-cyan-400 border-opacity-30">
    <div class="text-5xl mb-4">📋</div>
    <div class="text-3xl text-gray-300">
      Set policies once; enforce everywhere automatically
    </div>
  </div>
  <div class="p-8 bg-gradient-to-br from-purple-900 to-purple-800 bg-opacity-40 rounded-xl border border-cyan-400 border-opacity-30">
    <div class="text-5xl mb-4">🔧</div>
    <div class="text-3xl text-gray-300">
      Eliminate brittle, custom-coded pipelines
    </div>
  </div>
  <div class="p-8 bg-gradient-to-br from-cyan-900 to-cyan-800 bg-opacity-40 rounded-xl border border-cyan-400 border-opacity-30">
    <div class="text-5xl mb-4">⚡</div>
    <div class="text-3xl text-gray-300">
      Propagate updates in &lt;30 seconds across 10,000+ nodes
    </div>
  </div>
</div>

---
layout: center
---

# Deploy AI-Ready Infrastructure

<div class="mb-10">
  <div class="text-9xl font-bold text-white">
    16x
  </div>
</div>

<div class="text-5xl text-gray-200 mb-16">
  Faster query performance<br/>
  for ML model training.
</div>

<div class="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
  <div class="p-8 bg-gradient-to-br from-blue-900 to-blue-800 bg-opacity-40 rounded-xl border border-cyan-400 border-opacity-30">
    <div class="text-5xl mb-4">✨</div>
    <div class="text-3xl text-gray-300">
      Deliver clean, structured data—not raw garbage
    </div>
  </div>
  <div class="p-8 bg-gradient-to-br from-purple-900 to-purple-800 bg-opacity-40 rounded-xl border border-cyan-400 border-opacity-30">
    <div class="text-5xl mb-4">📊</div>
    <div class="text-3xl text-gray-300">
      Provide full data lineage from source to model
    </div>
  </div>
  <div class="p-8 bg-gradient-to-br from-cyan-900 to-cyan-800 bg-opacity-40 rounded-xl border border-cyan-400 border-opacity-30">
    <div class="text-5xl mb-4">🤖</div>
    <div class="text-3xl text-gray-300">
      Perform real-time feature engineering where data lives
    </div>
  </div>
</div>

---
layout: center
---

# Complement and Enhance Your Existing Stack

<div class="flex items-center justify-between gap-8 max-w-6xl mx-auto mb-16">
  <div class="text-center">
    <div class="text-7xl mb-4">📡</div>
    <div class="text-4xl text-gray-300 font-semibold">Data Sources</div>
    <div class="text-2xl text-gray-400">(Servers, Cloud, Edge)</div>
  </div>

  <div class="text-6xl text-gray-500">→</div>

  <div class="text-center p-8 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl">
    <div class="text-6xl font-bold text-white mb-2">EXPANSO</div>
    <div class="text-2xl text-cyan-100 space-y-1">
      <div>Filter</div>
      <div>Transform</div>
      <div>Govern</div>
    </div>
  </div>

  <div class="text-6xl text-gray-500">→</div>

  <div class="text-center">
    <div class="grid grid-cols-2 gap-4">
      <div class="p-4 bg-purple-600 rounded-xl text-white text-2xl">Snowflake</div>
      <div class="p-4 bg-orange-600 rounded-xl text-white text-2xl">Databricks</div>
      <div class="p-4 bg-green-600 rounded-xl text-white text-2xl">Splunk</div>
      <div class="p-4 bg-blue-600 rounded-xl text-white text-2xl">Datadog</div>
    </div>
  </div>
</div>

<div class="text-5xl text-gray-200 text-center">
  Expanso sits BEFORE your existing platforms, making them<br/>
  faster, cheaper, and more reliable.
</div>

<div class="text-4xl text-cyan-400 text-center mt-10 font-semibold">
  No rip-and-replace required.
</div>

---
layout: center
---

# Trusted by Industry Leaders

<div class="grid grid-cols-3 gap-10 mb-12 max-w-5xl mx-auto">
  <div class="p-12 bg-gray-800 bg-opacity-30 rounded-2xl border-2 border-gray-700 text-center">
    <div class="text-4xl text-gray-400">Customer Logo 1</div>
  </div>
  <div class="p-12 bg-gray-800 bg-opacity-30 rounded-2xl border-2 border-gray-700 text-center">
    <div class="text-4xl text-gray-400">Customer Logo 2</div>
  </div>
  <div class="p-12 bg-gray-800 bg-opacity-30 rounded-2xl border-2 border-gray-700 text-center">
    <div class="text-4xl text-gray-400">Customer Logo 3</div>
  </div>
  <div class="p-12 bg-gray-800 bg-opacity-30 rounded-2xl border-2 border-gray-700 text-center">
    <div class="text-4xl text-gray-400">Customer Logo 4</div>
  </div>
  <div class="p-12 bg-gray-800 bg-opacity-30 rounded-2xl border-2 border-gray-700 text-center">
    <div class="text-4xl text-gray-400">Customer Logo 5</div>
  </div>
  <div class="p-12 bg-gray-800 bg-opacity-30 rounded-2xl border-2 border-gray-700 text-center">
    <div class="text-4xl text-gray-400">Customer Logo 6</div>
  </div>
</div>

<div class="text-4xl text-gray-300 mt-20">
  From Fortune 500 enterprises to government agencies,<br/>
  teams rely on Expanso to control their data everywhere.
</div>

---
layout: center
background: 'linear-gradient(135deg, #0A1628 0%, #0F1E2E 50%, #1A2332 100%)'
---

# Let's Quantify Your Savings

<div class="text-5xl text-gray-300 mb-16">
  Schedule your complimentary Data Value Assessment.
</div>

<div class="inline-block px-16 py-8 bg-cyan-500 rounded-2xl text-6xl font-bold text-white">
  expanso.io/assessment
</div>

<div class="flex justify-center gap-12 mt-20">
  <div class="text-center p-8 bg-gray-800 bg-opacity-30 rounded-xl border border-gray-700">
    <div class="text-5xl mb-3">📊</div>
    <div class="text-3xl text-cyan-400 font-bold">Free Assessment</div>
  </div>
  <div class="text-center p-8 bg-gray-800 bg-opacity-30 rounded-xl border border-gray-700">
    <div class="text-5xl mb-3">💰</div>
    <div class="text-3xl text-cyan-400 font-bold">ROI Calculator</div>
  </div>
  <div class="text-center p-8 bg-gray-800 bg-opacity-30 rounded-xl border border-gray-700">
    <div class="text-5xl mb-3">🚀</div>
    <div class="text-3xl text-cyan-400 font-bold">Quick Deploy</div>
  </div>
</div>

<div class="abs-br m-6 text-3xl text-gray-400">
  David Aronchick | aronchick@expanso.io
</div>
