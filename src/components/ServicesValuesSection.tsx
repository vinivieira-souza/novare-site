"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import UnicornScene from "unicornstudio-react/next";

import { ArrowIcon } from "@/assets/icons/Icons";
import { services, values } from "@/data/site-content";
import { Canvas } from "@react-three/fiber";
import { LogoNovare3d } from "./LogoNovare3d";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ServicesValuesSection() {
  const logoRotationObj = useRef({ y: 0 });

  useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-section-services-values",
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => {
            const section = document.querySelector(".scroll-section-services-values");
            const sectionWidth = section ? (section as HTMLElement).offsetWidth : window.innerWidth;
            return `+=${sectionWidth + 800}`;
          },
          onUpdate: (self) => {
            if (self.progress < 0.25) {
              window.dispatchEvent(new Event('resize'));
            }
          }
        },
      });

      tl.to(".hero-visual-wrapper", {
        opacity: 0,
        duration: 1,
      });

      tl.to('.services-panel-inner', {
        rotateX: 0,
        top: 0,
        borderRadius: 0,
        scale: 1,
        duration: 2,
      }, '<');

      tl.to({}, { duration: 0.5 });

      tl.to(".services-carousel-wrapper", {
        y: () => {
          const wrapper = document.querySelector(".services-carousel-wrapper");
          const container = document.querySelector(".services-trigger-container");
          return container && wrapper ? -(wrapper.clientHeight - container.clientHeight) : 0;
        },
        ease: "none",
        duration: 3,
      });
      tl.to(logoRotationObj.current, {
        y: Math.PI * 2,
        duration: 3,
        ease: 'power1.inOut',
      }, '<');

      tl.to({}, { duration: 0.5 });

      tl.to(".horizontal-scroll-track", {
        x: "-50%",
        ease: "none",
        duration: 2,
      });

      tl.to({}, { duration: 0.5 });
    });

  return (
    <section
      id="sobre"
      className="scroll-section scroll-section-services-values relative z-10 transform-3d w-full mt-[-100dvh]"
    >
      <div className="scroll-pin-wrapper relative min-h-screen w-full">
        <div className="horizontal-scroll-track flex w-[200vw]">
          {/* Fase 1 — Nossos Serviços */}
          <div className="services-panel services-section-shadow relative perspective-[2000px] perspective-origin-bottom w-screen shrink-0 md:h-screen md:overflow-hidden">
            <div className="services-panel-inner bg-novare-purple-light absolute top-1/2 left-0 right-0 -rotate-x-90 mx-auto flex max-w-dvw flex-col px-10 rounded-4xl scale-50 md:h-full md:flex-row">
              {/* Coluna esquerda — Logo 3D + CTA */}
              <div className="services-left-column order-last flex w-full flex-col items-center justify-center gap-4 py-8 md:order-first md:w-1/2 md:gap-10 md:pt-16 md:pb-0">
                <div
                  className="threejs-logo-canvas-container relative h-64 w-full max-w-[671px] md:h-96"
                  aria-hidden="true"
                >
                  <Canvas
                    camera={{ position: [0, 0, 5], fov: 45 }}
                    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                  >
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
                    <pointLight position={[-5, -5, -5]} intensity={0.5} />
                    <LogoNovare3d rotationState={logoRotationObj}/>
                  </Canvas>
                </div>

                <p className="services-cta-text max-w-[450px] text-center font-(family-name:--font-montserrat) text-2xl leading-tight text-black md:text-[clamp(1.5rem,2.5vw,2.25rem)]">
                  Quer saber mais sobre nossos serviços?
                </p>

                <a
                  href="#contato"
                  className="services-contact-button primary-button bg-novare-dark inline-flex h-11 items-center gap-3 rounded-lg pr-1.5 pl-6 transition-all duration-300 active:scale-95 md:h-14 md:pr-2 md:pl-[34px] md:hover:scale-105 md:hover:brightness-110"
                >
                  <span className="text-novare-purple-light font-(family-name:--font-poppins) text-base font-semibold">
                    Fale Conosco
                  </span>
                  <span className="bg-novare-purple-light flex size-8 items-center justify-center rounded-lg md:size-10">
                    <ArrowIcon className="text-novare-dark size-4" />
                  </span>
                </a>
              </div>

              {/* Coluna direita — Cards de serviços */}
              <div className="services-right-column relative flex w-full flex-col pt-8 md:w-1/2 md:pl-16">
                <div className="services-trigger-container relative mt-10 md:mt-5 h-auto overflow-visible md:h-[820px] md:overflow-hidden">
                <div className="service-card-fade-top hidden md:block" aria-hidden="true" />
                  <div className="services-carousel-wrapper flex flex-col">
                    <h2 className="services-section-title text-novare-text-dark font-(family-name:--font-jetbrains-mono) text-2xl font-bold tracking-[0.0278em] md:mt-5 md:pb-10 md:text-4xl">
                      Nossos Serviços
                    </h2>
                    <div className="services-cards-stack flex flex-col gap-[45px]">
                      {services.map((service, index) => {
                        const ComponentIcon = service.icon;
                        return (
                          <article
                            key={service.title}
                            className={`service-card service-card-shadow service-scroll-card service-scroll-card-${index + 1} shrink-0`}
                          >
                            <div className="service-card-curves" aria-hidden="true" />

                            <div
                              className={`service-card-icon absolute top-0 right-0 flex size-16 items-center justify-center rounded-full md:size-[75px] ${service.iconBgClass} z-10`}
                              style={{
                                boxShadow:
                                  "2px 2px 6px 0px rgba(0, 0, 0, 0.15), inset 6px 6px 10px 0px rgba(0, 0, 0, 0.25), inset -6px -6px 10px 0px rgba(109, 109, 109, 0.25), inset 2px 2px 3px 0px rgba(255, 255, 255, 0.25), inset -1px -1px 3px 0px rgba(255, 255, 255, 0.25)",
                              }}
                            >
                              <ComponentIcon className="text-novare-white-90 size-7 md:size-9" />
                            </div>

                            <div className="relative z-10">
                              <h3 className="service-card-title text-novare-text-dark/80 max-w-[50%] p-1 font-(family-name:--font-poppins) text-xl leading-5 font-medium md:max-w-[90%] md:p-2 md:py-4 md:text-[32px]">
                                {service.title}
                              </h3>

                              <p className="service-card-description text-novare-text-body pt-6 font-(family-name:--font-poppins) text-sm leading-5 md:px-1 md:pt-8 md:text-base">
                                {service.description}
                              </p>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                  <div className="service-card-fade-bottom hidden md:block" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          {/* Fase 2 — Nossos Valores */}
          <div className="section-valores-target bg-novare-purple-light relative h-screen w-screen shrink-0 overflow-hidden">
            <div className="valores-panel-inner relative mx-auto flex h-full max-w-[1920px] items-center justify-center px-10">
              {/* Quem Somos / Como Surgiu — esquerda */}
              <div className="valores-about-left absolute bottom-[166px] left-[165px] max-w-[385px]">
                <div className="valores-quem-somos mb-9">
                  <h3 className="valores-quem-somos-title text-novare-text-dark font-(family-name:--font-montserrat) text-[28px] leading-7 font-semibold">
                    Quem Somos
                  </h3>
                  <p className="valores-quem-somos-text text-novare-text-muted mt-[18px] font-(family-name:--font-poppins) text-lg leading-[22.75px]">
                    Fundada por Vinícius Vieira e Tom Caio, a
                    <br />
                    Novare Vision nasceu da paixão por
                    <br />
                    tecnologia e design funcional.
                  </p>
                </div>

                <div className="valores-como-surgiu">
                  <h3 className="valores-como-surgiu-title text-novare-text-dark font-(family-name:--font-montserrat) text-[28px] leading-5 font-semibold">
                    Como Surgiu
                  </h3>
                  <p className="valores-como-surgiu-text text-novare-text-muted mt-5 font-(family-name:--font-poppins) text-lg leading-[22.75px]">
                    Fundada por Vinícius Vieira e Tom Caio, a
                    <br />
                    Novare Vision nasceu da paixão por
                    <br />
                    tecnologia e design funcional.
                  </p>
                </div>
              </div>

              {/* Grid NOVARE — centro */}
              <div className="valores-grid-panel values-panel-shadow relative h-[720px] w-[580px] overflow-hidden rounded-2xl">
                <div
                  className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <UnicornScene
                    projectId="nvEM7D0WfugBFu6ZIM3I"
                    width="580px"
                    height="720px"
                    scale={1}
                    dpi={1.5}
                    sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.5/dist/unicornStudio.umd.js"
                  />
                </div>

                <h3 className="valores-section-title text-novare-white-90 relative z-10 pt-10 text-center font-(family-name:--font-montserrat) text-[32px] leading-7 font-semibold">
                  Nossos Valores
                </h3>

                <div className="valores-grid relative z-10 mt-10 grid w-full grid-cols-[150px_150px] justify-between gap-y-8 px-16">
                  {values.map((value, index) => (
                    <div
                      key={value.letter}
                      className={`valor-card valor-card-${value.letter.toLowerCase()} value-card-shadow flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[15px] bg-[rgba(0,0,0,0.2)]`}
                      data-index={index}
                    >
                      <span className="valor-card-letter font-(family-name:--font-jetbrains-mono) text-5xl leading-[22.75px] font-bold text-white">
                        {value.letter}
                      </span>
                      <span className="valor-card-word mt-7 font-(family-name:--font-poppins) text-xl leading-[22.75px] font-medium text-white">
                        {value.word}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Onde Estamos — direita */}
              <div className="valores-about-right absolute top-[245px] right-[187px] max-w-[363px]">
                <h3 className="valores-onde-estamos-title text-novare-text-dark font-(family-name:--font-montserrat) text-[28px] leading-7 font-semibold">
                  Onde Estamos
                </h3>
                <p className="valores-onde-estamos-text text-novare-text-muted mt-[15px] font-(family-name:--font-poppins) text-lg leading-[22.75px]">
                  Atuando diretamente de Mato Grosso
                  <br />
                  para impulsionar empresas em todo o
                  <br />
                  digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
