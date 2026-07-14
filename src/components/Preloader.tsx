'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { LogoNovare } from '@/assets/icons/Icons';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const radius = 100;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useGSAP(
    () => {
      if (progress >= 100) {
        const tl = gsap.timeline({
          onComplete: onComplete,
        });

        tl.to('.preloader-ui-elements', {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        });

        tl.to(logoRef.current, {
          duration: 0.8,
          ease: 'power4.inOut',
          onStart: () => {
            const targetLogo = document.querySelector('.target-hero-logo');
            if (targetLogo && logoRef.current) {
              const startRect = logoRef.current.getBoundingClientRect();
              const endRect = targetLogo.getBoundingClientRect();

              const scaleX = endRect.width / startRect.width;

              const moveX =
                endRect.left + endRect.width / 2 - (startRect.left + startRect.width / 2);
              const moveY =
                endRect.top + endRect.height / 2 - (startRect.top + startRect.height / 2);

              gsap.to(logoRef.current, {
                x: moveX,
                y: moveY,
                scale: scaleX,
                duration: 0.8,
                ease: 'power3.inOut',
              });
            }
          },
        });

        tl.to(
          containerRef.current,
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            duration: 0.8,
            ease: 'power4.inOut',
          },
          '-=0.4'
        );
      }
    },
    { dependencies: [progress], scope: containerRef }
  );

  useEffect(() => {
    const images = Array.from(document.querySelectorAll('img'));
    const totalResources = images.length + 2;
    let loadedCount = 0;

    const updateProgress = () => {
      loadedCount++;
      const currentProgress = Math.min(Math.round((loadedCount / totalResources) * 100), 100);
      setProgress(currentProgress);
    };

    if (images.length === 0) {
      updateProgress();
    } else {
      images.forEach((img) => {
        if (img.complete) {
          updateProgress();
        } else {
          img.addEventListener('load', updateProgress);
          img.addEventListener('error', updateProgress);
        }
      });
    }

    if (document.readyState === 'complete') {
      updateProgress();
      updateProgress();
    } else {
      window.addEventListener('load', () => {
        updateProgress();
        updateProgress();
      });
    }

    const safetyTimeout = setTimeout(() => {
      setProgress(100);
    }, 8000);

    return () => clearTimeout(safetyTimeout);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      className="bg-novare-dark fixed inset-0 z-9999 flex items-center justify-center"
    >
      <div className="relative flex size-[240px] items-center justify-center">

        <div className="preloader-ui-elements absolute inset-0 flex flex-col items-center justify-center">
          <svg height={radius * 2} width={radius * 2} className="rotate-270">
            <circle
              stroke="rgba(255, 255, 255, 0.05)"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke="#ffffff"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference + ' ' + circumference}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="transition-all duration-300 ease-out"
            />
          </svg>

          <span className="absolute bottom-[-40px] font-(family-name:--font-jetbrains-mono) text-sm font-semibold tracking-wider text-white">
            {progress}%
          </span>
        </div>

        <div ref={logoRef} className="relative z-10 flex size-24 items-center justify-center">
          <LogoNovare className="w-16 text-white" />
        </div>
      </div>
    </div>
  );
}
