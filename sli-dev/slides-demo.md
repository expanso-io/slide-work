---
theme: ../theme
title: Expanso Theme Demo
class: text-center
---

<div class="text-6xl font-bold mb-6">Expanso Theme Demo</div>

<div class="text-3xl">Complete Feature Showcase</div>

<div class="abs-br m-6 text-xl opacity-50">
  Theme v1.0
</div>

---
layout: default
glow: bottom-right
glowOpacity: 0.3
---

<div class="text-6xl font-bold mb-3">Theme Validation</div>

<div class="text-3xl font-semibold mb-10 opacity-90">Testing edge cases for dark-mode robustness</div>

<div class="grid grid-cols-2 gap-8" style="align-items: stretch; height: calc(100vh - 280px);">

<div class="box-violet text-left" style="padding: 2.5rem; display: flex; flex-direction: column; height: 100%;">

<div class="text-3xl font-semibold mb-5" style="font-family: Inter, sans-serif;">Long Code Block Test 💡</div>

<div style="font-size: 1.1rem; line-height: 1.5; font-family: 'Fira Code', monospace; margin-bottom: 2rem;">

```bash
# This is a very long command that should wrap gracefully
expanso-edge run --local --data-dir ./data --log-level debug \
  --api-listen :8080 --config config.yaml

# Submit a pipeline to local edge
expanso-cli executions run --local pipeline.yaml
cat my-data.json | expanso-cli jobs put --local
```

</div>

<div class="mt-auto" style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
<span style="background: rgba(154, 107, 255, 0.2); border: 1px solid #9A6BFF; padding: 0.75rem 1.5rem; border-radius: 6px; font-size: 1.1rem; white-space: nowrap;">✅ Quick Start</span>
<span style="background: rgba(154, 107, 255, 0.2); border: 1px solid #9A6BFF; padding: 0.75rem 1.5rem; border-radius: 6px; font-size: 1.1rem; white-space: nowrap;">Local Mode</span>
<span style="background: rgba(154, 107, 255, 0.2); border: 1px solid #9A6BFF; padding: 0.75rem 1.5rem; border-radius: 6px; font-size: 1.1rem; white-space: nowrap;">No Orchestrator Required</span>
</div>

</div>

<div class="box text-left" style="padding: 2.5rem; display: flex; flex-direction: column; height: 100%;">

<div class="text-3xl font-semibold mb-5" style="font-family: Inter, sans-serif;">Contrast & Legibility Test</div>

<div style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">

**WCAG AA Compliance:**
- Background: `#000000` (black)
- Border: `#9A6BFF` (purple) - 7.2:1 ratio
- Text: `#FCFCFC` (near-white) - 20.6:1 ratio

```python
def validate_theme():
    assert contrast_ratio("000000", "9A6BFF") > 4.5
    assert contrast_ratio("000000", "FCFCFC") > 7.0
    return "✓ All checks passed"
```

</div>

<div class="mt-auto pt-4" style="border-top: 1px solid rgba(154, 107, 255, 0.3); font-size: 1rem; opacity: 0.8; line-height: 1.6;">
All text is designed to be highly readable in dim presentation environments and when exported to static PDF documents.
</div>

</div>

</div>

---
layout: default
glow: top-left
glowOpacity: 0.5
---

<div style="font-size: 4.5rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.1;">Glassmorphism Cards</div>

<div style="font-size: 2.625rem; font-weight: 600; margin-bottom: 3rem; opacity: 0.9;">Enhanced with backdrop blur effects</div>

<div class="grid grid-cols-3" style="gap: 2rem; margin-bottom: 3rem;">

<div class="card-glass text-center" style="padding: 3rem 2rem; min-height: 280px; display: flex; flex-direction: column; justify-content: center; transform: scale(1.12); transform-origin: left center;">

<div style="font-size: 2.5rem; font-weight: 600; margin-bottom: 1.5rem; line-height: 1.2;">Glass Card</div>
<div style="font-size: 1.75rem; opacity: 0.85; line-height: 1.4;">Frosted glass effect</div>

</div>

<div class="card-glass-violet text-center" style="padding: 3rem 2rem; min-height: 280px; display: flex; flex-direction: column; justify-content: center; transform: scale(1.12);">

<div style="font-size: 2.5rem; font-weight: 600; margin-bottom: 1.5rem; line-height: 1.2;">Violet Glass</div>
<div style="font-size: 1.75rem; opacity: 0.85; line-height: 1.4;">Expanso branded</div>

</div>

<div class="card-glass-blue text-center" style="padding: 3rem 2rem; min-height: 280px; display: flex; flex-direction: column; justify-content: center; transform: scale(1.12); transform-origin: right center;">

<div style="font-size: 2.5rem; font-weight: 600; margin-bottom: 1.5rem; line-height: 1.2;">Blue Glass</div>
<div style="font-size: 1.75rem; opacity: 0.85; line-height: 1.4;">Bacalhau themed</div>

</div>

</div>

<div class="box-violet text-center" style="padding: 2rem 3rem; border-color: rgba(154, 107, 255, 0.5); min-height: 100px; display: flex; align-items: center; justify-content: center;">
<div style="font-size: 1.5rem; line-height: 1.6;">Legacy boxes also have <code style="font-size: 1.5rem; padding: 0.25rem 0.75rem; background: rgba(154, 107, 255, 0.15);">backdrop-filter: blur(10px)</code></div>
</div>

---
layout: default
glow: center
---

<div style="margin-top: 0.5rem;">

<div style="font-size: 4rem; font-weight: 700; margin-bottom: 0.5rem; text-shadow: 0 0 40px rgba(154, 107, 255, 0.3); background: linear-gradient(180deg, rgba(154, 107, 255, 0.1) 0%, transparent 100%); padding: 0.75rem 0; line-height: 1.1;">Advanced Click Animations</div>

<div style="font-size: 1.875rem; font-weight: 500; margin-bottom: 2rem; opacity: 0.9; line-height: 1.2;">Interactive transitions for dynamic presentations</div>

</div>

<div style="display: grid; grid-template-columns: 1fr auto; gap: 1.5rem; align-items: start;">

<div style="display: flex; flex-direction: column; gap: 1.25rem;">

<div v-click class="click-scale" style="display: flex; align-items: center; gap: 1.25rem;">
<div style="flex: 1;">
<div style="font-size: 2.25rem; font-weight: 600; margin-bottom: 0.25rem; line-height: 1.2;"><span style="color: #9A6BFF;">01.</span> Scale Animation</div>
<div style="font-size: 1.5rem; opacity: 0.85; line-height: 1.3;">Elements grow smoothly from 95% to 100%</div>
</div>
<div style="font-size: 2.5rem; opacity: 0.4;">⊕</div>
</div>

<div v-click class="click-slide-up" style="display: flex; align-items: center; gap: 1.25rem;">
<div style="flex: 1;">
<div style="font-size: 2.25rem; font-weight: 600; margin-bottom: 0.25rem; line-height: 1.2;"><span style="color: #9A6BFF;">02.</span> Slide Up</div>
<div style="font-size: 1.5rem; opacity: 0.85; line-height: 1.3;">Content rises from below with fade-in</div>
</div>
<div style="font-size: 2.5rem; opacity: 0.4;">↑</div>
</div>

