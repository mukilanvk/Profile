import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedExperience } from './components/FeaturedExperience';
import { ImpactMetric } from './components/ImpactMetric';
import { OtherProjects } from './components/OtherProjects';
import { SkillsSection } from './components/SkillsSection';
import { AiEraSection } from './components/AiEraSection';
import { CertificationsResearch } from './components/CertificationsResearch';
import { TimelineSection } from './components/TimelineSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { ResearchModal } from './components/ResearchModal';
import { FEATURED_EXPERIENCE, OTHER_PROJECTS } from './data/portfolioData';
import { Project, SecondaryProject } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | SecondaryProject | null>(null);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false);

  const handleViewProject = (projectId: string) => {
    if (projectId === 'everest-tutoring') {
      setSelectedProject(FEATURED_EXPERIENCE.project);
    } else {
      const found = OTHER_PROJECTS.find((p) => p.id === projectId);
      if (found) {
        setSelectedProject(found);
      }
    }
  };

  const handleSelectSecondary = (project: SecondaryProject) => {
    setSelectedProject(project);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('experience');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSkill = (skill: string) => {
    const el = document.getElementById('skills');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#E2E8F0] relative overflow-hidden font-sans selection:bg-[#FF6B2C] selection:text-white">
      {/* Ambient Atmospheric Radial Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] glow-radial-orange pointer-events-none -z-10"></div>
      <div className="absolute top-[1800px] -left-64 w-[600px] h-[600px] bg-[#FF6B2C]/5 blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-[3200px] -right-64 w-[600px] h-[600px] bg-[#FFA439]/5 blur-[140px] pointer-events-none -z-10"></div>

      {/* Primary Navigation Header */}
      <Header onContactClick={scrollToContact} />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          onExploreWork={scrollToProjects}
          onConnect={scrollToContact}
          onSelectSkill={handleSelectSkill}
        />

        <AboutSection />

        <FeaturedExperience onViewProject={handleViewProject} />

        <ImpactMetric />

        <OtherProjects
          onViewProject={handleViewProject}
          onSelectSecondary={handleSelectSecondary}
        />

        <SkillsSection />

        <AiEraSection />

        <CertificationsResearch
          onViewCertificate={() => setIsCertificateModalOpen(true)}
          onViewResearch={() => setIsResearchModalOpen(true)}
        />

        <TimelineSection />

        <PhilosophySection />

        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Inspection Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
      />

      <ResearchModal
        isOpen={isResearchModalOpen}
        onClose={() => setIsResearchModalOpen(false)}
      />
    </div>
  );
}
