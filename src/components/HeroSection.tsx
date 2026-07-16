import { UnicornScene } from 'unicornstudio-react/next';

import {
  ArrowIcon,
  HamburguerMenuIcon,
  LogoNovare,
  ShiningIcon,
} from '@/assets/icons/Icons';

interface HeroProps {
  onOpenMenu: () => void;
}

export function HeroSection({ onOpenMenu }: HeroProps) {
  return (
    <section
      id="inicio"
      className="scroll-section scroll-section-hero relative w-full overflow-hidden md:z-20"
    >
      <div className="hero-visual-wrapper relative flex h-dvh w-full flex-col">
        <div
          className="shader-layer-background shader-layer-hero pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        >
          <UnicornScene
            projectId="FmuYj5YODscGDRvGBbjC"
            width="100%"
            height="100%"
            scale={1}
            dpi={1.5}
            sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.5/dist/unicornStudio.umd.js"
          />
        </div>

        <header className="hero-header relative z-10 flex h-12 md:h-[70px] items-end justify-between px-5 md:px-10">
          <a href="#inicio" className="hero-logo-link shrink-0">
            <LogoNovare className="hero-logo target-hero-logo text-novare-white-80 h-6 transition-all duration-300 hover:text-white md:h-12" />
          </a>

          <button
            onClick={onOpenMenu}
            className="hero-hamburger-cta text-novare-white-80 flex size-8 md:size-10 cursor-pointer transition-all duration-700 active:scale-90 md:hover:rotate-y-180 md:hover:text-white"
            aria-label="Abrir menu"
          >
            <HamburguerMenuIcon className="size-full stroke-4" />
          </button>
        </header>

        <div className="hero-content relative z-10 mx-auto flex max-w-[1375px] flex-col items-center px-6 py-16 text-center md:px-10 md:pt-20 md:pb-24">
          <div className="hero-badge glass-button bg-novare-glass mb-10 flex items-center gap-2 rounded-full px-4 py-2 md:mb-[62px]">
            <ShiningIcon className="text-novare-white-80 stroke-novare-white-80 size-3 stroke-2 md:size-[14]" />
            <span className="text-novare-badge-text font-(family-name:--font-poppins) text-[8px] font-medium tracking-widest uppercase md:text-xs">
              Agência Digital
            </span>
          </div>

          <h1 className="hero-headline text-novare-white-90 font-(family-name:--font-jetbrains-mono) text-3xl leading-[1.05] font-bold tracking-[-0.0156em] md:text-[clamp(2.5rem,6vw,6rem)]">
            Transformando ideias em presença digital
          </h1>

          <p className="hero-subheadline text-novare-white-90 max-w-3xl pt-6 font-(family-name:--font-montserrat) text-sm leading-7 font-semibold md:pt-[30px] md:text-xl">
            Da criação de sites institucionais à gestão completa de marketing. Elevamos o patamar do seu negócio com soluções sob medida.
          </p>

          <a
            href="https://wa.link/id0p7m"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-button primary-button bg-novare-white-80 mt-16 inline-flex h-11 items-center gap-3 rounded-lg pr-1 pl-4 transition-all duration-300 active:scale-95 md:mt-[92px] md:h-[52px] md:pr-1.5 md:pl-8 md:hover:scale-105 md:hover:brightness-90"
          >
            <span className="text-novare-text-dark font-(family-name:--font-poppins) text-base font-semibold">
              Solicitar Orçamento
            </span>
            <span className="hero-cta-icon bg-novare-text-dark flex size-9 items-center justify-center rounded-lg md:size-10">
              <ArrowIcon className="text-novare-white-80 size-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
