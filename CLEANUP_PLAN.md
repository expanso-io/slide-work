# CLEANUP PLAN FOR SLIDE-WORK REPOSITORY

**Created:** 2025-11-01
**Status:** DRAFT - Ready for Review and Editing

---

## Current State Analysis

### ✅ Active/Working Components
- **`/sli-dev/slides-demo.md`** (52KB) - Main active presentation deck
- **`/sli-dev/`** - Full working Slidev installation with all dependencies
- **`/theme/`** - Custom Expanso Slidev theme (active & integrated)
- **`LLM_EVERGREEN_PROMPT.md`** - System rules and global theme rules (in active use)
- **`VIEWPORT_CALCULATOR.md`** - New viewport enforcement tool (in active use)

### ❌ Inactive/Outdated Components

**Large Directories (Total: 4.6GB)**
- `/archive/` (800KB) - Historical documentation, legacy code
  - Contains: legacy-docs, legacy-json-slides, legacy-scripts, legacy-slidev, original-content
  - Reason: All current work supersedes this

- `/reference-deck/` (2.3MB) - Alternative Slidev project
  - Contains: Separate Slidev installation used as reference
  - Reason: Architecture patterns already integrated into `/theme/`
  - Exception: Keep `/reference-deck/slides.md` if used as template

- `/deck/` (1.5MB) - Old slide structure with separate folders
  - Contains: competitive, design, objections, personas, presentation, proof-points, slides, usage-guides
  - Reason: All content migrated to sli-dev or archived
  - Exception: Check `/deck/slides/core/` for non-duplicated content

**Root-Level Markdown Files - Design System Docs (Total: 74KB)**
- `.expanso-design-system.md` (20KB) - Older version
- `.expanso-design-system-complete.md` (20KB) - Newer version
- `DESIGN_SYSTEM_FINAL.md` (9KB)
- `DESIGN_SYSTEM_INTEGRATION.md` (7KB)
- `INTEGRATION_COMPLETE.md` (11KB)
- Reason: Superseded by `LLM_EVERGREEN_PROMPT.md` + `VIEWPORT_CALCULATOR.md`
- Action: Consolidate into single source of truth or archive

**Root-Level Markdown Files - Business/Strategy (Total: 88KB)**
- `POSITIONING_FRAMEWORK.md` (66KB)
- `POSITIONING_FRAMEWORK_BRIEF.md` (22KB)
- Reason: Business strategy, not development-related
- Action: Move to separate `docs/` folder or delete if not needed for GitHub

**Root-Level Markdown Files - Old Workflows (Total: 47KB)**
- `SLIDE_CHECKLIST.md` (11KB)
- `SLIDE_GENERATION_GUIDE.md` (22KB)
- `SLIDE_REWORK_PLAN.md` (14KB)
- Reason: Replaced by `VIEWPORT_CALCULATOR.md` + `LLM_EVERGREEN_PROMPT.md`
- Action: Delete

**Root-Level Markdown Files - Outdated Theme Docs (Total: 11KB)**
- `THEME_UPDATES.md` (3KB)
- `THEME_FEATURES.md` (8KB)
- Reason: Can be consolidated or merged
- Action: Decide keep/merge/delete

**Legacy Configuration Directories**
- `/css/` (64KB) - Old theme styling, replaced by `/theme/`
- `/js/` - Legacy scripts
- `/public/` - Empty or unused
- `/scripts/` - Empty or unused
- Reason: All functionality moved to sli-dev
- Action: Delete (or confirm no active use first)

---

## Conditional Keeps - Requires Review

### Files to Audit Before Deletion

**In `/sli-dev/`:**
1. `slides.md` (28KB)
   - Question: Does it have unique content vs `slides-demo.md`?
   - Action: Delete

2. `slides-new.md` (8KB)
   - Question: Does it have unique content vs `slides-demo.md`?
   - Action: Delete

**In root directory:**
1. `index.html` (40KB)
   - Question: Is this actively served or just a test file?
   - Question: Is it used in GitHub Pages deployment?
   - Action: Check `.github/workflows/deploy.yml`, then decide

2. `.env` (240B)
   - Question: Is this needed for GitHub Pages or local dev?
   - Action: Check if any build scripts reference it

3. `.gitignore`, `.stylelintrc.json`
   - Status: Keep - Part of repo configuration

4. `README.md` (5.8KB)
   - Status: Keep but update to reflect new structure
   - Action: Ensure it documents only the active sli-dev project

---

## Proposed Final Directory Structure

```
slide-work/
├── .git/                               (KEEP - git history)
├── .github/
│   └── workflows/deploy.yml           (KEEP - GitHub Actions)
├── sli-dev/                           (KEEP - ACTIVE PROJECT)
│   ├── slides-demo.md                (KEEP - main deck, ACTIVE)
│   ├── package.json                  (KEEP)
│   ├── package-lock.json             (KEEP)
│   ├── theme-and-context.md          (REVIEW)
│   ├── [DELETE slides.md if duplicate]
│   ├── [DELETE slides-new.md if duplicate]
│   └── ... (all other sli-dev files)
├── theme/                            (KEEP - custom theme)
│   ├── components/
│   ├── layouts/
│   ├── setup/
│   ├── styles/
│   └── ... (all theme files)
├── LLM_EVERGREEN_PROMPT.md           (KEEP - system rules)
├── VIEWPORT_CALCULATOR.md            (KEEP - viewport tool)
├── THEME_FEATURES.md                 (REVIEW - keep or merge)
├── README.md                          (KEEP - update)
├── package.json                       (KEEP - root config)
├── .gitignore                         (KEEP)
├── .stylelintrc.json                 (KEEP)
├── [DELETE index.html if not used]
├── [DELETE .env if not needed]
└── [DELETE EVERYTHING ELSE]
```