<div v-click class="click-slide-left" style="display: flex; align-items: center; gap: 1.25rem;">
<div style="flex: 1;">
<div style="font-size: 2.25rem; font-weight: 600; margin-bottom: 0.25rem; line-height: 1.2;"><span style="color: #9A6BFF;">03.</span> Slide from Left</div>
<div style="font-size: 1.5rem; opacity: 0.85; line-height: 1.3;">Enters horizontally from left edge</div>
</div>
<div style="font-size: 2.5rem; opacity: 0.4;">←</div>
</div>

<div v-click class="click-slide-right" style="display: flex; align-items: center; gap: 1.25rem;">
<div style="flex: 1;">
<div style="font-size: 2.25rem; font-weight: 600; margin-bottom: 0.25rem; line-height: 1.2;"><span style="color: #9A6BFF;">04.</span> Slide from Right</div>
<div style="font-size: 1.5rem; opacity: 0.85; line-height: 1.3;">Enters horizontally from right edge</div>
</div>
<div style="font-size: 2.5rem; opacity: 0.4;">→</div>
</div>

<div v-click class="click-scale" style="display: flex; align-items: center; gap: 1.25rem;">
<div style="flex: 1;">
<div style="font-size: 2.25rem; font-weight: 600; margin-bottom: 0.25rem; line-height: 1.2;"><span style="color: #9A6BFF;">05.</span> Fade + Scale Combo</div>
<div style="font-size: 1.5rem; opacity: 0.85; line-height: 1.3;">Combined opacity and transform effects</div>
</div>
<div style="font-size: 2.5rem; opacity: 0.4;">◎</div>
</div>

<div v-click style="display: flex; align-items: center; gap: 1.25rem; opacity: 0; animation: fadeIn 0.8s ease-out 0.2s forwards;">
<div style="flex: 1;">
<div style="font-size: 2.25rem; font-weight: 600; margin-bottom: 0.25rem; line-height: 1.2;"><span style="color: #9A6BFF;">06.</span> Staggered Reveal</div>
<div style="font-size: 1.5rem; opacity: 0.85; line-height: 1.3;">Sequential item appearance with delay</div>
</div>
<div style="font-size: 2.5rem; opacity: 0.4;">⋯</div>
</div>

</div>

<div style="display: flex; flex-direction: column; gap: 1.25rem; padding-left: 1.5rem; border-left: 2px solid rgba(154, 107, 255, 0.3);">
<div style="font-size: 1rem; font-weight: 600; color: #9A6BFF; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Timing</div>
<div style="font-size: 1.125rem; opacity: 0.8; line-height: 1.6;">
<div style="margin-bottom: 0.75rem;">⏱️ <strong>500ms</strong></div>
<div style="margin-bottom: 0.75rem;">📐 <strong>ease-out</strong></div>
<div style="margin-bottom: 0.75rem;">🎯 <strong>GPU</strong></div>
<div>✨ <strong>60fps</strong></div>
</div>
</div>

</div>

---
layout: default
glow: full
glowOpacity: 0.2
---

<div>

<div style="font-size: 3.25rem; font-weight: 700; margin-bottom: 0.25rem; line-height: 1.1;">Icon System Integration</div>

<div style="font-size: 1.625rem; font-weight: 400; margin-bottom: 1rem; opacity: 0.85; line-height: 1.2;">6 icon collections available via UnoCSS</div>

<div style="width: 100%; height: 2px; background: linear-gradient(90deg, transparent, rgba(154, 107, 255, 0.4) 20%, rgba(154, 107, 255, 0.4) 80%, transparent); margin-bottom: 1.5rem;"></div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: stretch; margin-bottom: 2rem;">

<div style="background: #0C0C0C; border: 2px solid rgba(154, 107, 255, 0.3); border-radius: 12px; padding: 1.5rem; box-shadow: 0 0 25px rgba(154, 107, 255, 0.12); display: flex; flex-direction: column;">

<div style="font-size: 1.875rem; font-weight: 600; margin-bottom: 1rem; line-height: 1.2;">Available Collections</div>

<div style="font-size: 1.375rem; line-height: 1.9; display: flex; flex-direction: column; gap: 0.75rem;">

<div style="display: flex; align-items: center; gap: 1rem;">
<div v-click class="click-scale" style="width: 32px; height: 32px; border-radius: 50%; background: rgba(154, 107, 255, 0.12); border: 2px solid rgba(154, 107, 255, 0.35); display: flex; align-items: center; justify-content: center; font-size: 0.875rem; box-shadow: 0 0 15px rgba(154, 107, 255, 0.2); flex-shrink: 0;">◆</div>
<span><strong>Carbon</strong> - IBM Carbon icons</span>
</div>

<div style="display: flex; align-items: center; gap: 1rem;">
<div v-click class="click-scale" style="width: 32px; height: 32px; border-radius: 50%; background: rgba(154, 107, 255, 0.12); border: 2px solid rgba(154, 107, 255, 0.35); display: flex; align-items: center; justify-content: center; font-size: 0.875rem; box-shadow: 0 0 15px rgba(154, 107, 255, 0.2); flex-shrink: 0;">●</div>
<span><strong>Logos</strong> - Brand logos</span>
</div>

<div style="display: flex; align-items: center; gap: 1rem;">
<div v-click class="click-scale" style="width: 32px; height: 32px; border-radius: 50%; background: rgba(154, 107, 255, 0.12); border: 2px solid rgba(154, 107, 255, 0.35); display: flex; align-items: center; justify-content: center; font-size: 0.875rem; box-shadow: 0 0 15px rgba(154, 107, 255, 0.2); flex-shrink: 0;">▲</div>
<span><strong>DevIcon</strong> - Developer icons</span>
</div>

<div style="display: flex; align-items: center; gap: 1rem;">
<div v-click class="click-scale" style="width: 32px; height: 32px; border-radius: 50%; background: rgba(154, 107, 255, 0.12); border: 2px solid rgba(154, 107, 255, 0.35); display: flex; align-items: center; justify-content: center; font-size: 0.875rem; box-shadow: 0 0 15px rgba(154, 107, 255, 0.2); flex-shrink: 0;">■</div>
<span><strong>Simple Icons</strong> - Popular brands</span>
</div>

<div style="display: flex; align-items: center; gap: 1rem;">
<div v-click class="click-scale" style="width: 32px; height: 32px; border-radius: 50%; background: rgba(154, 107, 255, 0.12); border: 2px solid rgba(154, 107, 255, 0.35); display: flex; align-items: center; justify-content: center; font-size: 0.875rem; box-shadow: 0 0 15px rgba(154, 107, 255, 0.2); flex-shrink: 0;">◉</div>
<span><strong>Phosphor</strong> - Modern UI icons</span>
</div>

<div style="display: flex; align-items: center; gap: 1rem;">
<div v-click class="click-scale" style="width: 32px; height: 32px; border-radius: 50%; background: rgba(154, 107, 255, 0.12); border: 2px solid rgba(154, 107, 255, 0.35); display: flex; align-items: center; justify-content: center; font-size: 0.875rem; box-shadow: 0 0 15px rgba(154, 107, 255, 0.2); flex-shrink: 0;">★</div>
<span><strong>Remix Icon</strong> - Open source</span>
</div>

