import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5,
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Subtle ambient orbs that slowly float with mouse inertia
    const orbs = [
      { x: width * 0.2, y: height * 0.25, radius: 380, vx: 0.15, vy: 0.12 },
      { x: width * 0.8, y: height * 0.35, radius: 450, vx: -0.12, vy: 0.18 },
      { x: width * 0.5, y: height * 0.75, radius: 520, vx: 0.18, vy: -0.15 },
      { x: width * 0.3, y: height * 0.85, radius: 320, vx: -0.1, vy: -0.1 }
    ];

    // Delicate floating stardust particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.25 + 0.05
    }));

    let time = 0;

    const render = () => {
      time += 0.008;

      // Smooth mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const dark = isDarkRef.current;

      // Base solid theme color
      ctx.fillStyle = dark ? '#080808' : '#f8f7f4';
      ctx.fillRect(0, 0, width, height);

      // Render floating subtle light orbs
      orbs.forEach((orb, i) => {
        orb.x += orb.vx + Math.sin(time + i) * 0.2;
        orb.y += orb.vy + Math.cos(time + i * 1.5) * 0.2;

        // Mouse influence
        const dx = (mouse.x - width / 2) * 0.05 * (i + 1);
        const dy = (mouse.y - height / 2) * 0.05 * (i + 1);

        const currentX = orb.x + dx;
        const currentY = orb.y + dy;

        const gradient = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          orb.radius
        );

        const orbColor = dark
          ? (i === 0 ? 'rgba(255, 255, 255, 0.022)' : i === 1 ? 'rgba(220, 215, 205, 0.018)' : i === 2 ? 'rgba(120, 130, 160, 0.015)' : 'rgba(255, 255, 255, 0.012)')
          : (i === 0 ? 'rgba(215, 205, 190, 0.25)' : i === 1 ? 'rgba(195, 215, 200, 0.2)' : i === 2 ? 'rgba(180, 195, 215, 0.18)' : 'rgba(225, 220, 210, 0.15)');

        const transparentEdge = dark ? 'rgba(8, 8, 8, 0)' : 'rgba(248, 247, 244, 0)';

        gradient.addColorStop(0, orbColor);
        gradient.addColorStop(1, transparentEdge);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(currentX, currentY, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render minimal stardust specs
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = dark
          ? `rgba(255, 255, 255, ${p.alpha})`
          : `rgba(20, 20, 25, ${p.alpha * 0.35})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* Luxury Film Grain Overlay */}
      <div className="absolute inset-0 grain-overlay opacity-40" />
      {/* Top subtle vignette */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
          isDark
            ? 'bg-gradient-to-b from-[#080808]/40 via-transparent to-[#080808]'
            : 'bg-gradient-to-b from-[#f8f7f4]/40 via-transparent to-[#f8f7f4]'
        }`}
      />
    </div>
  );
}
