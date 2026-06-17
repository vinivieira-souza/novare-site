import { ArrowIcon } from "@/assets/icons/Icons";
import { services, values } from "@/data/site-content";

export function ServicesValuesSection() {
  return (
    <section id="sobre" className="scroll-section scroll-section-services-values relative w-full">
      <div className="scroll-pin-wrapper relative min-h-screen w-full">
        <div className="horizontal-scroll-track flex w-[200vw]">
          {/* Fase 1 — Nossos Serviços */}
          <div className="services-panel bg-novare-purple-light services-section-shadow relative h-screen w-screen shrink-0 overflow-hidden rounded-[35px]">
            <div className="services-panel-inner relative mx-auto flex h-full max-w-[1920px] px-10">
              {/* Coluna esquerda — Logo 3D + CTA */}
              <div className="services-left-column flex w-1/2 flex-col items-center justify-center gap-10 pt-16">
                <div
                  className="threejs-logo-canvas-container relative h-64 w-full max-w-[671px]"
                  aria-hidden="true"
                />

                <p className="services-cta-text max-w-[450px] text-center font-(family-name:--font-montserrat) text-[clamp(1.5rem,2.5vw,2.25rem)] leading-tight text-black">
                  Quer saber mais sobre nossos serviços?
                </p>

                <a
                  href="#contato"
                  className="services-contact-button primary-button bg-novare-dark hover: inline-flex h-14 items-center gap-3 rounded-lg pr-2 pl-[34px] brightness-110 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-novare-purple-light font-(family-name:--font-poppins) text-base font-semibold">
                    Fale Conosco
                  </span>
                  <span className="bg-novare-purple-light flex size-10 items-center justify-center rounded-lg">
                    <ArrowIcon className="text-novare-dark size-4" />
                  </span>
                </a>
              </div>

              <div
                className="services-pagination-dots flex items-end justify-center gap-[15px] py-5"
                aria-hidden="true"
              >
                <span className="services-dot-active h-[15px] w-[30px] rounded-full bg-black/20" />
                <span className="services-dot h-[15px] w-[15px] rounded-full bg-black/50" />
              </div>

              {/* Coluna direita — Cards de serviços */}
              <div className="services-right-column relative flex w-1/2 flex-col pt-16 pl-16">
                <h2 className="services-section-title text-novare-text-dark font-(family-name:--font-jetbrains-mono) text-4xl font-bold tracking-[0.0278em]">
                  Nossos Serviços
                </h2>

                <div className="services-trigger-container relative mt-10 h-[720px] overflow-hidden">
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
                            className={`service-card-icon absolute top-0 right-0 flex size-[75px] items-center justify-center rounded-full ${service.iconBgClass} z-10`}
                            style={{
                              boxShadow:
                                "2px 2px 6px 0px rgba(0, 0, 0, 0.15), inset 6px 6px 10px 0px rgba(0, 0, 0, 0.25), inset -6px -6px 10px 0px rgba(109, 109, 109, 0.25), inset 2px 2px 3px 0px rgba(255, 255, 255, 0.25), inset -1px -1px 3px 0px rgba(255, 255, 255, 0.25)",
                            }}
                          >
                            <ComponentIcon className="text-novare-white-90 size-9" />
                          </div>

                          <div className="relative z-10">
                            <h3 className="service-card-title text-novare-text-dark/80 absolute top-10 left-[35px] font-(family-name:--font-poppins) text-[32px] leading-5 font-medium">
                              {service.title}
                            </h3>

                            <p className="service-card-description text-novare-text-body absolute top-[110px] left-[35px] max-w-[450px] font-(family-name:--font-poppins) text-base leading-5">
                              {service.description}
                            </p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                  <div className="service-card-fade" aria-hidden="true" />
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
                <div className="shader-layer-background shader-layer-valores" aria-hidden="true" />

                <h3 className="valores-section-title text-novare-white-80 relative z-10 pt-10 text-center font-(family-name:--font-montserrat) text-[32px] leading-7 font-semibold">
                  Nossos Valores
                </h3>

                <div className="valores-grid relative z-10 mx-auto mt-10 grid w-fit grid-cols-2 gap-[35px]">
                  {values.map((value, index) => (
                    <div
                      key={value.letter}
                      className={`valor-card valor-card-${value.letter.toLowerCase()} value-card-shadow flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[15px] bg-[rgba(18,18,24,0.25)]`}
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
