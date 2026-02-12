"use client";

import { experience } from "@/data/portfolioData";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle">
          My professional journey and education background
        </p>

        <div className="max-w-3xl mx-auto">
          {experience.map((item, i) => (
            <div
              key={item.id}
              className="timeline-item animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-3 ${
                        item.type === "work"
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-secondary/10 text-secondary border border-secondary/20"
                      }`}
                    >
                      <FaBriefcase className="w-3.5 h-3.5" /> {item.type}
                    </span>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-primary font-medium">{item.company}</p>
                  </div>
                  <div className="text-right flex flex-col gap-1">
                    <span className="inline-flex items-center gap-1.5 text-muted text-sm">
                      <FaCalendarAlt className="w-4 h-4" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-muted text-sm">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      {item.location}
                    </span>
                  </div>
                </div>
                <p className="text-muted mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span className="text-primary mt-0.5 shrink-0">
                        <FaCheckCircle className="w-4 h-4" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
