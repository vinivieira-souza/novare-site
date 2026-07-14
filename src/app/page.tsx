'use client';

import { FaqSection } from '@/components/FaqSection';
import { FooterSection } from '@/components/FooterSection';
import { HamburguerMenu } from '@/components/HamburguerMenu';
import { HeroSection } from '@/components/HeroSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { Preloader } from '@/components/Preloader';
import { ServicesValuesSection } from '@/components/ServicesValuesSection';
import { useEffect, useState } from 'react';

export default function Home() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  return (
    <>
      { isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <HamburguerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className={`relative w-full overflow-x-hidden transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <HeroSection onOpenMenu={() => setIsMenuOpen(true)} />
        <ServicesValuesSection />
        <PortfolioSection />
        <FaqSection />
        <FooterSection />
      </main>
    </>
  );
}
