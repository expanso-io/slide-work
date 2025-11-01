# Slidev Migration Roadmap for Expanso

**Objective:** Successfully migrate Expanso presentation deck from Figma-based JSON to Slidev with full design system parity and enhanced interactivity.

**Timeline:** 4-6 weeks (phased approach)

---

## Phase 1: Foundation & Proof of Concept (Week 1)

### Goal
Establish Slidev project with Expanso branding and create 3-5 sample slides to validate approach.

### Tasks

#### 1.1 Project Setup
- [ ] Initialize Slidev project
- [ ] Install dependencies (Mermaid, KaTeX addons)
- [ ] Configure theme structure
- [ ] Set up git repository with proper .gitignore

#### 1.2 Brand Implementation
- [ ] Create `uno.config.ts` with Expanso color palette
  - Dark navy background: `#1a2332`
  - Text colors: `#FFFFFF`, `#CBD5E0`, `#A0AEC0`
  - Accent green: `#48BB78`, `#9ae6b4`
  - Accent blue: `#4299e1`, `#90cdf4`
  - Accent red: `#fc8181`, `#feb2b2`
  - Accent orange: `#ed8936`, `#fbd38d`
  - Accent cyan: `#00D9FF`
- [ ] Configure Inter font as primary typeface
- [ ] Create global styles in `styles/main.css`
- [ ] Create custom theme structure (optional: reusable theme package)

#### 1.3 Proof of Concept Slides
- [ ] Create cover slide (layout: cover)
- [ ] Create title slide with key messaging
- [ ] Create 2-column comparison slide
- [ ] Create metric card slide showcasing data visualization
- [ ] Create code example slide

#### 1.4 Testing & Feedback
- [ ] Test presenter mode
- [ ] Export to PDF and review styling
- [ ] Share with design team for feedback
- [ ] Identify any styling/layout adjustments needed

**Deliverables:**
- Working Slidev project with Expanso branding
- `uno.config.ts` with color palette
- `styles/main.css` with typography and spacing
- 5 sample slides demonstrating key layouts
- PDF export for stakeholder review

**Success Criteria:**
- Slides match Expanso brand appearance
- Presenter mode functions correctly
- PDF export is readable and properly styled
- Team feedback is positive

---

## Phase 2: Component Library (Week 2-3)

### Goal
Build reusable Vue components that match Expanso design system and accelerate slide creation.

### Tasks

#### 2.1 Layout Components
Create custom layouts in `layouts/`:
- [ ] `hero.vue` - Full-screen hero with large title
- [ ] `section.vue` - Section divider with theme color
- [ ] `comparison.vue` - Side-by-side comparison layout
- [ ] `three-column.vue` - Three-column grid layout
- [ ] `title-content.vue` - Title with main content area
- [ ] `split-media.vue` - Content + image/video layout

#### 2.2 Visual Components
Create reusable components in `components/`:
- [ ] `MetricCard.vue` - Stat card with icon, value, label
  - Props: icon, value, label, color
  - Features: Animated number counting on reveal
- [ ] `CodeBlock.vue` - Code snippet with syntax highlighting
  - Props: code, language, highlight lines
  - Features: Line numbers, copy button
- [ ] `LogoGrid.vue` - Grid of platform/company logos
  - Props: logos array, columns
  - Features: Hover effects, responsive sizing
- [ ] `TimelineStep.vue` - Process step in timeline
  - Props: step number, title, description, color
  - Features: Connected lines between steps
- [ ] `BenefitCard.vue` - Benefit with icon and description
  - Props: icon, title, description
  - Features: Accent color, proper spacing
- [ ] `PricingTier.vue` - Pricing card component
  - Props: tier name, price, features, highlighted
  - Features: Check marks, call-to-action button

#### 2.3 Data Visualization Components
- [ ] `PercentageCircle.vue` - Animated percentage display
  - Props: value, label, color
  - Features: SVG circle, animated fill
- [ ] `ComparisonBar.vue` - Before/after bar comparison
  - Props: before, after, label
  - Features: Arrow between values, percentage change
- [ ] `StepIndicator.vue` - Process step indicator
  - Props: currentStep, totalSteps, labels
  - Features: Connected dots, progress bar

#### 2.4 Animation Wrappers
- [ ] `FadeInOnScroll.vue` - Fade-in animation on reveal
- [ ] `SlideInFromLeft.vue` - Slide-in animation
- [ ] `CountUp.vue` - Animated number counter
- [ ] `TypewriterText.vue` - Typewriter text effect

#### 2.5 Component Documentation
- [ ] Create `components/README.md` with component gallery
- [ ] Document each component: props, usage examples, variations
- [ ] Create Storybook or equivalent for visual component testing
- [ ] Generate component usage guide for team

