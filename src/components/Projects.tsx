"use client";

import { projects } from "@/data/portfolioData";
import { JSX, useState } from "react";

const projectIcons: { [key: number]: JSX.Element } = {
  1: (
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  2: (
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    </svg>
  ),
  3: (
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  4: (
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
  5: (
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
  6: (
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  ),
};

// Re-add import Image
import Image from "next/image";

// ... (rest of imports)

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section bg-surface/50">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Showcase of my recent work and side projects
        </p>

        <div className="flex justify-center gap-4 mb-10">
          {["all", "featured"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as "all" | "featured")}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${filter === f
                ? "bg-primary text-background shadow-lg"
                : "bg-surface border border-border hover:border-primary text-muted hover:text-foreground"
                }`}
            >
              {f === "all" ? "All Projects" : "Featured"}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [imgError, setImgError] = useState(false);

  // Helper to handle image paths
  const getImagePath = (path: string) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("/")) return path;
    return `/${path}`;
  };

  return (
    <div
      className={`group rounded-2xl overflow-hidden bg-background border border-border card-hover animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image Area */}
      <div className="aspect-video relative overflow-hidden bg-surface">
        {project.image && !imgError ? (
          <Image
            src={getImagePath(project.image)}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          /* Icon Fallback */
          <div className="absolute inset-0 flex items-center justify-center text-primary/40 group-hover:text-primary/60 group-hover:scale-110 transition-all duration-500">
            {projectIcons[project.id] || projectIcons[1]}
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-background/5" />

        {/* Hover Overlay with Buttons */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-primary text-background text-sm font-medium hover:opacity-90 transition-all hover:-translate-y-0.5"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-surface text-foreground text-sm font-medium border border-border hover:border-primary transition-all hover:-translate-y-0.5"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface text-muted border border-border">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
