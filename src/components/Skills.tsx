"use client";

import { skills } from "@/data/portfolioData";
import { useEffect, useRef, useState } from "react";
import { FaCode, FaServer, FaTools, FaPython, FaGitAlt, FaAws, FaDocker, FaPhp, FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPostgresql, SiMongodb, SiFigma, SiTailwindcss, SiMysql, SiSupabase, SiPhp, SiJavascript, SiBootstrap, SiComposer, SiSvelte, SiExpress, SiLaravel, SiGin, SiCodeigniter } from "react-icons/si";

const skillCategories = [
  { key: "frontend" as const, label: "Frontend", icon: <FaCode className="w-5 h-5" /> },
  { key: "backend" as const, label: "Backend", icon: <FaServer className="w-5 h-5" /> },
  { key: "tools" as const, label: "Tools", icon: <FaTools className="w-5 h-5" /> },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "tools">("frontend");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        <p className="text-center text-lg font-medium text-muted mb-6">Tech Stack I Love</p>

        <div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center">
            {[
              { n: "JavaScript", e: <SiJavascript className="w-full h-full" /> },
              { n: "TypeScript", e: <SiTypescript className="w-full h-full" /> },
              { n: "Golang", e: <FaGolang className="w-full h-full" /> },
              { n: "PHP", e: <SiPhp className="w-full h-full" /> },
              { n: "Java", e: <FaJava className="w-full h-full" /> },
              { n: "Express", e: <SiExpress className="w-full h-full" /> },
              { n: "React", e: <SiReact className="w-full h-full" /> },
              { n: "Next.js", e: <SiNextdotjs className="w-full h-full" /> },
              { n: "Svelte", e: <SiSvelte className="w-full h-full" /> },
              { n: "Tailwind", e: <SiTailwindcss className="w-full h-full" /> },
              { n: "Bootstrap", e: <SiBootstrap className="w-full h-full" /> },
              { n: "Laravel", e: <SiLaravel className="w-full h-full" /> },
              { n: "CodeIgniter", e: <SiCodeigniter className="w-full h-full" /> },
              { n: "Gin", e: <SiGin className="w-full h-full" /> },
              { n: "Node.js", e: <SiNodedotjs className="w-full h-full" /> },
              { n: "Composer", e: <SiComposer className="w-full h-full" /> },
              { n: "Supabase", e: <SiSupabase className="w-full h-full" /> },
              { n: "PostgreSQL", e: <SiPostgresql className="w-full h-full" /> },
              { n: "MySQL", e: <SiMysql className="w-full h-full" /> },
              { n: "Git", e: <FaGitAlt className="w-full h-full" /> },
              { n: "Figma", e: <SiFigma className="w-full h-full" /> },
            ].map((t, i) => (
              <div
                key={t.n}
                className="group relative aspect-square p-6 rounded-2xl bg-surface/50 border border-border/50 hover:border-primary/50 hover:bg-surface hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex items-center justify-center hover:-translate-y-2"
                title={t.n}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                  {t.e}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
