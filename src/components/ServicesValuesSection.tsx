'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import UnicornScene from 'unicornstudio-react/next';

import { ArrowIcon, NovareBelt } from '@/assets/icons/Icons';
import { services, values } from '@/data/site-content';
import { Canvas } from '@react-three/fiber';
import { LogoNovare3d } from './LogoNovare3d';
import { Suspense, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function ServicesValuesSection() {
  const logoRotationObj = useRef({ y: 0 });

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.scroll-section-services-values',
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => {
            const section = document.querySelector('.scroll-section-services-values');
            const sectionWidth = section ? (section as HTMLElement).offsetWidth : window.innerWidth;
            return `+=${sectionWidth}`;
          },
        },
      });

      tl.to('.hero-visual-wrapper', {
        opacity: 0,
        duration: 1,
      });

      tl.to(
        '.services-panel-inner',
        {
          rotateX: 0,
          top: 0,
          borderRadius: 0,
          scale: 1,
          duration: 2,
          onComplete: () => {
            window.dispatchEvent(new Event('resize'));
          },
          onReverseComplete: () => {
            window.dispatchEvent(new Event('resize'));
          },
        },
        '<'
      );

      tl.to({}, { duration: 0.5 });

      tl.to('.services-carousel-wrapper', {
        y: () => {
          const wrapper = document.querySelector('.services-carousel-wrapper');
          const container = document.querySelector('.services-trigger-container');
          return container && wrapper ? -(wrapper.clientHeight - container.clientHeight) : 0;
        },
        ease: 'none',
        duration: 3,
      });
      tl.to(
        logoRotationObj.current,
        {
          y: Math.PI * 2,
          duration: 3,
          ease: 'power1.inOut',
        },
        '<'
      );

      tl.to({}, { duration: 0.5 });

      tl.to('.horizontal-scroll-track', {
        x: '-50%',
        ease: 'none',
        duration: 2,
      });

      tl.to({}, { duration: 0.5 });
    });

    mm.add('(max-width: 767px)', () => {
      gsap.to('.hero-visual-wrapper', {
        yPercent: 100,
        scale: 0.8,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.scroll-section-services-values',
          scrub: true,
          start: 'top bottom',
          end: 'top top',
        },
      });

      gsap.to('.services-panel-inner', {
        borderRadius: 0,
        scrollTrigger: {
          trigger: '.scroll-section-services-values',
          scrub: true,
          start: 'top bottom',
          end: 'top top',
        },
      });

      gsap.to(logoRotationObj.current, {
        y: Math.PI * 2,
        ease: 'power1.inOut',
        repeat: -1,
        repeatDelay: 1,
        duration: 2,
      });

      gsap.to('.novare-belt', {
        xPercent: -100,
        ease: 'none',
        repeat: -1,
        duration: 4,
      });
    });
  });

  return (
    <section
      id="sobre"
      className="scroll-section scroll-section-services-values relative w-full md:z-10 md:mt-[-100dvh] md:transform-3d"
    >
      <div className="scroll-pin-wrapper relative min-h-dvh w-full">
        <div className="horizontal-scroll-track flex flex-col md:w-[200vw] md:flex-row md:items-stretch">
          {/* Fase 1 — Nossos Serviços */}
          <div className="services-panel relative w-screen shrink-0 md:h-screen md:overflow-hidden md:perspective-[2000px] md:perspective-origin-bottom">
            <div className="services-panel-inner bg-novare-purple-light flex max-w-dvw flex-col rounded-4xl px-10 md:absolute md:top-1/2 md:right-0 md:left-0 md:mx-auto md:h-full md:scale-50 md:-rotate-x-90 md:flex-row">
              {/* Coluna esquerda — Logo 3D + CTA */}
              <div className="services-left-column order-last flex w-full flex-col items-center justify-center gap-4 pt-8 pb-16 md:order-first md:w-1/2 md:gap-10 md:pt-16 md:pb-0">
                <div
                  className="threejs-logo-canvas-container relative h-64 w-full max-w-[671px] md:h-96"
                  aria-hidden="true"
                >
                  <Canvas
                    camera={{ position: [0, 0, 5], fov: 45 }}
                    gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                  >
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
                    <pointLight position={[-5, -5, -5]} intensity={0.5} />
                    <Suspense fallback={null}>
                      <LogoNovare3d rotationState={logoRotationObj} />
                    </Suspense>
                  </Canvas>
                </div>

                <p className="services-cta-text max-w-[450px] text-center font-(family-name:--font-montserrat) text-2xl leading-tight text-black md:text-[clamp(1.5rem,2.5vw,2.25rem)]">
                  Quer saber mais sobre nossos serviços?
                </p>

                <a
                  href="https://wa.link/y32eft"
                  target="_blank"
                  rel="noopener noreferrer"
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
              <div className="services-right-column relative flex w-full flex-col items-center justify-center pt-8 md:w-1/2 md:pl-16">
                <div className="services-trigger-container relative mt-10 h-auto overflow-visible md:mt-5 md:h-[820px] md:overflow-hidden">
                  <div className="service-card-fade-top hidden md:block" aria-hidden="true" />
                  <div className="services-carousel-wrapper flex flex-col">
                    <h2 className="services-section-title text-novare-text-dark pb-10 font-(family-name:--font-jetbrains-mono) text-2xl font-bold tracking-[0.0278em] md:mt-5 md:text-3xl lg:text-4xl">
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
                                  '2px 2px 6px 0px rgba(0, 0, 0, 0.15), inset 6px 6px 10px 0px rgba(0, 0, 0, 0.25), inset -6px -6px 10px 0px rgba(109, 109, 109, 0.25), inset 2px 2px 3px 0px rgba(255, 255, 255, 0.25), inset -1px -1px 3px 0px rgba(255, 255, 255, 0.25)',
                              }}
                            >
                              <ComponentIcon className="text-novare-white-90 size-7 md:size-9" />
                            </div>

                            <div className="relative flex flex-col z-10">
                              <h3 className="service-card-title text-novare-text-dark/80 max-w-[50%] p-1 font-(family-name:--font-poppins) text-xl leading-7 font-medium md:max-w-[70%] md:text-2xl lg:p-2 lg:py-4 lg:text-[32px] lg:*:max-w-[90%]">
                                {service.title}
                              </h3>

                              <p className="service-card-description text-novare-text-body pt-8 font-(family-name:--font-poppins) text-sm leading-5 md:px-1 md:pt-6 md:text-base lg:pt-10 lg:text-lg">
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

          {/* Cinturão Divisor */}
          <div className="novare-belt-divider bg-novare-purple-light overflow-hidden">
            <div className="novare-belt flex whitespace-nowrap">
              <NovareBelt className="text-novare-dark/80 w-dvw shrink-0 md:hidden" />
              <NovareBelt className="text-novare-dark/80 w-dvw shrink-0 md:hidden" />
            </div>
          </div>

          {/* Fase 2 — Nossos Valores */}
          <div className="section-valores-target bg-novare-purple-light relative h-auto w-screen shrink-0 overflow-hidden py-16 md:h-dvh">
            <div className="valores-panel-inner relative mx-auto flex h-full max-w-[1920px] flex-col items-center justify-center gap-8 px-6 md:flex-row md:px-10 lg:gap-12 lg:px-20">
              {/* Quem Somos / Como Surgiu — esquerda */}
              <div className="valores-about-left w-full text-left sm:max-w-[600px] lg:max-w-[420px] lg:flex-1">
                <div className="valores-quem-somos mb-9">
                  <h3 className="valores-quem-somos-title text-novare-text-dark font-(family-name:--font-montserrat) text-xl leading-7 font-semibold lg:text-[28px]">
                    Quem Somos
                  </h3>
                  <p className="valores-quem-somos-text text-novare-text-muted mt-2 font-(family-name:--font-poppins) text-sm leading-[22.75px] lg:mt-5 lg:text-lg">
                    A Novare Vision é uma agência digital focada em transformar ideias em presença
                    digital. Unindo engenharia de software, design e marketing, desenvolvemos
                    ecossistemas digitais sob medida com identidades visuais marcantes.
                    <span className="font-semibold text-black/65">
                      {' '}
                      Nosso compromisso é impulsionar negócios rumo ao próximo nível, entregando
                      estética, performance e resultados reais.
                    </span>
                  </p>
                </div>

                <div className="valores-como-surgiu">
                  <h3 className="valores-como-surgiu-title text-novare-text-dark font-(family-name:--font-montserrat) text-xl leading-7 font-semibold lg:text-[28px]">
                    Como Surgiu
                  </h3>
                  <p className="valores-como-surgiu-text text-novare-text-muted mt-2 font-(family-name:--font-poppins) text-sm leading-[22.75px] lg:mt-5 lg:text-lg">
                    A Novare foi idealizada pelos sócios Vinícius Vieira e Tom Caio. O projeto
                    ganhou vida a partir de uma percepção de mercado:
                    <span className="font-semibold text-black/65">
                      {' '}
                      a necessidade de empresas contarem com produtos digitais que não fossem apenas
                      atraentes, mas eficientes e funcionais.{' '}
                    </span>
                    O que começou como uma paixão compartilhada por desenvolvimento, design e
                    automação de processos, consolidou-se em uma agência pronta para elevar o
                    patamar digital de marcas em todo o país.
                  </p>
                </div>
              </div>

              {/* Grid NOVARE — centro */}
              <div className="valores-grid-panel values-panel-shadow relative my-6 h-106 w-70 shrink-0 overflow-hidden rounded-2xl 2xl:h-[720px] 2xl:w-[580px]">
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

                <h3 className="valores-section-title text-novare-white-90 relative z-10 pt-8 text-center font-(family-name:--font-montserrat) text-xl font-semibold 2xl:text-[32px]">
                  Nossos Valores
                </h3>

                <div className="valores-grid relative z-10 grid w-full grid-cols-[88px_88px] justify-between gap-y-4 px-8 py-8 2xl:grid-cols-[150px_150px] 2xl:gap-y-8 2xl:px-16">
                  {values.map((value, index) => (
                    <div
                      key={value.letter}
                      className={`valor-card valor-card-${value.letter.toLowerCase()} value-card-shadow flex h-22 w-22 flex-col items-center justify-center rounded-2xl bg-[rgba(0,0,0,0.2)] 2xl:h-[150px] 2xl:w-[150px]`}
                      data-index={index}
                    >
                      <span className="valor-card-letter font-(family-name:--font-jetbrains-mono) text-2xl font-bold text-white 2xl:text-5xl">
                        {value.letter}
                      </span>
                      <span className="valor-card-word font-(family-name:--font-poppins) text-xs font-medium text-white 2xl:mt-7 2xl:text-xl">
                        {value.word}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Onde Estamos — direita */}
              <div className="valores-about-right w-full text-left sm:max-w-[600px] lg:max-w-[420px] lg:flex-1">
                <div className="valores-onde-estamos mb-9">
                  <h3 className="valores-onde-estamos-title text-novare-text-dark font-(family-name:--font-montserrat) text-xl leading-7 font-semibold lg:text-[28px]">
                    Onde Estamos
                  </h3>
                  <p className="valores-onde-estamos-text text-novare-text-muted mt-2 font-(family-name:--font-poppins) text-sm leading-[22.75px] lg:mt-5 lg:text-lg">
                    Instalados em Cuiabá, Capital de Mato Grosso, trabalhamos com empresas em todo o
                    país, atuando de forma online através de nossas redes sociais.
                  </p>
                </div>
                <div className="valores-nossa-missao">
                  <h3 className="valores-nossa-missao-title text-novare-text-dark font-(family-name:--font-montserrat) text-xl leading-7 font-semibold lg:text-[28px]">
                    Nossa Missão
                  </h3>
                  <p className="valores-nossa-missao-text text-novare-text-muted mt-2 font-(family-name:--font-poppins) text-sm leading-[22.75px] lg:mt-5 lg:text-lg">
                    Nossa missão é democratizar a tecnologia e o design para empresas que buscam
                    liderar o mercado digital. Mais do que criar sites ou campanhas, existimos para
                    construir pontes entre grandes marcas e seus públicos, gerando impacto real,
                    inovação e crescimento sustentável de ponta a ponta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
