"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaBriefcase, FaEnvelope, FaChevronDown, FaTelegram } from "react-icons/fa";

export default function Hero() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column - High Impact Name */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">Hello, I&apos;m</p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter mb-6 lg:mb-0">
              <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
              <br />
              <span className="text-foreground">{personalInfo.name.split(' ')[1]}</span>
            </h1>
          </div>

          {/* Right Column - Info & Action */}
          <div className="animate-fade-in-up stagger-2 space-y-4 text-center lg:text-left mt-8">

            <p className="text-muted text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn-primary">
                <FaBriefcase className="w-5 h-5" />
                Projects
              </a>
              <a href="#contact" className="btn-secondary">
                <FaEnvelope className="w-5 h-5" />
                Contact
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
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
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted hover:text-primary transition-colors">
          <FaChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
