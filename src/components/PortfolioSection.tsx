import { ArrowIcon, ChevronIcon } from "@/assets/icons/Icons";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="scroll-section scroll-section-portfolio flex justify-center text-center relative h-dvh w-full overflow-hidden"
    >
      <div
        className="portfolio-image-placeholder absolute inset-0 bg-neutral-400"
        aria-hidden="true"
      />

      <h2 className="portfolio-title pointer-events-none inline-block p-8 md:pt-10 z-10 font-(family-name:--font-jetbrains-mono) text-3xl md:text-[80px] md:leading-[60px] font-bold tracking-[0.6em] text-white">
        Portfólio
      </h2>

      <p className="portfolio-project-caption absolute bottom-[288px] left-1/2 z-10 w-full max-w-[1318px] -translate-x-1/2 px-10 text-center font-(family-name:--font-inter) text-[clamp(2rem,4vw,4rem)] leading-[60px] font-black text-black/30">
        conteúdo sobre o projeto sobre a imagem
      </p>

      <button
        type="button"
        className="portfolio-nav-prev glass-button bg-novare-glass-border absolute top-8/10 md:top-1/2 left-5 md:left-10 z-10 flex size-9 md:size-[60px] -translate-y-1/2 items-center justify-center rounded-full cursor-pointer active:scale-95 hover:scale-110 transition-all duration-500"
        aria-label="Projeto anterior"
      >
        <ChevronIcon className="size-4 md:size-6 -translate-x-0.5 rotate-90 text-black/70" strokeWidth={10} />
      </button>

      <button
        type="button"
        className="portfolio-nav-next glass-button bg-novare-glass-border absolute top-8/10 md:top-1/2 right-4 md:right-10 z-10 flex size-9 md:size-[60px] -translate-y-1/2 items-center justify-center rounded-full cursor-pointer active:scale-95 md:hover:scale-110 transition-all duration-300 md:duration-500"
        aria-label="Próximo projeto"
      >
        <ChevronIcon className="size-4 md:size-6 translate-x-0.5 rotate-270 text-black/70" strokeWidth={10} />
      </button>

      <a
        href="#"
        className="portfolio-visit-button glass-button bg-novare-glass absolute bottom-14 md:bottom-24 left-1/2 z-10 flex h-10 w-48 md:h-12 md:w-[250px] -translate-x-1/2 items-center justify-center gap-2 md:gap-3 rounded-full px-3 md:px-5 cursor-pointer active:scale-95 md:hover:scale-105 transition-all duration-300"
      >
        <span className="text-novare-text-dark/70 font-(family-name:--font-poppins) text-lg md:text-2xl font-semibold">
          Visitar Projeto
        </span>
        <ArrowIcon className="size-4 md:size-5 rotate-315 text-black/70" />
      </a>
    </section>
  );
}
