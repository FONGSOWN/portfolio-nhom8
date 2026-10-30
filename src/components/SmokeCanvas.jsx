import React, { useEffect, useRef } from 'react';

/**
 * High-performance Canvas Smoke & Dark Fog Simulation
 * Renders atmospheric rising smoke particles tinted with subtle blood crimson and charcoal haze.
 */
export default function SmokeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle count: 35 for balanced performance and dense atmosphere
    const particleCount = window.innerWidth < 768 ? 20 : 38;
    const particles = [];

    class SmokeParticle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + Math.random() * 80;
        this.radius = Math.random() * 120 + 80;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = -(Math.random() * 0.5 + 0.25);
        this.maxAlpha = Math.random() * 0.08 + 0.03;
        this.alpha = init ? Math.random() * this.maxAlpha : 0.01;
        this.rotation = Math.random() * Math.PI * 2;
        this.vRot = (Math.random() - 0.5) * 0.002;
        // Subtle crimson tint vs smoke grey
        this.isRed = Math.random() > 0.75;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.vRot;

        // Fade in when entering from bottom, fade out near top
        if (this.y < height * 0.8 && this.alpha < this.maxAlpha) {
          this.alpha += 0.001;
        }
        if (this.y < height * 0.25) {
          this.alpha -= 0.001;
        }

        if (this.y + this.radius < 0 || this.alpha <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
        if (this.isRed) {
          grad.addColorStop(0, `rgba(192, 0, 36, ${this.alpha * 1.2})`);
          grad.addColorStop(0.5, `rgba(139, 0, 0, ${this.alpha * 0.5})`);
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          grad.addColorStop(0, `rgba(45, 45, 45, ${this.alpha})`);
          grad.addColorStop(0.6, `rgba(20, 20, 20, ${this.alpha * 0.4})`);
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new SmokeParticle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[2]"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}
