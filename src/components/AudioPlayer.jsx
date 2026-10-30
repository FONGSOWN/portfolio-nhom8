import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio, Disc3, ShieldAlert, ChevronUp, ChevronDown } from 'lucide-react';

export default function AudioPlayer({ isPlaying, setIsPlaying, onUserInteracted }) {
  const audioRef = useRef(null);
  const visualizerCanvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem('gang_volume');
    return saved !== null ? parseFloat(saved) : 0.8;
  });
  const [isMuted, setIsMuted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Initialize Web Audio API on first user interaction to comply with autoplay policy
  const setupWebAudio = () => {
    if (audioCtxRef.current || !audioRef.current) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;

      const source = ctx.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(ctx.destination);

      audioCtxRef.current = ctx;
      analyserRef.current = analyser;
      sourceRef.current = source;
    } catch (e) {
      console.warn('Web Audio API context could not be created:', e);
    }
  };

  // Synchronize playing state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      setupWebAudio();
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Playback requires user interaction or failed:', err);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Volume synchronization
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      localStorage.setItem('gang_volume', volume.toString());
    }
  }, [volume, isMuted]);

  // Visualizer render loop
  useEffect(() => {
    const canvas = visualizerCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    const bufferLength = analyserRef.current ? analyserRef.current.frequencyBinCount : 16;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (analyserRef.current && isPlaying) {
        analyserRef.current.getByteFrequencyData(dataArray);
      }

      const barWidth = (canvas.width / (bufferLength / 2)) - 2;
      let x = 0;

      for (let i = 0; i < bufferLength / 2; i++) {
        let barHeight;
        if (analyserRef.current && isPlaying) {
          barHeight = (dataArray[i] / 255) * canvas.height * 0.95;
        } else if (isPlaying) {
          // Synthetic procedural bounce when AudioContext is inactive
          barHeight = (Math.sin(Date.now() * 0.008 + i * 0.8) * 0.4 + 0.5) * canvas.height * 0.8;
        } else {
          barHeight = 3;
        }

        const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
        gradient.addColorStop(0, '#8B0000');
        gradient.addColorStop(0.6, '#C00024');
        gradient.addColorStop(1, '#FF1E44');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, Math.max(barWidth, 3), Math.max(barHeight, 2));

        x += barWidth + 2;
      }
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  const togglePlay = () => {
    if (onUserInteracted) onUserInteracted();
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (secs) => {
    if (isNaN(secs) || secs === 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <aside
      aria-label="Gang Gang Underground Audio Deck"
      className="fixed bottom-4 right-4 z-[990] transition-all duration-300 max-w-[calc(100vw-2rem)]"
    >
      {/* Audio element pointing to relative path */}
      <audio
        ref={audioRef}
        src="./assets/music/obito-dau-duong-xo-cho.mp3"
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          // Fallback to Vietnamese name if url fails
          if (audioRef.current && audioRef.current.src.indexOf('obito-dau-duong') !== -1) {
            audioRef.current.src = './assets/music/Obito Đầu Đường Xó Chợ ft. Lăng LD.mp3';
            audioRef.current.load();
          } else {
            setHasError(true);
          }
        }}
      />

      <div
        className={`bg-[#0c0c0c]/95 border border-[rgba(192,0,36,0.6)] backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.85)] rounded-lg transition-all overflow-hidden ${
          isPlaying ? 'border-[#FF1E44] shadow-[0_0_25px_rgba(192,0,36,0.4)]' : ''
        }`}
        style={{ width: isCollapsed ? '280px' : '360px' }}
      >
        {/* Top Header / Status bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#140608] border-b border-[rgba(192,0,36,0.3)]">
          <div className="flex items-center gap-2">
            <Radio
              size={14}
              className={`text-[#FF1E44] ${isPlaying ? 'animate-pulse' : 'opacity-60'}`}
            />
            <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5A73]">
              UNDERGROUND FREQUENCY // 99.4 FM
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-[#777] hover:text-white p-1 transition"
              title={isCollapsed ? 'Expand Player' : 'Collapse Player'}
              aria-label="Toggle player size"
            >
              {isCollapsed ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        </div>

        {/* Player Body */}
        <div className="p-3">
          <div className="flex items-center gap-3">
            {/* Spinning Cassette / Disc Icon */}
            <div
              className={`relative w-12 h-12 rounded-lg bg-[#180a0c] border border-[rgba(192,0,36,0.5)] flex items-center justify-center shrink-0 overflow-hidden ${
                isPlaying ? 'shadow-[0_0_15px_rgba(255,30,68,0.35)]' : ''
              }`}
            >
              <Disc3
                size={28}
                className={`text-[#FF1E44] ${isPlaying ? 'animate-spin' : 'opacity-70'}`}
                style={{ animationDuration: '4s' }}
              />
              {isPlaying && (
                <span className="absolute inset-0 bg-[#FF1E44]/10 pointer-events-none animate-ping" />
              )}
            </div>

            {/* Song Meta */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E44] inline-block animate-pulse" />
                <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-white truncate">
                  ĐẦU ĐƯỜNG XÓ CHỢ
                </h4>
              </div>
              <p className="font-body text-[11px] text-[#888] truncate mt-0.5">
                Obito ft. Lăng LD • Dark Street Anthem
              </p>
            </div>

            {/* Play / Pause Primary Action */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#8B0000] to-[#FF1E44] text-white flex items-center justify-center shadow-[0_0_15px_rgba(255,30,68,0.5)] hover:scale-105 active:scale-95 transition"
              title={isPlaying ? 'Pause Track' : 'Play Track'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
            </button>
          </div>

          {!isCollapsed && (
            <>
              {/* Audio Visualizer Canvas */}
              <div className="mt-3 h-8 w-full bg-[#080808] rounded border border-[rgba(255,255,255,0.06)] overflow-hidden flex items-end px-1 py-0.5">
                <canvas
                  ref={visualizerCanvasRef}
                  width={320}
                  height={32}
                  className="w-full h-full"
                />
              </div>

              {/* Progress Slider */}
              <div className="mt-2.5">
                <div
                  onClick={handleSeek}
                  className="relative w-full h-2 bg-[#202020] rounded-full cursor-pointer overflow-hidden group"
                >
                  <div
                    className="h-full bg-gradient-to-r from-[#8B0000] to-[#FF1E44] transition-all duration-100"
                    style={{
                      width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                    }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      left: `${duration ? (currentTime / duration) * 100 : 0}%`,
                      transform: 'translateX(-50%)',
                    }}
                  />
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-[#777] mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Volume & Controls Row */}
              <div className="mt-2 flex items-center justify-between border-t border-[rgba(255,255,255,0.06)] pt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-[#888] hover:text-[#FF1E44] transition p-1"
                    title={isMuted ? 'Unmute' : 'Mute'}
                    aria-label="Mute toggle"
                  >
                    {isMuted || volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(parseFloat(e.target.value));
                      if (isMuted) setIsMuted(false);
                    }}
                    className="w-20 h-1 bg-[#252525] rounded-lg appearance-none cursor-pointer accent-[#FF1E44]"
                    aria-label="Volume Slider"
                  />
                </div>

                <span className="font-mono text-[9px] uppercase tracking-widest text-[#555]">
                  {isPlaying ? 'STATUS // STREAMING' : 'STATUS // STANDBY'}
                </span>
              </div>
            </>
          )}

          {hasError && (
            <div className="mt-2 text-[10px] font-mono text-red-400 flex items-center gap-1">
              <ShieldAlert size={12} />
              <span>Audio stream reload required</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
