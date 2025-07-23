import React, { useRef, useEffect } from 'react';

const STAR_COUNT = 180;
const STAR_COLORS = ['#fff', '#ffe9c4', '#d4fbff'];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  twinkle: number;
}

const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const stars = useRef<Star[]>([]);

  // Initialise les étoiles
  const createStars = (width: number, height: number) => {
    stars.current = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: randomBetween(0.2, 1),
      radius: randomBetween(0.5, 1.7),
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      twinkle: randomBetween(0, Math.PI * 2),
    }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    createStars(width, height);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createStars(width, height);
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      // Dégradé spatial en fond
      const gradient = ctx.createRadialGradient(
        width / 2,
        height * 0.8,
        width * 0.1,
        width / 2,
        height / 2,
        width * 0.9
      );
      gradient.addColorStop(0, '#232946');
      gradient.addColorStop(1, '#0a0a23');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Étoiles animées
      for (let star of stars.current) {
        // Effet de scintillement
        const twinkle = 0.5 + 0.5 * Math.sin(Date.now() * 0.0015 + star.twinkle);
        ctx.globalAlpha = twinkle * 0.8 + 0.2;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * star.z, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 8 * star.z;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent',
        transition: 'background 1s',
      }}
      aria-hidden="true"
    />
  );
};

export default GalaxyBackground; 