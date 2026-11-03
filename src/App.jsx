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
  return <div className="site-shell"><div className="film-grain" /><div className="scanlines" /><SmokeCanvas /><CustomCursor /><Navbar /><main><HeroSection isMusicPlaying={isMusicPlaying} /><MembersSection /><ProjectSection /><TechStackSection /><ContactSection /></main><Footer /><AudioPlayer onPlayingChange={setIsMusicPlaying} /></div>;
}
