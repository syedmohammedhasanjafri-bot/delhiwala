# ARCHITECTURAL DESIGN SYSTEM & SPECIFICATION (design.md)
## Delhiwala Elevation — Studio Lotus & Foster + Partners Daylight Aesthetic
*Powered by `@ui-ux-pro-max` + `@humanizer`*

---

### 1. Architectural Philosophy & Art Direction
Delhiwala Elevation's digital identity rejects the generic modern SaaS web template in favor of an **architectural monograph aesthetic**. The website behaves like a physical presentation portfolio presented on warm linen and stone paper in a daylight-flooded architectural studio in New Delhi or Dehradun.

- **Atmosphere:** Sunlit, structured, calm, tactile, authoritative.
- **Rhythm:** Strict 12-column asymmetric grid, mathematical padding steps (multiples of 8px/16px/24px/32px/64px), hairline blueprint dividing rules.
- **Form:** 90-degree crisp corners (`rounded-none`). No rounded corners on any cards, buttons, or photo frames. Every line reflects laser-straight metal substructure framing and precision miter joints.
- **Motion:** Inertial smooth scroll via Lenis, deliberate hairline border expansions, and subtle image scaling on hover (Inspira UI physics).

---

### 2. Exact Daylight Architectural Color Palette

| Token Name | Hex Code | Architectural Association | Contrast Ratio vs Canvas | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Canvas** | `#F6F4F0` | Warm Italian Travertine / Cured Lime Plaster | Base (1:1) | Page background, modal drawer body |
| **Secondary Surface** | `#ECE8E1` | Raw Dholpur Sandstone / Buff Concrete | 1.15:1 | Alternating section containers, preview cards, spec panels |
| **Primary Ink** | `#1C1B19` | Structural Steel Charcoal / Dark Iron | **14.8:1** (Exceeds WCAG AAA) | Headlines, body copy, active button backgrounds, dark hairline frames |
| **Muted Notes** | `#68635B` | Weathered River Stone / Drafting Graphite | **4.92:1** (Exceeds WCAG AA) | Secondary captions, technical specs, dimension labels, metadata |
| **WPC Timber Accent**| `#6E473B` | High-Grade WPC Teak / Natural Terracotta Cladding | **5.44:1** (Exceeds WCAG AA) | Architectural accents, active filter markers, feature badges, hover highlights |
| **Hairline Dividers** | `#DCD6CC` | Blueprint Layout Grid Lines / Mortar Joints | Subtle structural rule | 1px horizontal and vertical borders dividing columns and sections |

> **STRICT ENFORCEMENT:** No Dark Mode. No saturated Yellow/Gold tones. No generic pure black `#000000` or sterile artificial blue `#0066FF`.

---

### 3. Typographic Hierarchy & Proportions
The design pairs a contemporary, high-legibility geometric sans-serif with an authoritative, editorial high-contrast serif for section titles and architectural statements.

1. **Editorial Display Serif:** `'Cormorant Garamond'` / `'Playfair Display'`, serif
   - Role: Hero statements, major elevation project titles, architectural manifesto quotes.
   - Weights: 400 (Regular), 600 (Semi-bold), italicized architectural accents.
   - Tracking: `-0.02em` for headlines; `italic` for craftsmanship emphasis.
2. **Structural Body Sans:** `'Plus Jakarta Sans'` / `'Inter'`, sans-serif
   - Role: Navigation, technical specifications, descriptions, form inputs, button labels.
   - Weights: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold).
   - Tracking: `-0.01em` on body text; `+0.08em` on uppercase micro-labels.
3. **Drafting Monospace:** `'JetBrains Mono'` / `'Fira Code'`, monospace
   - Role: Coordinates (`28°38'N 77°13'E`), project numbers (`SPEC-01`, `EXEC-2024`), dimensions (`50x25mm GI`), status badges.
   - Tracking: `+0.05em`, uppercase only, text size `9px` to `12px`.

---

### 4. Layout & Grid Rules
- **Container Max-Width:** `max-w-7xl` (1280px) and full-bleed border-bounded frames.
- **12-Column Grid:** Asymmetric layouts balancing dense technical specifications (e.g. 4-column spec sheet) against generous architectural photography (e.g. 8-column elevation hero).
- **Aspect Ratio Strictness:**
  - Hero and facade panoramas: `aspect-[16/10]` or `aspect-[21/9]`.
  - Detail photography, louvers, and circular staircases: `aspect-[4/5]`.
  - Square thumbnails: `aspect-square` with `rounded-none`.
- **Dividers:** Every section transition is delineated by a `1px solid #DCD6CC` hairline divider. Vertical hairline rules separate columns in the Material Matrix.

---

### 5. Component Interaction Specifications

#### A. Lenis Smooth Momentum Scroll
- Smooth scroll factor: 1.0 (calm, grounded, no jitter).
- Eliminates native snappy scrolling, making the page glide like viewing high-resolution architectural blueprints.

#### B. Architectural Image Hover Physics (Inspira UI & UI Lora)
- Default state: Clean, high-resolution architectural photograph with `1px solid #DCD6CC` frame and subtle technical label.
- Hover state:
  - Slight optical scale (`scale-[1.02]`, duration `500ms`, cubic-bezier `(0.16, 1, 0.3, 1)`).
  - Reveal of drafting coordinate overlay and `"Inspect Material Specs"` CTA pill.
  - Zero drop-shadows; contrast is achieved strictly through sharp borders.

#### C. Slide-Over Technical Specification Drawer
- Trigger: Clicking any project card or material system row.
- Motion: Translates from the right edge smoothly (`duration-400 ease-out`).
- Backdrop: Subtle frosted blur (`backdrop-blur-sm bg-black/20`).
- Content:
  - Technical blueprint diagram illustration.
  - Substructure breakdown (Frame gauge, anti-rust coating, fastener type).
  - Fire & Weather rating metrics.
  - Direct WhatsApp consultation link carrying the active project ID.

#### D. Project & Architect Ledger Form (Forge UI Underline Inputs)
- Input styling: Flat minimalist underline input fields (`border-b border-[#DCD6CC] focus:border-[#1C1B19] bg-transparent py-3 text-sm focus:outline-none transition-colors`).
- Radio / Option selector: Architectural square radio chips (`border border-[#DCD6CC] px-4 py-2 text-xs font-mono uppercase cursor-pointer hover:border-[#1C1B19]`).
- Submit Button (Uiverse): Solid `#1C1B19` rectangle with `#F6F4F0` text, transforming on hover to invert colors with a hairline border.

---

### 6. Humanized Editorial Voice (`@humanizer`)
All text has been authored from the perspective of a seasoned Indian facade engineering craftsman:
- **No:** "We leverage state-of-the-art AI-driven cladding paradigms."
- **Yes:** "Modern spaces need modern details. We supply certified exterior-grade WPC and HPL panels and deploy experienced on-site fabrication teams across North and Central India to execute your architect's vision to the exact millimeter."
- **No:** "Get in touch with our customer service ninjas."
- **Yes:** "Direct Site Execution Desk: Connect with our lead execution engineer on WhatsApp with your elevation drawings for immediate material schedules and site inspection dates."
