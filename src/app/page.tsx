'use client';

import { FaqSection } from '@/components/FaqSection';
import { FooterSection } from '@/components/FooterSection';
import { HamburguerMenu } from '@/components/HamburguerMenu';
import { HeroSection } from '@/components/HeroSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ServicesValuesSection } from '@/components/ServicesValuesSection';
import { useState } from 'react';

export default function Home() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  return (
    <>
      <HamburguerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="relative w-full overflow-x-hidden">
        <HeroSection onOpenMenu={() => setIsMenuOpen(true)} />
        <ServicesValuesSection />
        <PortfolioSection />
        <FaqSection />
        <FooterSection />
      </main>
    </>
  );
}
