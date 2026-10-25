# SYSTEM ARCHITECTURE & COMPONENT GRAPH (architecture.md)
## Delhiwala Elevation Web Platform

---

### 1. Technology Architecture Overview
- **Build Engine:** Vite 6 with React 19 and TypeScript.
- **Styling Architecture:** Tailwind CSS v4 with custom CSS variables and custom typography utilities.
- **Scroll Physics:** `@studio-freight/lenis` / `lenis` for inertial smooth momentum scroll.
- **Iconography:** `lucide-react` line icons adhering to a 1.5px architectural stroke weight.
- **State Management:** React state with context hooks for the slide-over Technical Specification Drawer and the dynamic WhatsApp URL generator.

---

### 2. Full Component Graph & Directory Hierarchy

```
src/
├── assets/
├── components/
│   ├── LenisSmoothScrollProvider.tsx      # Application-wide smooth momentum scroll wrapper
│   ├── TopExecutionBanner.tsx             # Continuous hairline marquee & execution banner
│   ├── StructuralHeader.tsx               # Sticky daylight nav (#F6F4F0/95) with direct contact & WA CTA
│   ├── AsymmetricFacadeHero.tsx           # 12-column architectural hero with live site specs & headline
│   ├── MaterialAndSystemsMatrix.tsx       # Vengeance UI 4-pillar technical specification breakdown
│   ├── SiteExecutionArchive.tsx           # UI Lora + Inspira UI filterable elevation gallery
│   ├── TechnicalSpecDrawer.tsx            # Slide-over technical ledger with substructure & weather grades
│   ├── ArchitecturalProcess.tsx           # 4-stage execution sequence (Measurement -> Fabrication -> Install)
│   ├── ProjectAndArchitectLedger.tsx      # Forge UI underline estimator -> WhatsApp dynamic message builder
│   ├── RegionalExecutionMap.tsx           # Active footprints (Uttarakhand, UP, Indore, Delhi NCR, Pan-India)
│   ├── ArchitecturalFooter.tsx            # Full metadata, architectural coordinates, phone, email, Instagram
│   └── ui/
│       ├── Button.tsx                     # Sharp 90-degree architectural action buttons
│       ├── Input.tsx                      # Forge UI underline input primitives
│       └── SpecBadge.tsx                  # Monospace technical badge primitive
├── data/
│   ├── projectsData.ts                    # Verified architectural facade projects with technical specs
│   └── materialSystems.ts                 # Full technical specifications for cladding, WPC, pergolas, staircases
├── utils/
│   └── whatsappRouter.ts                  # Formatter that builds high-converting WhatsApp execution queries
├── App.tsx                                # Root orchestrator combining all layout components
├── index.css                              # Daylight design tokens, hairline utilities, and custom font imports
└── main.tsx                               # Application mount entrypoint
```

---

### 3. Verified High-Resolution Architectural Facade Assets
All photography is pre-verified, high-resolution architectural photography with zero watermarks and realistic elevation craftsmanship:

1. **Hero Facade Cladding:**
   - URL: `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85`
   - Description: Multi-level luxury residence with integrated timber louvers, exterior cladding, and cantilevered overhangs.
   - Proportions: `aspect-[16/10]` desktop, `aspect-[4/3]` mobile.
2. **Project 01 — Modern Villa HPL & Louver Front Elevation:**
   - URL: `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85`
   - Discipline: Exterior Facade Cladding
   - Details: Compact exterior HPL panels paired with dark charcoal aluminum substructure and concealed flashing.
3. **Project 02 — Custom All-Weather WPC Outdoor Pergola & Deck:**
   - URL: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85`
   - Discipline: Custom WPC Pergolas & Gazebos
   - Details: Heavy-duty 100x50mm fluted WPC rafters over galvanized steel core, weather-sealed against heavy monsoon moisture.
4. **Project 03 — Sculptural Grand Circular Staircase Execution:**
   - URL: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85`
   - Discipline: Architectural Staircases & Interior Paneling
   - Details: Continuous curved soffit with engineered timber cladding, precision-mitered risers, and seamless continuous handrail.
5. **Project 04 — Commercial Facade Cladding & Interior Paneling:**
   - URL: `https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85`
   - Discipline: Commercial Facade Cladding
   - Details: Fluted exterior louvers on double-height commercial atrium with integrated rain-screen substructure.
6. **Detail Supplementary Frames:**
   - Facade Joint Detail: `https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80`
   - WPC Louver Texture: `https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=800&q=80`

---

### 4. Technical WhatsApp Router Specification
The client inquiry ledger dynamically constructs a formatted WhatsApp link to `+91 78303 35445`:

```typescript
export interface ProjectInquiryData {
  role: 'Homeowner' | 'Architect / Designer' | 'Commercial Builder' | 'Turnkey Contractor';
  service: string;
  city: string;
  approxArea: string;
  notes: string;
}

export function generateWhatsAppInquiryUrl(data: ProjectInquiryData): string {
  const phone = '917830335445';
  const message = [
    `*DELHIWALA ELEVATION — ON-SITE EXECUTION & MATERIAL INQUIRY*`,
    `--------------------------------------------------`,
    `• *Client / Stakeholder:* ${data.role || 'Not specified'}`,
    `• *Requirement:* ${data.service || 'Facade Cladding / Pergola'}`,
    `• *Project Location / City:* ${data.city || 'Pan-India'}`,
    `• *Estimated Scope / Area:* ${data.approxArea || 'To be determined'}`,
    `• *Technical Notes:* ${data.notes || 'Please share product catalog and schedule on-site measurement.'}`,
    `--------------------------------------------------`,
    `*Direct Inquiry via delhiwalaelevation.com*`
  ].join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
```

---

### 5. Accessibility & Responsive Verification Strategy
- Strict tab index and aria labels on all interactive controls (drawer toggle, category pills, form inputs).
- Contrast checker verification: all text meets WCAG AA (>= 4.5:1) standards against `#F6F4F0` and `#ECE8E1`.
- Mobile viewport: responsive navigation with full-screen slide out or compact drawer, touch-friendly tap targets (minimum 44x44px).
- Desktop viewport: expansive 12-column layout with fixed-width margins and hairline border grids.