</div>

</div>

<div style="background: #0A0A0A; border: 2px solid rgba(154, 107, 255, 0.4); border-radius: 12px; padding: 1.5rem; box-shadow: 0 0 35px rgba(154, 107, 255, 0.25); display: flex; flex-direction: column;">

<div style="font-size: 1.875rem; font-weight: 600; margin-bottom: 1rem; line-height: 1.2;">Usage Example</div>

<div style="font-size: 3rem; line-height: 1.6; font-family: 'Fira Code', monospace; flex: 1;">

```html
<!-- Carbon -->
<div class="i-carbon-cloud"/>

<!-- Logos -->
<div class="i-logos-python" />

<!-- DevIcon -->
<div class="i-devicon-typescript" />
```

<div style="padding: 1.5rem 3rem; background: rgba(154, 107, 255, 0.05); border: 2px solid rgba(154, 107, 255, 0.2); border-radius: 12px;">

<div style="font-size: 1.125rem; font-weight: 600; color: #9A6BFF; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 1.25rem; text-align: center;">Icon Preview</div>

<div style="display: flex; justify-content: center; align-items: center; gap: 3rem;">

<div v-click class="click-scale" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
<div style="width: 48px; height: 48px; border-radius: 10px; background: rgba(154, 107, 255, 0.1); border: 2px solid rgba(154, 107, 255, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(154, 107, 255, 0.2); transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 6px 20px rgba(154, 107, 255, 0.4)'; this.style.transform='translateY(-3px)'" onmouseout="this.style.boxShadow='0 4px 12px rgba(154, 107, 255, 0.2)'; this.style.transform='translateY(0)'">☁️</div>
<div style="font-size: 0.875rem; opacity: 0.75; letter-spacing: 0.1em;">Carbon</div>
</div>

<div v-click class="click-scale" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
<div style="width: 48px; height: 48px; border-radius: 10px; background: rgba(154, 107, 255, 0.1); border: 2px solid rgba(154, 107, 255, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(154, 107, 255, 0.2); transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 6px 20px rgba(154, 107, 255, 0.4)'; this.style.transform='translateY(-3px)'" onmouseout="this.style.boxShadow='0 4px 12px rgba(154, 107, 255, 0.2)'; this.style.transform='translateY(0)'">🐍</div>
<div style="font-size: 0.875rem; opacity: 0.75; letter-spacing: 0.1em;">Logos</div>
</div>

<div v-click class="click-scale" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
<div style="width: 48px; height: 48px; border-radius: 10px; background: rgba(154, 107, 255, 0.1); border: 2px solid rgba(154, 107, 255, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(154, 107, 255, 0.2); transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 6px 20px rgba(154, 107, 255, 0.4)'; this.style.transform='translateY(-3px)'" onmouseout="this.style.boxShadow='0 4px 12px rgba(154, 107, 255, 0.2)'; this.style.transform='translateY(0)'">📘</div>
<div style="font-size: 0.875rem; opacity: 0.75; letter-spacing: 0.1em;">DevIcon</div>
</div>

<div v-click class="click-scale" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
<div style="width: 48px; height: 48px; border-radius: 10px; background: rgba(154, 107, 255, 0.1); border: 2px solid rgba(154, 107, 255, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(154, 107, 255, 0.2); transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 6px 20px rgba(154, 107, 255, 0.4)'; this.style.transform='translateY(-3px)'" onmouseout="this.style.boxShadow='0 4px 12px rgba(154, 107, 255, 0.2)'; this.style.transform='translateY(0)'">⚛️</div>
<div style="font-size: 0.875rem; opacity: 0.75; letter-spacing: 0.1em;">Simple</div>
</div>

<div v-click class="click-scale" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
<div style="width: 48px; height: 48px; border-radius: 10px; background: rgba(154, 107, 255, 0.1); border: 2px solid rgba(154, 107, 255, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(154, 107, 255, 0.2); transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 6px 20px rgba(154, 107, 255, 0.4)'; this.style.transform='translateY(-3px)'" onmouseout="this.style.boxShadow='0 4px 12px rgba(154, 107, 255, 0.2)'; this.style.transform='translateY(0)'">🎨</div>
<div style="font-size: 0.875rem; opacity: 0.75; letter-spacing: 0.1em;">Phosphor</div>
</div>

<div v-click class="click-scale" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
<div style="width: 48px; height: 48px; border-radius: 10px; background: rgba(154, 107, 255, 0.1); border: 2px solid rgba(154, 107, 255, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(154, 107, 255, 0.2); transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 6px 20px rgba(154, 107, 255, 0.4)'; this.style.transform='translateY(-3px)'" onmouseout="this.style.boxShadow='0 4px 12px rgba(154, 107, 255, 0.2)'; this.style.transform='translateY(0)'">🔧</div>
<div style="font-size: 0.875rem; opacity: 0.75; letter-spacing: 0.1em;">Remix</div>
</div>

</div>

</div>

</div>

</div>

</div>

</div>

---
layout: center
glow: topmost
glowOpacity: 0.5
---

<div style="padding: 5rem 3rem;">

<div style="font-size: 4.5rem; font-weight: 700; margin-bottom: 1rem; text-shadow: 0 0 40px rgba(154, 107, 255, 0.15); line-height: 1.1;">Slide Transitions</div>

<div style="font-size: 2.25rem; font-weight: 400; margin-bottom: 3rem; opacity: 0.85; line-height: 1.3;">Interactive demonstration of available transition styles</div>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 3rem;">

<div v-click class="click-scale" style="background: rgba(154, 107, 255, 0.08); border: 2px solid rgba(154, 107, 255, 0.3); border-radius: 12px; padding: 1.5rem; text-align: center;">
<div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⬌</div>
<div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; color: #9A6BFF;">Fade</div>
<div style="font-size: 1rem; opacity: 0.75; line-height: 1.5;">Smooth dissolve<br/>500ms</div>
</div>

<div v-click class="click-scale" style="background: rgba(154, 107, 255, 0.08); border: 2px solid rgba(154, 107, 255, 0.3); border-radius: 12px; padding: 1.5rem; text-align: center;">
<div style="font-size: 2.5rem; margin-bottom: 0.5rem;">→</div>
<div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; color: #9A6BFF;">Slide</div>
<div style="font-size: 1rem; opacity: 0.75; line-height: 1.5;">Directional<br/>450ms</div>
</div>

<div v-click class="click-scale" style="background: rgba(154, 107, 255, 0.08); border: 2px solid rgba(154, 107, 255, 0.3); border-radius: 12px; padding: 1.5rem; text-align: center;">
<div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⊕</div>
<div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; color: #9A6BFF;">Scale</div>
<div style="font-size: 1rem; opacity: 0.75; line-height: 1.5;">90% → 100%<br/>450ms</div>
</div>

