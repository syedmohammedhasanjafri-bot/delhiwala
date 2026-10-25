import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectExecution, ExecutionCategory } from '../types';
import { ArrowUpRight, MapPin, Maximize2 } from 'lucide-react';
import { CLEAN_PHONE } from '../utils/whatsappRouter';

interface SiteExecutionArchiveProps {
  onSelectProject: (project: ProjectExecution) => void;
}

export const SiteExecutionArchive: React.FC<SiteExecutionArchiveProps> = ({
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<ExecutionCategory>('all');

  const filterTabs: { id: ExecutionCategory; label: string }[] = [
    { id: 'all', label: 'All Executions (6)' },
    { id: 'facade', label: 'Exterior Facade & HPL Cladding' },
    { id: 'pergola', label: 'Custom WPC Pergolas & Gazebos' },
    { id: 'staircase', label: 'Architectural Staircases & Interior Paneling' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="site-archive" className="w-full bg-[#ECE8E1] border-b border-[#DCD6CC] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-[#DCD6CC] pb-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#6E473B]">
                <span className="w-2 h-2 bg-[#6E473B]"></span>
                <span>COMPLETED &amp; ACTIVE ARCHITECTURAL COMMISSIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1B19]">
                Site Execution Archive
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#68635B] max-w-md font-normal leading-relaxed">
              Explore ongoing and completed exterior facades, pergolas, and circular staircases executed across North and Central India with zero template shortcuts.
            </p>
          </div>
        </div>

        {/* Filter Bar (UI Lora minimal layout primitives) */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-[#DCD6CC] pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                activeFilter === tab.id
                  ? 'bg-[#1C1B19] text-[#F6F4F0] border-[#1C1B19]'
                  : 'bg-[#F6F4F0] text-[#68635B] border-[#DCD6CC] hover:text-[#1C1B19] hover:border-[#1C1B19]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Staggered Architectural Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-[#F6F4F0] border border-[#DCD6CC] flex flex-col justify-between group hover:border-[#1C1B19] transition-colors"
            >
              <div>
                
                {/* Image Frame with Inspira UI hover physics & architectural aspect ratios */}
                <div 
                  className={`relative w-full overflow-hidden border-b border-[#DCD6CC] bg-[#ECE8E1] ${
                    project.aspectRatio === '4/5' ? 'aspect-[4/5]' : 'aspect-[16/10]'
                  }`}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] arch-transition"
                    loading="lazy"
                  />

                  {/* Corner Coordinate Badge */}
                  <div className="absolute top-3 left-3 bg-[#1C1B19]/90 text-[#F6F4F0] px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase">
                    {project.code}
                  </div>

                  {/* Inspect Overlay Pill on Hover */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="absolute inset-0 bg-[#1C1B19]/30 opacity-0 group-hover:opacity-100 arch-transition flex items-center justify-center cursor-pointer"
                    aria-label={`Inspect ${project.title}`}
                  >
                    <span className="bg-[#F6F4F0] text-[#1C1B19] border border-[#1C1B19] px-4 py-2 text-xs font-mono uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Specs</span>
                    </span>
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  
                  {/* Category & Location */}
                  <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-[#68635B] gap-2 border-b border-[#DCD6CC] pb-3">
                    <span className="flex items-center gap-1 text-[#6E473B]">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location.split(',')[0]}</span>
                    </span>
                    <span className="text-[#1C1B19] font-medium">{project.scopeSqFt}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-normal text-[#1C1B19] group-hover:text-[#6E473B] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#68635B] leading-relaxed line-clamp-3 font-normal">
                    {project.description}
                  </p>

                  {/* Technical Key Highlights */}
                  <div className="bg-[#ECE8E1] p-3 border border-[#DCD6CC] space-y-1.5 text-[11px] font-mono">
                    <div className="flex justify-between text-[#1C1B19]">
                      <span className="text-[#68635B]">CORE:</span>
                      <span className="truncate max-w-[180px]">{project.featuredSpecs.material.split('&')[0]}</span>
                    </div>
                    <div className="flex justify-between text-[#1C1B19]">
                      <span className="text-[#68635B]">SUBSTRUCTURE:</span>
                      <span className="truncate max-w-[180px]">{project.featuredSpecs.substructure.split('with')[0]}</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-[#DCD6CC] mt-4 flex items-center justify-between gap-3 pt-4">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-mono uppercase tracking-wider text-[#1C1B19] hover:text-[#6E473B] font-medium flex items-center gap-1 cursor-pointer"
                >
                  <span>Full Spec Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${CLEAN_PHONE}?text=${encodeURIComponent(`Hello Delhiwala Elevation, I want to inquire about a similar execution to ${project.title} (${project.code}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#1C1B19] px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-[#1C1B19] hover:bg-[#1C1B19] hover:text-[#F6F4F0] transition-colors"
                >
                  WhatsApp Site Desk
                </a>
              </div>

            </article>
          ))}
        </div>

        {/* Archive Bottom Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-[#F6F4F0] border border-[#DCD6CC] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-normal text-[#1C1B19]">
              Have an architect’s elevation drawing or 3D render ready?
            </h4>
            <p className="text-xs sm:text-sm font-mono text-[#68635B]">
              Send your AutoCAD DWG or SketchUp file directly for structural breakdown and material BOQ estimation.
            </p>
          </div>
          <a
            href={`https://wa.me/${CLEAN_PHONE}?text=${encodeURIComponent('Hello Delhiwala Elevation, I have an elevation drawing / 3D model ready for material estimation and site feasibility review.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1C1B19] text-[#F6F4F0] px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-[#6E473B] transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Send Drawing via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
