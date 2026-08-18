'use client';

import { useState } from 'react';
import { ChevronIcon } from '@/assets/icons/Icons';
import { faqItems } from '@/data/site-content';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midpoint = Math.ceil(faqItems.length / 2);
  const leftColumnItems = faqItems.slice(0, midpoint);
  const rightColumnItems = faqItems.slice(midpoint);

  const renderFaqItem = (item: (typeof faqItems)[number], index: number) => {
    const isOpen = openIndex === index;

    return (
      <div
        key={item.question}
        className="faq-item border-novare-white-30 overflow-hidden border-b w-full"
      >
        <button
          onClick={() => toggleFaq(index)}
          className="faq-question flex w-full cursor-pointer items-center justify-between gap-4 px-3 py-5 text-left select-none"
        >
          <span className="font-(family-name:--font-poppins) text-sm font-medium text-white">
            {item.question}
          </span>
          <ChevronIcon
            className={`size-3 shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            strokeWidth={2}
          />
        </button>
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="faq-answer px-3 pb-5">
              <p className="text-novare-white-80 font-(family-name:--font-poppins) text-xs md:text-sm font-medium">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="faq"
      className="scroll-section scroll-section-faq relative w-full px-6 pt-14 pb-22.5 md:py-22.5"
    >
      <h2 className="faq-title mx-auto max-w-dvw text-center font-(family-name:--font-jetbrains-mono) text-[clamp(2rem,4vw,3.5rem)] leading-10 font-bold tracking-[-0.0161em] text-white md:max-w-163.75">
        Perguntas Frequentes
      </h2>

      <div className="faq-list mx-auto mt-12 flex flex-col md:hidden">
        {faqItems.map((item, index) => renderFaqItem(item, index))}
      </div>

      <div className="faq-list-desktop mx-auto mt-16.25 hidden max-w-7xl items-start justify-center gap-12 md:grid md:grid-cols-2">
        <div className="flex flex-col">
          {leftColumnItems.map((item, idx) => renderFaqItem(item, idx))}
        </div>
        <div className="flex flex-col">
          {rightColumnItems.map((item, idx) => renderFaqItem(item, idx + midpoint))}
        </div>
      </div>
    </section>
  );
}