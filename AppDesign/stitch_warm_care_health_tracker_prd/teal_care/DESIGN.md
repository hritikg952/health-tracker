# Design System Strategy: The Editorial Wellness Framework

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Sanctuary"**

This design system rejects the clinical, cold aesthetic of traditional health trackers in favor of a "Digital Sanctuary"—a space that feels as restorative as the habits it tracks. By merging high-end editorial typography with an "Aggressively Organic" geometry, we move away from a standard app interface and toward a bespoke lifestyle journal.

To break the "template" look, we utilize **intentional asymmetry** and **tonal depth**. Instead of centering every element, we use a 12-column grid but allow hero elements to "bleed" across columns or overlap containers. This creates a rhythmic, human flow that mimics the imperfect but beautiful journey of health.

---

## 2. Colors & Surface Philosophy
The palette is rooted in botanical tones. We use a sophisticated layering system to define hierarchy, moving beyond the "box-on-box" layout.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface-container-low` section should sit on a `background` without a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of heavy-weight vellum.
- **Background (`#f4fbf9`):** The base canvas.
- **Surface Container Lowest (`#ffffff`):** Reserved for the most important interactive cards.
- **Surface Container High (`#e3eae8`):** Used for "recessed" areas like search bars or inactive background containers.

### The "Glass & Signature Texture" Rule
To add visual "soul," use a 15% opacity `primary` color for floating navigation bars with a `20px` backdrop-blur. For main CTAs, apply a subtle linear gradient from `primary (#006a63)` to `primary-container (#4db6ac)` at a 135-degree angle. This provides a soft, pillowy depth that flat hex codes cannot achieve.

---

## 3. Typography: The Editorial Voice
Our typography pairing balances the "Human" (Serif) with the "Functional" (Geometric Sans).

*   **Headlines (Fraunces, 600):** This is our "Editorial Voice." The soft curves and variable descenders of Fraunces provide an authoritative yet empathetic tone. Use `display-lg` for daily highlights to make data feel like a headline story.
*   **Body & Labels (Outfit, 400):** Outfit provides high legibility for data points. Its circular nature complements our 24px corner radius.
*   **Contrast as Hierarchy:** Use `headline-sm` in `primary` color against `body-md` in `on-surface-variant` to create a clear path for the eye without needing bold dividers.

---

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering** rather than structural shadows.

### The Layering Principle
Stacking tiers creates natural lift. 
*   **Example:** A `surface-container-lowest` card placed on a `surface-container-low` section creates a soft, natural lift.

### Ambient Shadows
When a card must float (e.g., a modal or a primary action), use an "Ambient Shadow":
*   **Blur:** 40px - 60px
*   **Opacity:** 4% - 6%
*   **Color:** Use a tinted version of `on-surface` (`#161d1c`). Never use pure black or grey shadows; they feel "dirty" on our mint/teal palette.

### The "Ghost Border" Fallback
If accessibility requires a container edge, use a "Ghost Border": the `outline-variant` token at **15% opacity**. 100% opaque borders are strictly forbidden as they break the "Sanctuary" feel.

---

## 5. Components

### Buttons & Chips
*   **Primary Action:** Use the `xl` (3rem) corner radius. Use the signature teal-to-mint gradient. Text should be `title-sm` (Outfit).
*   **Selection Chips:** Forbid the use of outlines. Use a `surface-container-highest` background for unselected states and a `primary-container` for selected states.
*   **Corner Treatment:** All interactive components (Buttons, Inputs, Chips) must use at least a `md` (1.5rem / 24px) radius.

### Cards & Lists
*   **The Divider Ban:** Never use a horizontal line to separate list items. Use **Spacing Scale 5 (1.7rem)** of vertical white space or alternate the background color of the list item container slightly (e.g., `surface` to `surface-container-low`).
*   **Progress Indicators:** Use the `secondary` (Soft Green) for success. The track should be the `surface-variant` color with a 20% opacity to ensure the "organic" feel remains light.

### Inputs & Fields
*   **Style:** Filled containers only. No outlined boxes.
*   **Background:** Use `surface-container-high` (`#e3eae8`).
*   **Active State:** The bottom edge can feature a 2px `primary` "glow" bar, but the container should remain borderless.

### Signature Component: The "Vitals Overlap"
For health metrics (Heart rate, Sleep), do not use a standard grid. Use an **overlapping card layout** where the metric value (`display-md`) sits slightly outside the card container, creating a sophisticated, custom-designed feel.

---

## 6. Do’s and Don'ts

### Do:
*   **Do** use asymmetrical margins (e.g., a wider left margin than right) for editorial-style content pages.
*   **Do** use "white space" as a functional element. If a screen feels crowded, increase the spacing to the next tier in the scale.
*   **Do** tint all neutrals with a hint of teal to maintain a cohesive atmospheric temperature.

### Don't:
*   **Don't** use 90-degree corners anywhere. Even "small" elements like checkboxes must have at least a `sm` (0.5rem) radius.
*   **Don't** use pure `#000000` for text. Always use `on-surface` (`#161d1c`) to keep the "Teal Care" warmth.
*   **Don't** use "Drop Shadows" from a standard UI kit. If it looks like a shadow from 2015, it’s too heavy. Think "Ambient Glow."