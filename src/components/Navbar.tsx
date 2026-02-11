"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll to update active section and navbar style
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Increased threshold to 250px to ensure the section is detected even if scroll lands slightly off
          if (rect.top <= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
      
      // Update active section immediately for better UX
      setActiveSection(sectionId);

      // Smooth scroll
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass py-3 shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="font-mono text-xl font-semibold border border-foreground/50 px-4 py-1.5 hover:border-primary hover:text-primary transition-all duration-300"
        >
          &lt;Afandi /&gt;
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary relative py-2 ${
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-muted"
              }`}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-fade-in" />
              )}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-surface-hover transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FaSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <FaMoon className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-surface-hover transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`px-4 py-3 rounded-lg transition-colors ${
                activeSection === link.href.substring(1)
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-surface-hover text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="px-4 py-3 rounded-lg hover:bg-surface-hover transition-colors text-left flex items-center gap-2"
          >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
