export type ExecutionCategory = 
  | 'all'
  | 'facade'
  | 'pergola'
  | 'staircase';

export interface ProjectExecution {
  id: string;
  code: string;
  title: string;
  category: ExecutionCategory;
  categoryLabel: string;
  location: string;
  coordinates: string;
  year: string;
  scopeSqFt: string;
  description: string;
  imageUrl: string;
  aspectRatio: '16/10' | '4/5';
  featuredSpecs: {
    material: string;
    substructure: string;
    finish: string;
    warranty: string;
  };
  technicalHighlights: string[];
  executionTimeline: string;
  clientType: 'Private Residence' | 'Luxury Villa' | 'Architect Collaboration' | 'Commercial Developer';
}

export interface MaterialSystem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  substructureFraming: string;
  materialGrade: string;
  weatherResistance: string;
  fireRating: string;
  lifespan: string;
  typicalTimeline: string;
  suitableApplications: string[];
  keyAdvantages: string[];
  imageUrl: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  role: 'Homeowner' | 'Architect / Designer' | 'Commercial Builder' | 'Turnkey Contractor';
  requirement: string;
  city: string;
  approxArea: string;
  notes: string;
}
