import { ChevronIcon } from '@/assets/icons/Icons'
import { faqItems } from "@/data/site-content";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-section scroll-section-faq relative w-full px-10 py-[90px]">
      <h2 className="faq-title mx-auto max-w-[655px] text-center font-(family-name:--font-jetbrains-mono) text-[clamp(2rem,4vw,3.5rem)] leading-10 font-bold tracking-[-0.0161em] text-white">
        Perguntas Frequentes
      </h2>

      <div className="faq-list mx-auto mt-[65px] max-w-[640px]">
        {faqItems.map((item, index) => (
          <details
            key={item.question}
            className={`faq-item faq-item-${index + 1} group border-novare-white-30 border-b`}
          >
            <summary className="faq-question flex cursor-pointer list-none items-center justify-between gap-4 py-5 px-3 [&::-webkit-details-marker]:hidden">
              <span className="font-(family-name:--font-poppins) text-sm font-medium text-white">
                {item.question}
              </span>
              <ChevronIcon className='size-3 shrink-0 transition-transform group-open:rotate-180 duration-300' strokeWidth={2}/>
            </summary>
          </details>
        ))}
      </div>
    </section>
  );
}