**Deliverables:**
- 6+ custom layout components
- 6+ reusable visual components
- 3+ data visualization components
- Component documentation and usage guide
- Test/demo page showing all components

**Success Criteria:**
- Components are reusable across slides
- Components match Expanso design system
- Easy to customize with props
- Clear documentation for team usage

---

## Phase 3: Content Migration (Week 3-4)

### Goal
Convert existing Figma JSON slides to Slidev markdown format.

### Tasks

#### 3.1 Content Organization
- [ ] Create directory structure for modular slides:
  ```
  pages/
  ├── 00-cover.md
  ├── 01-intro.md
  ├── 02-problem.md
  ├── 03-solution.md
  ├── 04-differentiators.md
  ├── 05-customers.md
  ├── 06-demo.md
  ├── 07-pricing.md
  ├── 08-roadmap.md
  ├── 09-call-to-action.md
  └── 10-closing.md
  ```

#### 3.2 Slide Content Conversion
For each section:
- [ ] Extract content from JSON/Figma
- [ ] Convert text to markdown format
- [ ] Map layout types to custom layouts
- [ ] Extract presentation notes to HTML comments
- [ ] Identify required components/diagrams
- [ ] Create slide content files

#### 3.3 Data Visualization Migration
- [ ] Convert JSON diagram data to Mermaid syntax
- [ ] Create comparison tables using markdown tables
- [ ] Build metric cards using MetricCard component
- [ ] Implement timeline using TimelineStep components
- [ ] Create logo grids using LogoGrid component

#### 3.4 Persona-Specific Variants
- [ ] Identify technical vs. executive content variants
- [ ] Create conditional rendering for different audiences
- [ ] Document audience-specific talking points
- [ ] Test variant rendering

#### 3.5 Asset Migration
- [ ] Audit all required assets (logos, icons, images)
- [ ] Optimize images for web (PNG/WebP)
- [ ] Place assets in `public/` directory
- [ ] Update references to use absolute paths
- [ ] Create asset versioning/naming convention

**Deliverables:**
- Complete markdown slide content
- HTML comments with presenter notes
- All required assets in public/ folder
- JSON to Markdown mapping documentation

**Success Criteria:**
- All slide content migrated
- No content loss or corruption
- Proper asset references
- Presenter notes comprehensive and accurate

---

## Phase 4: Interactivity & Animation (Week 4-5)

### Goal
Add interactive elements and animations that enhance slide impact.

### Tasks

#### 4.1 Click Animations
- [ ] Add v-click animations to bullet points
- [ ] Implement step-by-step data reveals
- [ ] Animate metric cards on appearance
- [ ] Add list item reveals using v-clicks
- [ ] Create timeline animations

#### 4.2 Motion Effects
- [ ] Add v-motion to data visualization elements
- [ ] Implement slide entry/exit animations
- [ ] Create animated transitions between sections
- [ ] Add hover effects to interactive elements
- [ ] Implement drawing animations for diagrams

#### 4.3 Interactive Features
- [ ] Add code demo with Monaco Editor integration
- [ ] Create interactive cost calculator component
- [ ] Implement feature comparison toggle
- [ ] Add interactive diagram with clickable nodes
- [ ] Create form/feedback component if needed

#### 4.4 Presenter Mode Enhancements
- [ ] Verify speaker notes appear correctly
- [ ] Test presenter mode on mobile device
- [ ] Create speaker script for delivery
- [ ] Add timing estimates to speaker notes
- [ ] Create slide navigation shortcuts guide

#### 4.5 Animation Testing & Refinement
- [ ] Test all animations in presentation mode
- [ ] Verify animations work on different browsers
- [ ] Test keyboard navigation
- [ ] Optimize animation performance
- [ ] Gather stakeholder feedback on animations

**Deliverables:**
- Animated slide transitions and reveals
- Interactive data visualizations
- Enhanced presenter notes with timing
- Animation guidelines document

**Success Criteria:**
- Animations enhance rather than distract
- All animations work reliably
- Presenter mode fully functional
- No performance degradation

---

## Phase 5: Advanced Features (Week 5-6)

### Goal
Add advanced capabilities that leverage Slidev's unique strengths.

### Tasks

#### 5.1 Technical Content Integration
- [ ] Create live code demo slide with Monaco Editor
- [ ] Add GitHub code snippet integration
- [ ] Implement architecture diagram with Mermaid
- [ ] Create data flow visualization
- [ ] Add SQL/database schema diagrams

