import React from 'react';
import { MATERIAL_SYSTEMS } from '../data/materialSystems';
import { MaterialSystem } from '../types';
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { CLEAN_PHONE } from '../utils/whatsappRouter';

interface MaterialAndSystemsMatrixProps {
  onSelectSystem: (system: MaterialSystem) => void;
}

export const MaterialAndSystemsMatrix: React.FC<MaterialAndSystemsMatrixProps> = ({
  onSelectSystem,
}) => {
  return (
    <section id="systems-matrix" className="w-full bg-[#F6F4F0] border-b border-[#DCD6CC] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-[#DCD6CC] pb-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#6E473B]">
                <span className="w-2 h-2 bg-[#6E473B]"></span>
                <span>ENGINEERING SPECIFICATION MATRIX</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1B19]">
                Core Systems &amp; Material Standards
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#68635B] max-w-md font-normal leading-relaxed">
              Every profile, fixing bracket, and timber composite component is specified to perform under severe Indian climate exposure — from extreme summer UV to high monsoon moisture.
            </p>
          </div>
        </div>

        {/* 4-Pillar Grid (Vengeance UI hairline grid architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#DCD6CC] border border-[#DCD6CC]">
          {MATERIAL_SYSTEMS.map((system) => (
            <div
              key={system.id}
              className="bg-[#F6F4F0] p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#ECE8E1] transition-colors relative"
            >
              {/* Top Row: Index & Category */}
              <div>
                <div className="flex items-center justify-between border-b border-[#DCD6CC] pb-4 mb-6 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-[#6E473B]">{system.index}</span>
                    <span className="text-[#68635B]">/ SYSTEM SPECIFICATION</span>
                  </div>
                  <span className="text-[10px] tracking-widest uppercase text-[#1C1B19] bg-[#ECE8E1] group-hover:bg-[#F6F4F0] px-2 py-1 border border-[#DCD6CC]">
                    {system.fireRating.split(' ')[0]} RATED
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-normal text-[#1C1B19] group-hover:text-[#6E473B] transition-colors mb-2">
                  {system.title}
                </h3>
                <p className="font-mono text-xs text-[#68635B] uppercase tracking-wider mb-4">
                  {system.subtitle}
                </p>

                {/* Short Description */}
                <p className="text-sm text-[#1C1B19]/80 leading-relaxed mb-6 font-normal">
                  {system.shortDesc}
                </p>

                {/* Technical Metric Highlights */}
                <div className="space-y-2.5 py-4 border-t border-b border-[#DCD6CC] text-xs font-mono">
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-[#68635B] shrink-0">SUBSTRUCTURE:</span>
                    <span className="text-[#1C1B19] text-right font-medium">{system.substructureFraming.split('with')[0]}</span>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-[#68635B] shrink-0">WARRANTY:</span>
                    <span className="text-[#6E473B] text-right font-semibold">{system.lifespan}</span>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-[#68635B] shrink-0">EXECUTION:</span>
                    <span className="text-[#1C1B19] text-right font-medium">{system.typicalTimeline}</span>
                  </div>
                </div>

                {/* Advantages Bullet Points */}
                <ul className="mt-6 space-y-2 text-xs text-[#68635B]">
                  {system.keyAdvantages.slice(0, 2).map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6E473B] shrink-0 mt-0.5" />
                      <span className="text-[#1C1B19]">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-4 border-t border-[#DCD6CC] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onSelectSystem(system)}
                  className="bg-[#1C1B19] text-[#F6F4F0] px-4 py-2.5 text-xs font-mono uppercase tracking-widest hover:bg-[#6E473B] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Inspect Spec Sheet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${CLEAN_PHONE}?text=${encodeURIComponent(`Hello Delhiwala Elevation, I want to discuss material supply & execution for "${system.title}".`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase tracking-wider text-[#6E473B] hover:text-[#1C1B19] font-medium flex items-center gap-1"
                >
                  <span>Discuss on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
