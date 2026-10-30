import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'THE CREW', href: '#crew' },
    { label: 'OUR PROJECT', href: '#project' },
    { label: 'TECHNOLOGY', href: '#tech' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 ${
        scrolled
          ? 'bg-[#030303]/85 backdrop-blur-md border-b border-[rgba(255,255,255,0.06)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Monogram */}
        <a href="#hero" className="flex items-center gap-2.5 text-decoration-none group">
          <span className="w-2 h-2 bg-[#FF1E44] inline-block group-hover:scale-125 transition-transform" />
          <span className="font-display font-black text-sm tracking-wider uppercase text-white">
            THE SYNDICATE
          </span>
          <span className="font-mono text-[9px] text-[#777] tracking-[0.25em] uppercase hidden sm:inline">
            // UTH TP.HCM
          </span>
        </a>

        {/* Minimalist Desktop Navigation Links */}
        <div className="flex items-center gap-6 sm:gap-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="font-mono text-[11px] sm:text-xs text-[#888] hover:text-[#FF1E44] tracking-widest uppercase transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
