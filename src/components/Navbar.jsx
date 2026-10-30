import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
    <header
      className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.06)] py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2 group text-decoration-none">
          <span className="w-1.5 h-1.5 bg-[#E50914] rounded-full inline-block group-hover:scale-125 transition-transform" />
          <span className="font-display font-black text-xs sm:text-sm tracking-wider uppercase text-white">
            THE SYNDICATE
          </span>
          <span className="font-mono text-[9px] text-[#666] tracking-widest uppercase hidden sm:inline">
            // UTH
          </span>
        </a>

        {/* Minimal Nav Links */}
        <nav className="flex items-center gap-5 sm:gap-7">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="font-mono text-[11px] text-[#888] hover:text-[#E50914] tracking-widest uppercase transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
