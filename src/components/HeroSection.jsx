import React, { useState, useEffect, useRef } from 'react';
import { Crosshair, ArrowDown } from 'lucide-react';

export default function HeroSection({ isMusicPlaying }) {
  // Multi-stage cinematic reveal phase (0 -> 4)
  const [revealPhase, setRevealPhase] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = 'WE ARE NOT ORDINARY.';

  // Orchestrate the opening sequence
  useEffect(() => {
    const timers = [
      setTimeout(() => setRevealPhase(1), 300),   // Light cuts through darkness
      setTimeout(() => setRevealPhase(2), 1100),  // Logo emerges
      setTimeout(() => setRevealPhase(3), 2000),  // Smoke & background reveal
      setTimeout(() => setRevealPhase(4), 2800),  // Full typography & 3D depth
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  // Letter by letter typing reveal once phase 4 is reached
  useEffect(() => {
    if (revealPhase < 4) return;
    let idx = 0;
    const interval = setInterval(() => {
      if (idx <= fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, idx));
        idx++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [revealPhase]);

  // Smooth mouse parallax
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 24;
    const y = (clientY / window.innerHeight - 0.5) * 24;
    setMousePos({ x, y });
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('crew');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] select-none"
    >
      {/* 1. CINEMATIC BACKGROUND NOIR CITY (Fades in with slow camera zoom) */}
      <div
        className={`absolute inset-0 bg-cover bg-center pointer-events-none transition-all duration-1000 ${
          revealPhase >= 3 ? 'opacity-25 scale-100' : 'opacity-0 scale-110'
        }`}
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=2000&q=85")',
          filter: 'grayscale(100%) contrast(140%) brightness(55%)',
          transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0) scale(${
            revealPhase >= 3 ? 1.05 : 1.15
          })`,
          transition: 'transform 0.2s ease-out, opacity 1.8s ease-out',
        }}
        aria-hidden="true"
      />

      {/* Deep vignette shadow mask */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. RED SPOTLIGHT & BREATHING CRIMSON ATMOSPHERE */}
      <div
        className={`red-ambient-light w-[500px] h-[500px] md:w-[750px] md:h-[750px] bg-[#B8001F] transition-all duration-1000 ${
          revealPhase >= 1 ? 'opacity-25' : 'opacity-0'
        } ${isMusicPlaying ? 'ambient-bass-pulse' : ''}`}
        style={{
          transform: `translate3d(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px, 0)`,
          transition: 'transform 0.3s ease-out, opacity 1.5s ease',
        }}
        aria-hidden="true"
      />

      {/* 3. HERO CONTENT WRAPPER */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center flex flex-col items-center justify-center"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * -0.2}deg) rotateY(${
            mousePos.x * 0.2
          }deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        {/* LOGO REVEAL STAGE */}
        <div
          className={`relative mb-8 transition-all duration-1000 ${
            revealPhase >= 2
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-75 translate-y-8'
          }`}
        >
          {/* Outer glowing emblem */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-[rgba(184,0,31,0.6)] bg-[#080203]/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(184,0,31,0.4)] group">
            {/* Spinning tactical reticle */}
            <Crosshair
              size={110}
              className="absolute text-[#FF1E44]/25 animate-spin"
              style={{ animationDuration: '30s' }}
            />

            {/* Inner Crest Monogram */}
            <div className="relative z-10 flex flex-col items-center">
              <span className="font-title text-3xl md:text-4xl tracking-widest text-[#FF1E44] drop-shadow-[0_0_15px_#FF1E44]">
                SYNDICATE
              </span>
              <span className="font-mono text-[8px] md:text-[9px] tracking-[0.35em] text-[#888] uppercase mt-0.5">
                UTH // COHORT
              </span>
            </div>

            {/* Subtle corner notches */}
            <span className="absolute -top-1 w-2 h-2 border-t border-l border-[#FF1E44]" />
            <span className="absolute -bottom-1 w-2 h-2 border-b border-r border-[#FF1E44]" />
          </div>
        </div>

        {/* LAYER 1: SUPER TITLE */}
        <div
          className={`overflow-hidden transition-all duration-1000 ${
            revealPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="font-mono text-xs sm:text-sm tracking-[0.4em] uppercase text-[#FF5A73] font-bold block mb-3">
            DARK GANG // UNDERGROUND CINEMA
          </span>
        </div>

        {/* LAYER 2: MASSIVE EDITORIAL HEADLINE */}
        <div
          className={`transition-all duration-1000 ${
            revealPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="editorial-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tighter max-w-5xl">
            <span className="glitch-subtle text-glow-red">
              {typedTitle || 'WE ARE NOT ORDINARY.'}
            </span>
            <span
              className={`inline-block w-2 md:w-3.5 h-10 md:h-20 bg-[#FF1E44] ml-2 align-middle ${
                revealPhase >= 4 ? 'animate-pulse' : 'opacity-0'
              }`}
            />
          </h1>
        </div>

        {/* LAYER 3: CREW MANIFESTO SUBTITLE */}
        <div
          className={`transition-all duration-1000 delay-200 mt-6 sm:mt-8 max-w-2xl ${
            revealPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-mono text-sm sm:text-lg md:text-xl text-[#ccc] tracking-[0.25em] uppercase font-bold flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
            <span className="text-[#FF1E44]">THREE MINDS.</span>
            <span className="text-white">ONE VISION.</span>
            <span className="text-[#FF1E44]">ZERO LIMITS.</span>
          </p>

          <p className="font-body text-xs sm:text-sm text-[#777] leading-relaxed mt-4 max-w-xl mx-auto">
            Không thỏa hiệp. Không khuôn mẫu. Ba kỹ sư phần mềm tương lai từ UTH kiến tạo giải pháp
            mã nguồn chuẩn mực, giao diện bùng nổ và trải nghiệm số không giới hạn.
          </p>
        </div>

        {/* LAYER 4: EDITORIAL CTA ACTION */}
        <div
          className={`mt-10 sm:mt-12 flex items-center gap-6 transition-all duration-1000 delay-300 ${
            revealPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={scrollToNext}
            className="btn-cinema btn-cinema-red"
          >
            <span>ENTER THE CREW</span>
          </button>
        </div>
      </div>

      {/* 4. MINIMALIST SCROLL PROMPT */}
      <div
        onClick={scrollToNext}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer transition-all duration-700 ${
          revealPhase >= 4 ? 'opacity-60 hover:opacity-100' : 'opacity-0'
        }`}
      >
        <span className="font-mono text-[9px] tracking-[0.35em] text-[#888] uppercase">
          EXPLORE
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#FF1E44] via-[#8B0000] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
