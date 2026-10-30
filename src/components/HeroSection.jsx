import React, { useState, useEffect } from 'react';
import { Skull, ChevronDown, Flame, Shield, Crosshair } from 'lucide-react';

export default function HeroSection({ onEnterUnderground, isMusicPlaying }) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = 'WE ARE NOT ORDINARY.';

  // Letter by letter typing reveal
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 75);

    return () => clearInterval(interval);
  }, []);

  // Subtle mouse parallax
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  return (
    <header
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20 pb-16"
    >
      {/* City at Night Background Layer with Vignette */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 filter contrast-150 grayscale"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80")',
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0) scale(1.05)`,
          transition: 'transform 0.15s ease-out',
        }}
      />

      {/* Dark vignette mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505] pointer-events-none" />

      {/* Atmospheric Red Halo Glow behind the emblem */}
      <div
        className={`absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full bg-[#C00024] opacity-20 filter blur-[120px] pointer-events-none transition-all duration-700 ${
          isMusicPlaying ? 'ambient-pulse-active opacity-35 scale-110' : ''
        }`}
        style={{
          transform: `translate3d(${mouseOffset.x * -0.6}px, ${mouseOffset.y * -0.6}px, 0)`,
        }}
      />

      {/* Floating Red Laser Scan Line */}
      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF1E44] to-transparent opacity-40 shadow-[0_0_15px_#FF1E44] animate-pulse" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Syndicate Emblem Rising from Shadows */}
        <div
          className="relative mb-6 group"
          style={{
            transform: `translate3d(${mouseOffset.x * -0.8}px, ${mouseOffset.y * -0.8}px, 0)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          {/* Outer glowing octagon ring */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-[rgba(192,0,36,0.6)] flex items-center justify-center bg-[#0d0406]/90 shadow-[0_0_40px_rgba(192,0,36,0.5)] group-hover:border-[#FF1E44] group-hover:shadow-[0_0_60px_rgba(255,30,68,0.7)] transition-all duration-500">
            {/* Spinning tactical crosshairs */}
            <Crosshair
              size={130}
              className="absolute text-[#FF1E44]/20 animate-spin"
              style={{ animationDuration: '24s' }}
            />

            {/* Central Skull / Insignia */}
            <div className="relative z-10 flex flex-col items-center">
              <Skull size={44} className="text-[#FF1E44] filter drop-shadow-[0_0_12px_#FF1E44]" />
              <span className="font-mono text-[9px] font-extrabold tracking-[0.3em] text-white mt-1">
                GANG GANG
              </span>
            </div>

            {/* Corner Notch Accents */}
            <span className="absolute -top-1 w-3 h-3 border-t-2 border-l-2 border-[#FF1E44]" />
            <span className="absolute -bottom-1 w-3 h-3 border-b-2 border-r-2 border-[#FF1E44]" />
          </div>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#FF1E44]" />
            <span className="badge-gang">UTH IT SYNDICATE // COHORT 2024–2028</span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#FF1E44]" />
          </div>
        </div>

        {/* Big Impact Headline */}
        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-8xl tracking-tight leading-none text-white drop-shadow-[0_5px_25px_rgba(0,0,0,0.9)] uppercase mt-2">
          <span className="glitch-text text-glow-red" data-text={typedTitle}>
            {typedTitle}
          </span>
          <span className="inline-block w-3 md:w-5 h-10 md:h-16 bg-[#FF1E44] ml-1 animate-pulse align-middle" />
        </h1>

        {/* Subtitle */}
        <p className="font-mono font-bold text-base sm:text-xl md:text-2xl text-[#D0D0D0] mt-6 tracking-[0.25em] uppercase flex items-center justify-center gap-3 flex-wrap">
          <span className="text-[#FF1E44]">THREE MINDS.</span>
          <span className="text-white">ONE VISION.</span>
          <span className="text-[#FF1E44]">ZERO LIMITS.</span>
        </p>

        {/* Underworld Manifesto Excerpt */}
        <p className="max-w-2xl text-[#888888] text-sm sm:text-base leading-relaxed mt-5 font-body">
          Không sinh ra để đi theo số đông. Chúng tôi tập hợp ba cá tính độc bản từ Trường Đại học
          Giao thông vận tải TP.HCM — xây dựng kiến trúc mã nguồn tối thượng, giao diện bùng nổ và
          hệ thống thực chiến không giới hạn.
        </p>

        {/* Primary CTA Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
          <button
            onClick={onEnterUnderground}
            className="btn-gang text-sm sm:text-base py-4 px-8 shadow-[0_0_30px_rgba(192,0,36,0.6)] hover:shadow-[0_0_50px_rgba(255,30,68,0.8)]"
          >
            <Flame size={18} className="text-[#FF1E44] animate-pulse" />
            <span>ENTER THE UNDERGROUND</span>
          </button>

          <a
            href="#members"
            className="btn-gang btn-gang-outline text-sm sm:text-base py-4 px-8"
          >
            <Shield size={16} />
            <span>EXAMINE OPERATIVES</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition cursor-pointer">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#777] uppercase">
            SCROLL TO COMMENCE
          </span>
          <ChevronDown size={20} className="text-[#FF1E44] animate-bounce" />
        </div>
      </div>
    </header>
  );
}
