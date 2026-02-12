"use client";

import { aboutMe, personalInfo } from "@/data/portfolioData";
import { FaDownload, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="section overflow-hidden">
      <div className="container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          A brief introduction to my background and what drives me
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side - Ultra Minimalist */}
          <div className="animate-fade-in-up">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-full aspect-4/5 max-w-md rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <img
                  src="/img/foto-me.jpg"
                  alt="About Ahmad Afandi"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in-up stagger-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary rounded-full" />
                  Who am I?
                </h3>
                {aboutMe.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Stats - Streamlined Text Only */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-6 border-y border-border/10">
                {aboutMe.highlights.map((stat, index) => (
                  <div key={index} className="text-center md:text-left">
                    <p className="text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-muted text-xs uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex gap-4 pt-4">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="btn-primary"
                >
                  <FaDownload className="w-5 h-5" />
                  Download CV
                </a>
                <a href="#contact" className="btn-secondary">
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
