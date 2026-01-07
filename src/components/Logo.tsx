"use client";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`font-geist-mono lowercase tracking-[0.1em] ${className}`} style={{ letterSpacing: '0.1em' }}>
      studio<br />signal
    </span>
  );
}
