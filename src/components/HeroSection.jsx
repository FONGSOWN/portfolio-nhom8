import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Crosshair } from 'lucide-react';

export default function HeroSection({ isMusicPlaying }) {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master GSAP Timeline for Hero reveal
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.2 }
      )
        .fromTo(
          [title1Ref.current, title2Ref.current],
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power4.out' },
          '-=0.4'
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.6 },
          '-=0.3'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (!bgRef.current) return;
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 15;
    const y = (clientY / window.innerHeight - 0.5) * 15;
    gsap.to(bgRef.current, {
      x,
      y,
      duration: 0.8,
      ease: 'power1.out',
    });
  };

  const scrollToCrew = () => {
    const el = document.getElementById('crew');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-16 pb-12 select-none"
    >
      {/* 1. Subtle Cinematic Noir Background with mouse parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 filter grayscale contrast-125 brightness-75 scale-105"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80")',
        }}
        aria-hidden="true"
      />

      {/* Vignette mask */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/75 to-[#050505] pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Soft Ambient Red Spotlight */}
      <div
        className={`red-ambient-spot w-[450px] h-[450px] md:w-[600px] md:h-[600px] bg-[#C00024] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ${
          isMusicPlaying ? 'opacity-20 animate-pulse' : 'opacity-10'
        }`}
        aria-hidden="true"
      />

      {/* 3. Hero Content Container (Compact, balanced vertical space) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Compact Syndicate Emblem Badge */}
        <div ref={badgeRef} className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full border border-[rgba(192,0,36,0.6)] bg-[#120406] flex items-center justify-center shadow-[0_0_15px_rgba(229,9,20,0.3)]">
            <Crosshair size={14} className="text-[#E50914] animate-spin" style={{ animationDuration: '20s' }} />
          </div>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF5A73] font-bold">
            THE SYNDICATE // UTH IT
          </span>
        </div>

        {/* Hero Title (Proportional & punchy) */}
        <div className="overflow-hidden">
          <h1
            ref={title1Ref}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-none"
          >
            WE ARE NOT
          </h1>
        </div>
        <div className="overflow-hidden mt-1">
          <h1
            ref={title2Ref}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E50914] tracking-tight uppercase leading-none drop-shadow-[0_0_25px_rgba(229,9,20,0.4)]"
          >
            ORDINARY.
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="font-mono text-xs sm:text-sm md:text-base text-[#ccc] tracking-[0.25em] uppercase font-bold mt-5 flex items-center justify-center gap-3 flex-wrap"
        >
          <span className="text-[#E50914]">THREE MINDS.</span>
          <span className="text-white">ONE VISION.</span>
          <span className="text-[#E50914]">ZERO LIMITS.</span>
        </p>

        {/* Crisp one-line description */}
        <p
          ref={descRef}
          className="font-body text-xs sm:text-sm text-[#777] max-w-lg mx-auto leading-relaxed mt-3"
        >
          Ba sinh viên Công nghệ thông tin từ UTH TP.HCM — kiến tạo giải pháp phần mềm thực chiến,
          giao diện sắc nét và hệ thống chịu tải cao.
        </p>

        {/* CTA Button */}
        <div ref={ctaRef} className="mt-8 flex items-center gap-4">
          <button
            onClick={scrollToCrew}
            className="btn-syndicate btn-syndicate-red"
          >
            <span>DISCOVER THE CREW</span>
          </button>
        </div>
      </div>

      {/* Discreet Scroll Indicator */}
      <button
        onClick={scrollToCrew}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition cursor-pointer"
        aria-label="Scroll to crew"
      >
        <span className="font-mono text-[9px] tracking-[0.25em] text-[#666] uppercase">
          SCROLL
        </span>
        <div className="w-[1px] h-5 bg-gradient-to-b from-[#E50914] to-transparent animate-pulse" />
      </button>
    </section>
  );
}
