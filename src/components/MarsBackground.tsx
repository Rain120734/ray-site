'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function MarsBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    setScrollY(window.scrollY);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic scale and opacity based on scroll
  const scale = Math.max(0.4, 1 - scrollY * 0.0008);
  const opacityAmount = Math.max(0, 0.7 - scrollY * 0.0008);
  const translateY = scrollY * 0.2;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#020202]">
       <div 
         className={`absolute inset-0 flex items-center justify-center transition-all duration-75 ease-linear ${mounted ? 'animate-in zoom-in-[1.5] fade-in duration-[2500ms] ease-out' : 'opacity-0'}`}
         style={{ 
            transform: `translateY(${translateY}px) scale(${scale})`,
            opacity: mounted ? opacityAmount : 0
         }}
       >
         <div className="relative w-[150vw] h-[150vh] md:w-[120vw] md:h-[120vh] lg:w-[100vw] lg:h-[100vh]">
           <Image 
             src="/images/mars_planet.png" 
             alt="Mars"
             fill
             className="object-contain drop-shadow-[0_0_120px_rgba(200,60,30,0.15)] mix-blend-screen"
             priority
             quality={90}
           />
         </div>
       </div>
       
       {/* Gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/30 via-transparent to-[#020202]/80" />
    </div>
  );
}
