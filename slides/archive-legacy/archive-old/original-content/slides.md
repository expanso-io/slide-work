---
# Expanso Presentation Deck
# Slidev configuration

theme: ./theme
background: 'linear-gradient(180deg, #101921 0%, #1D2D39 100%)'
highlighter: shiki
lineNumbers: false
class: 'text-center'
info: |
  ## Expanso: Upstream Data Control

  The platform that cuts cloud data costs by 50-70% through intelligent
  data filtering, transformation, and governance at the source.
drawings:
  persist: false
transition: slide-left
title: Expanso - Upstream Data Platform
mdc: true
layout: title
---

# The Upstream Data Platform That Cuts<br/>Cloud Data Costs by <span class="highlight">50–70%</span>

<div class="subtitle">
Filter, transform, and govern data <strong>at the source</strong>—<br/>
<strong>before</strong> it hits Snowflake, Databricks, Splunk, or Datadog
</div>

<div class="flow-diagram">
  <div class="flow-box">Data Sources</div>
  <div class="flow-arrow">→</div>
  <div class="flow-box highlight">EXPANSO</div>
  <div class="flow-arrow">→</div>
  <div class="flow-box">Cloud Platforms</div>
</div>

<!--
Today I'm going to show you how to cut your cloud data costs by 50 to 70 percent—without losing a single insight. We do this by controlling data upstream, before it hits your expensive platforms like Snowflake, Databricks, Splunk, or Datadog.

[PAUSE: Let the '50-70%' number land. Don't rush to the next slide.]

TRANSITION: Now, I know what you're thinking: 'That sounds too good to be true.' So let me show you why your cloud bills keep growing—and why traditional approaches can't fix it.
-->

---
layout: default
---

# The Cloud Data Cost Crisis

## Why your bills keep growing exponentially

<v-clicks>

- **Data volumes exploding** – 40% YoY growth across logs, metrics, events
- **Platforms charge per GB ingested** – Snowflake, Databricks, Splunk, Datadog
- **Traditional solutions don't work:**
  - Sampling loses critical data
  - Post-ingestion filtering = you already paid
  - Manual data engineering can't keep up

</v-clicks>

<div v-click class="mt-lg expanso-container-bordered" style="border-color: #fc8181">
  <strong>Result:</strong> CFOs see 30-50% annual increase in data platform spend with no revenue growth
</div>

<!--
Most companies are experiencing 40% year-over-year growth in data volumes. Logs, metrics, events, traces—everything is exploding.

And all your major platforms charge per gigabyte ingested. Snowflake, Databricks, Splunk, Datadog—they all use consumption pricing.

Traditional solutions don't work because sampling loses critical data, post-ingestion filtering means you already paid, and manual data engineering simply can't keep up.

The result? CFOs are seeing 30-50% annual increases in data platform spend with zero revenue growth to justify it.
-->

---
layout: default
---

# How Expanso Works

<div class="grid-3 gap-lg mt-lg">

<ExpansoStepCard
  step-number="1"
  title="Deploy at the Source"
  description="Install Expanso agents at data sources—before cloud platforms"
/>

<ExpansoStepCard
  step-number="2"
  title="Define Your Rules"
  description="Set policies for filtering, sampling, transformation, and routing"
/>

<ExpansoStepCard
  step-number="3"
  title="Watch Costs Drop"
  description="Reduce ingestion 50-70% while maintaining full observability"
/>

</div>

<div class="mt-xl text-center text-highlight">
💡 Deploy in shadow mode first—prove ROI before changing anything in production
</div>

<!--
Here's how simple it is:

Step 1: Deploy Expanso agents at your data sources—before data hits the cloud platforms.

Step 2: Define your policies. What should be filtered? What needs transformation? What's noise?

Step 3: Watch your costs drop. Most customers see 50-70% reduction in ingestion within the first month.

And here's the key: you can deploy in shadow mode first. Prove the ROI without changing anything in production. No risk.
-->

---
layout: default
---

# Customer Results

<div class="grid-3 gap-lg mt-lg">

<ExpansoMetricCard
  value="68%"
  label="Cost Reduction"
  detail="$816K annual savings"
  color="#48BB78"
/>

<ExpansoMetricCard
  value="3 weeks"
  label="Time to Deploy"
  detail="Shadow mode → production"
  color="#4299e1"
/>

<ExpansoMetricCard
  value="2.5 months"
  label="Payback Period"
  detail="Full ROI realized"
  color="#ed8936"
/>

</div>

<div class="mt-xl expanso-container">

### Fortune 500 Financial Services Company

**Challenge:** Splunk costs growing 45% YoY, most logs never queried

**Solution:** Deployed Expanso filtering + intelligent sampling

**Results:**
- $816K annual savings on Splunk alone
- Maintained 100% compliance coverage
- Data engineering team freed from manual log management

</div>

<!--
Let me show you real customer results.

One Fortune 500 financial services company was seeing Splunk costs grow 45% year over year. Most of those logs were never even queried.

They deployed Expanso with filtering and intelligent sampling.

The results: 68% cost reduction—$816,000 in annual savings on Splunk alone. They maintained 100% compliance coverage. And their data engineering team was freed from manual log management.

Time to deploy? Just 3 weeks from shadow mode to production. Payback period? 2 and a half months.
-->

---
layout: end
class: text-center
---

# Let's Talk About Your Data Costs

<div class="mt-lg">

**Schedule a cost assessment:**<br/>
aronchick@expanso.io

**Learn more:**<br/>
www.expanso.io

</div>

<div class="mt-xl text-small text-muted">
Expanso: Upstream Data Control
</div>

<!--
I'd love to talk about your specific data costs.

We offer a free cost assessment where we analyze your current data flows and show you exactly where Expanso can save you money.

Reach out to me at aronchick@expanso.io or visit www.expanso.io.

Thank you.
-->
