import { ReactNode } from "react";

interface SubHeaderProps {
  children: ReactNode;
}

/**
 * Sub Header Component - MoMA Adamantine Standard (Ghost Header)
 * 
 * Typographic standard for secondary headers:
 * - Font: PP Neue Montreal Thin (100)
 * - Size: 3.5vw (desktop), capped at 2.5rem on mobile (< 1024px)
 * - Color: Inky (#0E2B03) with 20% opacity (structural shadow)
 * - Case: Title Case
 * - Tracking: tight (-0.02em) for better legibility with Thin weight
 * - Design Rule: Exactly 50% the size of Primary Header (7vw / 2 = 3.5vw)
 */
export default function SubHeader({ children }: SubHeaderProps) {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-20 mb-16 sm:mb-24 md:mb-32">
      <p 
        className="text-xl sm:text-2xl md:text-[2.5rem] lg:text-[3.5vw] font-sans font-thin lowercase text-inky" 
        style={{ 
          letterSpacing: '0.1em',
          opacity: 0.20
        }}
      >
        {children}
      </p>
    </div>
  );
}
