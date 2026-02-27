"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Le Concept", href: "#concept" },
  { label: "Line Up", href: "#lineup" },
  { label: "Le Lieu", href: "#lieu" },
  { label: "Contact", href: "#contact" },
  { label: "Boutique", href: "/shop" },
];

const TICKETS_URL =
  "https://shotgun.live/fr/events/la-sungoesdown-ditti-fondsonore-lupari";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-teal/95 backdrop-blur-md shadow-lg"
          : "bg-teal"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Tickets Button */}
        <a
          href={TICKETS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal border-2 border-teal-light text-white font-lulo text-xs px-6 py-2.5 tracking-wider hover:bg-teal-light hover:text-teal transition-all duration-300"
        >
          TICKETS
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-sm font-light tracking-wide hover:text-teal-light transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-teal border-t border-teal-light/20 px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-white text-sm font-light tracking-wide hover:text-teal-light transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
