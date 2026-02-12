"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaBriefcase, FaEnvelope, FaChevronDown, FaTelegram } from "react-icons/fa";

const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Problem Solver", "Tech Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-pattern"
    >
      {/* Background Subtle Atmospheric Highlights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
              Hello, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted mb-6 h-8">
              <span>{displayText}</span>
              <span className="border-r-2 border-primary ml-1 animate-pulse">|</span>
            </div>
            <p className="text-muted text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn-primary">
                <FaBriefcase className="w-5 h-5" />
                View My Project
              </a>
              <a href="#contact" className="btn-secondary">
                <FaEnvelope className="w-5 h-5" />
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-surface-hover border border-border transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-surface-hover border border-border transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-surface-hover border border-border transition-all duration-300 hover:-translate-y-1"
                aria-label="Telegram"
              >
                <FaTelegram className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-surface-hover border border-border transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-up stagger-2">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/20 animate-pulse-glow">
                <img
                  src="/img/afandi.JPG"
                  alt="Ahmad Afandi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-muted hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <FaChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
