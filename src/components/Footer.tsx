"use client";

import { personalInfo } from "@/data/portfolioData";
import Link from "next/link";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border mt-auto">
      <div className="container">
        {/* Bottom Bar - Redesigned */}
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Uptime Status - Duo Tone */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface/50 border border-border/50 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Uptime Status: All systems operational
          </div>

          {/* Combined Copyright Line */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-muted">
            <span className="font-medium text-foreground">{personalInfo.name}</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>© {currentYear} All rights reserved</span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-1">
              Made with <span className="text-foreground">☕</span>
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <a href="#" className="hover:text-primary transition-colors">Support Me</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
