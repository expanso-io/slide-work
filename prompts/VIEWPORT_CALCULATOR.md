# VIEWPORT HEIGHT CALCULATOR - USE BEFORE BUILDING ANY SLIDE

## STEP 1: LIST ALL VERTICAL ELEMENTS

For EVERY slide, list each vertical element with its actual rendered height:

```
Element                           | Height (px) | Calculation
----------------------------------|-------------|------------------
Outer padding (top)              | _____       | padding-top
Title text                        | _____       | font-size × line-height
Title margin-bottom              | _____       | margin-bottom
Subtitle text                     | _____       | font-size × line-height
Subtitle margin-bottom           | _____       | margin-bottom
Section 1 header                  | _____       | font-size × line-height
Section 1 header margin          | _____       | margin-bottom
Section 1 content height         | _____       | actual rendered height
Section 1 padding                | _____       | padding × 2
Section 1 margin-bottom          | _____       | margin-bottom
[Repeat for each section]        | _____       |
Divider lines (each)             | _____       | height + margins
Footer/caption text              | _____       | font-size × line-height
Footer margin-top                | _____       | margin-top
Outer padding (bottom)           | _____       | padding-bottom
----------------------------------|-------------|------------------
TOTAL HEIGHT                     | _____       | SUM ALL ROWS
```

## STEP 2: CHECK AGAINST LIMITS

```
TOTAL HEIGHT: _____px

✅ IF < 750px  → SAFE - Proceed with build
⚠️ IF 750-850px → CAUTION - Very tight, test carefully
❌ IF > 850px  → FAILED - Must reduce before building
```

## STEP 3: REDUCTION FORMULA (IF NEEDED)

If total > 850px, calculate reduction percentage:

```
Reduction % = ((TOTAL - 750) / TOTAL) × 100
            = ((_____  - 750) / _____ ) × 100
            = _____% reduction needed
```

Apply this percentage to:
- All font sizes (reduce by _____ %)
- All padding/margins (reduce by _____ %)
- All fixed heights (reduce by _____ %)

## STEP 4: RECALCULATE WITH REDUCTIONS

Rebuild the table above with reduced values and verify TOTAL < 850px.

---

## REAL EXAMPLES

### Example 1: Slide 10 (GitHub Pages) - FIRST ATTEMPT FAILED

```
Element                           | Height (px)
----------------------------------|------------
Outer padding (top)              | 30
Title (52px × 1.1)               | 57
Title margin-bottom              | 38
Subtitle (28px × 1.3)            | 36
Subtitle margin-bottom           | 38
Code block height                | 320  ← UNDERESTIMATED!
Code block margin-bottom         | 24
Divider + margins                | 44
Footer panel                     | 140  ← TOO TALL!
Footer margin-bottom             | 32
Info boxes (3 rows)              | 120
Outer padding (bottom)           | 30
----------------------------------|------------
TOTAL                            | 909px ❌ FAILED
```

**REDUCTION NEEDED:** (909 - 750) / 909 = 17.5%

### Example 1: CORRECTED VERSION

```
Element                           | Height (px)
----------------------------------|------------
Outer padding (top)              | 25        (was 30, -17%)
Title (46px × 1.1)               | 50        (was 57, -17%)
Title margin-bottom              | 24        (was 38, -37%)
Subtitle (24px × 1.3)            | 31        (was 36, -14%)
Subtitle margin-bottom           | 24        (was 38, -37%)
Code block (actual measured)     | 280       (was 320, -12.5%)
Code block margin-bottom         | 16        (was 24, -33%)
Divider + margins                | 33        (was 44, -25%)
Footer panel (measured)          | 90        (was 140, -36%)
Footer margin-bottom             | 16        (was 32, -50%)
Info boxes (3 boxes)             | 90        (was 120, -25%)
Outer padding (bottom)           | 20        (was 30, -33%)
----------------------------------|------------
TOTAL                            | 699px ✅ SAFE
```

---

## CRITICAL RULES

1. **NEVER estimate code block heights** - they render 30-40% taller than expected
2. **Always account for line-height** - multiply font-size by line-height (1.1-1.8)
3. **Margins compound** - top + bottom margins = double what you think
4. **Start with 70% of ideal sizes** - scale up if room available
5. **Test with actual content** - Lorem ipsum is shorter than real text

---

## ENFORCEMENT CHECKLIST

Before submitting ANY slide:

- [ ] Completed STEP 1 calculation table
- [ ] Checked against limits (STEP 2)
- [ ] Applied reductions if needed (STEP 3)
- [ ] Recalculated final total (STEP 4)
- [ ] Documented calculation in HTML comments
- [ ] Final total is < 850px

**IF ANY CHECKBOX IS UNCHECKED, THE SLIDE IS REJECTED.**
