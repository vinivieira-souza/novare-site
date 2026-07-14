'use client';

import {
  ArrowIcon,
  CloseIcon,
  HelloTextSVG,
  InstagramIcon,
  WhatsappIcon,
} from '@/assets/icons/Icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

interface HamburguerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HamburguerMenu({ isOpen, onClose }: HamburguerMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(backdropRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(menuRef.current, {
          x: '0%',
          duration: 0.4,
          ease: 'power3.out',
        });
        gsap.fromTo(
          '.close-btn-svg',
          { rotate: -90, scale: 0 },
          { rotate: 0, scale: 1, duration: 0.4, delay: 0.1, ease: 'back.out(1.7)' }
        );
      }
    },
    { dependencies: [isOpen], scope: containerRef }
  );

  const handleClose = () => {
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inIn',
    });
    gsap.to(menuRef.current, {
      x: '100%',
      duration: 0.3,
      ease: 'power3.in',
      onComplete: onClose,
    });
  };

  if (!isOpen) return null;

  return (
    <div ref={containerRef} className="hamburguer-menu-section fixed inset-0 z-50 flex justify-end">
      <div
        ref={backdropRef}
        onClick={handleClose}
        style={{ opacity: 0 }}
        className="menu-hamb-backdrop absolute inset-0 bg-black/20 backdrop-blur-md backdrop-brightness-75"
      />
      <div
        ref={menuRef}
        style={{ transform: 'translateX(100%)' }}
        className="hamb-menu bg-novare-purple-light relative z-10 h-dvh w-full shadow-2xl md:w-[480px]"
      >
        <div className="hamb-menu-wrapper flex h-full flex-col">
          <div className="flex justify-end px-5 md:px-10 pt-[38px]">
            <button
              onClick={handleClose}
              aria-label="Fechar Menu"
              className="text-novare-dark size-8 cursor-pointer transition-transform duration-500 md:hover:rotate-90 active:scale-90"
            >
              <CloseIcon className="close-btn-svg size-full stroke-4" />
            </button>
          </div>
          <div className="hamb-menu-content flex flex-col items-center justify-center mt-20 md:mt-32">
            <HelloTextSVG className="hello-svg w-48 md:w-64" />
            <p className="text-novare-dark font-(family-name:--font-poppins) text-lg font-medium pt-4 md:pt-8">
              Como posso te ajudar hoje?
            </p>
          </div>
          <div className="hamb-menu-links flex flex-col items-center mt-20 md:mt-32">
            <div className="flex w-[280px] flex-col gap-6 md:gap-8">
              <a
                href="https://wa.link/id0p7m"
                target="_blank"
                rel="noopener noreferrer"
                className="link-budget primary-button bg-novare-dark relative flex h-[60px] items-center rounded-full pr-[10px] pl-4 group"
              >
                <span className="text-novare-purple-light shrink-0 font-(family-name:--font-poppins) text-base font-medium">
                  Solicitar Orçamento
                </span>
                <span className="bg-novare-purple-light flex z-10 absolute right-[10px] items-center justify-center rounded-full size-10 active:scale-95 md:group-hover:w-[260px] transition-all duration-500">
                  <ArrowIcon className="text-novare-dark size-4" />
                </span>
              </a>
              <a
                href="https://wa.link/y32eft"
                target="_blank"
                rel="noopener noreferrer"
                className="link-contact primary-button bg-novare-dark relative flex h-[60px] items-center rounded-full pr-[10px] pl-4 group"
              >
                <span className="text-novare-purple-light shrink-0 font-(family-name:--font-poppins) text-base font-medium">
                  Fale Conosco
                </span>
                <span className="bg-novare-purple-light flex z-10 absolute right-[10px] items-center justify-center rounded-full size-10 active:scale-95 md:group-hover:w-[260px] transition-all duration-500">
                  <WhatsappIcon className="text-novare-dark size-4" />
                </span>
              </a>
              <a
                href="https://www.instagram.com/novare.vision/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-instagram primary-button bg-novare-dark relative flex h-[60px] items-center rounded-full pr-[10px] pl-4 group"
              >
                <span className="text-novare-purple-light shrink-0 font-(family-name:--font-poppins) text-base font-medium">
                  Conheça o Trabalho
                </span>
                <span className="bg-novare-purple-light flex z-10 absolute right-[10px] items-center justify-center rounded-full size-10 active:scale-95 md:group-hover:w-[260px] transition-all duration-500">
                  <InstagramIcon className="text-novare-dark size-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
