"use client";

import { aboutMe, personalInfo } from "@/data/portfolioData";
import { FaDownload, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="section bg-surface/50">
      <div className="container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          Get to know me better - my background, passion, and what drives me
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="animate-fade-in-up">
            <div className="relative pt-6 pb-8 pr-6">
              {/* Decorative Elements - Behind */}
              <div className="absolute bottom-0 right-0 w-full h-full border-2 border-primary/30 rounded-2xl" />
              <div className="absolute bottom-3 right-4 w-full h-full border border-secondary/20 rounded-2xl" />
              
              {/* Main Card - Smaller and centered */}
              <div className="relative w-[85%] aspect-square max-w-sm rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 m-auto">
                <img
                  src="/img/foto-me.jpg"
                  alt="About Ahmad Afandi"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in-up stagger-2">
            <div className="space-y-6">
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

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-background border border-border">
                  <div className="flex items-center gap-2 text-muted text-sm mb-1">
                    <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                    Location
                  </div>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border">
                  <div className="flex items-center gap-2 text-muted text-sm mb-1">
                    <FaEnvelope className="w-4 h-4 text-primary" />
                    Email
                  </div>
                  <p className="font-medium text-sm truncate">{personalInfo.email}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {aboutMe.highlights.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:border-primary/30 transition-colors"
                  >
                    <p className="text-2xl md:text-3xl font-bold gradient-text">
                      {stat.value}
                    </p>
                    <p className="text-muted text-sm mt-1">{stat.label}</p>
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
