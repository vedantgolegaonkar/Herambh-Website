# Design System Document: Herambh Software Technologies & Solutions

## 1. Overview & Creative North Star
### Creative North Star: "Precision Vitality"
This design system rejects the "SaaS-in-a-box" look of generic templates. Instead, it positions Herambh as a high-end editorial experience. We bridge the gap between heavy industrial software and fluid digital innovation through **Precision Vitality**. 

By utilizing intentional asymmetry, expansive negative space, and "Tonal Layering" (rather than rigid lines), we create a UI that feels less like a dashboard and more like a curated command center. The experience is rooted in the "Vitality" of the emerald green palette, balanced by the "Precision" of a high-contrast dark-mode default and bold, architectural typography.

---

## 2. Colors & Surface Philosophy
The palette is built on high-contrast depth. We use color not just for branding, but as a structural tool to define hierarchy without visual clutter.

### Dark Theme (Default)
*   **Surface:** `#0B0F19` (Background)
*   **Surface Container Low:** `#111827` (Sectioning)
*   **Surface Container High:** `#1F2937` (Floating Cards/Elements)
*   **Primary:** `#22C55E` (Action/Brand)
*   **Primary Hover:** `#16A34A`

### Light Theme (Optional)
*   **Surface:** `#F9FAFB`
*   **Surface Container High:** `#FFFFFF`
*   **Primary:** `#16A34A`

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning or container definition. Boundaries must be established through background color shifts or subtle tonal transitions. 
*   *Example:* Place a `surface-container-high` card on a `surface` background. The contrast is the border.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked sheets of fine paper.
*   **Level 0:** `surface` (The foundation).
*   **Level 1:** `surface-container-low` (Secondary content blocks).
*   **Level 2:** `surface-container-highest` (Interactive cards or modals).

### Glass & Signature Textures
To provide visual "soul," use subtle gradients for main CTAs, transitioning from `primary` (#22C55E) to `secondary-container` (#007F1E). Floating elements (like navigation bars) should utilize **Glassmorphism**: 
*   `background: rgba(31, 41, 55, 0.7)` 
*   `backdrop-filter: blur(12px)`

---

## 3. Typography
We use a high-contrast scale to create an editorial rhythm. The pairing of **Manrope** and **Inter** provides a balance between geometric authority and functional clarity.

*   **Display (Manrope - Bold):** Used for hero statements. Large, tight letter-spacing (-0.02em) to feel premium and intentional.
*   **Headline (Manrope - SemiBold):** Used for section titles. High contrast against body text.
*   **Body (Inter - Regular):** Optimized for readability with a generous line-height (1.6) to ensure the UI feels "breathing."
*   **Label (Inter - Medium):** All-caps for metadata to create a "technical" micro-aesthetic.

| Token | Size | Font | Weight |
| :--- | :--- | :--- | :--- |
| display-lg | 3.5rem | Manrope | 700 |
| headline-md | 1.75rem | Manrope | 600 |
| body-lg | 1.0rem | Inter | 400 |
| label-md | 0.75rem | Inter | 500 |

---

## 4. Elevation & Depth
In this system, depth is a matter of light and material, not "shadow effects."

### The Layering Principle
Achieve lift by stacking surface tiers. A `surface-container-lowest` card sitting on a `surface-container-low` section creates a "recessed" look, while the opposite creates a "raised" look.

### Ambient Shadows
Shadows must be "ghostly" and mimic natural ambient light.
*   **Elevation-High:** `0px 20px 40px rgba(0, 0, 0, 0.15)`
*   **Shadow Tinting:** Never use pure black shadows. The shadow color should be a tinted version of the `on-surface` color to feel integrated into the background.

### The "Ghost Border" Fallback
If a border is required for accessibility, it must be a **Ghost Border**: 
*   `outline-variant` token (#3D4A3D) at **20% opacity**. 
*   **Prohibited:** 100% opaque borders.

---

## 5. Components

### Buttons (Rounded-2xl)
*   **Primary:** Gradient fill (`primary` to `secondary-container`). No border. `hover: scale(1.05)`.
*   **Secondary:** Ghost border style. Transparent background with `on-surface` text.
*   **Glass-Button:** For dark-theme navigation elements, use a semi-transparent surface with a light top-edge highlight.

### Cards (The "Floating Slab")
*   **Base:** `rounded-xl` (1.5rem).
*   **Interaction:** On hover, apply a subtle scale-up (1.02) and increase shadow diffusion.
*   **Content:** No internal divider lines. Separate "Heading" from "Body" using vertical whitespace (24px - 32px).

### Input Fields
*   **Style:** `surface-container-low` background. 
*   **Focus State:** A soft 2px glow using the `primary` color at 30% opacity. Avoid hard border changes.

### Signature Component: The "Vitality Badge"
Used for status or tech stacks. Small, `rounded-full` chips using a low-opacity `primary` background with high-opacity `on-primary-container` text. This mimics the green accents in the logo.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts (e.g., a large headline on the left, a smaller body block offset to the right).
*   **Do** use negative space as a primary design element. If it feels "empty," you are doing it right.
*   **Do** apply `fade-in-up` transitions on scroll for a cinematic "reveal" effect.

### Don't
*   **Don't** use 1px solid dividers to separate list items. Use 16px-24px of vertical padding instead.
*   **Don't** use standard "drop shadows" (short, dark, blurry). They look cheap.
*   **Don't** use more than three levels of surface nesting. It causes visual fatigue.
*   **Don't** use high-saturation green for body text; keep `primary` for actions and indicators only.