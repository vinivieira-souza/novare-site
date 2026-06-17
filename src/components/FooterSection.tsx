import { UnicornScene } from "unicornstudio-react/next";

import { ArrowIcon, LogoNovare } from "@/assets/icons/Icons";
import { footerContactLinks, footerNavLinks } from "@/data/site-content";

export function FooterSection() {
  return (
    <footer
      id="contato"
      className="scroll-section scroll-section-footer relative h-screen w-full overflow-hidden"
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

      <div className="footer-content relative z-10 mx-auto flex h-1/3 max-w-full flex-col gap-16 px-20 pt-20 pb-14 lg:flex-row lg:justify-between">
        <div className="footer-cta-block max-w-[1318px]">
          <h2 className="footer-headline text-novare-white-90 font-(family-name:--font-jetbrains-mono) text-[clamp(3rem,8vw,8rem)] leading-[1.05] font-extrabold">
            VAMOS DESENVOLVER SEU FUTURO?
          </h2>

          <div className="footer-cta-buttons mt-14 flex flex-wrap gap-5">
            <a
              href="#contato"
              className="footer-primary-cta primary-button bg-novare-white-90 inline-flex h-[52px] items-center gap-3 rounded-lg pr-1.5 pl-8 transition-all duration-300 hover:-translate-y-1 hover:brightness-95"
            >
              <span className="text-novare-dark font-(family-name:--font-poppins) text-base font-semibold">
                Solicitar Orçamento
              </span>
              <span className="bg-novare-dark flex size-10 items-center justify-center rounded-lg">
                <ArrowIcon className="size-4" />
              </span>
            </a>

            <a
              href="#contato"
              className="footer-secondary-cta glass-button bg-novare-glass inline-flex h-[54px] items-center gap-5 rounded-lg pr-[7px] pl-6 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-novare-white-90 font-(family-name:--font-poppins) text-base font-semibold">
                Fale Conosco
              </span>
              <span className="bg-novare-white-60 flex size-10 items-center justify-center rounded-lg">
                <ArrowIcon className="text-novare-dark size-4" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex h-1/3 flex-col items-end justify-center gap-24 px-20">
        <nav className="footer-contact-nav" aria-label="Contato">
          <h3 className="footer-contact-title text-novare-white-80 font-(family-name:--font-poppins) text-3xl leading-6 font-medium text-right">
            Contato
          </h3>
          <ul className="footer-contact-list mt-5 flex flex-col items-end gap-2">
            {footerContactLinks.map((link) => {
              const ComponentIcon = link.icon;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-contact-link text-novare-white-80 flex flex-row-reverse items-center gap-2 font-(family-name:--font-poppins) text-xl font-medium transition-all duration-300 hover:-translate-x-1 hover:-translate-y-0.5 hover:text-white"
                  >
                    <ComponentIcon className="size-5" strokeWidth={4} />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav className="footer-main-nav" aria-label="Navegação">
          <h3 className="footer-nav-title text-novare-white-80 font-(family-name:--font-poppins) text-3xl leading-6 font-medium text-right">
            Navegação
          </h3>
          <ul className="footer-nav-list mt-5 flex flex-col items-end gap-2">
            {footerNavLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="footer-nav-link block text-novare-white-80 font-(family-name:--font-poppins) text-xl font-medium transition-all duration-300 hover:-translate-x-1 hover:-translate-y-0.5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer-links-grid flex h-1/3 shrink-0 items-end justify-start px-10">
        <div className="footer-copyright relative z-10 flex flex-col gap-8 p-20">
          <LogoNovare className="w-64 text-white/70" />
          <p className="text-novare-dark font-(family-name:--font-inter) text-base font-semibold">
            © 2026 Novare Vision.{" "}
            <span className="text-novare-zinc font-medium">Todos os direitos reservados.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
