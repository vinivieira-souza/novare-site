'use client';

import Aurora from '@/components/shaders/Aurora';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ArrowIcon, LogoNovare } from '@/assets/icons/Icons';
import { footerContactLinks } from '@/data/site-content';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function FooterSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.footer-content-wrapper',
        {
          yPercent: -35,
          opacity: 0.5,
        },
        {
          yPercent: 0,
          opacity: 1,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: 'top bottom',
            end: 'bottom bottom',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <footer
      id="contato"
      ref={containerRef}
      className="scroll-section scroll-section-footer bg-novare-dark relative z-0 h-dvh w-full overflow-hidden"
    >
      <div className="footer-content-wrapper relative h-dvh w-full overflow-hidden">
        <div className="shader-layer-background shader-layer-footer" aria-hidden="true">
          <Aurora
            colorStops={['#2867d0', '#77ceff', '#2867d0']}
            amplitude={1}
            blend={0.5}
            speed={1}
          />
        </div>

        <div className="footer-content relative z-20 mx-auto flex max-w-full flex-col pt-12 pl-6 md:h-1/3 md:gap-16 md:px-20 md:pt-20 md:pb-14 lg:flex-row lg:justify-between">
          <div className="footer-cta-block md:max-w-329.5">
            <h2 className="footer-headline text-novare-white-90 font-(family-name:--font-jetbrains-mono) text-5xl font-extrabold md:text-[clamp(3rem,8vw,8rem)] md:leading-[1.05]">
              VAMOS DESENVOLVER SEU FUTURO?
            </h2>

            <div className="footer-cta-buttons mt-6 flex flex-col gap-4 md:mt-14 md:flex-row">
              <div>
                <a
                  href="https://wa.link/id0p7m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-primary-cta primary-button bg-novare-white-90 inline-flex h-11 items-center gap-2 rounded-lg pr-1 pl-3 transition-all duration-300 hover:brightness-95 active:scale-95 md:h-13 md:gap-3 md:pr-1.5 md:pl-8 md:hover:-translate-y-1"
                >
                  <span className="text-novare-dark font-(family-name:--font-poppins) text-sm font-semibold md:text-base">
                    Solicitar Orçamento
                  </span>
                  <span className="bg-novare-dark flex size-9 items-center justify-center rounded-lg md:size-10">
                    <ArrowIcon className="size-4" />
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="https://wa.link/y32eft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-secondary-cta glass-button bg-novare-glass inline-flex h-11 items-center gap-2 rounded-lg pr-1.5 pl-4 transition-all duration-300 active:scale-95 md:h-13.5 md:gap-5 md:pr-1.75 md:pl-6 md:hover:-translate-y-1"
                >
                  <span className="text-novare-white-90 font-(family-name:--font-poppins) text-sm font-semibold md:text-base">
                    Fale Conosco
                  </span>
                  <span className="bg-novare-white-60 flex size-8 items-center justify-center rounded-lg md:size-10">
                    <ArrowIcon className="text-novare-dark size-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-12 md:px-[12dvh] md:py-[12dvh]">
          <nav className="footer-contact-nav relative z-10" aria-label="Contato">
            <h3 className="footer-contact-title text-novare-white-80 font-(family-name:--font-poppins) text-2xl font-semibold md:text-right md:text-3xl md:leading-6 md:font-medium">
              Contato
            </h3>
            <ul className="footer-contact-list mt-2 flex flex-col gap-2 px-2 text-sm md:mt-5 md:items-end md:text-base">
              {footerContactLinks.map((link) => {
                const ComponentIcon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-contact-link text-novare-white-80 font-(family-name:--font-poppins)text-base flex items-center gap-2 font-medium transition-all duration-300 active:scale-95 md:flex-row-reverse md:gap-2 md:text-xl md:hover:-translate-x-1 md:hover:-translate-y-0.5 md:hover:text-white"
                    >
                      <ComponentIcon className="size-4 md:size-5" strokeWidth={4} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="footer-links-grid absolute bottom-5 left-1/2 shrink-0 -translate-x-1/2 justify-center md:static md:mt-auto md:flex md:translate-x-0 md:items-end md:justify-start">
          <div className="footer-copyright relative z-10 flex flex-col md:gap-8 md:px-24">
            <LogoNovare className="hidden w-64 text-white/70 md:flex" />
            <p className="text-novare-purple-light/90 font-(family-name:--font-inter) text-xs font-semibold whitespace-nowrap md:text-base md:whitespace-normal">
              © 2026 Novare Vision.{' '}
              <span className="text-novare-purple-light/60 font-medium">
                Todos os direitos reservados.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