#### 5.2 Custom Addons/Plugins
- [ ] Evaluate community addons for additional features
- [ ] Implement Mermaid addon for diagram support
- [ ] Implement KaTeX addon for math expressions
- [ ] Create custom addon if needed (e.g., CostCalculator)
- [ ] Document addon usage

#### 5.3 Export & Publishing Setup
- [ ] Test PDF export and styling
- [ ] Verify PPTX export with speaker notes
- [ ] Test PNG export for social media
- [ ] Build static SPA for web hosting
- [ ] Set up CI/CD pipeline for automated exports
- [ ] Deploy to Netlify/Vercel for public access

#### 5.4 Audience-Specific Variants
- [ ] Create technical version (for engineers/architects)
- [ ] Create executive version (for C-level/finance)
- [ ] Create sales version (customer-focused)
- [ ] Create investor version (board/VC focused)
- [ ] Document how to switch variants

#### 5.5 Documentation & Training
- [ ] Create team style guide for Slidev
- [ ] Document slide creation workflow
- [ ] Record tutorial videos for team
- [ ] Create template for new presentations
- [ ] Establish naming conventions and structure

**Deliverables:**
- Live code demos and interactive features
- Multiple audience variants
- Deployed web version
- Comprehensive team documentation
- CI/CD pipeline for exports

**Success Criteria:**
- Advanced features work reliably
- Variants render correctly
- Web version loads quickly
- Team can create new slides independently

---

## Phase 6: Optimization & Deployment (Week 6)

### Goal
Optimize performance, quality assurance, and prepare for production use.

### Tasks

#### 6.1 Performance Optimization
- [ ] Audit build bundle size
- [ ] Optimize image assets
- [ ] Enable code splitting for large presentations
- [ ] Test build time and dev server startup
- [ ] Implement lazy-loading for large assets
- [ ] Monitor memory usage during presentation

#### 6.2 Quality Assurance
- [ ] Full regression testing of all slides
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Test on mobile devices (iPad, phones)
- [ ] Verify all presenter notes are present
- [ ] Test all animations and interactions
- [ ] Proof-read all content
- [ ] Verify all brand colors and fonts

#### 6.3 Accessibility
- [ ] Add alt text to images
- [ ] Ensure color contrast ratios meet WCAG standards
- [ ] Test keyboard navigation
- [ ] Verify screen reader compatibility
- [ ] Test with accessibility tools (axe, WAVE)

#### 6.4 Security & Compliance
- [ ] Review asset references for broken links
- [ ] Ensure no sensitive data in speaker notes
- [ ] Verify HTTPS for hosted version
- [ ] Check for dependencies with known vulnerabilities
- [ ] Document data privacy considerations

#### 6.5 Launch Preparation
- [ ] Create launch checklist
- [ ] Prepare team communication about new platform
- [ ] Set up analytics/tracking if needed
- [ ] Create backup of original Figma files
- [ ] Schedule presentation runthrough
- [ ] Prepare tech support documentation

**Deliverables:**
- Optimized production build
- QA test results and sign-off
- Accessibility audit report
- Deployment guide and runbook
- Team onboarding documentation

**Success Criteria:**
- Performance meets targets (< 3s initial load)
- All bugs resolved
- Accessibility standards met
- Deployment process is repeatable and documented

---

## Success Metrics

### Technical Metrics
- Build time: < 2 seconds
- PDF export time: < 30 seconds
- Web version load time: < 3 seconds
- Bundle size: < 5MB
- Presentation mode latency: < 100ms

### Quality Metrics
- Zero critical bugs
- 100% content accuracy
- All animations tested
- All presenter notes present
- 100% accessibility audit pass

### Team Adoption
- 100% of team can create basic slides
- 80% of team can customize layouts
- 60% of team can create components
- Positive feedback on ease of use
- < 30 minutes onboarding time per person

---

## Risk Mitigation

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| Styling discrepancies | Medium | Medium | Frequent comparison with Figma, detailed testing |
| Team learning curve | High | Low | Training sessions, detailed documentation, examples |
| Animation complexity | Medium | Medium | Start simple, build gradually, use presets |
| Asset path issues | Medium | Low | Use public/ folder, absolute paths, validation |
| Export quality | Low | High | Test early and often, adjust styling as needed |
| Browser compatibility | Low | Medium | Test on major browsers, use polyfills if needed |

---

## Resource Requirements

### Team Skills
- **Slidev Developer/Lead:** 1 person (full-time, weeks 1-3, 50% weeks 4-6)
- **Content Creator:** 1 person (part-time weeks 1-2, full-time weeks 3-4)
- **QA/Testing:** 1 person (part-time weeks 1-5, full-time week 6)
- **Design Review:** 1 person (part-time weeks 1-4 for styling feedback)
- **Domain Expert:** 1 person (part-time weeks 3-4 for content accuracy)

