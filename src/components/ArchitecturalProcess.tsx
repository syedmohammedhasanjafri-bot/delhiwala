import React from 'react';
import { Ruler, Truck, CheckSquare, Layers } from 'lucide-react';

export const ArchitecturalProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Site Laser Survey & Substructure Engineering',
      duration: 'Days 1 – 2',
      description: 'Our lead site engineer deploys electronic 3D laser levels to map wall plumbness, beam deflections, and window reveal tolerances. We draft structural framing shop drawings accounting for wind-load pressure and thermal expansion gaps.',
      icon: Ruler,
      deliverables: ['CAD framing shop drawing', 'Anchor point pull-out verification', 'BOQ material schedule']
    },
    {
      step: '02',
      title: 'Material Procurement & Factory Pre-Cutting',
      duration: 'Days 3 – 5',
      description: 'Certified exterior compact grade HPL panels and co-extruded WPC louvers are precision dimensioned. Profiles are packaged with moisture-sealed edges and dispatched directly from central stock to your project site.',
      icon: Truck,
      deliverables: ['Factory batch test certificates', 'Custom cut-to-length profiles', 'SS 304 bracket hardware kit']
    },
    {
      step: '03',
      title: 'On-Site MS / Aluminum Sub-Frame Erection',
      duration: 'Days 6 – 10',
      description: 'Our certified mobile installation crews anchor heavy-gauge galvanized iron (GI) or extruded aluminum box profiles onto the building facade. Laser alignment ensures perfectly plumb 90-degree planes across multiple stories.',
      icon: Layers,
      deliverables: ['Double-coated anti-corrosion primer', 'Continuous thermal separation tape', 'Concealed rainwater drainage runs']
    },
    {
      step: '04',
      title: 'Precision Panel Mounting & Warranty Handover',
      duration: 'Days 11 – 16',
      description: 'Panels and louvers are mechanically fastened using concealed clips with uniform hairline 6mm/8mm architectural reveal joints. Final inspection verifies all corners, flashings, and structural stability before official warranty certificate issuance.',
      icon: CheckSquare,
      deliverables: ['Zero visible front screws', '10–15 Year written warranty', 'Post-monsoon site check commitment']
    }
  ];

  return (
    <section id="process" className="w-full bg-[#F6F4F0] border-b border-[#DCD6CC] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-[#DCD6CC] pb-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#6E473B]">
                <span className="w-2 h-2 bg-[#6E473B]"></span>
                <span>EXECUTION METHODOLOGY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1B19]">
                How We Execute Your Elevation
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#68635B] max-w-md font-normal leading-relaxed">
              We bridge the dangerous gap between architectural 3D renderings and harsh on-site realities through disciplined engineering and single-point accountability.
            </p>
          </div>
        </div>

        {/* 4-Step Process Grid (Hairline borders, rounded-none) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#DCD6CC] border border-[#DCD6CC]">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#F6F4F0] p-6 sm:p-8 flex flex-col justify-between hover:bg-[#ECE8E1] transition-colors"
              >
                <div>
                  
                  {/* Step Header */}
                  <div className="flex items-center justify-between border-b border-[#DCD6CC] pb-4 mb-6 text-xs font-mono">
                    <span className="text-2xl font-bold text-[#6E473B]">{item.step}</span>
                    <span className="text-[#68635B] uppercase">{item.duration}</span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-4 text-[#1C1B19]">
                    <Icon className="w-5 h-5 text-[#6E473B] shrink-0" />
                    <h3 className="text-lg font-normal text-[#1C1B19] leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#68635B] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-[#DCD6CC] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#1C1B19] font-semibold block">
                    STAGE DELIVERABLES:
                  </span>
                  <ul className="space-y-1 text-xs font-mono text-[#68635B]">
                    {item.deliverables.map((del, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-1 h-1 bg-[#6E473B]"></span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