<div v-click class="click-scale" style="background: rgba(154, 107, 255, 0.08); border: 2px solid rgba(154, 107, 255, 0.3); border-radius: 12px; padding: 1.5rem; text-align: center;">
<div style="font-size: 2.5rem; margin-bottom: 0.5rem;">◉</div>
<div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; color: #9A6BFF;">Blur</div>
<div style="font-size: 1rem; opacity: 0.75; line-height: 1.5;">4–6px gaussian<br/>500ms</div>
</div>

<div v-click class="click-scale" style="background: rgba(154, 107, 255, 0.08); border: 2px solid rgba(154, 107, 255, 0.3); border-radius: 12px; padding: 1.5rem; text-align: center;">
<div style="font-size: 2.5rem; margin-bottom: 0.5rem;">✨</div>
<div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; color: #9A6BFF;">Glow</div>
<div style="font-size: 1rem; opacity: 0.75; line-height: 1.5;">Violet sweep<br/>400ms</div>
</div>

<div v-click class="click-scale" style="background: rgba(154, 107, 255, 0.08); border: 2px solid rgba(154, 107, 255, 0.3); border-radius: 12px; padding: 1.5rem; text-align: center;">
<div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⋯</div>
<div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; color: #9A6BFF;">Stagger</div>
<div style="font-size: 1rem; opacity: 0.75; line-height: 1.5;">Sequential<br/>100–150ms</div>
</div>

</div>

<div style="display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; padding: 2rem 0;">

<button style="background: rgba(154, 107, 255, 0.15); border: 2px solid rgba(154, 107, 255, 0.4); border-radius: 8px; padding: 0.75rem 2rem; font-size: 1.25rem; font-weight: 600; color: #FCFCFC; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 0 20px rgba(154, 107, 255, 0.4)'; this.style.background='rgba(154, 107, 255, 0.25)'" onmouseout="this.style.boxShadow='none'; this.style.background='rgba(154, 107, 255, 0.15)'">Fade</button>

<button style="background: rgba(154, 107, 255, 0.15); border: 2px solid rgba(154, 107, 255, 0.4); border-radius: 8px; padding: 0.75rem 2rem; font-size: 1.25rem; font-weight: 600; color: #FCFCFC; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 0 20px rgba(154, 107, 255, 0.4)'; this.style.background='rgba(154, 107, 255, 0.25)'" onmouseout="this.style.boxShadow='none'; this.style.background='rgba(154, 107, 255, 0.15)'">Slide</button>

<button style="background: rgba(154, 107, 255, 0.15); border: 2px solid rgba(154, 107, 255, 0.4); border-radius: 8px; padding: 0.75rem 2rem; font-size: 1.25rem; font-weight: 600; color: #FCFCFC; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 0 20px rgba(154, 107, 255, 0.4)'; this.style.background='rgba(154, 107, 255, 0.25)'" onmouseout="this.style.boxShadow='none'; this.style.background='rgba(154, 107, 255, 0.15)'">Scale</button>

<button style="background: rgba(154, 107, 255, 0.15); border: 2px solid rgba(154, 107, 255, 0.4); border-radius: 8px; padding: 0.75rem 2rem; font-size: 1.25rem; font-weight: 600; color: #FCFCFC; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 0 20px rgba(154, 107, 255, 0.4)'; this.style.background='rgba(154, 107, 255, 0.25)'" onmouseout="this.style.boxShadow='none'; this.style.background='rgba(154, 107, 255, 0.15)'">Blur</button>

<button style="background: rgba(154, 107, 255, 0.15); border: 2px solid rgba(154, 107, 255, 0.4); border-radius: 8px; padding: 0.75rem 2rem; font-size: 1.25rem; font-weight: 600; color: #FCFCFC; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 0 20px rgba(154, 107, 255, 0.4)'; this.style.background='rgba(154, 107, 255, 0.25)'" onmouseout="this.style.boxShadow='none'; this.style.background='rgba(154, 107, 255, 0.15)'">Glow</button>

<button style="background: rgba(154, 107, 255, 0.15); border: 2px solid rgba(154, 107, 255, 0.4); border-radius: 8px; padding: 0.75rem 2rem; font-size: 1.25rem; font-weight: 600; color: #FCFCFC; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 0 20px rgba(154, 107, 255, 0.4)'; this.style.background='rgba(154, 107, 255, 0.25)'" onmouseout="this.style.boxShadow='none'; this.style.background='rgba(154, 107, 255, 0.15)'">Stagger</button>

</div>

<div style="font-size: 1.75rem; opacity: 0.8; text-align: center; line-height: 1.6;">
💡 <em>Navigate between slides to experience smooth transitions</em>
</div>

</div>

---
layout: default
glow: center
glowOpacity: 0.3
---

<div style="padding: 2.5rem 4rem 2rem 4rem;">

<div style="font-size: 3.5rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.1;">Layout System</div>

<div style="font-size: 1.5rem; font-weight: 400; margin-bottom: 1.75rem; opacity: 0.85;">Modular configurations for every presentation need</div>

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; row-gap: 1.5rem;">

<div v-click class="click-scale">
<div style="font-size: 1.25rem; color: #B0B0B0; margin-bottom: 0.5rem; font-weight: 500;">01. Title + Bullets</div>
<div style="background: rgba(154, 107, 255, 0.08); border: 2px solid rgba(154, 107, 255, 0.25); border-radius: 12px; padding: 1.25rem; box-shadow: 0 0 20px rgba(154, 107, 255, 0.15); height: 160px; display: flex; flex-direction: column; justify-content: center;">
<div style="font-size: 1.875rem; font-weight: 600; margin-bottom: 0.75rem; color: #9A6BFF;">Layout Title</div>
<div style="font-size: 1.125rem; line-height: 1.6;">
<div>✅ Responsive grid system</div>
<div>✅ Supports animations</div>
<div>✅ Projection-ready typography</div>
</div>
</div>
</div>

<div v-click class="click-scale">
<div style="font-size: 1.25rem; color: #B0B0B0; margin-bottom: 0.5rem; font-weight: 500;">02. Text + Image</div>
<div style="background: rgba(154, 107, 255, 0.08); border: 2px solid rgba(154, 107, 255, 0.25); border-radius: 12px; padding: 1.25rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; box-shadow: 0 0 20px rgba(154, 107, 255, 0.15); height: 160px;">
<div style="display: flex; flex-direction: column; justify-content: center;">
<div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem;">Content</div>
<div style="font-size: 1rem; opacity: 0.8; line-height: 1.6;">• Bullet one<br/>• Bullet two</div>
</div>
<div style="background: rgba(154, 107, 255, 0.1); border: 2px dashed rgba(154, 107, 255, 0.3); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; color: #9A6BFF;">Image<br/>16:9</div>
</div>
</div>

<div v-click class="click-scale">
<div style="font-size: 1.25rem; color: #B0B0B0; margin-bottom: 0.5rem; font-weight: 500;">03. Two Columns</div>
<div style="background: rgba(154, 107, 255, 0.08); border: 2px solid rgba(154, 107, 255, 0.25); border-radius: 12px; padding: 1.25rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; box-shadow: 0 0 20px rgba(154, 107, 255, 0.15); height: 160px;">
<div style="border: 1px solid rgba(154, 107, 255, 0.2); border-radius: 8px; padding: 1rem; display: flex; flex-direction: column; justify-content: center;">
<div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem;">Left Column</div>
<div style="font-size: 0.95rem; opacity: 0.75;">Primary content area</div>
</div>
<div style="border: 1px solid rgba(154, 107, 255, 0.2); border-radius: 8px; padding: 1rem; display: flex; flex-direction: column; justify-content: center;">
<div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem;">Right Column</div>
<div style="font-size: 0.95rem; opacity: 0.75;">Secondary info block</div>
</div>
</div>
</div>

