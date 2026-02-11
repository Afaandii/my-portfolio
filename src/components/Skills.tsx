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
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-2xl bg-surface border border-border">
            {skillCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                  activeTab === cat.key
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <span>{cat.icon}</span>
                <span className="hidden sm:inline">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {skills[activeTab].map((skill, i) => (
            <div key={skill.name} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: isVisible ? `${skill.level}%` : "0%", transitionDelay: `${i * 0.1}s` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-lg font-medium text-muted mb-8">Tech Stack I Love</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center">
            {[
              { n: "JavaScript", e: <SiJavascript className="text-[#F7DF1E] w-full h-full" /> },
              { n: "TypeScript", e: <SiTypescript className="text-[#3178C6] w-full h-full" /> },
              { n: "Golang", e: <FaGolang className="text-[#00ADD8] w-full h-full" /> }, 
              { n: "PHP", e: <SiPhp className="text-[#777BB4] w-full h-full" /> },
              { n: "Java", e: <FaJava className="text-[#007396] w-full h-full" /> },
              { n: "Express", e: <SiExpress className="text-white w-full h-full" /> }, 
              { n: "React", e: <SiReact className="text-[#61DAFB] w-full h-full" /> }, 
              { n: "Next.js", e: <SiNextdotjs className="bg-white rounded-full text-black w-full h-full border border-white" /> }, 
              { n: "Svelte", e: <SiSvelte className="text-[#FF3E00] w-full h-full" /> }, 
              { n: "Tailwind", e: <SiTailwindcss className="text-[#06B6D4] w-full h-full" /> },
              { n: "Bootstrap", e: <SiBootstrap className="text-[#7952B3] w-full h-full" /> },
              { n: "Laravel", e: <SiLaravel className="text-[#FF2D20] w-full h-full" /> },
              { n: "CodeIgniter", e: <SiCodeigniter className="text-[#EF4223] w-full h-full" /> },
              { n: "Gin", e: <SiGin className="text-[#00ADD8] w-full h-full" /> },
              { n: "Node.js", e: <SiNodedotjs className="text-[#339933] w-full h-full" /> },
              { n: "Composer", e: <SiComposer className="text-[#885630] w-full h-full" /> },
              { n: "Supabase", e: <SiSupabase className="text-[#3ECF8E] w-full h-full" /> }, 
              { n: "PostgreSQL", e: <SiPostgresql className="text-[#4169E1] w-full h-full" /> },
              { n: "MySQL", e: <SiMysql className="text-[#4479A1] w-full h-full" /> },
              { n: "Git", e: <FaGitAlt className="text-[#F05032] w-full h-full" /> }, 
              { n: "Figma", e: <SiFigma className="text-[#F24E1E] w-full h-full" /> }, 
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
