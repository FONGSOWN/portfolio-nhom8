import React, { useEffect, useRef } from 'react';

/**
 * High-performance 2D Canvas Atmospheric Simulation
 * Renders cinematic rising fog, mist and glowing crimson ember dust.
 * Automatic performance throttle for mobile and background tabs.
 */
export default function SmokeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Fog & Smoke particles
    const isMobile = window.innerWidth < 768;
    const smokeCount = isMobile ? 14 : 26;
    const emberCount = isMobile ? 20 : 45;

    class SmokeParticle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + Math.random() * 60;
        this.radius = Math.random() * 140 + 90;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = -(Math.random() * 0.4 + 0.2);
        this.maxAlpha = Math.random() * 0.06 + 0.02;
        this.alpha = init ? Math.random() * this.maxAlpha : 0.005;
        this.isRed = Math.random() > 0.8;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.y < height * 0.7 && this.alpha < this.maxAlpha) {
          this.alpha += 0.0008;
        }
        if (this.y < height * 0.2) {
          this.alpha -= 0.0008;
        }

        if (this.y + this.radius < 0 || this.alpha <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        if (this.isRed) {
          grad.addColorStop(0, `rgba(184, 0, 31, ${this.alpha * 1.3})`);
          grad.addColorStop(0.6, `rgba(139, 0, 0, ${this.alpha * 0.4})`);
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          grad.addColorStop(0, `rgba(35, 35, 35, ${this.alpha})`);
          grad.addColorStop(0.7, `rgba(15, 15, 15, ${this.alpha * 0.3})`);
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class EmberParticle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 10;
        this.size = Math.random() * 2 + 0.8;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = -(Math.random() * 0.7 + 0.3);
        this.alpha = Math.random() * 0.7 + 0.2;
        this.life = Math.random() * 0.006 + 0.003;
      }

      update() {
        this.x += this.vx + Math.sin(this.y * 0.01) * 0.2;
        this.y += this.vy;
        this.alpha -= this.life;

        if (this.y < 0 || this.alpha <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.fillStyle = `rgba(255, 30, 68, ${this.alpha})`;
        ctx.shadowColor = '#FF1E44';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const smokes = Array.from({ length: smokeCount }, () => new SmokeParticle());
    const embers = Array.from({ length: emberCount }, () => new EmberParticle());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < smokes.length; i++) {
        smokes[i].update();
        smokes[i].draw();
      }

      for (let i = 0; i < embers.length; i++) {
        embers[i].update();
        embers[i].draw();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[2]"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
}
