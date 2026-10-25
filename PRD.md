# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Project: Delhiwala Elevation — Architectural Facade & Site Execution Web Platform
**Version:** 1.0.0 | **Author:** Studio Architecture & Systems Team | **Target Standard:** Studio Lotus & Foster + Partners Daylight Aesthetic

---

### 1. Executive Summary & Brand Overview
**Delhiwala Elevation** is a premier architectural exterior facade, cladding, custom pergola, and structural details execution firm based in North India with comprehensive on-site installation and material supply capabilities across India.
- **Brand Tagline:** *"Modern Spaces Need Modern Details — Full Material Supply & Site Execution Across India"*
- **Core Specialization:** Exterior Facade Cladding (HPL, WPC, Stone Polymer Composite, Fluted Louvers), Custom All-Weather WPC Pergolas & Gazebos, Grand Circular Staircases, Cantilever Louvers, and Bespoke Interior Paneling.
- **Geographic Execution Scope:** Active site teams stationed across Uttarakhand (Dehradun, Rishikesh, Mussoorie, Haridwar), Uttar Pradesh (Bareilly, Lucknow, Kanpur, Noida), Madhya Pradesh (Indore, Bhopal), Delhi NCR, and nationwide deployment for architect-commissioned villas and commercial projects.
- **Key Channels:**
  - Phone / WhatsApp: `+91 78303 35445`
  - Email: `delhiwala.elevation@gmail.com`
  - Instagram: `@delhiwala.elevation`

---

### 2. Objectives & Value Proposition
1. **Bridge the Design-Execution Gap:** Architects and designers conceive sophisticated exterior elevations; Delhiwala Elevation provides the certified material supply, structural substructure framing (MS/Aluminum powder-coated channels), and precision craftsman crews to build them without deviation.
2. **Eliminate Freelance Contractor Risk:** Provide commercial builders and luxury bungalow homeowners with institutional-grade material guarantees (UV-resistant, termite-proof, fire-retardant exterior grade, all-weather 10-15 year warranties).
3. **Seamless Digital Consultation to On-Site Measurement:** Enable architects and clients to explore real ongoing/completed sites, inspect technical cross-sections via an interactive Material Spec Drawer, and generate instant WhatsApp project briefs.

---

### 3. Target Audience & Personas
- **Persona 1: The Design Architect & Elevation Consultant**
  - Needs: Dimensional accuracy, certified material test sheets (HPL weatherability, wind load resistance on high-rise facades), exact concealed fixing systems, seamless alignment with AutoCAD/Revit elevation drawings.
  - Action: Reviews the Technical Specification Matrix, downloads spec data, and clicks "Architect Collaboration" to share CAD drawings via WhatsApp.
- **Persona 2: The Luxury Bungalow & Villa Owner**
  - Needs: Premium curb appeal, durable thermal and rain protection, low maintenance (no peeling, warping, or fading like natural untreated wood), reassurance from ongoing site executions in their region.
  - Action: Explores completed villa facades, selects their city (e.g., Dehradun, Indore, Bareilly, Delhi NCR), calculates requirements in the Site Ledger, and initiates direct booking.
- **Persona 3: Commercial Builder & Turnkey Contractor**
  - Needs: Volume material supply pricing, strict delivery schedules, certified installation crews equipped with safety gear and laser leveling.
  - Action: Submits commercial RFP with square footage and timelines.

---

### 4. Core User Flows & Information Architecture

#### User Flow 1: Elevation Archive Exploration
1. Visitor arrives on the Daylight Architectural Canvas (`#F6F4F0`).
2. Scans the top execution ticker: *"FULL MATERIAL SUPPLY & ON-SITE EXECUTION ACROSS INDIA • ARCHITECT & BUILDER COLLABORATIONS"*.
3. Filters projects by discipline: `All Executions`, `Exterior Facade & HPL Cladding`, `Custom WPC Pergolas & Gazebos`, `Architectural Staircases & Interior Paneling`.
4. Hovers over high-res project imagery (Inspira UI architectural hover physics with subtle scale and coordinate overlay).

#### User Flow 2: Slide-Over Technical Specification & Material Drawer
1. On any project card or material system, user clicks `"Inspect Technical Specifications"`.
2. A smooth slide-over drawer opens from the right edge (`bg-[#F6F4F0] border-l border-[#DCD6CC]`).
3. Drawer reveals:
   - Substructure Framing: Heavy-duty 50x25mm / 50x50mm Galvanized Iron or Extruded Aluminum framing with concealed stainless steel (SS 304) brackets.
   - Core Material Grade: Exterior High-Pressure Laminate (compact grade EN 438-6, UV protective fluoropolymer film) or Co-Extruded 2nd Gen Wood-Plastic Composite (360-degree protective cap).
   - Thermal & Weather Resistance: Working temperature -20°C to +75°C, Class B/A fire retardant options, 100% moisture & termite proof.
   - Execution Timeline: Typical villa facade completed in 14–21 working days; pergolas erected in 5–8 days.
   - Site Verification Gallery: High-resolution zoomable detail shots of joints, groove alignments, and hidden screws.

#### User Flow 3: Site Execution & Material Ledger (WhatsApp Router)
1. User enters the **Site Execution & Material Ledger** section.
2. Selects their role: `Homeowner / Villa Client`, `Architect / Interior Designer`, `Commercial Builder / Contractor`.
3. Chooses primary requirement: `Exterior Front Elevation Cladding (HPL / Louvers)`, `Custom All-Weather WPC Pergola`, `Architectural Circular Staircase`, `Turnkey Material Supply + Execution`.
4. Enters Project City / Location (e.g., Dehradun, Bareilly, Lucknow, Indore, Delhi NCR, or Other).
5. Inputs approximate facade/pergola area (sq. ft.) and specific design notes.
6. Clicks `"Generate WhatsApp Project Brief"`.
7. Client is seamlessly redirected to WhatsApp (`https://wa.me/917830335445`) with a formatted, professional briefing message ready to send.

---

### 5. Technical Stack & Architecture
- **Framework:** React 19 + TypeScript + Vite (Lightning-fast build, zero bloat, instant HMR).
- **Styling:** Tailwind CSS v4 with bespoke architectural variables (Travertine `#F6F4F0`, Sandstone `#ECE8E1`, Charcoal `#1C1B19`, Teak `#6E473B`, Hairline `#DCD6CC`).
- **Smooth Scroll:** `@studio-freight/lenis` / `lenis` smooth momentum scrolling for a grounded architectural weight.
- **Icons:** `lucide-react` for clean, consistent geometric line art.
- **Motion:** Custom CSS keyframes and spring transforms mirroring Animate UI, Vengeance UI, and Inspira UI.

---

### 6. Acceptance Criteria & Quality Gates
- **Zero Dark Mode:** All screens enforce light travertine daylight aesthetic.
- **Zero Rounded Corners:** All container boxes, input fields, images, and buttons must be `rounded-none`.
- **Accessibility:** WCAG AA contrast ratio (> 4.5:1 for body copy on `#F6F4F0`, > 7:1 for headers).
- **Responsive Fidelity:** Flawless rendering and layout shift prevention from 375px mobile viewports up to 4K displays.
- **Copy Integrity:** 100% humanized, realistic Indian elevation contractor voice; no generic tech boilerplate.
