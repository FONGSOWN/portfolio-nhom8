import React, { useEffect, useRef, useState } from 'react';

/**
 * Underground Background Audio Deck
 * Auto-starts soundtrack 'Obito - Đầu Đường Xó Chợ ft. Lăng LD'
 * Fallback to play on first user interaction if browser blocks unmuted autoplay.
 * No play/pause/mute buttons per specification.
 */
export default function AudioPlayer({ onPlayingChange }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.8;
    audio.loop = true;

    const startAudio = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            if (onPlayingChange) onPlayingChange(true);
            removeListeners();
          })
          .catch(() => {
            setIsPlaying(false);
            if (onPlayingChange) onPlayingChange(false);
          });
      }
    };

    const handleFirstInteraction = () => {
      startAudio();
    };

    const events = ['click', 'pointerdown', 'touchstart', 'scroll', 'keydown'];
    const addListeners = () => {
      events.forEach((evt) => {
        window.addEventListener(evt, handleFirstInteraction, { once: true, passive: true });
      });
    };

    const removeListeners = () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, handleFirstInteraction);
      });
    };

    // 1. Immediate autoplay attempt
    startAudio();

    // 2. Fallback on first user interaction
    addListeners();

    return () => {
      removeListeners();
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
          if (audioRef.current && !audioRef.current.src.includes('Obito')) {
            audioRef.current.src = './assets/music/Obito Đầu Đường Xó Chợ ft. Lăng LD.mp3';
            audioRef.current.load();
            audioRef.current.play().catch(() => {});
          }
        }}
      />

      {/* Discreet, Elegant Soundtrack Indicator (No buttons, no obstruction) */}
      <aside
        aria-label="Soundtrack status"
        className="fixed bottom-5 right-5 z-[950] pointer-events-none select-none flex items-center gap-2.5 bg-[#0a0a0a]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] shadow-[0_4px_20px_rgba(0,0,0,0.85)] transition-opacity duration-700"
        style={{ opacity: isPlaying ? 0.9 : 0.4 }}
      >
        {/* Minimalist 4-bar Audio Frequency Visualizer */}
        <div className="flex items-end gap-0.5 h-3 w-3 shrink-0" aria-hidden="true">
          <span
            className={`w-0.5 bg-[#E50914] rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-[pulse_0.6s_ease-in-out_infinite] h-2.5' : 'h-1 opacity-50'
            }`}
          />
          <span
            className={`w-0.5 bg-[#E50914] rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-[pulse_0.9s_ease-in-out_infinite] h-3' : 'h-1.5 opacity-50'
            }`}
          />
          <span
            className={`w-0.5 bg-[#E50914] rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-[pulse_0.5s_ease-in-out_infinite] h-2' : 'h-1 opacity-50'
            }`}
          />
          <span
            className={`w-0.5 bg-[#E50914] rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-[pulse_0.8s_ease-in-out_infinite] h-2.5' : 'h-1 opacity-50'
            }`}
          />
        </div>

        {/* Track Label */}
        <span className="font-mono text-[9px] text-[#aaa] tracking-wider uppercase leading-none">
          OBITO FT. LĂNG LD — ĐẦU ĐƯỜNG XÓ CHỢ
        </span>
      </aside>
    </>
  );
}
