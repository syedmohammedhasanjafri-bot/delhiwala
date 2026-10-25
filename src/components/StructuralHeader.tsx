import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { OFFICIAL_PHONE, CLEAN_PHONE } from '../utils/whatsappRouter';

interface StructuralHeaderProps {
  onOpenLedger: () => void;
}

export const StructuralHeader: React.FC<StructuralHeaderProps> = ({ onOpenLedger }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Systems & Specs', href: '#systems-matrix' },
    { label: 'Site Archive', href: '#site-archive' },
    { label: 'Execution Process', href: '#process' },
    { label: 'Regional Reach', href: '#footprint' },
    { label: 'Project Ledger', href: '#ledger' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F6F4F0]/95 backdrop-blur-md border-b border-[#DCD6CC] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Mark */}
          <a href="#" className="flex flex-col group">
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#6E473B] uppercase font-semibold">
              Modern Spaces Need Modern Details
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1B19] font-sans">
                DELHIWALA <span className="font-normal text-[#68635B]">ELEVATION</span>
              </span>
              <span className="hidden md:inline-block w-1.5 h-1.5 bg-[#6E473B]"></span>
              <span className="hidden md:inline font-mono text-[9px] text-[#68635B] uppercase tracking-widest">
                EST. 2018
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-medium tracking-wider uppercase text-[#1C1B19]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#6E473B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#6E473B] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`}
              className="hidden xl:flex items-center gap-2 border border-[#DCD6CC] px-3 py-2 text-xs font-mono text-[#1C1B19] hover:border-[#1C1B19] transition-colors"
              title="Call Direct Site Engineer"
            >
              <Phone className="w-3.5 h-3.5 text-[#6E473B]" />
              <span>{OFFICIAL_PHONE}</span>
            </a>

            <button
              onClick={onOpenLedger}
              className="bg-[#1C1B19] text-[#F6F4F0] px-4 py-2.5 text-xs font-mono uppercase tracking-widest hover:bg-[#6E473B] transition-colors flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Site Inquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href={`https://wa.me/${CLEAN_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#1C1B19] text-[#1C1B19] px-3.5 py-2.5 text-xs font-mono uppercase tracking-widest hover:bg-[#1C1B19] hover:text-[#F6F4F0] transition-colors flex items-center gap-1.5"
            >
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#DCD6CC] text-[#1C1B19] hover:border-[#1C1B19] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F4F0] border-t border-b border-[#DCD6CC] px-4 py-6 space-y-4">
          <div className="grid grid-cols-1 divide-y divide-[#DCD6CC]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm font-mono tracking-wider uppercase text-[#1C1B19] hover:text-[#6E473B] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#68635B]" />
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 border border-[#1C1B19] py-3 text-xs font-mono text-[#1C1B19]"
            >
              <Phone className="w-4 h-4 text-[#6E473B]" />
              <span>Direct Call: {OFFICIAL_PHONE}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLedger();
              }}
              className="w-full bg-[#1C1B19] text-[#F6F4F0] py-3 text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span>Open Project Ledger &amp; Estimate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