<div v-click class="click-scale">
<div style="font-size: 1.25rem; color: #B0B0B0; margin-bottom: 0.5rem; font-weight: 500;">04. Section Title</div>
<div style="background: rgba(154, 107, 255, 0.08); border: 2px solid rgba(154, 107, 255, 0.25); border-radius: 12px; padding: 1.25rem; text-align: center; box-shadow: 0 0 20px rgba(154, 107, 255, 0.15); height: 160px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
<div style="font-size: 1.875rem; font-weight: 700; margin-bottom: 0.5rem;">Section Title</div>
<div style="font-size: 1.125rem; opacity: 0.75; margin-bottom: 0.75rem;">Subtitle description</div>
<div style="width: 60%; height: 2px; background: rgba(154, 107, 255, 0.3);"></div>
</div>
</div>

<div v-click class="click-scale">
<div style="font-size: 1.25rem; color: #B0B0B0; margin-bottom: 0.5rem; font-weight: 500;">05. Centered Focus</div>
<div style="background: linear-gradient(180deg, rgba(154, 107, 255, 0.15) 0%, rgba(154, 107, 255, 0.05) 100%); border: 2px solid rgba(154, 107, 255, 0.25); border-radius: 12px; padding: 1.25rem; text-align: center; display: flex; align-items: center; justify-content: center; height: 160px; box-shadow: 0 0 20px rgba(154, 107, 255, 0.15);">
<div style="font-size: 2.25rem; font-weight: 700; line-height: 1.2;">Single Focus Title</div>
</div>
</div>

<div v-click class="click-scale">
<div style="font-size: 1.25rem; color: #B0B0B0; margin-bottom: 0.5rem; font-weight: 500;">06. Image Overlay</div>
<div style="background: rgba(154, 107, 255, 0.08); border: 2px solid rgba(154, 107, 255, 0.25); border-radius: 12px; padding: 1.25rem; position: relative; height: 160px; display: flex; align-items: flex-start; box-shadow: 0 0 20px rgba(154, 107, 255, 0.15); overflow: hidden;">
<div style="background: rgba(154, 107, 255, 0.1); border: 2px dashed rgba(154, 107, 255, 0.3); border-radius: 8px; position: absolute; inset: 1.25rem; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; color: #9A6BFF; opacity: 0.4;">Full-Width Image</div>
<div style="position: relative; z-index: 1; background: rgba(0, 0, 0, 0.7); padding: 0.5rem 1.25rem; border-radius: 8px; font-size: 1.5rem; font-weight: 600; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);">Title Overlay</div>
</div>
</div>

</div>

<div style="margin-top: 1.5rem; font-size: 1.125rem; text-align: center; opacity: 0.7; font-style: italic;">
All layouts maintain consistent baseline grid alignment
</div>

</div>

---
layout: default
glow: center
glowOpacity: 0.3
---

<div style="padding: 3rem 6rem 2.5rem 6rem;">

<!-- Title Section -->
<div style="text-align: center; margin-bottom: 3rem;">
<div style="font-size: 4.5rem; font-weight: 700; line-height: 1.1; margin-bottom: 0.75rem; color: #FCFCFC;">Typography Scale</div>
<div style="font-size: 2.25rem; font-weight: 400; line-height: 1.3; color: #E0E0E0;">Presentation-optimized sizes</div>
</div>

<!-- Three-Column Layout -->
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 2.5rem;">

<!-- Left Panel: Headings -->
<div style="background: rgba(154, 107, 255, 0.05); border: 2px solid rgba(154, 107, 255, 0.25); border-radius: 12px; padding: 2rem; backdrop-filter: blur(10px); box-shadow: 0 0 25px rgba(154, 107, 255, 0.15);">

<div style="font-size: 1.875rem; font-weight: 600; margin-bottom: 1.5rem; color: #9A6BFF; text-align: center;">Headings</div>

<div style="display: flex; flex-direction: column; gap: 1rem;">

<div style="border-bottom: 1px solid rgba(154, 107, 255, 0.2); padding-bottom: 0.75rem;">
<div style="font-size: 2.5rem; font-weight: 700; line-height: 1.2; color: #FCFCFC; margin-bottom: 0.25rem;">H1 Heading</div>
<div style="font-size: 0.875rem; color: #B0B0B0; font-family: 'Fira Code', monospace;">72pt / 4.5rem</div>
</div>

<div style="border-bottom: 1px solid rgba(154, 107, 255, 0.2); padding-bottom: 0.75rem;">
<div style="font-size: 2rem; font-weight: 700; line-height: 1.2; color: #FCFCFC; margin-bottom: 0.25rem;">H2 Heading</div>
<div style="font-size: 0.875rem; color: #B0B0B0; font-family: 'Fira Code', monospace;">52pt / 3.25rem</div>
</div>

<div style="border-bottom: 1px solid rgba(154, 107, 255, 0.2); padding-bottom: 0.75rem;">
<div style="font-size: 1.5rem; font-weight: 700; line-height: 1.2; color: #FCFCFC; margin-bottom: 0.25rem;">H3 Heading</div>
<div style="font-size: 0.875rem; color: #B0B0B0; font-family: 'Fira Code', monospace;">40pt / 2.5rem</div>
</div>

<div style="border-bottom: 1px solid rgba(154, 107, 255, 0.2); padding-bottom: 0.75rem;">
<div style="font-size: 1.25rem; font-weight: 700; line-height: 1.2; color: #FCFCFC; margin-bottom: 0.25rem;">H4 Heading</div>
<div style="font-size: 0.875rem; color: #B0B0B0; font-family: 'Fira Code', monospace;">34pt / 2.125rem</div>
</div>

<div>
<div style="font-size: 1.125rem; font-weight: 700; line-height: 1.2; color: #FCFCFC; margin-bottom: 0.25rem;">H5 Heading</div>
<div style="font-size: 0.875rem; color: #B0B0B0; font-family: 'Fira Code', monospace;">30pt / 1.875rem</div>
</div>

</div>

</div>

<!-- Center Panel: Body Text -->
<div style="background: rgba(154, 107, 255, 0.05); border: 2px solid rgba(154, 107, 255, 0.25); border-radius: 12px; padding: 2rem; backdrop-filter: blur(10px); box-shadow: 0 0 25px rgba(154, 107, 255, 0.15);">

<div style="font-size: 1.875rem; font-weight: 600; margin-bottom: 1.5rem; color: #9A6BFF; text-align: center;">Body Text</div>

<div style="display: flex; flex-direction: column; gap: 1.25rem;">

