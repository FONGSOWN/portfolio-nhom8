import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import SmokeCanvas from './components/SmokeCanvas';
import HeroSection from './components/HeroSection';
import MembersSection from './components/MembersSection';
import ProjectSection from './components/ProjectSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030303] text-[#D0D0D0] selection:bg-[#B8001F] selection:text-white">
      {/* 1. Cinematic Texture Overlays */}
      <div className="film-grain" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="laser-sweep" aria-hidden="true" />

      {/* 2. Atmospheric Smoke & Crimson Embers Canvas */}
      <SmokeCanvas />

      {/* 3. Sleek Custom Cursor */}
      <CustomCursor />

      {/* 4. Minimalist Top Navigation */}
      <Navbar />

      {/* 5. The 5 Core Cinematic Sections */}
      <main id="main-content" className="relative z-10">
        <HeroSection isMusicPlaying={isMusicPlaying} />
        <MembersSection />
        <ProjectSection />
        <TechStackSection />
        <ContactSection />
      </main>

      {/* 6. Editorial Syndicate Footer */}
      <Footer />

      {/* 7. Singleton Ambient Background Audio Player (Auto-start / Auto-interaction) */}
      <AudioPlayer onPlayingChange={setIsMusicPlaying} />
    </div>
  );
}