---

## Deletion Groups - For Batch Processing

### GROUP 1: Definitely Safe to Delete
```
/archive/
2025-11-01 slides.txt
2025-11-01 slides backup.txt
ascii-slides.txt
/css/
/js/
/public/ (if empty)
/scripts/ (if empty)
```

### GROUP 2: Design System Consolidation
Choose ONE to keep as source of truth:
```
DELETE: .expanso-design-system.md
DELETE: .expanso-design-system-complete.md
DELETE: DESIGN_SYSTEM_FINAL.md
DELETE: DESIGN_SYSTEM_INTEGRATION.md
DELETE: INTEGRATION_COMPLETE.md
KEEP: LLM_EVERGREEN_PROMPT.md (already contains all current rules)
KEEP: VIEWPORT_CALCULATOR.md (new tool, in active use)
```

### GROUP 3: Old Workflows
```
DELETE: SLIDE_CHECKLIST.md
DELETE: SLIDE_GENERATION_GUIDE.md
DELETE: SLIDE_REWORK_PLAN.md
(Replaced by VIEWPORT_CALCULATOR.md + LLM_EVERGREEN_PROMPT.md)
```

### GROUP 4: Business/Strategy Docs
```
DECISION NEEDED:
- POSITIONING_FRAMEWORK.md (66KB)
- POSITIONING_FRAMEWORK_BRIEF.md (22KB)

Options:
A) Move to separate docs/ folder
B) Delete from repo (keep only in wiki/docs)
C) Keep in root
```

### GROUP 5: Reference/Structure
```
DELETE: /reference-deck/ (UNLESS slides.md is actively used)
DELETE: /deck/ (UNLESS core/ contains non-duplicated content)
DECISION NEEDED: /index.html (check if actively served)
```

### GROUP 6: Duplicate Slides
```
AUDIT REQUIRED - Compare content:
- /sli-dev/slides-demo.md (KEEP - main deck)
- /sli-dev/slides.md (DELETE if duplicate)
- /sli-dev/slides-new.md (DELETE if duplicate)
```

---

## Space Reduction Summary

| Category | Current | Action | Freed |
|----------|---------|--------|-------|
| /archive/ | 800KB | DELETE | 800KB |
| /reference-deck/ | 2.3MB | DELETE* | 2.3MB |
| /deck/ | 1.5MB | DELETE* | 1.5MB |
| Backup .txt files | 248KB | DELETE | 248KB |
| Design system docs | 74KB | CONSOLIDATE | 60KB |
| Old workflows | 47KB | DELETE | 47KB |
| Legacy dirs | 64KB | DELETE | 64KB |
| **TOTAL** | **~5.1MB** | - | **~5.1MB** |

*Check for unique content before deletion

---

## Cleanup Checklist

### Phase 1: Audit & Verification
- [ ] Compare `/sli-dev/slides.md` with `slides-demo.md` (duplicate check)
- [ ] Compare `/sli-dev/slides-new.md` with `slides-demo.md` (duplicate check)
- [ ] Confirm `index.html` is not actively served in GitHub Pages
- [ ] Confirm `.env` is not referenced in build scripts
- [ ] Check if `/reference-deck/slides.md` is used as template reference
- [ ] Check if `/deck/slides/core/` contains unique content
- [ ] Verify no git hooks or CI/CD scripts depend on deleted files

### Phase 2: Consolidation
- [ ] Decide: Keep which design system doc as source of truth?
- [ ] Decide: Delete or relocate POSITIONING_FRAMEWORK files?
- [ ] Decide: Keep THEME_FEATURES.md or merge into theme/README.md?
- [ ] Update root README.md to reflect new structure

### Phase 3: Deletion (Only After Approval)
- [ ] Delete GROUP 1 items (archive, backups, legacy dirs)
- [ ] Delete GROUP 2 redundant design system docs
- [ ] Delete GROUP 3 old workflow docs
- [ ] Delete GROUP 4 items (if approved)
- [ ] Delete GROUP 5 items (if approved)
- [ ] Delete GROUP 6 duplicate slides (if approved)

### Phase 4: Final Verification
- [ ] Run `npm run build:gh` to confirm sli-dev still builds
- [ ] Verify theme builds correctly
- [ ] Confirm GitHub Actions deployment still works
- [ ] Test local dev: `npm run dev` in sli-dev/

---

## Notes for Editor

1. **Before You Edit:**
   - Review each "DECISION NEEDED" and GROUP with asterisks
   - Mark items as DELETE, KEEP, MOVE, or ARCHIVE
   - Add notes in this file for any items requiring further investigation

2. **How to Use This Plan:**
   - Copy this file to your local repo
   - Edit sections to mark decisions (e.g., "✅ DELETE", "⚠️ REVIEW", "🔒 KEEP")
   - Add your reasoning/comments
   - Send back for final approval before execution

3. **Important:**
   - Do NOT delete anything yet - this is plan only
   - Do NOT commit major deletions without approval
   - Do NOT delete /node_modules/ (npm install will recreate)
   - Do backup .git folder (contains all history)

---

**Status:** Ready for review and editing
**Next Step:** User reviews, edits decisions, and returns for implementation phase
