"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] w-full bg-foundation/95 backdrop-blur-md transition-all duration-700 ${
        isScrolled ? "py-2" : "py-3 md:py-4"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-20">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            prefetch={false}
            onClick={closeMobileMenu}
            className={`font-bold transition-all duration-700 ${
              isScrolled ? "text-[14px] sm:text-[16px]" : "text-[18px] sm:text-[22px]"
            }`}
          >
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/lab"
              prefetch={false}
              className={`font-sans font-bold lowercase transition-all duration-700 min-h-[44px] flex items-center ${
                isScrolled ? "text-[18px]" : "text-[20px] lg:text-[24px]"
              }`}
              style={{ letterSpacing: '0.1em' }}
            >
              lab
            </Link>
            <Link
              href="/info"
              prefetch={false}
              className={`font-sans font-bold lowercase transition-all duration-700 min-h-[44px] flex items-center ${
                isScrolled ? "text-[18px]" : "text-[20px] lg:text-[24px]"
              }`}
              style={{ letterSpacing: '0.1em' }}
            >
              info
            </Link>
            <Link
              href="/contact"
              prefetch={false}
              className={`font-sans font-bold lowercase transition-all duration-700 min-h-[44px] flex items-center ${
                isScrolled ? "text-[18px]" : "text-[20px] lg:text-[24px]"
              }`}
              style={{ letterSpacing: '0.1em' }}
            >
              contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-inky transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-inky transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-inky transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 pb-4">
            <Link
              href="/lab"
              prefetch={false}
              onClick={closeMobileMenu}
              className="font-sans font-bold lowercase text-lg py-3 min-h-[44px] flex items-center"
              style={{ letterSpacing: '0.1em' }}
            >
              lab
            </Link>
            <Link
              href="/info"
              prefetch={false}
              onClick={closeMobileMenu}
              className="font-sans font-bold lowercase text-lg py-3 min-h-[44px] flex items-center"
              style={{ letterSpacing: '0.1em' }}
            >
              info
            </Link>
            <Link
              href="/contact"
              prefetch={false}
              onClick={closeMobileMenu}
              className="font-sans font-bold lowercase text-lg py-3 min-h-[44px] flex items-center"
              style={{ letterSpacing: '0.1em' }}
            >
              contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
