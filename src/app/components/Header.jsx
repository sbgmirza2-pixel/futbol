// src/components/Header.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "DSports", href: "/en-vivo/directv-sports-online" },
    { name: "ESPN 1", href: "/en-vivo/espn-1" },
    { name: "ESPN 2", href: "/en-vivo/espn-2" },
    { name: "ESPN 3", href: "/en-vivo/espn-3" },
    { name: "Fox Sports", href: "/en-vivo/fox-sports-1" },
    { name: "Fox Sports 2", href: "/en-vivo/fox-sports-2" },
    { name: "Fox Sports 3", href: "/en-vivo/fox-sports-3" },
  ];

  if (!mounted) {
    return <header className="sticky top-0 z-40 flex items-center justify-between bg-white px-4 py-3 shadow-md h-16"></header>;
  }

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between bg-white px-4 py-3 shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
        {/* Logo Image */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Fútbol Libre"
            className="h-8 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.src = "/img/futbollibre.png";
            }}
          />
          <span className="text-xl font-extrabold text-emerald-800 tracking-tight hidden sm:inline">
            Fútbol Libre
          </span>
        </Link>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-xs lg:text-sm font-semibold text-gray-700 transition-colors hover:text-emerald-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-gray-700 md:hidden p-1.5 rounded-lg hover:bg-gray-100"
          aria-label="Abrir menú"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative w-11/12 max-w-xs rounded-2xl bg-white p-6 shadow-2xl">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-4 top-4 text-gray-600 p-1 hover:bg-gray-100 rounded-full"
            >
              ✕
            </button>
            <div className="flex justify-center mb-4">
              <img src="/img/logo-futbol-libre.png" alt="Logo" className="h-10 w-auto" />
            </div>
            <nav className="flex flex-col gap-2 text-center">
              {navLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-emerald-700 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}