<div style="border-bottom: 1px solid rgba(154, 107, 255, 0.2); padding-bottom: 1rem;">
<div style="font-size: 1rem; font-weight: 600; color: #9A6BFF; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">Body</div>
<div style="font-size: 2rem; line-height: 1.5; color: #E0E0E0; margin-bottom: 0.25rem;">Body text for standard paragraphs.</div>
<div style="font-size: 0.875rem; color: #B0B0B0; font-family: 'Fira Code', monospace;">32pt / 2rem</div>
</div>

<div style="border-bottom: 1px solid rgba(154, 107, 255, 0.2); padding-bottom: 1rem;">
<div style="font-size: 1rem; font-weight: 600; color: #9A6BFF; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">Subtext</div>
<div style="font-size: 1.75rem; line-height: 1.5; color: #E0E0E0; margin-bottom: 0.25rem;">Subtext for supporting information.</div>
<div style="font-size: 0.875rem; color: #B0B0B0; font-family: 'Fira Code', monospace;">28pt / 1.75rem</div>
</div>

<div style="border-bottom: 1px solid rgba(154, 107, 255, 0.2); padding-bottom: 1rem;">
<div style="font-size: 1rem; font-weight: 600; color: #9A6BFF; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">Caption</div>
<div style="font-size: 1.5rem; line-height: 1.5; color: #B0B0B0; margin-bottom: 0.25rem;">Caption text for charts and images.</div>
<div style="font-size: 0.875rem; color: #B0B0B0; font-family: 'Fira Code', monospace;">24pt / 1.5rem</div>
</div>

<div>
<div style="font-size: 1rem; font-weight: 600; color: #9A6BFF; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">Label</div>
<div style="font-size: 1.375rem; line-height: 1.5; color: #B0B0B0; margin-bottom: 0.25rem;">Label text for UI and annotations.</div>
<div style="font-size: 0.875rem; color: #B0B0B0; font-family: 'Fira Code', monospace;">22pt / 1.375rem</div>
</div>

</div>

</div>

<!-- Right Panel: Style Variants -->
<div style="background: rgba(154, 107, 255, 0.05); border: 2px solid rgba(154, 107, 255, 0.25); border-radius: 12px; padding: 2rem; backdrop-filter: blur(10px); box-shadow: 0 0 25px rgba(154, 107, 255, 0.15);">

<div style="font-size: 1.875rem; font-weight: 600; margin-bottom: 1.5rem; color: #9A6BFF; text-align: center;">Style Variants</div>

<div style="display: flex; flex-direction: column; gap: 1.25rem;">

<div style="border-bottom: 1px solid rgba(154, 107, 255, 0.2); padding-bottom: 1rem;">
<div style="font-size: 1rem; font-weight: 600; color: #9A6BFF; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem;">Font Weights</div>
<div style="font-size: 1.5rem; font-weight: 300; color: #E0E0E0; line-height: 1.6;">Light (300)</div>
<div style="font-size: 1.5rem; font-weight: 400; color: #E0E0E0; line-height: 1.6;">Regular (400)</div>
<div style="font-size: 1.5rem; font-weight: 500; color: #E0E0E0; line-height: 1.6;">Medium (500)</div>
<div style="font-size: 1.5rem; font-weight: 600; color: #E0E0E0; line-height: 1.6;">Semi-bold (600)</div>
<div style="font-size: 1.5rem; font-weight: 700; color: #E0E0E0; line-height: 1.6;">Bold (700)</div>
</div>

<div style="border-bottom: 1px solid rgba(154, 107, 255, 0.2); padding-bottom: 1rem;">
<div style="font-size: 1rem; font-weight: 600; color: #9A6BFF; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem;">Accent Colors</div>
<div style="font-size: 1.5rem; color: #9A6BFF; line-height: 1.6; margin-bottom: 0.5rem;">Violet Link (#9A6BFF)</div>
<div style="font-size: 1.5rem; color: #E0E0E0; line-height: 1.6;"><span style="color: #10B981;">Success</span> · <span style="color: #EF4444;">Error</span></div>
</div>

<div>
<div style="font-size: 1rem; font-weight: 600; color: #9A6BFF; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem;">Monospace</div>
<div style="font-size: 1.375rem; font-family: 'Fira Code', monospace; color: #E0E0E0; background: rgba(154, 107, 255, 0.1); padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid rgba(154, 107, 255, 0.3);">const code = true;</div>
<div style="font-size: 0.875rem; color: #B0B0B0; margin-top: 0.5rem; font-family: 'Fira Code', monospace;">30pt / 1.875rem</div>
</div>

</div>

</div>

</div>

<!-- Footer -->
<div style="text-align: center; font-size: 1.75rem; color: #B0B0B0; line-height: 1.6; font-style: italic;">
All text adheres to the <strong style="color: #9A6BFF;">10/20/30 rule</strong> — minimum 30pt for projection readability.
</div>

</div>

---
layout: default
glow: full
glowOpacity: 0.2
---

<!--
VIEWPORT CALCULATION:
- Padding: 60px (30 + 30)
- Title: 80px (52 + 28 margin)
- Band 1: 135px (28 header + 90 box + 17 margin)
- Divider: 20px
- Band 2: 135px
- Divider: 20px
- Band 3: 125px (28 header + 80 box + 17 margin)
- Divider: 20px
- Band 4: 120px (28 header + 65 box + 27 margin)
- Footer: 45px (30 + 15 margin)
TOTAL: 760px ✅
-->

<div style="padding: 1.875rem 4rem;">

<!-- Title Section -->
<div style="text-align: center; margin-bottom: 1.75rem;">
<div style="font-size: 3.25rem; font-weight: 700; line-height: 1.1; margin-bottom: 0.5rem; color: #FCFCFC;">Design System Colors</div>
<div style="font-size: 1.5rem; font-weight: 400; line-height: 1.3; color: #E0E0E0;">Theme color palette and accessibility compliance</div>
</div>

<!-- Band 1: Primary Palette -->
<div style="margin-bottom: 1rem;">
<div style="font-size: 1.75rem; font-weight: 600; margin-bottom: 0.75rem; color: #9A6BFF;">Primary Palette</div>
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">

<div style="background: #9A6BFF; height: 90px; border-radius: 10px; border: 2px solid rgba(154, 107, 255, 0.5); box-shadow: 0 0 20px rgba(154, 107, 255, 0.3); display: flex; flex-direction: column; align-items: center; justify-content: center;">
<div style="font-size: 1.375rem; font-weight: 600; color: #FCFCFC; margin-bottom: 0.25rem;">Violet Primary</div>
<div style="font-size: 1.125rem; color: #FCFCFC; opacity: 0.9; font-family: 'Fira Code', monospace;">#9A6BFF</div>
</div>

<div style="background: #1A1A1A; height: 90px; border-radius: 10px; border: 2px solid rgba(255, 255, 255, 0.15); box-shadow: 0 0 12px rgba(255, 255, 255, 0.1); display: flex; flex-direction: column; align-items: center; justify-content: center;">
<div style="font-size: 1.375rem; font-weight: 600; color: #E0E0E0; margin-bottom: 0.25rem;">Neutral Gray</div>
<div style="font-size: 1.125rem; color: #E0E0E0; opacity: 0.8; font-family: 'Fira Code', monospace;">#1A1A1A</div>
</div>

<div style="background: #FCFCFC; height: 90px; border-radius: 10px; border: 2px solid rgba(0, 0, 0, 0.2); box-shadow: 0 0 12px rgba(255, 255, 255, 0.2); display: flex; flex-direction: column; align-items: center; justify-content: center;">
<div style="font-size: 1.375rem; font-weight: 600; color: #000000; margin-bottom: 0.25rem;">White</div>
<div style="font-size: 1.125rem; color: #1A1A1A; opacity: 0.8; font-family: 'Fira Code', monospace;">#FCFCFC</div>
</div>

<div style="background: #000000; height: 90px; border-radius: 10px; border: 2px solid rgba(154, 107, 255, 0.3); box-shadow: 0 0 12px rgba(154, 107, 255, 0.15); display: flex; flex-direction: column; align-items: center; justify-content: center;">
<div style="font-size: 1.375rem; font-weight: 600; color: #FCFCFC; margin-bottom: 0.25rem;">Black</div>
<div style="font-size: 1.125rem; color: #FCFCFC; opacity: 0.9; font-family: 'Fira Code', monospace;">#000000</div>
</div>

</div>
</div>

<div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(154, 107, 255, 0.2) 20%, rgba(154, 107, 255, 0.2) 80%, transparent); margin: 1.25rem 0;"></div>

