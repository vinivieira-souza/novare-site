'use client';

import { useState } from 'react';

import { ArrowIcon, ChevronIcon } from '@/assets/icons/Icons';
import { projectPortfolio } from '@/data/site-content';

export function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleProjects = projectPortfolio.length > 1;
  const currentProject = projectPortfolio[currentIndex];

  if (!currentProject) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projectPortfolio.length) % projectPortfolio.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectPortfolio.length);
  };

  return (
    <section
      id="portfolio"
      className="scroll-section scroll-section-portfolio relative flex h-dvh w-full justify-center overflow-hidden text-center"
    >
      <div
        className="portfolio-image-placeholder absolute inset-0 bg-cover bg-center blur-[2px] brightness-50"
        style={{ backgroundImage: `url(${currentProject.projectImage})` }}
        aria-hidden="true"
      />

      <h2 className="portfolio-title pointer-events-none relative z-10 inline-block p-8 font-(family-name:--font-jetbrains-mono) text-2xl font-bold tracking-[0.4em] text-white md:text-[80px] md:leading-[60px]">
        {currentProject.projectName}
      </h2>

      <p className="portfolio-project-caption text-novare-white-80 absolute bottom-[200px] left-1/2 z-10 w-full max-w-[1318px] -translate-x-1/2 px-10 text-center font-(family-name:--font-poppins) text-sm md:text-[clamp(1rem,2vw,2rem)] md:leading-[60px] font-medium">
        <span className="mb-2 block text-xs leading-snug font-bold tracking-wide md:text-xl">
          {currentProject.projectType}
        </span>
        {currentProject.projectDescription}
      </p>

      <button
        type="button"
        onClick={goToPrevious}
        disabled={!hasMultipleProjects}
        className="portfolio-nav-prev liquid-glass-button absolute top-8/10 left-5 z-10 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-all duration-500 hover:scale-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:active:scale-100 md:top-1/2 md:left-10 md:size-[60px]"
        aria-label={`Projeto anterior: ${currentProject.projectName}`}
      >
        <ChevronIcon
          className="size-4 -translate-x-0.5 rotate-90 text-novare-white-60 md:size-6"
          strokeWidth={10}
        />
      </button>

      <button
        type="button"
        onClick={goToNext}
        disabled={!hasMultipleProjects}
        className="portfolio-nav-next liquid-glass-button absolute top-8/10 right-4 z-10 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-all duration-500 hover:scale-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:active:scale-100 md:top-1/2 md:right-10 md:size-[60px]"
        aria-label={`Próximo projeto: ${currentProject.projectName}`}
      >
        <ChevronIcon
          className="size-4 translate-x-0.5 rotate-270 text-novare-white-60 md:size-6"
          strokeWidth={10}
        />
      </button>

      <a
        href={currentProject.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio-visit-button liquid-glass-button absolute bottom-14 left-1/2 z-10 flex h-10 w-48 -translate-x-1/2 cursor-pointer items-center justify-center gap-2 rounded-full px-3 transition-all duration-300 active:scale-95 md:bottom-24 md:h-12 md:w-[250px] md:gap-3 md:px-5 md:hover:scale-105"
      >
        <span className="text-novare-white-60 font-(family-name:--font-poppins) text-lg font-semibold md:text-2xl">
          Visitar Projeto
        </span>
        <ArrowIcon className="size-4 rotate-315 text-novare-white-60 md:size-5" />
      </a>
    </section>
  );
}
