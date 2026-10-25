import { ProjectExecution } from '../types/index';

export const PROJECTS_DATA: ProjectExecution[] = [
  {
    id: 'proj-01-dehradun-villa',
    code: 'EXEC-DDN-01',
    title: 'Modern Villa HPL & Louver Front Elevation',
    category: 'facade',
    categoryLabel: 'Exterior Facade & HPL Cladding',
    location: 'Rajpur Road, Dehradun, Uttarakhand',
    coordinates: '30°19\'N 78°02\'E',
    year: '2024',
    scopeSqFt: '2,850 sq.ft',
    description: 'Turnkey front elevation envelope combining 8mm exterior compact grade HPL panels in Teak Grain finish, seamlessly integrated with fluted dark charcoal WPC vertical louvers and concealed rainwater drainage channels.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85',
    aspectRatio: '16/10',
    featuredSpecs: {
      material: 'Exterior Compact HPL (8mm) & Fluted WPC Louvers',
      substructure: '50x50mm GI Box Sections with Anti-Corrosion Primer',
      finish: 'Matte Weathered Teak + Architectural Charcoal',
      warranty: '12-Year Colorfast & Substructure Guarantee'
    },
    technicalHighlights: [
      'Ventilated rain-screen system with 40mm thermal isolation cavity',
      'SS 304 concealed mounting clips — zero face penetrations',
      'Engineered corner miters with custom aluminum flashings',
      'Tested against extreme Himalayan temperature fluctuations'
    ],
    executionTimeline: '16 On-Site Working Days',
    clientType: 'Luxury Villa'
  },
  {
    id: 'proj-02-mussoorie-pergola',
    code: 'EXEC-MSS-02',
    title: 'Custom All-Weather WPC Outdoor Pergola & Deck',
    category: 'pergola',
    categoryLabel: 'Custom WPC Pergolas & Gazebos',
    location: 'Mussoorie Foothills, Uttarakhand',
    coordinates: '30°27\'N 78°04\'E',
    year: '2024',
    scopeSqFt: '950 sq.ft',
    description: 'Cantilever terrace canopy designed to frame panoramic valley vistas. Engineered using structural co-extruded WPC rafters with internal galvanized steel cores to resist high mountain wind loads and heavy snowfall.',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85',
    aspectRatio: '4/5',
    featuredSpecs: {
      material: 'Structural 150x50mm Co-Extruded WPC Beams',
      substructure: 'Internal 60x40mm Hot-Dip Galvanized Steel Core',
      finish: 'Deep Walnut Wood Grain Texture',
      warranty: '15-Year Structural & Rot-Proof Guarantee'
    },
    technicalHighlights: [
      'Engineered cantilever design with hidden steel anchorage into RCC slab',
      'Integrated concealed LED light tracking channels along rafter underside',
      'Hydrophobic surface finish preventing moss and lichen growth in hill moisture',
      'Thermal expansion joints calculated for sub-zero winter temperatures'
    ],
    executionTimeline: '7 On-Site Working Days',
    clientType: 'Private Residence'
  },
  {
    id: 'proj-03-indore-staircase',
    code: 'EXEC-IND-03',
    title: 'Sculptural Grand Circular Staircase Execution',
    category: 'staircase',
    categoryLabel: 'Architectural Staircases & Interior Paneling',
    location: 'Bicholi Mardana, Indore, Madhya Pradesh',
    coordinates: '22°43\'N 75°51\'E',
    year: '2024',
    scopeSqFt: 'Double-Height Foyer (24 Risers)',
    description: 'Precision structural fabrication and timber cladding of a free-standing helical grand staircase. Features continuous thermoformed timber underside soffit, integrated riser step illumination, and seamless inner stringer balustrade.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85',
    aspectRatio: '4/5',
    featuredSpecs: {
      material: 'Curved Engineered Teak Veneer & Thermoformed Soffit',
      substructure: '12mm Laser-Cut Mild Steel Helical Box Stringers',
      finish: 'Natural Matte Polyurethane Hard-Wax Seal',
      warranty: 'Lifetime Structural Foundation'
    },
    technicalHighlights: [
      '3D laser-scanned site geometry ensuring 0.5mm tread elevation tolerance',
      'Monolithic underside curve with continuous concealed expansion joints',
      'Vibration-dampened tread sub-assemblies for silent acoustics',
      'Seamless transition into first-floor perimeter bridge railing'
    ],
    executionTimeline: '24 Working Days (Prefabrication + Site Assembly)',
    clientType: 'Architect Collaboration'
  },
  {
    id: 'proj-04-bareilly-commercial',
    code: 'EXEC-BLY-04',
    title: 'Commercial Facade Cladding & Interior Paneling',
    category: 'facade',
    categoryLabel: 'Exterior Facade & HPL Cladding',
    location: 'Civil Lines, Bareilly, Uttar Pradesh',
    coordinates: '28°22\'N 79°25\'E',
    year: '2024',
    scopeSqFt: '4,200 sq.ft',
    description: 'Multi-story exterior overhaul for a high-end commercial retail complex. Comprises vertical sunscreen louvers, ventilated stone-textured HPL cladding, and integrated architectural facade lighting troughs.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85',
    aspectRatio: '16/10',
    featuredSpecs: {
      material: 'Exterior Compact Grade HPL & 100mm Fluted Louvers',
      substructure: 'Heavy 6063-T6 Extruded Aluminum Sub-Frame',
      finish: 'Architectural Slate Grey + Warm Honey Woodgrain',
      warranty: '10-Year Commercial Facade Warranty'
    },
    technicalHighlights: [
      'Engineered for 1.8 kPa regional wind load compliance',
      'Thermal decoupling brackets to eliminate cold-bridging',
      'Modular panel layout allowing individual panel replacement if serviced',
      'Class B-s1,d0 fire safety compliance for public commercial structures'
    ],
    executionTimeline: '21 On-Site Working Days',
    clientType: 'Commercial Developer'
  },
  {
    id: 'proj-05-noida-pavilion',
    code: 'EXEC-NOI-05',
    title: 'Cantilever WPC Louvered Pavilion & Courtyard',
    category: 'pergola',
    categoryLabel: 'Custom WPC Pergolas & Gazebos',
    location: 'Sector 44, Noida, Delhi NCR',
    coordinates: '28°34\'N 77°23\'E',
    year: '2023',
    scopeSqFt: '1,200 sq.ft',
    description: 'Architect-commissioned courtyard pergola featuring adjustable angle WPC louvers to regulate daylight penetration into the adjoining living spaces while maintaining complete thermal shade during North Indian summers.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85',
    aspectRatio: '16/10',
    featuredSpecs: {
      material: 'Co-Extruded 200x50mm WPC Louver Rafters',
      substructure: 'Powder-Coated Structural Steel Frame',
      finish: 'Dark Teak Textured Matte',
      warranty: '15-Year All-Weather Guarantee'
    },
    technicalHighlights: [
      'Precision pitch calculated for 65% summer solar shading',
      'Hidden anchor plates concealed below Italian marble courtyard flooring',
      'Weather-sealed joints resisting extreme Delhi NCR summer heat (+48°C)',
      'Integrated rain gutter channels integrated inside peripheral fascia'
    ],
    executionTimeline: '9 On-Site Working Days',
    clientType: 'Luxury Villa'
  },
  {
    id: 'proj-06-lucknow-residence',
    code: 'EXEC-LKO-06',
    title: 'Bespoke Residence Facade & Cantilever Paneling',
    category: 'facade',
    categoryLabel: 'Exterior Facade & HPL Cladding',
    location: 'Gomti Nagar Extension, Lucknow, Uttar Pradesh',
    coordinates: '26°50\'N 80°56\'E',
    year: '2023',
    scopeSqFt: '3,100 sq.ft',
    description: 'Monolithic geometric elevation combining cantilevered balcony soffits clad in wood-grain HPL panels with vertical privacy louvers framing double-height architectural glazing.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
    aspectRatio: '4/5',
    featuredSpecs: {
      material: 'Exterior HPL Panels (6mm) & WPC Soffit Planks',
      substructure: 'Custom Fabricated Galvanized Iron Substructure',
      finish: 'Natural Teak & Architectural Bone White',
      warranty: '10-Year Comprehensive Warranty'
    },
    technicalHighlights: [
      'Inverted cantilever soffit installation with zero sagging tolerance',
      'Concealed perimeter LED lighting channels recessed into panel joints',
      'Acoustic insulation batts integrated inside facade cavity',
      'Precision mitered exterior fascia returns'
    ],
    executionTimeline: '18 On-Site Working Days',
    clientType: 'Private Residence'
  }
];