### Tools & Services
- **Development:** VS Code, Node.js 18+, npm/pnpm
- **Hosting:** Netlify or Vercel (free tier sufficient)
- **Version Control:** GitHub or GitLab
- **Communication:** Slack or Teams
- **Design Reference:** Access to Figma files for reference

### Time Estimate
- **Total Development:** 120-160 hours
- **Testing & QA:** 20-30 hours
- **Team Training:** 10-15 hours
- **Total:** 150-205 hours (4-6 weeks at 1 FTE developer)

---

## Contingency Plans

### If styling doesn't match perfectly
- Use CSS grid/flexbox adjustments
- Create alternative layouts
- Document design system deviations
- Plan post-launch refinements

### If team struggles with Vue components
- Provide pre-built component templates
- Create interactive component library
- Pair program with experienced developer
- Extend training sessions

### If animations cause performance issues
- Simplify animations
- Use CSS animations instead of Vue motion
- Implement lazy-loading for complex slides
- Test on low-end devices early

### If export quality is poor
- Adjust element sizing and spacing
- Use alternative export formats
- Create separate export-optimized layouts
- Provide web-based version as primary format

---

## Post-Launch Support Plan

### Week 1-2 After Launch
- [ ] Monitor for critical issues
- [ ] Gather team feedback
- [ ] Provide live support during initial use
- [ ] Create FAQ document

### Ongoing Maintenance
- [ ] Quarterly dependency updates
- [ ] Annual theme refresh evaluation
- [ ] Component library expansion
- [ ] Best practices documentation updates
- [ ] Team skill development workshops

### Future Enhancements
- [ ] Custom Slidev addon creation
- [ ] Integration with analytics platform
- [ ] Multi-language variant support
- [ ] Interactive product demo integration
- [ ] AI-powered slide generation helpers

---

## Communication Plan

### Stakeholders
- **Executives:** Weekly progress updates, phase 6 demo
- **Marketing/Sales:** Monthly check-ins, variant feedback
- **Design Team:** Bi-weekly design review sessions
- **Engineering:** As needed for technical content
- **Content Team:** Weekly for content migration

### Key Milestones to Announce
- Week 1: "Slidev project launched with Expanso branding"
- Week 2: "Component library complete - 15+ reusable components"
- Week 4: "Content migration complete - all slides converted"
- Week 5: "Interactive features and animations implemented"
- Week 6: "Platform ready for production use"

---

## Appendix: Detailed Component Specifications

### MetricCard Component
```vue
<template>
  <div class="metric-card" :style="{ borderTop: `4px solid ${color}` }">
    <div class="icon">{{ icon }}</div>
    <div class="value" v-motion>{{ animatedValue }}</div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,           // Emoji or icon name
  value: Number,          // Final value to display
  label: String,          // Card label
  color: { type: String, default: '#48BB78' },  // Accent color
})

// Count-up animation
const animatedValue = ref(0)
onMounted(() => {
  const duration = 1000 // 1 second
  const steps = 30
  const increment = value / steps
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= value) {
      animatedValue.value = value
      clearInterval(timer)
    } else {
      animatedValue.value = Math.floor(current)
    }
  }, duration / steps)
})
</script>

<style scoped>
.metric-card {
  @apply p-6 rounded-lg bg-gray-900 text-white border border-gray-700;
  text-align: center;
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.value {
  @apply text-4xl font-bold my-2;
}

.label {
  @apply text-sm text-gray-400;
}
</style>
```

### TimelineStep Component
```vue
<template>
  <div class="timeline-step">
    <div class="step-number" :style="{ backgroundColor: color }">
      {{ stepNumber }}
    </div>
    <div class="step-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stepNumber: Number,
  title: String,
  description: String,
  color: { type: String, default: '#48BB78' },
})
</script>

<style scoped>
.timeline-step {
  @apply flex gap-4 my-4;
}

.step-number {
  @apply flex items-center justify-center w-12 h-12 rounded-full text-white font-bold flex-shrink-0;
}

.step-content h3 {
  @apply text-lg font-bold mt-0 mb-1;
}

.step-content p {
  @apply text-sm text-gray-400 m-0;
}
</style>
```

---

## Sign-Off

**Project Manager:** _____________________ Date: _______

**Design Lead:** _____________________ Date: _______

**Engineering Lead:** _____________________ Date: _______

**Executive Sponsor:** _____________________ Date: _______

---

**Document Version:** 1.0
**Last Updated:** October 27, 2025
**Status:** Ready for Implementation
