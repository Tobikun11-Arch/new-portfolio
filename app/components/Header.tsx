"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-sm shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-24 py-4 lg:py-6">
        <Link href="/" className="text-xl font-semibold text-white">
          Sevellejo
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#home"
            className="text-white/80 hover:text-[#FF6B35] transition-colors text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-white/80 hover:text-[#FF6B35] transition-colors text-sm font-medium"
          >
            Services
          </Link>
          <Link
            href="#works"
            className="text-white/80 hover:text-[#FF6B35] transition-colors text-sm font-medium"
          >
            Works
          </Link>
          <Link
            href="#process"
            className="text-white/80 hover:text-[#FF6B35] transition-colors text-sm font-medium"
          >
            Process
          </Link>
          <Link
            href="#about"
            className="text-white/80 hover:text-[#FF6B35] transition-colors text-sm font-medium"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-white/80 hover:text-[#FF6B35] transition-colors text-sm font-medium"
          >
            Contact
          </Link>
        </div>

        <Link
          href="#contact"
          className="px-6 py-2.5 bg-[#FF6B35] hover:bg-[#FF8555] text-white font-medium rounded-full transition-colors text-sm"
        >
          Let&apos;s Build Together
        </Link>
      </nav>
    </header>
  );
}

