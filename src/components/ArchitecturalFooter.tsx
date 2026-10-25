import React from 'react';
import { Phone, Mail, Instagram, ArrowUpRight, Compass } from 'lucide-react';
import { 
  OFFICIAL_PHONE, 
  OFFICIAL_EMAIL, 
  OFFICIAL_INSTAGRAM, 
  OFFICIAL_INSTAGRAM_URL 
} from '../utils/whatsappRouter';

export const ArchitecturalFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#1C1B19] text-[#F6F4F0] border-t border-[#DCD6CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#68635B]/40">
          
          {/* Brand & Mission Statement (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#6E473B] uppercase font-semibold block mb-2">
                ARCHITECTURAL FACADE &amp; EXTERIOR EXECUTION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
                DELHIWALA <span className="font-normal text-[#ECE8E1]">ELEVATION</span>
              </h3>
            </div>

            <p className="text-sm text-[#ECE8E1] leading-relaxed font-normal max-w-md">
              Modern Spaces Need Modern Details. We provide certified exterior-grade material supply and dedicated on-site fabrication teams across Uttarakhand, Uttar Pradesh, Madhya Pradesh, Delhi NCR, and Pan-India.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-[#ECE8E1]">
              <Compass className="w-4 h-4 text-[#6E473B]" />
              <span>CENTRAL COORDINATION: NORTH &amp; CENTRAL INDIA</span>
            </div>
          </div>

          {/* Core Specializations (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-semibold block">
              EXECUTION SYSTEMS
            </span>
            <ul className="space-y-2.5 text-xs font-mono text-[#ECE8E1]">
              <li>
                <a href="#systems-matrix" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#6E473B]">•</span> HPL Exterior Facade Cladding
                </a>
              </li>
              <li>
                <a href="#systems-matrix" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#6E473B]">•</span> Custom All-Weather WPC Pergolas
                </a>
              </li>
              <li>
                <a href="#systems-matrix" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#6E473B]">•</span> Exterior WPC Fluted Louvers
                </a>
              </li>
              <li>
                <a href="#systems-matrix" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#6E473B]">•</span> Grand Circular &amp; Helical Staircases
                </a>
              </li>
              <li>
                <a href="#systems-matrix" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#6E473B]">•</span> Ventilated Rain-Screen Assemblies
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Collaboration (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-semibold block">
              DIRECT DESK &amp; INQUIRY
            </span>

            <div className="space-y-3 text-xs font-mono">
              {/* Telephone */}
              <a
                href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-3 bg-[#F6F4F0]/5 border border-[#68635B]/40 hover:border-[#F6F4F0] text-[#F6F4F0] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#6E473B] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#ECE8E1] block uppercase">Direct Calling / WhatsApp</span>
                  <span className="font-bold text-sm text-white">{OFFICIAL_PHONE}</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${OFFICIAL_EMAIL}`}
                className="flex items-center gap-3 p-3 bg-[#F6F4F0]/5 border border-[#68635B]/40 hover:border-[#F6F4F0] text-[#F6F4F0] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#6E473B] shrink-0" />
                <div className="truncate">
                  <span className="text-[10px] text-[#ECE8E1] block uppercase">Email Elevation Plans</span>
                  <span className="font-medium text-xs text-white truncate block">{OFFICIAL_EMAIL}</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={OFFICIAL_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-[#F6F4F0]/5 border border-[#68635B]/40 hover:border-[#F6F4F0] text-[#F6F4F0] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#6E473B] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#ECE8E1] block uppercase">Site Video Logs</span>
                  <span className="font-medium text-xs text-white">{OFFICIAL_INSTAGRAM}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-[#ECE8E1]" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Architectural Coordinates */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#ECE8E1] gap-4">
          <div>
            &copy; {new Date().getFullYear()} DELHIWALA ELEVATION. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span>STRICT 90° ARCHITECTURAL DISCIPLINE</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-[#6E473B] font-semibold">ZERO COMPROMISE EXECUTION</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
