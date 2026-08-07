"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skill", href: "#skill" },
    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.name.toLowerCase());

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (considering fixed navbar height)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
      
      // Handle the case where user scrolls to the very top (before About section)
      if (window.scrollY < 50) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Small delay to ensure mobile menu closing animation starts before scroll
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 font-bold text-2xl tracking-tighter">
            <a 
              href="#" 
              onClick={(e) => handleClick(e, "#")}
              className="text-gray-900 dark:text-white transition-opacity hover:opacity-80"
            >
              Portfolio.
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`transition-all duration-300 text-sm font-medium relative py-2 ${
                  activeSection === item.name.toLowerCase()
                    ? "text-black dark:text-white"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                }`}
              >
                {item.name}
                {/* Active Underline Indicator */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white transform origin-left transition-transform duration-300 ${
                    activeSection === item.name.toLowerCase() ? "scale-x-100" : "scale-x-0"
                  }`} 
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 dark:text-white p-2 focus:outline-none transition-transform duration-300 active:scale-95"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-black shadow-lg overflow-hidden transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                activeSection === item.name.toLowerCase()
                  ? "bg-gray-100 dark:bg-zinc-800 text-black dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
