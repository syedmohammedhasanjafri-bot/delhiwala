import React from 'react';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';
import { CLEAN_PHONE } from '../utils/whatsappRouter';

interface AsymmetricFacadeHeroProps {
  onOpenSpecs: (systemId: string) => void;
  onScrollToArchive: () => void;
}

export const AsymmetricFacadeHero: React.FC<AsymmetricFacadeHeroProps> = ({
  onOpenSpecs,
  onScrollToArchive,
}) => {
  return (
    <section id="overview" className="relative w-full border-b border-[#DCD6CC] bg-[#F6F4F0] overflow-hidden">
      
      {/* Background Architectural Blueprint Grid Accent */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        
        {/* Top Meta Coordinate Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#DCD6CC] pb-4 mb-8 sm:mb-12 text-[11px] font-mono tracking-widest text-[#68635B] uppercase gap-2">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#6E473B]" />
            <span>ARCHITECTURAL EXECUTION MONOGRAPH • SER. 2024-25</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">LAT/LONG: 28°38'N 77°13'E</span>
            <span className="text-[#6E473B] font-semibold">PAN-INDIA DEPLOYMENT</span>
          </div>
        </div>

        {/* 12-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 Columns): Editorial Statement & Specifications */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
            <div className="space-y-6">
              
              {/* Architectural Category Tag */}
              <div className="inline-flex items-center gap-2 border border-[#DCD6CC] bg-[#ECE8E1] px-3 py-1 text-xs font-mono tracking-widest text-[#1C1B19] uppercase">
                <span className="w-1.5 h-1.5 bg-[#6E473B]"></span>
                <span>Exterior Cladding • Custom Pergolas • Grand Staircases</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.08] text-[#1C1B19] tracking-tight">
                Designed by Architects. <br />
                <span className="italic font-light text-[#6E473B]">Executed with Precision.</span>
              </h1>

              {/* Humanized Subtitle */}
              <p className="text-base sm:text-lg text-[#68635B] leading-relaxed max-w-2xl font-normal">
                End-to-end exterior facade cladding, custom all-weather WPC pergolas, and bespoke interior paneling built to weather every season. We supply certified exterior-grade materials and deploy dedicated site execution crews across Uttarakhand, UP, Indore, Delhi NCR, and Pan-India.
              </p>

            </div>

            {/* Quick Action Matrix */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#ledger"
                className="bg-[#1C1B19] text-[#F6F4F0] px-6 py-3.5 text-xs font-mono uppercase tracking-widest hover:bg-[#6E473B] transition-colors flex items-center gap-2 group cursor-pointer"
              >
                <span>Submit Elevation For Review</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={() => onOpenSpecs('hpl-facade-cladding')}
                className="border border-[#1C1B19] text-[#1C1B19] px-5 py-3.5 text-xs font-mono uppercase tracking-widest hover:bg-[#ECE8E1] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Inspect Material Specs</span>
              </button>

              <button
                onClick={onScrollToArchive}
                className="text-xs font-mono uppercase tracking-widest text-[#68635B] hover:text-[#1C1B19] transition-colors flex items-center gap-1.5 py-2"
              >
                <span>View Executions</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Technical Verification Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#DCD6CC]">
              <div>
                <span className="block font-mono text-2xl sm:text-3xl font-bold text-[#1C1B19]">180+</span>
                <span className="block font-mono text-[10px] text-[#68635B] tracking-wider uppercase mt-1">Sites Executed</span>
              </div>
              <div>
                <span className="block font-mono text-2xl sm:text-3xl font-bold text-[#6E473B]">100%</span>
                <span className="block font-mono text-[10px] text-[#68635B] tracking-wider uppercase mt-1">Weather &amp; Termite Proof</span>
              </div>
              <div>
                <span className="block font-mono text-2xl sm:text-3xl font-bold text-[#1C1B19]">15-Yr</span>
                <span className="block font-mono text-[10px] text-[#68635B] tracking-wider uppercase mt-1">Material Guarantee</span>
              </div>
              <div>
                <span className="block font-mono text-2xl sm:text-3xl font-bold text-[#1C1B19]">0.5mm</span>
                <span className="block font-mono text-[10px] text-[#68635B] tracking-wider uppercase mt-1">Laser Tolerance</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 Columns): Monograph Architectural Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#DCD6CC] bg-[#ECE8E1] p-3 shadow-none">
              
              {/* Technical Drawing Marker Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#1C1B19]"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#1C1B19]"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#1C1B19]"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#1C1B19]"></div>

              {/* Main Image Frame (aspect-[16/10]) */}
              <div className="relative aspect-[16/10] sm:aspect-[4/5] lg:aspect-[16/10] overflow-hidden border border-[#DCD6CC] bg-[#DCD6CC]/30">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                  alt="Modern Luxury Villa Facade with Exterior HPL and Fluted WPC Louvers"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 hover:scale-[1.02] arch-transition"
                  loading="eager"
                />

                {/* Technical Blueprint Overlay Tag */}
                <div className="absolute bottom-3 left-3 bg-[#1C1B19]/90 text-[#F6F4F0] px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#6E473B]"></span>
                  <span>ELEV-REF-01 • DEHRADUN RESIDENCE</span>
                </div>
              </div>

              {/* Technical Spec Sheet Card Below Image */}
              <div className="mt-3 p-4 bg-[#F6F4F0] border border-[#DCD6CC] space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center border-b border-[#DCD6CC] pb-1.5">
                  <span className="text-[#68635B]">SUBSTRUCTURE:</span>
                  <span className="text-[#1C1B19] font-medium">50x50mm GI + Concealed SS304</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#DCD6CC] pb-1.5">
                  <span className="text-[#68635B]">FACADE CORE:</span>
                  <span className="text-[#1C1B19] font-medium">Compact HPL + WPC Louvers</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-[#68635B]">CONSULTATION:</span>
                  <a
                    href={`https://wa.me/${CLEAN_PHONE}?text=${encodeURIComponent('Hello Delhiwala Elevation, I am interested in your front elevation cladding system.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6E473B] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Instant WhatsApp Feasibility</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* Architectural Footnote */}
            <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#68635B] px-1">
              <span>DRAWING REV: ARCH-2024.11</span>
              <span>100% CAD/REVIT CONVERTIBLE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
