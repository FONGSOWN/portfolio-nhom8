import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer-fine devices (desktops)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
      setIsVisible(true);

      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.tilt-card') ||
        target.closest('.interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const renderTrail = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(renderTrail);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(renderTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Crosshair Dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isHovered
              ? 'w-3 h-3 bg-[#FF1E44] shadow-[0_0_12px_#FF1E44]'
              : 'w-1.5 h-1.5 bg-[#FF1E44] shadow-[0_0_6px_#FF1E44]'
          }`}
        />
      </div>

      {/* Outer Tactical Crosshair Ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`relative rounded-full border transition-all duration-300 flex items-center justify-center ${
            isHovered
              ? 'w-12 h-12 border-[#FF1E44] rotate-45 scale-110 shadow-[0_0_20px_rgba(255,30,68,0.5)]'
              : 'w-7 h-7 border-[rgba(192,0,36,0.5)] rotate-0 scale-100'
          }`}
        >
          {/* Tactical cross notches */}
          <span className="absolute -top-1 w-1 h-0.5 bg-[#FF1E44]" />
          <span className="absolute -bottom-1 w-1 h-0.5 bg-[#FF1E44]" />
          <span className="absolute -left-1 w-0.5 h-1 bg-[#FF1E44]" />
          <span className="absolute -right-1 w-0.5 h-1 bg-[#FF1E44]" />
        </div>
      </div>
    </>
  );
}
