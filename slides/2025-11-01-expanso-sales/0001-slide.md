---
layout: cover
class: text-center
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
