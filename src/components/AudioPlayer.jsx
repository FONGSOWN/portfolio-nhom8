import React, { useEffect, useRef, useState } from 'react';

/**
 * Singleton Ambient Audio Player
 * Auto-starts soundtrack 'Obito - Đầu Đường Xó Chợ ft. Lăng LD'
 * Fallbacks to play upon first user interaction if browser blocks unmuted autoplay.
 * Zero play/pause/mute buttons per specification.
 */
export default function AudioPlayer({ onPlayingChange }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackStarted, setTrackStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.85;
    audio.loop = true;

    const startAudio = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setTrackStarted(true);
            if (onPlayingChange) onPlayingChange(true);
            // Cleanup interaction listeners once playing
            removeInteractionListeners();
          })
          .catch((err) => {
            // Autoplay blocked by browser policy
            setIsPlaying(false);
            if (onPlayingChange) onPlayingChange(false);
          });
      }
    };

    const handleFirstInteraction = () => {
      startAudio();
    };

    const addInteractionListeners = () => {
      const events = ['click', 'pointerdown', 'touchstart', 'scroll', 'keydown'];
      events.forEach((evt) => {
        window.addEventListener(evt, handleFirstInteraction, { once: true, passive: true });
      });
    };

    const removeInteractionListeners = () => {
      const events = ['click', 'pointerdown', 'touchstart', 'scroll', 'keydown'];
      events.forEach((evt) => {
        window.removeEventListener(evt, handleFirstInteraction);
      });
    };

    // 1. Attempt immediate autoplay
    startAudio();

    // 2. Set fallback on first user interaction if blocked
    addInteractionListeners();

    return () => {
      removeInteractionListeners();
      audio.pause();
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="./assets/music/obito-dau-duong-xo-cho.mp3"
        preload="auto"
        onError={() => {
          // Fallback to original UTF-8 filename if needed
          if (audioRef.current && !audioRef.current.src.includes('Obito')) {
            audioRef.current.src = './assets/music/Obito Đầu Đường Xó Chợ ft. Lăng LD.mp3';
            audioRef.current.load();
            audioRef.current.play().catch(() => {});
          }
        }}
      />

      {/* Discreet, Elegant Soundtrack Indicator (No buttons, no obstruction) */}
      <div
        className="fixed bottom-6 right-6 z-[950] pointer-events-none select-none flex items-center gap-3 bg-[#0a0a0a]/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-[rgba(255,255,255,0.08)] shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition-opacity duration-700"
        style={{ opacity: isPlaying ? 0.9 : 0.4 }}
        aria-hidden="true"
      >
        {/* Minimalist 4-bar Audio Frequency Visualizer */}
        <div className="flex items-end gap-1 h-3.5 w-3.5 shrink-0">
          <span
            className={`w-0.5 bg-[#FF1E44] rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-[pulse_0.6s_ease-in-out_infinite] h-3' : 'h-1 opacity-50'
            }`}
          />
          <span
            className={`w-0.5 bg-[#FF1E44] rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-[pulse_0.9s_ease-in-out_infinite] h-3.5' : 'h-1.5 opacity-50'
            }`}
          />
          <span
            className={`w-0.5 bg-[#FF1E44] rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-[pulse_0.5s_ease-in-out_infinite] h-2' : 'h-1 opacity-50'
            }`}
          />
          <span
            className={`w-0.5 bg-[#FF1E44] rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-[pulse_0.8s_ease-in-out_infinite] h-2.5' : 'h-1 opacity-50'
            }`}
          />
        </div>

        {/* Ambient Track Label */}
        <div className="flex flex-col">
          <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#FF5A73] uppercase leading-none">
            {isPlaying ? 'SOUNDTRACK ACTIVE' : 'SOUNDTRACK STANDBY'}
          </span>
          <span className="font-mono text-[10px] text-[#888] tracking-wider uppercase leading-none mt-1">
            OBITO FT. LĂNG LD — ĐẦU ĐƯỜNG XÓ CHỢ
          </span>
        </div>
      </div>
    </>
  );
}
