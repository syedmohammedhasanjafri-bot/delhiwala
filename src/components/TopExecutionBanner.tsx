import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { OFFICIAL_PHONE, CLEAN_PHONE } from '../utils/whatsappRouter';

export const TopExecutionBanner: React.FC = () => {
  return (
    <aside aria-label="Announcement" className="w-full bg-[#1C1B19] text-[#F6F4F0] border-b border-[#DCD6CC] text-xs font-mono tracking-wider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left: Continuous Status Indicator */}
        <div className="flex items-center gap-3 overflow-hidden text-[11px] sm:text-xs">
          <span className="flex items-center gap-1.5 text-[#ECE8E1]">
            <span className="w-2 h-2 bg-[#6E473B] animate-pulse"></span>
            <span className="font-semibold text-white">ON-SITE EXECUTION DESK</span>
          </span>
          <span className="text-[#68635B] hidden md:inline">|</span>
          <span className="text-[#ECE8E1] truncate">
            FULL MATERIAL SUPPLY &amp; INSTALLATION ACROSS INDIA • ARCHITECT &amp; BUILDER COLLABORATIONS
          </span>
        </div>

        {/* Right: Direct Hotline & Region Quick Links */}
        <div className="flex items-center gap-4 text-[11px] shrink-0">
          <span className="text-[#ECE8E1] hidden lg:inline">
            ACTIVE SITES: UTTARAKHAND • UP • INDORE • DELHI NCR
          </span>
          <a 
            href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 text-[#F6F4F0] hover:text-[#ECE8E1] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#6E473B]" />
            <span>{OFFICIAL_PHONE}</span>
          </a>
          <a
            href={`https://wa.me/${CLEAN_PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-[#6E473B] hover:text-[#ECE8E1] font-semibold transition-colors uppercase text-[10px] tracking-widest"
          >
            WhatsApp <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </aside>
  );
};
