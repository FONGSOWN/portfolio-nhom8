import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import SmokeCanvas from './components/SmokeCanvas';
import HeroSection from './components/HeroSection';
import CrewSection from './components/CrewSection';
import MembersSection from './components/MembersSection';
import ProjectSection from './components/ProjectSection';
import TechStackSection from './components/TechStackSection';
import JourneySection from './components/JourneySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleEnterUnderground = () => {
    // Start music on user interaction
    setIsMusicPlaying(true);
    // Smooth scroll down to crew section
    const crewElement = document.getElementById('crew');
    if (crewElement) {
      crewElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleMusic = () => {
    setIsMusicPlaying((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#D0D0D0] selection:bg-[#C00024] selection:text-white">
      {/* 1. Cinematic Film Grain Texture Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* 2. CRT Scanlines Overlay */}
      <div className="scanlines" aria-hidden="true" />

      {/* 3. Sweeping Red Laser Beam Line */}
      <div className="laser-sweep" aria-hidden="true" />

      {/* 4. Canvas Atmospheric Smoke & Fog */}
      <SmokeCanvas />

      {/* 5. Custom Tactical Crosshair / Cursor */}
      <CustomCursor />

      {/* 6. Dynamic Rhythmic Bass Pulse Glow on Entire Page when Music Plays */}
      <div
        className={`fixed inset-0 pointer-events-none z-[1] transition-opacity duration-500 ${
          isMusicPlaying
            ? 'ambient-pulse-active bg-[radial-gradient(ellipse_at_center,rgba(192,0,36,0.12)_0%,transparent_75%)]'
            : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* 7. Floating Gang Gang Header Navigation */}
      <Navbar
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
      />

      {/* 8. Main Cinematic Content Sections */}
      <main id="main-content" className="relative z-10">
        <HeroSection
          onEnterUnderground={handleEnterUnderground}
          isMusicPlaying={isMusicPlaying}
        />
        <CrewSection />
        <MembersSection />
        <ProjectSection />
        <TechStackSection />
        <JourneySection />
        <ContactSection />
      </main>

      {/* 9. Underground Syndicate Footer */}
      <Footer />

      {/* 10. Dedicated Audio Player Deck (Obito - Đầu Đường Xó Chợ ft. Lăng LD) */}
      <AudioPlayer
        isPlaying={isMusicPlaying}
        setIsPlaying={setIsMusicPlaying}
        onUserInteracted={() => {}}
      />
    </div>
  );
}
