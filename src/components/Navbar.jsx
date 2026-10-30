import React, { useState, useEffect } from 'react';
import { Skull, Volume2, VolumeX, Menu, X } from 'lucide-react';

export default function Navbar({ isMusicPlaying, onToggleMusic }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '01 // CREW', href: '#crew' },
    { label: '02 // MEMBERS', href: '#members' },
    { label: '03 // PETCARE', href: '#project' },
    { label: '04 // ARSENAL', href: '#tech' },
    { label: '05 // JOURNEY', href: '#journey' },
    { label: '06 // CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[980] transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[rgba(192,0,36,0.3)] shadow-[0_5px_25px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group text-decoration-none">
          <div className="w-9 h-9 rounded bg-[#140608] border border-[rgba(192,0,36,0.5)] flex items-center justify-center text-[#FF1E44] shadow-[0_0_12px_rgba(192,0,36,0.4)] group-hover:border-[#FF1E44] group-hover:scale-105 transition">
            <Skull size={18} />
          </div>
          <div>
            <span className="font-display font-black text-sm tracking-wider uppercase text-white block leading-none">
              THE SYNDICATE
            </span>
            <span className="font-mono text-[9px] text-[#FF5A73] tracking-[0.2em] uppercase block">
              UTH IT // GANG GANG
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="font-mono text-xs text-[#aaa] hover:text-[#FF1E44] tracking-widest uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Action: Music Quick Status + Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMusic}
            className={`flex items-center gap-2 px-3 py-1.5 rounded border text-xs font-mono transition ${
              isMusicPlaying
                ? 'bg-[#180709] border-[#FF1E44] text-[#FF5A73] shadow-[0_0_12px_rgba(255,30,68,0.4)]'
                : 'bg-[#101010] border-[rgba(255,255,255,0.1)] text-[#777] hover:text-white'
            }`}
            title={isMusicPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền (Obito - Đầu Đường Xó Chợ)'}
            aria-label="Toggle background music"
          >
            {isMusicPlaying ? (
              <>
                <Volume2 size={14} className="animate-pulse" />
                <span className="hidden sm:inline">MUSIC: ON</span>
              </>
            ) : (
              <>
                <VolumeX size={14} />
                <span className="hidden sm:inline">MUSIC: OFF</span>
              </>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#aaa] hover:text-white transition"
            aria-label="Open mobile navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-b border-[rgba(192,0,36,0.4)] px-6 py-6 space-y-4">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-sm text-[#ccc] hover:text-[#FF1E44] tracking-widest uppercase py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
