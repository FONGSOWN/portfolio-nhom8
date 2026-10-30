import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only on pointer-fine devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let targetX = -100;
    let targetY = -100;
    let curX = -100;
    let curY = -100;
    let animId;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
      setVisible(true);

      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.group')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onLeave = () => setVisible(false);

    const loop = () => {
      curX += (targetX - curX) * 0.2;
      curY += (targetY - curY) * 0.2;
      setTrailPos({ x: curX, y: curY });
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Central Red Dot */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovered ? 'w-2 h-2 bg-[#FF1E44]' : 'w-1.5 h-1.5 bg-[#FF1E44]'
          }`}
        />
      </div>

      {/* Outer Sleek Ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      >
        <div
          className={`rounded-full border transition-all duration-200 ${
            isHovered
              ? 'w-10 h-10 border-[#FF1E44] bg-[#FF1E44]/10 shadow-[0_0_15px_rgba(255,30,68,0.4)]'
              : 'w-6 h-6 border-[rgba(255,30,68,0.35)]'
          }`}
        />
      </div>
    </>
  );
}
