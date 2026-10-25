import React, { useState } from 'react';
import { ArrowUpRight, Send, FileSpreadsheet, Check, MessageSquare } from 'lucide-react';
import { InquiryFormData } from '../types';
import { buildWhatsAppInquiryUrl, OFFICIAL_PHONE } from '../utils/whatsappRouter';

export const ProjectAndArchitectLedger: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    role: 'Homeowner',
    requirement: 'Exterior Front Elevation Cladding (HPL / Louvers)',
    city: 'Dehradun, Uttarakhand',
    approxArea: '1,500 sq.ft',
    notes: '',
  });

  const [hasGeneratedBrief, setHasGeneratedBrief] = useState(false);

  const roles: InquiryFormData['role'][] = [
    'Homeowner',
    'Architect / Designer',
    'Commercial Builder',
    'Turnkey Contractor',
  ];

  const requirements = [
    'Exterior Front Elevation Cladding (HPL / Louvers)',
    'Custom All-Weather WPC Pergola & Deck',
    'Architectural Circular Staircase & Paneling',
    'Turnkey Material Supply + Site Execution',
  ];

  const cities = [
    'Dehradun, Uttarakhand',
    'Mussoorie / Rishikesh, Uttarakhand',
    'Bareilly, Uttar Pradesh',
    'Lucknow, Uttar Pradesh',
    'Indore, Madhya Pradesh',
    'Delhi NCR (Delhi / Noida / Gurgaon)',
    'Other Pan-India Location',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasGeneratedBrief(true);
    const url = buildWhatsAppInquiryUrl(formData);
    // Open WhatsApp in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const currentWaUrl = buildWhatsAppInquiryUrl(formData);

  return (
    <section id="ledger" className="w-full bg-[#F6F4F0] border-b border-[#DCD6CC] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-[#DCD6CC] pb-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#6E473B]">
                <span className="w-2 h-2 bg-[#6E473B]"></span>
                <span>PROJECT ESTIMATION &amp; SITE EXECUTION LEDGER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1B19]">
                Initiate Project Consultation
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#68635B] max-w-md font-normal leading-relaxed">
              Fill in your preliminary elevation dimensions or site location. Our system builds a structured WhatsApp project brief routed directly to our lead execution engineer.
            </p>
          </div>
        </div>

        {/* 12-Column Grid: Left (7 Cols) Forge UI Form, Right (5 Cols) Live Brief Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Form: Forge UI Underline Inputs */}
          <div className="lg:col-span-7 bg-[#ECE8E1] p-6 sm:p-10 border border-[#DCD6CC]">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Role Selector Chips */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#1C1B19] font-medium">
                  01 // Your Stakeholder Role:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {roles.map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setFormData({ ...formData, role: r })}
                      className={`px-3 py-2.5 text-xs font-mono uppercase text-center border transition-all cursor-pointer ${
                        formData.role === r
                          ? 'bg-[#1C1B19] text-[#F6F4F0] border-[#1C1B19]'
                          : 'bg-[#F6F4F0] text-[#68635B] border-[#DCD6CC] hover:border-[#1C1B19] hover:text-[#1C1B19]'
                      }`}
                    >
                      {r.split('/')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Requirement Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#1C1B19] font-medium">
                  02 // Primary Scope / Requirement:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {requirements.map((req) => (
                    <button
                      type="button"
                      key={req}
                      onClick={() => setFormData({ ...formData, requirement: req })}
                      className={`p-3 text-xs font-mono text-left border transition-all cursor-pointer flex items-center justify-between ${
                        formData.requirement === req
                          ? 'bg-[#1C1B19] text-[#F6F4F0] border-[#1C1B19]'
                          : 'bg-[#F6F4F0] text-[#68635B] border-[#DCD6CC] hover:border-[#1C1B19] hover:text-[#1C1B19]'
                      }`}
                    >
                      <span className="truncate">{req}</span>
                      {formData.requirement === req && <Check className="w-3.5 h-3.5 text-[#6E473B] shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Selector */}
              <div className="space-y-2">
                <label htmlFor="city-select" className="block text-xs font-mono uppercase tracking-wider text-[#1C1B19] font-medium">
                  03 // Project City / Location:
                </label>
                <select
                  id="city-select"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#F6F4F0] border border-[#DCD6CC] p-3 text-sm text-[#1C1B19] font-sans focus:outline-none focus:border-[#1C1B19] transition-colors rounded-none"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Underline Input Fields (Forge UI style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="fullName" className="block text-[11px] font-mono uppercase tracking-wider text-[#68635B]">
                    Full Name / Architectural Studio:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ar. Rajesh Mehta / Studio Lotus"
                    className="w-full bg-transparent border-b border-[#DCD6CC] py-2.5 text-sm text-[#1C1B19] placeholder-[#68635B]/60 focus:outline-none focus:border-[#1C1B19] transition-colors rounded-none"
                  />
                </div>

                {/* Approximate Scope / Area */}
                <div className="space-y-1">
                  <label htmlFor="approxArea" className="block text-[11px] font-mono uppercase tracking-wider text-[#68635B]">
                    Estimated Facade / Pergola Area:
                  </label>
                  <input
                    type="text"
                    id="approxArea"
                    value={formData.approxArea}
                    onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                    placeholder="e.g. 1,800 sq.ft or 20x30 ft pergola"
                    className="w-full bg-transparent border-b border-[#DCD6CC] py-2.5 text-sm text-[#1C1B19] placeholder-[#68635B]/60 focus:outline-none focus:border-[#1C1B19] transition-colors rounded-none"
                  />
                </div>

              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label htmlFor="notes" className="block text-[11px] font-mono uppercase tracking-wider text-[#68635B]">
                  Specific Architectural Details / Elevation Notes:
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. 3-story front facade with fluted charcoal WPC louvers, MS sub-frame, need sample catalog and on-site laser survey."
                  className="w-full bg-transparent border-b border-[#DCD6CC] py-2 text-sm text-[#1C1B19] placeholder-[#68635B]/60 focus:outline-none focus:border-[#1C1B19] transition-colors resize-none rounded-none"
                />
              </div>

              {/* Submit Button (Uiverse sharp architectural CTA) */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full bg-[#1C1B19] text-[#F6F4F0] py-4 px-6 text-xs font-mono uppercase tracking-[0.2em] hover:bg-[#6E473B] transition-colors flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <Send className="w-4 h-4 text-[#F6F4F0] group-hover:translate-x-1 transition-transform" />
                  <span>Generate &amp; Transmit WhatsApp Project Brief</span>
                </button>

                {hasGeneratedBrief && (
                  <div className="p-3 bg-[#F6F4F0] border border-[#6E473B] text-xs font-mono text-[#6E473B] flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#6E473B] shrink-0" />
                    <span>Project brief formatted and transmitted to Delhiwala Elevation Site Desk.</span>
                  </div>
                )}
              </div>

            </form>
          </div>

          {/* Right Column: Live Brief Preview & Direct Execution Desk */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Live Message Preview Card */}
            <div className="p-6 bg-[#F6F4F0] border border-[#DCD6CC] space-y-4">
              <div className="flex items-center justify-between border-b border-[#DCD6CC] pb-3 text-xs font-mono">
                <span className="text-[#6E473B] font-semibold flex items-center gap-1.5">
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>LIVE WHATSAPP BRIEF PREVIEW</span>
                </span>
                <span className="text-[#68635B] text-[10px] uppercase">AUTO-FORMATTED</span>
              </div>

              <div className="bg-[#ECE8E1] p-4 border border-[#DCD6CC] font-mono text-xs text-[#1C1B19] space-y-2 whitespace-pre-wrap leading-relaxed">
                <div className="text-[#6E473B] font-bold">DELHIWALA ELEVATION — INQUIRY</div>
                <div>-----------------------------------</div>
                <div>• <span className="text-[#68635B]">Role:</span> {formData.role}</div>
                <div>• <span className="text-[#68635B]">Scope:</span> {formData.requirement}</div>
                <div>• <span className="text-[#68635B]">Location:</span> {formData.city}</div>
                <div>• <span className="text-[#68635B]">Area:</span> {formData.approxArea || 'Drawing based'}</div>
                <div>• <span className="text-[#68635B]">Contact/Studio:</span> {formData.fullName || 'Project Stakeholder'}</div>
                {formData.notes && (
                  <div>• <span className="text-[#68635B]">Notes:</span> {formData.notes}</div>
                )}
                <div>-----------------------------------</div>
                <div className="text-[10px] text-[#68635B]">Routes to: +91 78303 35445</div>
              </div>

              <a
                href={currentWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-[#1C1B19] text-[#1C1B19] py-3 text-xs font-mono uppercase tracking-widest hover:bg-[#1C1B19] hover:text-[#F6F4F0] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#6E473B]" />
                <span>Open in WhatsApp Directly</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Phone & Architect Collaboration Guarantee */}
            <div className="p-6 bg-[#ECE8E1] border border-[#DCD6CC] space-y-3 text-xs">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#6E473B] font-semibold block">
                ARCHITECT &amp; CONTRACTOR PROTOCOL
              </span>
              <p className="text-[#1C1B19] leading-relaxed">
                We review DWG elevations, calculate exact bracket spans, and provide unbranded material sample kits for client presentations.
              </p>
              <div className="pt-2 border-t border-[#DCD6CC] flex items-center justify-between text-xs font-mono">
                <span className="text-[#68635B]">TELEPHONE DIRECT:</span>
                <a href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`} className="font-bold text-[#1C1B19] hover:text-[#6E473B]">
                  {OFFICIAL_PHONE}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
