import { ReactNode } from "react";

interface StandardHeaderProps {
  children: ReactNode;
}

/**
 * Standard Header Component - MoMA Adamantine Standard
 * 
 * Typographic standard for all primary page titles:
 * - Font: PP Neue Montreal Bold
 * - Size: 6vw (responsive, scaling with viewport)
 * - Case: Title Case (Every Major Word Capitalized)
 * - Tracking: -0.04em (tracking-tighter)
 * - Color: #0E2B03 (Inky)
 * 
 * Vertical Snap: First letter aligns with 'S' in 'STUDIO SIGNAL' logo
 * via max-w-[1600px] mx-auto px-6 md:px-20 container
 */
export default function StandardHeader({ children }: StandardHeaderProps) {
  return (
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-20 mt-40 sm:mt-48 md:mt-64 mb-2 sm:mb-4">
      <h1 className="text-4xl sm:text-5xl md:text-[7vw] font-bold lowercase text-inky" style={{ letterSpacing: '0.1em' }}>
        {children}
      </h1>
    </div>
  );
}
