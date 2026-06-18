import { UnicornScene } from "unicornstudio-react/next";

import { ArrowIcon, LogoNovare } from "@/assets/icons/Icons";
import { footerContactLinks, footerNavLinks } from "@/data/site-content";

export function FooterSection() {
  return (
    <footer
      id="contato"
      className="scroll-section scroll-section-footer relative h-full min-h-dvh w-full overflow-hidden"
    >
      <div className="shader-layer-background shader-layer-footer" aria-hidden="true">
        <UnicornScene
          projectId="U2VszWEnVzozpUsVTPqL"
          width="1920px"
          height="960px"
          scale={1}
          dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.5/dist/unicornStudio.umd.js"
        />
      </div>

      <div className="footer-content relative z-10 mx-auto flex md:h-1/3 max-w-full flex-col px-8 pt-12 md:gap-16 md:px-20 md:pt-20 md:pb-14 lg:flex-row lg:justify-between">
        <div className="footer-cta-block md:max-w-[1318px]">
          <h2 className="footer-headline text-novare-white-90 font-(family-name:--font-jetbrains-mono) text-5xl md:text-[clamp(3rem,8vw,8rem)] leading-[1.05] font-extrabold">
            VAMOS DESENVOLVER SEU FUTURO?
          </h2>

          <div className="footer-cta-buttons mt-6 md:mt-14 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="footer-primary-cta primary-button bg-novare-white-90 inline-flex h-11 md:h-[52px] items-center gap-2 md:gap-3 rounded-lg pr-1 md:pr-1.5 pl-3 md:pl-8 transition-all duration-300 active:scale-95 md:hover:-translate-y-1 hover:brightness-95"
            >
              <span className="text-novare-dark font-(family-name:--font-poppins) text-sm md:text-base font-semibold">
                Solicitar Orçamento
              </span>
              <span className="bg-novare-dark flex size-9 md:size-10 items-center justify-center rounded-lg">
                <ArrowIcon className="size-4" />
              </span>
            </a>

            <a
              href="#contato"
              className="footer-secondary-cta glass-button bg-novare-glass inline-flex h-11 md:h-[54px] items-center gap-2 md:gap-5 rounded-lg pr-1.5 pl-4 md:pr-[7px] md:pl-6 transition-all duration-300 active:scale-95 md:hover:-translate-y-1"
            >
              <span className="text-novare-white-90 font-(family-name:--font-poppins) text-sm md:text-base font-semibold">
                Fale Conosco
              </span>
              <span className="bg-novare-white-60 flex size-8 md:size-10 items-center justify-center rounded-lg">
                <ArrowIcon className="text-novare-dark size-4" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex md:h-1/3 flex-col justify-start gap-6 px-8 py-12 md:gap-24 md:px-20">
        <nav className="footer-contact-nav" aria-label="Contato">
          <h3 className="footer-contact-title text-novare-white-80 font-(family-name:--font-poppins) text-xl md:text-3xl leading-6 font-medium md:text-right">
            Contato
          </h3>
          <ul className="footer-contact-list mt-2 md:mt-5 flex flex-col md:items-end gap-1 md:gap-2">
            {footerContactLinks.map((link) => {
              const ComponentIcon = link.icon;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-contact-link text-novare-white-80 flex md:flex-row-reverse items-center gap-1 md:gap-2 font-(family-name:--font-poppins)text-base md:text-xl font-medium transition-all duration-300 active:scale-95 md:hover:-translate-x-1 md:hover:-translate-y-0.5 md:hover:text-white"
                  >
                    <ComponentIcon className="size-4 md:size-5" strokeWidth={4} />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav className="footer-main-nav" aria-label="Navegação">
          <h3 className="footer-nav-title text-novare-white-80 font-(family-name:--font-poppins) text-xl md:text-3xl leading-6 font-medium md:text-right">
            Navegação
          </h3>
          <ul className="footer-nav-list mt-2 md:mt-5 flex flex-col md:items-end gap-1 md:gap-2">
            {footerNavLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="footer-nav-link md:block text-novare-white-80 font-(family-name:--font-poppins) text-base md:text-xl font-medium transition-all duration-300 active:scale-95 md:hover:-translate-x-1 md:hover:-translate-y-0.5 md:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer-links-grid flex md:h-1/3 shrink-0 items-end justify-center mt-auto md:px-10">
        <div className="footer-copyright relative z-10 flex flex-col md:gap-8 md:p-20">
          <LogoNovare className="w-64 text-white/70 hidden md:flex" />
          <p className="text-novare-dark font-(family-name:--font-inter) text-xs md:text-base font-semibold">
            © 2026 Novare Vision.{" "}
            <span className="text-novare-dark md:text-novare-zinc font-medium">Todos os direitos reservados.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
