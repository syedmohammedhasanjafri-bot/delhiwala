import React, { useState } from 'react';
import { LenisSmoothScrollProvider } from './components/LenisSmoothScrollProvider';
import { TopExecutionBanner } from './components/TopExecutionBanner';
import { StructuralHeader } from './components/StructuralHeader';
import { AsymmetricFacadeHero } from './components/AsymmetricFacadeHero';
import { MaterialAndSystemsMatrix } from './components/MaterialAndSystemsMatrix';
import { SiteExecutionArchive } from './components/SiteExecutionArchive';
import { ArchitecturalProcess } from './components/ArchitecturalProcess';
import { RegionalExecutionMap } from './components/RegionalExecutionMap';
import { ProjectAndArchitectLedger } from './components/ProjectAndArchitectLedger';
import { ArchitecturalFooter } from './components/ArchitecturalFooter';
import { TechnicalSpecDrawer } from './components/TechnicalSpecDrawer';
import { MaterialSystem, ProjectExecution } from './types';
import { MATERIAL_SYSTEMS } from './data/materialSystems';

export const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSystem, setActiveSystem] = useState<MaterialSystem | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectExecution | null>(null);

  const handleOpenSystemSpecs = (systemId: string) => {
    const found = MATERIAL_SYSTEMS.find((s) => s.id === systemId) || MATERIAL_SYSTEMS[0];
    setActiveSystem(found);
    setActiveProject(null);
    setDrawerOpen(true);
  };

  const handleSelectSystem = (system: MaterialSystem) => {
    setActiveSystem(system);
    setActiveProject(null);
    setDrawerOpen(true);
  };

  const handleSelectProject = (project: ProjectExecution) => {
    setActiveProject(project);
    setActiveSystem(null);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleScrollToLedger = () => {
    const el = document.getElementById('ledger');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToArchive = () => {
    const el = document.getElementById('site-archive');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LenisSmoothScrollProvider>
      <div className="min-h-screen bg-[#F6F4F0] text-[#1C1B19] flex flex-col font-sans selection:bg-[#6E473B] selection:text-[#F6F4F0]">
        
        {/* Top Ticker & Execution Status */}
        <TopExecutionBanner />

        {/* Sticky Daylight Structural Header */}
        <StructuralHeader onOpenLedger={handleScrollToLedger} />

        {/* Main Monograph Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <AsymmetricFacadeHero 
            onOpenSpecs={handleOpenSystemSpecs}
            onScrollToArchive={handleScrollToArchive}
          />

          {/* Core Systems & Material Specification Matrix */}
          <MaterialAndSystemsMatrix 
            onSelectSystem={handleSelectSystem}
          />

          {/* Completed & Ongoing Site Execution Archive */}
          <SiteExecutionArchive 
            onSelectProject={handleSelectProject}
          />

          {/* 4-Stage Architectural Execution Methodology */}
          <ArchitecturalProcess />

          {/* Regional Footprint: Uttarakhand, UP, Indore, Delhi NCR, Pan-India */}
          <RegionalExecutionMap />

          {/* Project & Architect Inquiry Ledger (WhatsApp Router) */}
          <ProjectAndArchitectLedger />
        </main>

        {/* Architectural Footer */}
        <ArchitecturalFooter />

        {/* Slide-Over Technical Specification Drawer */}
        <TechnicalSpecDrawer 
          isOpen={drawerOpen}
          onClose={handleCloseDrawer}
          system={activeSystem}
          project={activeProject}
        />

      </div>
    </LenisSmoothScrollProvider>
  );
};

export default App;
