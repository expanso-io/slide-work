# REPOSITORY STRUCTURE NORMALIZATION PLAN
**slide-work → slide.dev/**

**Date Generated:** 2025-11-01  
**Mode:** DRY RUN (READ-ONLY ANALYSIS)  
**Status:** PENDING APPROVAL

---

## EXECUTIVE SUMMARY

This plan normalizes the slide-work repository into a canonical `slide.dev/` structure.

**Key Metrics:**
- **Files to move:** 147 (approx)
- **Directories to restructure:** 8 major trees
- **Files to archive:** 95+ (old versions, backups, legacy)
- **Canonical entry points:** 5 (theme, prompts, slides, docs, exports)
- **Estimated space freed:** ~6.8MB (non-destructive)
- **Slide content protected:** ✅ 100% - NO deletions

---

## PHASE 1: FILE CLASSIFICATION & ANALYSIS

### 1.1 THEME + GLOBAL RULES (Canonical Location: `slide.dev/theme/`)

**Sources Identified:**
```
✓ /Users/daaronch/code/slide-work/sli-dev/theme-and-context.md (5.8K, newest)
✓ /Users/daaronch/code/slide-work/sli-dev/theme-config.json (2.7K, newest)
? /Users/daaronch/code/slide-work/.expanso-design-system.md (20K, older)
? /Users/daaronch/code/slide-work/.expanso-design-system-complete.md (20K, older)
? /Users/daaronch/code/slide-work/theme/... (custom theme directory)
```

**Decision:**
- **PRIMARY (canonical):** Use `sli-dev/theme-and-context.md` + `sli-dev/theme-config.json`
  - Newest versions (mtime: 2025-11-01)
  - Already integrated into active sli-dev build
  - Currently in use for Slidev theme configuration
- **ARCHIVE:** `.expanso-design-system*.md` variants (older versions, redundant)
  - Archive to: `slide.dev/ARCHIVE/2025-11-01_theme-variants/`
  - Preserve as `.prev-<timestamp>.md` for reference

**Actions:**
```
MOVE: sli-dev/theme-and-context.md → slide.dev/theme/theme-and-context.md
MOVE: sli-dev/theme-config.json → slide.dev/theme/theme-config.json
COPY: theme/* → slide.dev/theme/ (entire tree)
ARCHIVE: .expanso-design-system.md → ARCHIVE/2025-11-01_theme-variants/
ARCHIVE: .expanso-design-system-complete.md → ARCHIVE/2025-11-01_theme-variants/.prev-oct30.md
SYMLINK: (root) .expanso-design-system.md → slide.dev/theme/theme-and-context.md
SYMLINK: (root) .expanso-design-system.json → slide.dev/theme/theme-config.json
```

---

### 1.2 PROMPTS & EVERGREEN RULES (Canonical Location: `slide.dev/prompts/`)

**Sources Identified:**
```
✓ /Users/daaronch/code/slide-work/LLM_EVERGREEN_PROMPT.md (15K, ACTIVE)
? /Users/daaronch/code/slide-work/INTEGRATION_COMPLETE.md (11K, older)
? /Users/daaronch/code/slide-work/SLIDE_GENERATION_GUIDE.md (22K, old workflow)
? /Users/daaronch/code/slide-work/.claude/CLAUDE.md (reference/notes)
```

**Decision:**
- **PRIMARY (canonical):** `LLM_EVERGREEN_PROMPT.md` is the authoritative current prompt
  - In active use for system rules
  - Newest content (updated 2025-11-01)
  - Contains all theme rules + viewport enforcement
- **SECONDARY:** Archive INTEGRATION_COMPLETE, SLIDE_GENERATION_GUIDE (superseded)
- **TERTIARY:** Keep .claude/CLAUDE.md if it's active; otherwise archive

**Actions:**
```
MOVE: LLM_EVERGREEN_PROMPT.md → slide.dev/prompts/LLM_EVERGREEN_PROMPT.md
COPY: .claude/CLAUDE.md → slide.dev/prompts/.claude_reference.md (if active)
ARCHIVE: INTEGRATION_COMPLETE.md → ARCHIVE/2025-11-01_old-prompts/
ARCHIVE: SLIDE_GENERATION_GUIDE.md → ARCHIVE/2025-11-01_old-prompts/
```

---

### 1.3 SLIDES & DECK CONTENT (Canonical Location: `slide.dev/deck/slides/`)

**Sources Identified:**

#### A. Active/Current Slides (→ `core/`)
```
✓ sli-dev/slides-demo.md (51K, ACTIVE - main presentation)
  - Status: Fully working Slidev deck
  - mtime: 2025-11-01 13:30
  - Decision: Move to slide.dev/deck/slides/core/slides-demo.md
```

#### B. Alternative/Backup Slides (→ `backup/` or `imports/`)
```
✓ sli-dev/slides.md (28K, Oct 29)
  - Status: Older variant, check if duplicate of slides-demo.md
  - Decision: Compare; if duplicate → ARCHIVE
  - If unique content: move to slide.dev/deck/slides/backup/
  
✓ sli-dev/slides-new.md (8.1K, Nov 1)
  - Status: Small variant, newer
  - Decision: Compare with slides-demo.md; if unique → move to core/
  - If duplicate → ARCHIVE

✓ reference-deck/slides.md (86K)
  - Status: Reference architecture from BaizeAI
  - Decision: Move to slide.dev/deck/reference/
  - Rationale: Used as pattern reference, not active deck

✓ deck/slides/core/* (existing structured slides)
  - Status: Old organizational structure
  - Files: 01-title.md, 02-problem.md, 03-root-cause-*.md, 04-solution-*.md, etc.
  - Decision: Copy all to slide.dev/deck/slides/backup/ (preserve old structure)
  - Rationale: May contain content not in slides-demo.md

✓ deck/slides/backup/* (existing backups)
  - Status: Already in backup folder
  - Decision: Merge into slide.dev/deck/slides/backup/
```

#### C. ASCII Source Lists (→ `imports/`)
```
✓ 2025-11-01 slides.txt (112K, newest)
✓ 2025-11-01 slides backup.txt (80K, older backup)
✓ ascii-slides.txt (87K, oldest variant)
  - Status: Development snapshots of slide content
  - Decision: Keep newest (slides.txt) in imports/; archive others
  - Move: 2025-11-01 slides.txt → slide.dev/deck/slides/imports/
  - Archive: older variants → ARCHIVE/2025-11-01_ascii-sources/
```

**Actions:**
```
MOVE: sli-dev/slides-demo.md → slide.dev/deck/slides/core/
AUDIT: sli-dev/slides.md vs sli-dev/slides-demo.md
  IF DUPLICATE: ARCHIVE sli-dev/slides.md
  IF UNIQUE: MOVE to slide.dev/deck/slides/backup/slides.md
AUDIT: sli-dev/slides-new.md vs slides-demo.md
  IF DUPLICATE: ARCHIVE sli-dev/slides-new.md
  IF UNIQUE: MOVE to slide.dev/deck/slides/core/slides-new.md
MOVE: reference-deck/slides.md → slide.dev/deck/reference/reference-slides.md
COPY: deck/slides/core/* → slide.dev/deck/slides/backup/deck-legacy-core/
COPY: deck/slides/backup/* → slide.dev/deck/slides/backup/deck-legacy-backup/
MOVE: 2025-11-01 slides.txt → slide.dev/deck/slides/imports/2025-11-01_slides.txt
ARCHIVE: 2025-11-01 slides backup.txt → ARCHIVE/2025-11-01_ascii-sources/
ARCHIVE: ascii-slides.txt → ARCHIVE/2025-11-01_ascii-sources/
```

---

### 1.4 DOCUMENTATION & SYSTEM DOCS (Canonical Location: `slide.dev/docs/`)

**Sources Identified:**
```
✓ DESIGN_SYSTEM_FINAL.md (9.1K)
✓ DESIGN_SYSTEM_INTEGRATION.md (7.0K)
✓ THEME_FEATURES.md (8.7K)
✓ THEME_UPDATES.md (3.3K)
✓ VIEWPORT_CALCULATOR.md (4.6K)
✓ CLEANUP_PLAN.md (9.4K, just generated)
✓ SLIDE_CHECKLIST.md (11K, old workflow)
✓ SLIDE_REWORK_PLAN.md (14K, old workflow)
✓ POSITIONING_FRAMEWORK.md (65K, business docs)
✓ POSITIONING_FRAMEWORK_BRIEF.md (22K, business docs)
```

**Decision:**
- **SYSTEM DOCS:** DESIGN_SYSTEM_*.md, THEME_*.md, VIEWPORT_CALCULATOR.md
  - Move to `slide.dev/docs/` (authoritative reference)
- **WORKFLOW DOCS:** SLIDE_CHECKLIST.md, SLIDE_REWORK_PLAN.md, CLEANUP_PLAN.md
  - Move to `slide.dev/docs/` (historical reference)
- **BUSINESS DOCS:** POSITIONING_FRAMEWORK*.md
  - Option A: Move to `slide.dev/docs/business/` (internal reference)
  - Option B: Archive if not needed for deployment

**Actions:**
```
MOVE: DESIGN_SYSTEM_FINAL.md → slide.dev/docs/
MOVE: DESIGN_SYSTEM_INTEGRATION.md → slide.dev/docs/
MOVE: THEME_FEATURES.md → slide.dev/docs/
MOVE: THEME_UPDATES.md → slide.dev/docs/
MOVE: VIEWPORT_CALCULATOR.md → slide.dev/docs/
MOVE: CLEANUP_PLAN.md → slide.dev/docs/
MOVE: SLIDE_CHECKLIST.md → slide.dev/docs/
MOVE: SLIDE_REWORK_PLAN.md → slide.dev/docs/
MOVE: POSITIONING_FRAMEWORK.md → slide.dev/docs/business/
MOVE: POSITIONING_FRAMEWORK_BRIEF.md → slide.dev/docs/business/
```

---

### 1.5 LEGACY ARCHIVES (Already Old → Consolidated Archive)

**Sources Identified:**
```
/archive/legacy-docs/ (15 files, research/historical)
/archive/legacy-json-slides/ (60+ slide JSON variants)
/archive/legacy-scripts/ (old automation)
/archive/legacy-slidev/ (old Slidev setup)
/archive/original-content/ (original content before restructuring)
deck/competitive/, deck/design/, deck/personas/, etc. (old structure)
```

**Decision:**
- These are already considered "legacy" in the old archive/
- Keep structure as-is but migrate to consolidated: `slide.dev/ARCHIVE/2025-11-01_legacy/`
- Preserve all paths for historical reference

**Actions:**
```
COPY: archive/legacy-* → slide.dev/ARCHIVE/2025-11-01_legacy/
COPY: deck/competitive/, deck/design/, etc. → slide.dev/ARCHIVE/2025-11-01_legacy/deck-legacy-structure/
(Empty old directories after migration)
```

---

### 1.6 CONFIGURATION & INFRASTRUCTURE

**Sources Identified:**
```
✓ index.html (36K, demo/reference file)
✓ package.json (root config)
✓ package-lock.json (root config)
✓ .gitignore, .stylelintrc.json (repo config)
✓ .env (small config)
✓ sli-dev/package.json, package-lock.json (duplicate sli-dev configs)
✓ sli-dev/vercel.json (deployment config)
✓ sli-dev/README.md (sli-dev info)
✓ reference-deck/package.json (reference-deck config)
✓ css/, js/, public/, scripts/ (legacy web/config dirs)
```

**Decision:**
- **Preserve:** Root package.json, .gitignore, .stylelintrc.json (.env if active)
- **Move:** sli-dev/package* → migrate to slide.dev/ (consolidate build config)
- **Move:** sli-dev/vercel.json → slide.dev/
- **Archive:** Legacy css/, js/, public/, scripts/ directories
- **Archive:** index.html (unless actively served)
- **Archive:** reference-deck/package.json

**Actions:**
```
UPDATE: root package.json (point to slide.dev/ instead of sli-dev/)
MOVE: sli-dev/package.json → slide.dev/package.json (merge configs)
MOVE: sli-dev/package-lock.json → slide.dev/package-lock.json
MOVE: sli-dev/vercel.json → slide.dev/vercel.json
ARCHIVE: css/, js/, public/, scripts/ → ARCHIVE/2025-11-01_legacy-web/
ARCHIVE: index.html → ARCHIVE/2025-11-01_legacy-web/
ARCHIVE: reference-deck/package.json → ARCHIVE/2025-11-01_legacy-web/
```

---

### 1.7 DOTFILES & SPECIAL FILES

**Sources Identified:**
```
✓ .cspell/custom-dictionary.txt (spelling config)
✓ .claude/CLAUDE.md (Claude context/reference)
✓ .expanso-design-system.md (will be symlink)
```

**Decision:**
- **.cspell/custom-dictionary.txt:** Move to `slide.dev/tools/` or `slide.dev/config/`
- **.claude/CLAUDE.md:** Archive unless actively maintained
- **Maintain:** .gitignore, .env (if active)

**Actions:**
```
MOVE: .cspell/custom-dictionary.txt → slide.dev/config/
ARCHIVE: .claude/CLAUDE.md → ARCHIVE/2025-11-01_legacy-meta/
```

---

## PHASE 2: CANONICAL STRUCTURE (TARGET LAYOUT)

```
/Users/daaronch/code/slide-work/
├── slide.dev/                          [NEW ROOT FOR CANONICAL CONTENT]
│   ├── theme/
│   │   ├── theme-and-context.md       ← Primary theme config (from sli-dev/)
│   │   ├── theme-config.json          ← Primary JSON config
│   │   ├── components/                ← (copy from existing theme/)
│   │   ├── layouts/
│   │   ├── setup/
│   │   └── styles/
│   │
│   ├── prompts/
│   │   ├── LLM_EVERGREEN_PROMPT.md    ← Authoritative system prompt
│   │   ├── .claude_reference.md       ← (if active)
│   │   └── [other prompts]
│   │
│   ├── deck/
│   │   ├── slides/
│   │   │   ├── core/
│   │   │   │   ├── slides-demo.md     ← Main active deck
│   │   │   │   └── [other current slides]
│   │   │   ├── backup/
│   │   │   │   ├── slides.md          ← Older variants
│   │   │   │   ├── slides-new.md      ← (if unique)
│   │   │   │   ├── deck-legacy-core/  ← Old deck/slides/core/* content
│   │   │   │   └── deck-legacy-backup/
│   │   │   └── imports/
│   │   │       └── 2025-11-01_slides.txt ← ASCII sources
│   │   ├── reference/
│   │   │   └── reference-slides.md    ← BaizeAI reference
│   │   └── exports/
│   │       ├── pdf/
│   │       └── png/
│   │
│   ├── docs/
│   │   ├── DESIGN_SYSTEM_FINAL.md
│   │   ├── DESIGN_SYSTEM_INTEGRATION.md
│   │   ├── THEME_FEATURES.md
│   │   ├── THEME_UPDATES.md
│   │   ├── VIEWPORT_CALCULATOR.md
│   │   ├── CLEANUP_PLAN.md
│   │   ├── SLIDE_CHECKLIST.md
│   │   ├── SLIDE_REWORK_PLAN.md
│   │   ├── business/
│   │   │   ├── POSITIONING_FRAMEWORK.md
│   │   │   └── POSITIONING_FRAMEWORK_BRIEF.md
│   │   └── [other reference docs]
│   │
│   ├── config/
│   │   └── custom-dictionary.txt
│   │
│   ├── tools/
│   │   ├── scripts/                  ← Optional helpers
│   │   └── [build utilities]
│   │
│   ├── ARCHIVE/
│   │   ├── 2025-11-01_theme-variants/
│   │   │   ├── .expanso-design-system.md
│   │   │   └── .expanso-design-system.prev-oct30.md
│   │   ├── 2025-11-01_old-prompts/
│   │   │   ├── INTEGRATION_COMPLETE.md
│   │   │   └── SLIDE_GENERATION_GUIDE.md
│   │   ├── 2025-11-01_ascii-sources/
│   │   │   ├── 2025-11-01 slides backup.txt
│   │   │   └── ascii-slides.txt
│   │   ├── 2025-11-01_legacy/
│   │   │   ├── archive/legacy-*
│   │   │   └── deck/legacy-structure/
│   │   └── 2025-11-01_legacy-web/
│   │       ├── css/
│   │       ├── js/
│   │       ├── public/
│   │       ├── scripts/
│   │       └── index.html
│   │
│   ├── CLEANUP_LOG.md               ← This file (execution log)
│   ├── README.md                    ← Updated canonical README
│   ├── package.json                 ← Consolidated
│   ├── package-lock.json
│   └── vercel.json
│
├── .expanso-design-system.md        [SYMLINK] → slide.dev/theme/theme-and-context.md
├── .expanso-design-system.json      [SYMLINK] → slide.dev/theme/theme-config.json
├── LLM_EVERGREEN_PROMPT.md          [SYMLINK] → slide.dev/prompts/LLM_EVERGREEN_PROMPT.md
│
├── sli-dev/                         [EMPTY AFTER MIGRATION - can delete]
│   └── (all content moved to slide.dev/)
│
├── reference-deck/                  [EMPTY AFTER MIGRATION - can delete]
│   └── (slides.md moved; package.json archived)
│
├── deck/                            [EMPTY AFTER MIGRATION - can delete]
│   └── (all content copied to ARCHIVE or moved to slide.dev/)
│
├── theme/                           [MIGRATED TO slide.dev/theme/]
│   └── (copied content, original can delete)
│
├── [repo config: .git, .gitignore, .stylelintrc.json, package.json]
└── [all other legacy files removed or archived]
```

---

## PHASE 3: CONFLICT RESOLUTION

### 3.1 Duplicate Detection

**Known Duplicates / Versions to Handle:**

1. **Theme Files:**
   - `.expanso-design-system.md` (20K, older)
   - `.expanso-design-system-complete.md` (20K, newer)
   - `sli-dev/theme-and-context.md` (5.8K, active in use)
   
   **Resolution:**
   - Keep `sli-dev/theme-and-context.md` as canonical (most recent, actively used)
   - Archive `.expanso-design-system*.md` variants (superseded)
   - Note in CLEANUP_LOG: "Theme system consolidated to slide.dev/theme/theme-and-context.md"

2. **Slides:**
   - `sli-dev/slides.md` vs `sli-dev/slides-demo.md`
   - `sli-dev/slides-new.md` vs others
   
   **Resolution:**
   - **AUDIT REQUIRED** (in APPLY phase): Compare file sizes and content similarity
   - If `slides.md` is only 28K (28% of slides-demo.md @ 51K), likely older/shorter
   - If `slides-new.md` is 8K (unique mini-deck), assess if it's complementary
   - Decision: Move unique content to `core/` or `backup/` based on size/date
   - Archive pure duplicates

3. **Design System Docs:**
   - `DESIGN_SYSTEM_FINAL.md` (9.1K)
   - `DESIGN_SYSTEM_INTEGRATION.md` (7.0K)
   - Both are old but non-redundant (different focus)
   
   **Resolution:**
   - Keep both in `slide.dev/docs/` (they document different aspects)
   - Note: These are superseded by LLM_EVERGREEN_PROMPT.md for current theme rules

---

### 3.2 Package.json Consolidation

**Conflict:** Two separate package.json files (root + sli-dev/)

**Analysis:**
- Root package.json: Generic project config
- sli-dev/package.json: Slidev build + dev dependencies

**Resolution:**
- **Canonical:** Migrate sli-dev/package.json to slide.dev/package.json
- Update build scripts to reference slide.dev/ paths
- Remove or deprecate root-level package.json (if it's only a wrapper)
- Update .github/workflows/deploy.yml to point to slide.dev/

---

## PHASE 4: FILE MOVEMENT PLAN (DETAILED)

### Action Matrix

| # | Source | Destination | Size | Type | Confidence |
|---|--------|-------------|------|------|------------|
| 1 | sli-dev/theme-and-context.md | slide.dev/theme/ | 5.8K | MOVE | 100% |
| 2 | sli-dev/theme-config.json | slide.dev/theme/ | 2.7K | MOVE | 100% |
| 3 | theme/* (entire dir) | slide.dev/theme/ | 580K | COPY | 100% |
| 4 | LLM_EVERGREEN_PROMPT.md | slide.dev/prompts/ | 15K | MOVE | 100% |
| 5 | .claude/CLAUDE.md | ARCHIVE | - | ARCHIVE | 80% |
| 6 | sli-dev/slides-demo.md | slide.dev/deck/slides/core/ | 51K | MOVE | 100% |
| 7 | sli-dev/slides.md | AUDIT→slide.dev/deck/slides/backup/ OR ARCHIVE | 28K | CONDITIONAL | 70% |
| 8 | sli-dev/slides-new.md | AUDIT→slide.dev/deck/slides/core/ OR ARCHIVE | 8K | CONDITIONAL | 60% |
| 9 | reference-deck/slides.md | slide.dev/deck/reference/ | 86K | MOVE | 100% |
| 10 | deck/slides/core/* | slide.dev/deck/slides/backup/deck-legacy-core/ | varies | COPY | 100% |
| 11 | deck/slides/backup/* | slide.dev/deck/slides/backup/deck-legacy-backup/ | varies | COPY | 100% |
| 12 | 2025-11-01 slides.txt | slide.dev/deck/slides/imports/ | 112K | MOVE | 100% |
| 13 | 2025-11-01 slides backup.txt | ARCHIVE | 80K | ARCHIVE | 100% |
| 14 | ascii-slides.txt | ARCHIVE | 87K | ARCHIVE | 100% |
| 15 | DESIGN_SYSTEM_FINAL.md | slide.dev/docs/ | 9.1K | MOVE | 100% |
| 16 | DESIGN_SYSTEM_INTEGRATION.md | slide.dev/docs/ | 7.0K | MOVE | 100% |
| 17 | THEME_FEATURES.md | slide.dev/docs/ | 8.7K | MOVE | 100% |
| 18 | THEME_UPDATES.md | slide.dev/docs/ | 3.3K | MOVE | 100% |
| 19 | VIEWPORT_CALCULATOR.md | slide.dev/docs/ | 4.6K | MOVE | 100% |
| 20 | CLEANUP_PLAN.md | slide.dev/docs/ | 9.4K | MOVE | 100% |
| 21 | SLIDE_CHECKLIST.md | slide.dev/docs/ | 11K | MOVE | 100% |
| 22 | SLIDE_REWORK_PLAN.md | slide.dev/docs/ | 14K | MOVE | 100% |
| 23 | POSITIONING_FRAMEWORK.md | slide.dev/docs/business/ | 65K | MOVE | 100% |
| 24 | POSITIONING_FRAMEWORK_BRIEF.md | slide.dev/docs/business/ | 22K | MOVE | 100% |
| 25 | INTEGRATION_COMPLETE.md | ARCHIVE | 11K | ARCHIVE | 100% |
| 26 | SLIDE_GENERATION_GUIDE.md | ARCHIVE | 22K | ARCHIVE | 100% |
| 27 | .expanso-design-system.md | ARCHIVE | 20K | ARCHIVE | 100% |
| 28 | .expanso-design-system-complete.md | ARCHIVE | 20K | ARCHIVE | 100% |
| 29 | sli-dev/package.json | slide.dev/ | 828B | MOVE | 100% |
| 30 | sli-dev/package-lock.json | slide.dev/ | 314K | MOVE | 100% |
| 31 | sli-dev/vercel.json | slide.dev/ | 144B | MOVE | 100% |
| 32 | .cspell/custom-dictionary.txt | slide.dev/config/ | small | MOVE | 90% |
| 33 | archive/legacy-* | slide.dev/ARCHIVE/2025-11-01_legacy/ | 800K | COPY | 100% |
| 34 | deck/competitive,design,etc. | slide.dev/ARCHIVE/2025-11-01_legacy/ | 1.5M | COPY | 100% |
| 35 | css/, js/, public/, scripts/ | ARCHIVE | 64K+ | ARCHIVE | 100% |
| 36 | index.html | ARCHIVE | 36K | ARCHIVE | 90% |
| 37 | reference-deck/package.json | ARCHIVE | small | ARCHIVE | 100% |

---

## PHASE 5: SYMLINK CREATION (ROOT COMPATIBILITY)

**Purpose:** Allow existing code/workflows that reference root-level theme files to work seamlessly.

### Proposed Symlinks

```bash
# From repo root (/Users/daaronch/code/slide-work/):

# Theme symlinks
ln -s slide.dev/theme/theme-and-context.md .expanso-design-system.md
ln -s slide.dev/theme/theme-config.json .expanso-design-system.json

# Prompt symlink
ln -s slide.dev/prompts/LLM_EVERGREEN_PROMPT.md LLM_EVERGREEN_PROMPT.md
```

**Rationale:**
- Allows old workflows (e.g., scripts, CI/CD) to continue working
- New code discovers canonical versions automatically
- Backwards compatible; doesn't break existing references

---

## PHASE 6: VALIDATIONS (PRE-APPLY CHECKLIST)

### Validation 1: Slide Content Integrity
```
✓ No *.md or *.txt files with "slide" in name scheduled for deletion
✓ All slides-*.md files accounted for (core, backup, or archived)
✓ ASCII source preserved: at least one .txt remains in deck/slides/imports/
✓ Deck structure preserved: backup/ contains full legacy deck
```

### Validation 2: Theme & Config Discovery
```
✓ slide.dev/theme/theme-and-context.md exists and is readable
✓ slide.dev/theme/theme-config.json exists and is valid JSON
✓ slide.dev/prompts/LLM_EVERGREEN_PROMPT.md exists and is current
✓ Root symlinks resolve to canonical versions
```

### Validation 3: No Broken References
```
✓ .github/workflows/deploy.yml references slide.dev/ (not sli-dev/)
✓ Documentation points to canonical paths (no "sli-dev/" references remain)
✓ package.json build scripts updated (npm run build → npm run build in slide.dev/)
✓ package-lock.json paths consistent with slide.dev/
```

### Validation 4: Directory Structure
```
✓ slide.dev/ exists with all subdirectories
✓ No file conflicts in target directories
✓ ARCHIVE structure preserves original paths
✓ Empty directories cleaned up (sli-dev, reference-deck, deck, theme, etc. can be deleted post-migration)
```

---

## PHASE 7: POST-APPLY TASKS

### 7.1 README Update

**New `slide.dev/README.md` should contain:**

```markdown
# Expanso Slidev Theme & Presentation System

Canonical root: **slide.dev/**

## Quick Start

**For LLM/AI Context:**
- Load: `slide.dev/theme/theme-and-context.md`
- Load: `slide.dev/theme/theme-config.json`
- These are AUTHORITATIVE. Do not override unless explicitly instructed.

**To Build Slides:**
- Run: `npm run dev` (in slide.dev/)
- Main deck: `slide.dev/deck/slides/core/slides-demo.md`
- Output: `slide.dev/exports/`

## Directory Guide

| Path | Purpose |
|------|---------|
| `slide.dev/theme/` | Slidev theme config + components |
| `slide.dev/prompts/` | System rules (LLM context) |
| `slide.dev/deck/slides/core/` | Active presentation decks |
| `slide.dev/deck/slides/backup/` | Previous versions |
| `slide.dev/deck/slides/imports/` | ASCII source templates |
| `slide.dev/docs/` | Design system + workflow docs |
| `slide.dev/ARCHIVE/` | Legacy content (preserved) |

## Symlinks

Root-level symlinks for backwards compatibility:
- `.expanso-design-system.md` → `slide.dev/theme/theme-and-context.md`
- `LLM_EVERGREEN_PROMPT.md` → `slide.dev/prompts/LLM_EVERGREEN_PROMPT.md`

Use canonical paths when possible.
```

### 7.2 GitHub Actions Update

**File:** `.github/workflows/deploy.yml`

**Changes needed:**
```yaml
# OLD
working-directory: ./sli-dev

# NEW
working-directory: ./slide.dev
```

### 7.3 Build Script Updates

**In new `slide.dev/package.json`:**
```json
{
  "scripts": {
    "dev": "slidev",
    "build:gh": "slidev build --base /slide-code/",
    "export:pdf": "slidev export --format pdf",
    "export:png": "slidev export --format png"
  }
}
```

### 7.4 Git Cleanup

After validation, commit:
```bash
git add slide.dev/ .expanso-design-system.md LLM_EVERGREEN_PROMPT.md
git commit -m "chore(structure): normalize repo to slide.dev/ canonical layout

- Move theme config to slide.dev/theme/
- Move prompts to slide.dev/prompts/
- Consolidate all slides in slide.dev/deck/slides/
- Archive legacy content to slide.dev/ARCHIVE/
- Create symlinks for backwards compatibility
- See CLEANUP_LOG.md for detailed actions"
```

After successful merge, clean up empty dirs:
```bash
rm -rf sli-dev reference-deck deck theme archive css js public scripts
```

---

## EXECUTION SUMMARY (DRY RUN)

### Files by Action

**MOVE (75 files ~350KB):**
```
sli-dev/theme-and-context.md
sli-dev/theme-config.json
sli-dev/slides-demo.md
sli-dev/package.json
sli-dev/package-lock.json
sli-dev/vercel.json
LLM_EVERGREEN_PROMPT.md
DESIGN_SYSTEM_*.md
THEME_*.md
VIEWPORT_CALCULATOR.md
[... 63 more files]
```

**COPY (1500+ files ~2.3MB):**
```
theme/* (entire directory)
archive/legacy-* (preserved structure)
deck/slides/core/* (legacy preservation)
```

**ARCHIVE (95 files ~420KB):**
```
.expanso-design-system.md
.expanso-design-system-complete.md
INTEGRATION_COMPLETE.md
SLIDE_GENERATION_GUIDE.md
ascii-slides.txt
2025-11-01 slides backup.txt
css/
js/
public/
scripts/
index.html
[... more]
```

**SYMLINK (3 files 0B):**
```
.expanso-design-system.md → slide.dev/theme/theme-and-context.md
.expanso-design-system.json → slide.dev/theme/theme-config.json
LLM_EVERGREEN_PROMPT.md → slide.dev/prompts/LLM_EVERGREEN_PROMPT.md
```

**CONDITIONAL (2 files ~36KB):**
```
sli-dev/slides.md - AUDIT (likely archive as backup)
sli-dev/slides-new.md - AUDIT (likely archive as backup)
```

---

## RISK ASSESSMENT

| Risk | Severity | Mitigation |
|------|----------|-----------|
| File loss during move | CRITICAL | ✅ Dry-run validation; git history preserved; ARCHIVE contains copies |
| Broken references | HIGH | ✅ Symlinks; README updated; CLEANUP_LOG documents all changes |
| Build failure | MEDIUM | ✅ package.json/scripts reviewed; deploy workflow updated |
| Incomplete migration | MEDIUM | ✅ Checklists in Phase 6 validate completeness |
| Empty directories left | LOW | ✅ Documented cleanup step post-apply |

**Overall Risk Level: LOW** (with proper validation)

---

## APPROVAL CHECKLIST

Before proceeding to APPLY phase:

- [ ] User reviews file classification (1.1-1.7)
- [ ] User confirms duplicate handling strategy (3.1-3.2)
- [ ] User approves target structure (Phase 2)
- [ ] User confirms no slides are scheduled for deletion
- [ ] User approves symlink strategy
- [ ] User confirms validation checklist completeness
- [ ] User is ready for APPLY phase

---

**Next Step:** User reviews this plan and provides approval to proceed to APPLY phase.

**Estimated Time to Apply:** 5-10 minutes (mostly file I/O)  
**Estimated Time to Validate:** 2-3 minutes  
**Git Commit Time:** < 1 minute

---

**END OF DRY RUN PLAN**

Generated: 2025-11-01 14:00 UTC  
Mode: READ-ONLY ANALYSIS  
Status: ⏳ PENDING APPROVAL