<!-- Band 2: Semantic Colors -->
<div style="margin-bottom: 1rem;">
<div style="font-size: 1.75rem; font-weight: 600; margin-bottom: 0.75rem; color: #9A6BFF;">Semantic States</div>
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">

<div style="background: #4ADE80; height: 90px; border-radius: 10px; border: 2px solid rgba(74, 222, 128, 0.5); box-shadow: 0 4px 15px rgba(74, 222, 128, 0.25); display: flex; flex-direction: column; align-items: center; justify-content: center;">
<div style="font-size: 1.375rem; font-weight: 600; color: #000000; margin-bottom: 0.25rem;">Success</div>
<div style="font-size: 1.125rem; color: #000000; opacity: 0.8; font-family: 'Fira Code', monospace;">#4ADE80</div>
</div>

<div style="background: #FBBF24; height: 90px; border-radius: 10px; border: 2px solid rgba(251, 191, 36, 0.5); box-shadow: 0 4px 15px rgba(251, 191, 36, 0.25); display: flex; flex-direction: column; align-items: center; justify-content: center;">
<div style="font-size: 1.375rem; font-weight: 600; color: #000000; margin-bottom: 0.25rem;">Warning</div>
<div style="font-size: 1.125rem; color: #000000; opacity: 0.8; font-family: 'Fira Code', monospace;">#FBBF24</div>
</div>

<div style="background: #F87171; height: 90px; border-radius: 10px; border: 2px solid rgba(248, 113, 113, 0.5); box-shadow: 0 4px 15px rgba(248, 113, 113, 0.25); display: flex; flex-direction: column; align-items: center; justify-content: center;">
<div style="font-size: 1.375rem; font-weight: 600; color: #FCFCFC; margin-bottom: 0.25rem;">Error</div>
<div style="font-size: 1.125rem; color: #FCFCFC; opacity: 0.9; font-family: 'Fira Code', monospace;">#F87171</div>
</div>

<div style="background: #38BDF8; height: 90px; border-radius: 10px; border: 2px solid rgba(56, 189, 248, 0.5); box-shadow: 0 4px 15px rgba(56, 189, 248, 0.25); display: flex; flex-direction: column; align-items: center; justify-content: center;">
<div style="font-size: 1.375rem; font-weight: 600; color: #000000; margin-bottom: 0.25rem;">Info</div>
<div style="font-size: 1.125rem; color: #000000; opacity: 0.8; font-family: 'Fira Code', monospace;">#38BDF8</div>
</div>

</div>
</div>

<div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(154, 107, 255, 0.2) 20%, rgba(154, 107, 255, 0.2) 80%, transparent); margin: 1.25rem 0;"></div>

<!-- Band 3: Gradients & Variants -->
<div style="margin-bottom: 1rem;">
<div style="font-size: 1.75rem; font-weight: 600; margin-bottom: 0.75rem; color: #9A6BFF;">Gradients & Variants</div>
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">

<div style="background: linear-gradient(90deg, #9A6BFF 0%, #B38CFF 50%, #C9A9FF 100%); height: 80px; border-radius: 10px; border: 2px solid rgba(154, 107, 255, 0.4); box-shadow: 0 0 20px rgba(154, 107, 255, 0.3); display: flex; align-items: center; justify-content: center;">
<div style="font-size: 1.25rem; font-weight: 600; font-style: italic; color: #FCFCFC; text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);">🌈 Violet Gradient</div>
</div>

<div style="background: rgba(0, 0, 0, 0.9); backdrop-filter: blur(10px); height: 80px; border-radius: 10px; border: 2px solid rgba(154, 107, 255, 0.25); box-shadow: 0 0 15px rgba(154, 107, 255, 0.15); display: flex; align-items: center; justify-content: center;">
<div style="font-size: 1.25rem; font-weight: 600; font-style: italic; color: #E0E0E0;">⚙️ Dark Glass</div>
</div>

<div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); height: 80px; border-radius: 10px; border: 2px solid rgba(255, 255, 255, 0.2); box-shadow: 0 0 15px rgba(255, 255, 255, 0.1); display: flex; align-items: center; justify-content: center;">
<div style="font-size: 1.25rem; font-weight: 600; font-style: italic; color: #FCFCFC;">✨ Light Glass</div>
</div>

<div style="background: rgba(26, 26, 26, 0.9); height: 80px; border-radius: 10px; border: 2px solid rgba(154, 107, 255, 0.2); box-shadow: 0 0 12px rgba(154, 107, 255, 0.1); display: flex; align-items: center; justify-content: center;">
<div style="font-size: 1.25rem; font-weight: 600; font-style: italic; color: #B0B0B0;">📦 Card Background</div>
</div>

</div>
</div>

<div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(154, 107, 255, 0.2) 20%, rgba(154, 107, 255, 0.2) 80%, transparent); margin: 1.25rem 0;"></div>

<!-- Band 4: Text & Background Colors -->
<div>
<div style="font-size: 1.75rem; font-weight: 600; margin-bottom: 0.75rem; color: #9A6BFF;">Text & Background Colors</div>
<div style="display: flex; justify-content: space-between; gap: 0.875rem; flex-wrap: wrap;">

<div style="background: #000000; border: 2px solid rgba(252, 252, 252, 0.2); border-radius: 20px; padding: 1rem 1.75rem; display: flex; align-items: center; justify-content: center; min-width: 180px; height: 65px;">
<div style="font-size: 1.25rem; font-weight: 600; color: #FCFCFC;">Text on Dark</div>
</div>

<div style="background: #FCFCFC; border: 2px solid rgba(0, 0, 0, 0.2); border-radius: 20px; padding: 1rem 1.75rem; display: flex; align-items: center; justify-content: center; min-width: 180px; height: 65px;">
<div style="font-size: 1.25rem; font-weight: 600; color: #1A1A1A;">Text on Light</div>
</div>

