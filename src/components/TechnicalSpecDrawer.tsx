import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { MaterialSystem, ProjectExecution } from '../types';
import { CLEAN_PHONE, OFFICIAL_PHONE } from '../utils/whatsappRouter';

interface TechnicalSpecDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  system: MaterialSystem | null;
  project: ProjectExecution | null;
}

export const TechnicalSpecDrawer: React.FC<TechnicalSpecDrawerProps> = ({
  isOpen,
  onClose,
  system,
  project,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const title = system?.title || project?.title || 'Technical Material Specification';
  const subtitle = system?.subtitle || project?.categoryLabel || 'Architectural Exterior Systems';
  const description = system?.fullDesc || project?.description || '';
  const framing = system?.substructureFraming || project?.featuredSpecs.substructure || '';
  const grade = system?.materialGrade || project?.featuredSpecs.material || '';
  const weather = system?.weatherResistance || 'All-Weather UV & Moisture Resistant';
  const warranty = system?.lifespan || project?.featuredSpecs.warranty || '10-15 Year Guarantee';
  const timeline = system?.typicalTimeline || project?.executionTimeline || '14 Working Days';
  const imageUrl = system?.imageUrl || project?.imageUrl || '';

  const waQuery = encodeURIComponent(
    `Hello Delhiwala Elevation, I am reviewing the technical specifications for: ${title}. Please share CAD shop drawings and pricing schedule.`
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <aside 
        aria-label="Technical Specification Sheet"
        className="relative w-full max-w-2xl bg-[#F6F4F0] border-l border-[#DCD6CC] shadow-2xl flex flex-col h-full overflow-y-auto z-10"
      >
        
        {/* Drawer Header */}
        <div className="sticky top-0 bg-[#F6F4F0] border-b border-[#DCD6CC] p-6 flex items-center justify-between z-20">
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-[#6E473B]">
              TECHNICAL SPECIFICATION &amp; MATERIAL DOSSIER
            </div>
            <h2 className="text-xl sm:text-2xl font-normal text-[#1C1B19] mt-1">
              {title}
            </h2>
            <div className="font-mono text-xs text-[#68635B] mt-0.5 uppercase tracking-wide">
              {subtitle}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 border border-[#DCD6CC] hover:border-[#1C1B19] text-[#1C1B19] transition-colors cursor-pointer"
            aria-label="Close specifications drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body Content */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Visual Frame */}
          {imageUrl && (
            <div className="border border-[#DCD6CC] bg-[#ECE8E1] p-2">
              <div className="aspect-[16/10] overflow-hidden border border-[#DCD6CC]">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 flex justify-between items-center text-[10px] font-mono text-[#68635B] px-1">
                <span>SUB-ASSEMBLY CROSS SECTION</span>
                <span>VERIFIED SITE PHOTOGRAPHY</span>
              </div>
            </div>
          )}

          {/* Subtitle / Overview */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#6E473B]">
              01 // Architectural Overview
            </h3>
            <p className="text-sm sm:text-base text-[#1C1B19] leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {/* Technical Specifications Ledger */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#6E473B]">
              02 // Structural Substructure &amp; Material Chemistry
            </h3>

            <div className="border border-[#DCD6CC] divide-y divide-[#DCD6CC] text-xs font-mono bg-[#ECE8E1]">
              <div className="p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-[#68635B] font-medium">SUBSTRUCTURE FRAMING:</span>
                <span className="text-[#1C1B19] sm:text-right font-semibold">{framing}</span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-[#68635B] font-medium">CORE MATERIAL GRADE:</span>
                <span className="text-[#1C1B19] sm:text-right font-semibold">{grade}</span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-[#68635B] font-medium">WEATHER PERFORMANCE:</span>
                <span className="text-[#1C1B19] sm:text-right">{weather}</span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-[#68635B] font-medium">ESTIMATED WARRANTY:</span>
                <span className="text-[#6E473B] sm:text-right font-bold">{warranty}</span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-[#68635B] font-medium">EXECUTION LEAD TIME:</span>
                <span className="text-[#1C1B19] sm:text-right">{timeline}</span>
              </div>
            </div>
          </div>

          {/* Key Engineering Advantages */}
          {system?.keyAdvantages && (
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#6E473B]">
                03 // Performance Advantages
              </h3>
              <ul className="grid grid-cols-1 gap-2.5">
                {system.keyAdvantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#1C1B19] p-2.5 bg-[#ECE8E1]/60 border border-[#DCD6CC]">
                    <CheckCircle2 className="w-4 h-4 text-[#6E473B] shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Suitable Applications */}
          {system?.suitableApplications && (
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#6E473B]">
                04 // Recommended Architectural Applications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {system.suitableApplications.map((app, idx) => (
                  <div key={idx} className="border border-[#DCD6CC] p-2.5 text-[#68635B] bg-[#F6F4F0]">
                    • {app}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Site Execution Standards */}
          <div className="p-4 bg-[#ECE8E1] border border-[#DCD6CC] space-y-2 text-xs">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E473B] font-semibold block">
              SITE FABRICATION STANDARDS
            </span>
            <p className="text-[#68635B] leading-relaxed">
              All fixings, bracket alignments, and joint miters are executed on-site using laser levels and dust-extracted plunge saw systems. Guaranteed zero visible screw heads on front panels.
            </p>
          </div>

        </div>

        {/* Drawer Footer CTA */}
        <div className="sticky bottom-0 bg-[#F6F4F0] border-t border-[#DCD6CC] p-6 space-y-3">
          <a
            href={`https://wa.me/${CLEAN_PHONE}?text=${waQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#1C1B19] text-[#F6F4F0] py-3.5 text-xs font-mono uppercase tracking-widest hover:bg-[#6E473B] transition-colors flex items-center justify-center gap-2 group"
          >
            <span>Request CAD Specs &amp; WhatsApp Quote</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <div className="flex items-center justify-between text-[11px] font-mono text-[#68635B]">
            <span>DIRECT CALL: {OFFICIAL_PHONE}</span>
            <span className="text-[#6E473B]">MON–SAT 9AM–8PM IST</span>
          </div>
        </div>

      </aside>
    </div>
  );
};
