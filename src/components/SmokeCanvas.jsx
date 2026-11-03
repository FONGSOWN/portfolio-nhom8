import React, { useEffect, useRef } from 'react';

/**
 * High-performance 2D Canvas Atmospheric Simulation
 * Renders delicate, slow-drifting smoke and subtle red embers.
 * Minimalist, lightweight and hardware-friendly.
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

    const isMobile = window.innerWidth < 768;
    const smokeCount = isMobile ? 8 : 16;
    const emberCount = isMobile ? 12 : 24;

    class SmokeParticle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + Math.random() * 40;
        this.radius = Math.random() * 100 + 70;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = -(Math.random() * 0.35 + 0.15);
        this.maxAlpha = Math.random() * 0.045 + 0.015;
        this.alpha = init ? Math.random() * this.maxAlpha : 0.005;
        this.isRed = Math.random() > 0.85;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.y < height * 0.7 && this.alpha < this.maxAlpha) {
          this.alpha += 0.0006;
        }
        if (this.y < height * 0.25) {
          this.alpha -= 0.0006;
        }

        if (this.y + this.radius < 0 || this.alpha <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        if (this.isRed) {
          grad.addColorStop(0, `rgba(192, 0, 36, ${this.alpha * 1.2})`);
          grad.addColorStop(0.6, `rgba(139, 0, 0, ${this.alpha * 0.3})`);
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          grad.addColorStop(0, `rgba(30, 30, 30, ${this.alpha})`);
          grad.addColorStop(0.7, `rgba(10, 10, 10, ${this.alpha * 0.2})`);
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
        this.size = Math.random() * 1.5 + 0.6;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = -(Math.random() * 0.5 + 0.25);
        this.alpha = Math.random() * 0.5 + 0.2;
        this.life = Math.random() * 0.005 + 0.0025;
      }

      update() {
        this.x += this.vx + Math.sin(this.y * 0.01) * 0.15;
        this.y += this.vy;
        this.alpha -= this.life;

        if (this.y < 0 || this.alpha <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.fillStyle = `rgba(229, 9, 20, ${this.alpha})`;
        ctx.shadowColor = '#E50914';
        ctx.shadowBlur = 4;
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
      className="ambient-canvas"
      style={{ opacity: 0.75 }}
      aria-hidden="true"
    />
  );
}
