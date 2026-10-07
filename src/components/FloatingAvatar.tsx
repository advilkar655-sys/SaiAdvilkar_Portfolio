import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';

interface FloatingAvatarProps {
  navAnchorRef: React.RefObject<HTMLDivElement | null>;
  heroAnchorRef: React.RefObject<HTMLDivElement | null>;
}

export const FloatingAvatar: React.FC<FloatingAvatarProps> = ({ navAnchorRef, heroAnchorRef }) => {
  const [style, setStyle] = useState<React.CSSProperties>({
    position: 'fixed',
    opacity: 0,
    pointerEvents: 'none',
  });

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = () => {
      if (!navAnchorRef.current || !heroAnchorRef.current) return;

      const navRect = navAnchorRef.current.getBoundingClientRect();
      const heroRect = heroAnchorRef.current.getBoundingClientRect();

      // Total vertical distance between initial hero center and nav center when at top of page
      // Calculate progress t based on current scroll position
      const scrollY = window.scrollY || window.pageYOffset;
      
      // Determine flight distance threshold (approx distance for hero to reach top)
      const initialHeroTop = heroRect.top + scrollY;
      const flightDistance = Math.max(100, initialHeroTop - navRect.top);
      
      const t = Math.min(1, Math.max(0, scrollY / flightDistance));

      // Smooth easing interpolation for natural flight feeling
      const easedT = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

      const currentLeft = heroRect.left + (navRect.left - heroRect.left) * easedT;
      const currentTop = heroRect.top + (navRect.top - heroRect.top) * easedT;
      const currentWidth = heroRect.width + (navRect.width - heroRect.width) * easedT;
      const currentHeight = heroRect.height + (navRect.height - heroRect.height) * easedT;

      setStyle({
        position: 'fixed',
        left: `${currentLeft}px`,
        top: `${currentTop}px`,
        width: `${currentWidth}px`,
        height: `${currentHeight}px`,
        zIndex: 60,
        pointerEvents: 'none',
        opacity: 1,
        willChange: 'transform, left, top, width, height',
      });
    };

    const onScrollOrResize = () => {
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    
    // Initial call
    updatePosition();

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [navAnchorRef, heroAnchorRef]);

  return (
    <div
      style={style}
      className="rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-0.5 sm:p-1 shadow-xl shadow-cyan-500/25 flex items-center justify-center transition-shadow duration-300"
    >
      <img
        src={profileImg}
        alt="Sai Advilkar"
        className="w-full h-full rounded-full object-cover border-2 border-slate-950 shadow-inner"
      />
    </div>
  );
};