<div style="background: rgba(154, 107, 255, 0.1); border: 2px solid rgba(154, 107, 255, 0.4); border-radius: 20px; padding: 1rem 1.75rem; display: flex; align-items: center; justify-content: center; min-width: 170px; height: 65px;">
<div style="font-size: 1.25rem; font-weight: 600; color: #9A6BFF;">Accent Text</div>
</div>

<div style="background: #0A0A0A; border: 2px solid rgba(138, 138, 138, 0.3); border-radius: 20px; padding: 1rem 1.75rem; display: flex; align-items: center; justify-content: center; min-width: 175px; height: 65px;">
<div style="font-size: 1.25rem; font-weight: 600; color: #8A8A8A;">Disabled Text</div>
</div>

<div style="background: rgba(179, 140, 255, 0.15); border: 2px solid rgba(179, 140, 255, 0.4); border-radius: 20px; padding: 1rem 1.75rem; display: flex; align-items: center; justify-content: center; min-width: 165px; height: 65px; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 0 20px rgba(179, 140, 255, 0.5)'; this.style.background='rgba(179, 140, 255, 0.25)'" onmouseout="this.style.boxShadow='none'; this.style.background='rgba(179, 140, 255, 0.15)'">
<div style="font-size: 1.25rem; font-weight: 600; color: #B38CFF;">Link Hover</div>
</div>

<div style="background: #111111; border: 2px solid rgba(154, 107, 255, 0.2); border-radius: 20px; padding: 1rem 1.75rem; display: flex; align-items: center; justify-content: center; min-width: 200px; height: 65px;">
<div style="font-size: 1.25rem; font-weight: 600; color: #B0B0B0;">Muted Background</div>
</div>

</div>
</div>

<!-- Footer Note -->
<div style="margin-top: 1.5rem; text-align: center; font-size: 1.375rem; color: #B0B0B0; line-height: 1.6;">
💡 <em>All colors meet <strong style="color: #9A6BFF;">WCAG AA</strong> contrast guidelines for body text on dark backgrounds.</em>
</div>

</div>



---
layout: default
glow: center
glowOpacity: 0.3
---

<!--
VIEWPORT CALCULATION (CORRECTED):
- Padding: 50px (25 + 25)
- Title: 70px (46 + 24 margin)
- Subtitle: 35px (24 + 11 margin)
- Code block: 280px (with actual line heights)
- Divider: 15px
- Footer panel: 90px
- Info section: 90px (3 boxes)
- Bottom margin: 20px
TOTAL: 650px ✅
-->

<div style="padding: 1.5rem 5rem 1.25rem 5rem;">

<!-- Title Section -->
<div style="text-align: center; margin-bottom: 1.5rem;">
<div style="font-size: 2.875rem; font-weight: 700; line-height: 1.1; margin-bottom: 0.375rem; color: #FCFCFC;">GitHub Pages Ready</div>
<div style="font-size: 1.5rem; font-weight: 400; line-height: 1.3; color: #E0E0E0;">Automated deployment configured</div>
</div>

<div style="background: #111111; border: 2px solid rgba(154, 107, 255, 0.3); border-radius: 14px; padding: 1.5rem 1.75rem; margin-bottom: 1rem; box-shadow: 0 0 25px rgba(154, 107, 255, 0.15); position: relative;">

<div style="position: absolute; top: 0.875rem; right: 1.25rem; font-size: 1.75rem; opacity: 0.4;">🚀</div>

<div style="font-family: 'Fira Code', monospace; font-size: 1.625rem; line-height: 1.6;">

<div style="margin-bottom: 0.5rem;">
<span style="color: #8A8A8A;"># Build for GitHub Pages</span>
</div>
<div style="margin-bottom: 1rem;">
<span style="color: #FCFCFC;">npm run</span> <span style="color: #9A6BFF; font-weight: 600;">build:gh</span>
</div>

<div style="margin-bottom: 0.5rem;">
<span style="color: #8A8A8A;"># Export to PDF</span>
</div>
<div style="margin-bottom: 1rem;">
<span style="color: #FCFCFC;">npm run</span> <span style="color: #9A6BFF; font-weight: 600;">export:pdf</span>
</div>

<div style="margin-bottom: 0.5rem;">
<span style="color: #8A8A8A;"># Export to PNG</span>
</div>
<div>
<span style="color: #FCFCFC;">npm run</span> <span style="color: #9A6BFF; font-weight: 600;">export:png</span>
</div>

</div>

</div>

<!-- Divider -->
<div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(154, 107, 255, 0.3) 20%, rgba(154, 107, 255, 0.3) 80%, transparent); margin-bottom: 1rem;"></div>

<!-- GitHub Actions Footer Panel -->
<div style="background: rgba(154, 107, 255, 0.05); border: 2px solid rgba(154, 107, 255, 0.25); border-radius: 10px; padding: 1rem 1.5rem; display: flex; align-items: center; gap: 1.25rem; box-shadow: 0 0 20px rgba(154, 107, 255, 0.1); margin-bottom: 1rem; backdrop-filter: blur(10px);">

<div style="font-size: 2rem; opacity: 0.6;">⚙️</div>

<div style="flex: 1;">
<div style="font-size: 1.25rem; font-weight: 600; color: #9A6BFF; margin-bottom: 0.125rem;">GitHub Actions Workflow:</div>
<div style="font-size: 1.125rem; color: #E0E0E0; font-family: 'Fira Code', monospace; margin-bottom: 0.25rem;">.github/workflows/deploy.yml</div>
<div style="font-size: 1rem; color: #B0B0B0; font-style: italic; line-height: 1.4;">Automatically builds and deploys to GitHub Pages upon push to main</div>
</div>

</div>

<!-- Additional Information -->
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem;">

<div style="background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(154, 107, 255, 0.2); border-radius: 8px; padding: 1rem; text-align: center;">
<div style="font-size: 1.375rem; margin-bottom: 0.375rem;">📦</div>
<div style="font-size: 1rem; color: #E0E0E0; line-height: 1.4;">Requires <strong style="color: #9A6BFF;">Node.js 18+</strong> installed</div>
</div>

<div style="background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(154, 107, 255, 0.2); border-radius: 8px; padding: 1rem; text-align: center;">
<div style="font-size: 1.375rem; margin-bottom: 0.375rem;">📁</div>
<div style="font-size: 1rem; color: #E0E0E0; line-height: 1.4;">Outputs in <strong style="color: #9A6BFF;">/dist</strong> or <strong style="color: #9A6BFF;">/exports</strong></div>
</div>

<div style="background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(154, 107, 255, 0.2); border-radius: 8px; padding: 1rem; text-align: center;">
<div style="font-size: 1.375rem; margin-bottom: 0.375rem;">🎨</div>
<div style="font-size: 1rem; color: #E0E0E0; line-height: 1.4;">Exports use <strong style="color: #9A6BFF;">300 DPI</strong> scaling</div>
</div>

</div>

</div>

---
layout: cover
glow: center
glowOpacity: 0.5
---

<div class="text-7xl font-bold mb-6">Thank You</div>

<div class="text-3xl font-semibold mb-8">Expanso Slidev Theme</div>

<div class="text-violet text-2xl">
All features integrated and ready to use
</div>

<div class="abs-bl m-8 text-xl opacity-50">
expanso.io
</div>
