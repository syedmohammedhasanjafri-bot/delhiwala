import React from 'react';
import { Truck, Phone } from 'lucide-react';
import { OFFICIAL_PHONE } from '../utils/whatsappRouter';

export const RegionalExecutionMap: React.FC = () => {
  const regions = [
    {
      state: 'Uttarakhand',
      hubs: 'Dehradun • Mussoorie • Rishikesh • Haridwar • Haldwani',
      status: 'Active Field Crews',
      leadTime: 'Immediate (24–48 hrs)',
      focus: 'High-Altitude Weatherproofing, Snow/Moisture-Resistant WPC Pergolas, Resort Facades'
    },
    {
      state: 'Uttar Pradesh',
      hubs: 'Bareilly • Lucknow • Noida • Kanpur • Ghaziabad',
      status: 'Active Field Crews',
      leadTime: 'Immediate (24–48 hrs)',
      focus: 'Luxury Villa Front Elevations, Commercial Exterior Louvers, Turnkey HPL Cladding'
    },
    {
      state: 'Madhya Pradesh',
      hubs: 'Indore • Bhopal • Ujjain',
      status: 'Regional Distribution & Crews',
      leadTime: '2–3 Days Mobilization',
      focus: 'Architectural Helical Staircases, Modern Bungalow Louver Systems, Commercial Cladding'
    },
    {
      state: 'Delhi NCR',
      hubs: 'New Delhi • South Delhi • Gurgaon • Faridabad',
      status: 'Active Field Crews',
      leadTime: 'Immediate (Same Day Survey)',
      focus: 'High-Density Residential Facades, Rooftop WPC Pergolas, Terrace Enclosures'
    },
    {
      state: 'Pan-India',
      hubs: 'Direct Factory Material Supply + Master Installation Crew Dispatch',
      status: 'Nationwide Logistics',
      leadTime: '3–5 Days Transit',
      focus: 'Wholesale Exterior HPL Supply, Custom WPC Profiles, Architect-Commissioned Residences'
    }
  ];

  return (
    <section id="footprint" className="w-full bg-[#ECE8E1] border-b border-[#DCD6CC] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-[#DCD6CC] pb-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#6E473B]">
                <span className="w-2 h-2 bg-[#6E473B]"></span>
                <span>GEOGRAPHIC EXECUTION FOOTPRINT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1B19]">
                Regional Hubs &amp; Site Readiness
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#68635B] max-w-md font-normal leading-relaxed">
              We maintain continuous material supply warehouses and station certified mobile installation technicians to ensure rapid site starts without contractor delays.
            </p>
          </div>
        </div>

        {/* Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((reg, idx) => (
            <div
              key={idx}
              className={`p-6 bg-[#F6F4F0] border border-[#DCD6CC] flex flex-col justify-between hover:border-[#1C1B19] transition-colors ${
                reg.state === 'Pan-India' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="space-y-4">
                
                {/* State & Status Pill */}
                <div className="flex items-center justify-between border-b border-[#DCD6CC] pb-3 text-xs font-mono">
                  <span className="text-base sm:text-lg font-bold text-[#1C1B19]">{reg.state}</span>
                  <span className="text-[#6E473B] font-semibold uppercase text-[10px] tracking-wider border border-[#DCD6CC] px-2 py-0.5 bg-[#ECE8E1]">
                    {reg.status}
                  </span>
                </div>

                {/* Hub Locations */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#68635B] block">PRIMARY HUBS / COVERAGE:</span>
                  <p className="text-sm font-medium text-[#1C1B19]">
                    {reg.hubs}
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="space-y-1 pt-2 border-t border-[#DCD6CC]">
                  <span className="text-[10px] font-mono uppercase text-[#68635B] block">SPECIALIZED EXPERTISE:</span>
                  <p className="text-xs text-[#68635B] leading-relaxed">
                    {reg.focus}
                  </p>
                </div>

              </div>

              {/* Card Bottom */}
              <div className="pt-4 border-t border-[#DCD6CC] mt-6 flex items-center justify-between text-xs font-mono">
                <span className="text-[#68635B]">SURVEY MOBILIZATION:</span>
                <span className="text-[#1C1B19] font-semibold">{reg.leadTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Mobilization Banner */}
        <div className="mt-8 p-6 bg-[#1C1B19] text-[#F6F4F0] border border-[#1C1B19] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Truck className="w-6 h-6 text-[#6E473B] shrink-0" />
            <div className="text-xs font-mono">
              <span className="text-[#F6F4F0] font-semibold block">Need an immediate site inspection or material dispatch?</span>
              <span className="text-[#ECE8E1]">Contact our central operations coordinator to lock site measurement dates.</span>
            </div>
          </div>
          <a
            href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`}
            className="border border-[#F6F4F0] px-4 py-2.5 text-xs font-mono uppercase tracking-widest text-[#F6F4F0] hover:bg-[#F6F4F0] hover:text-[#1C1B19] transition-colors shrink-0 flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#6E473B]" />
            <span>Call {OFFICIAL_PHONE}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
