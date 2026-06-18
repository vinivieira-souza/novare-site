import { UnicornScene } from "unicornstudio-react/next";

import { ArrowIcon, InstagramIcon, LogoNovare, ShiningIcon } from "@/assets/icons/Icons";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="scroll-section scroll-section-hero relative min-h-dvh w-full overflow-hidden"
    >
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

      <header className="hero-header relative z-10 flex h-[70px] items-center justify-between px-5 md:px-10">
        <a href="#inicio" className="hero-logo-link shrink-0">
          <LogoNovare className="hero-logo h-6 md:h-12 text-white/75 hover:text-white transition-all duration-300" />
        </a>

        <a
          href="#"
          className="hero-instagram-cta glass-button bg-novare-glass flex h-9 items-center gap-2.5 rounded-lg px-4 active:scale-95 md:hover:scale-105 transition-all duration-300"
        >
          <InstagramIcon className="size-3 md:size-[15] text-novare-zinc-light" />
          <span className="text-novare-zinc-light font-(family-name:--font-poppins) text-xs md:text-sm font-medium">
            Acompanhe no Instagram
          </span>
        </a>
      </header>

      <div className="hero-content relative z-10 mx-auto flex max-w-[1375px] flex-col items-center px-6 md:px-10 py-16 md:pt-20 md:pb-24 text-center">
        <div className="hero-badge glass-button bg-novare-glass mb-10 md:mb-[62px] flex items-center gap-2 rounded-full px-4 py-2">
          <ShiningIcon className="size-3 md:size-[14] text-novare-white-80 stroke-novare-white-80 stroke-2" />
          <span className="text-novare-badge-text font-(family-name:--font-poppins) text-[8px] md:text-xs font-medium tracking-widest uppercase">
            Agência Digital
          </span>
        </div>

        <h1 className="hero-headline font-(family-name:--font-jetbrains-mono) text-4xl md:text-[clamp(2.5rem,6vw,6rem)] leading-[1.05] font-bold tracking-[-0.0156em] text-novare-white-90">
          Transformando ideias em
          <br />
          presença digital estratégica.
        </h1>

        <p className="hero-subheadline text-novare-white-90 pt-6 md:pt-[30px] max-w-3xl font-(family-name:--font-montserrat) text-base md:text-xl font-semibold leading-7">
          Da criação de sites institucionais à gestão completa de marketing.
          <br />
          Elevamos o patamar do seu negócio com soluções sob medida.
        </p>

        <a
          href="#contato"
          className="hero-cta-button primary-button bg-novare-white-80 mt-16 md:mt-[92px] inline-flex h-11 md:h-[52px] items-center gap-3 rounded-lg pr-1 pl-4 md:pr-1.5 md:pl-8 active:scale-95 md:hover:brightness-90 md:hover:scale-105 transition-all duration-300"
        >
          <span className="text-novare-text-dark font-(family-name:--font-poppins) text-base font-semibold">
            Solicitar Orçamento
          </span>
          <span className="hero-cta-icon flex size-9 md:size-10 items-center justify-center rounded-lg bg-novare-text-dark">
            <ArrowIcon className="size-4 text-novare-white-80" />
          </span>
        </a>
      </div>
    </section>
  );
}
