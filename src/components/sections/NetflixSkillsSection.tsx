
import { useRef } from "react";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";
import { SkillsCarousel } from "@/components/skills/SkillsCarousel";

export function NetflixSkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useIntersectionAnimation(sectionRef);

  const programmingSkills = [
    { name: "Python", icon: "🐍", category: "Programming" },
    { name: "C++", icon: "🔍", category: "Programming" },
    { name: "JavaScript", icon: "📜", category: "Programming" },
    { name: "TypeScript", icon: "📘", category: "Programming" },
  ];

  const webDevSkills = [
    { name: "Flask", icon: "🧪", category: "Web Development" },
    { name: "Next.js", icon: "⚡", category: "Web Development" },
    { name: "HTML", icon: "🌐", category: "Web Development" },
    { name: "CSS", icon: "🎨", category: "Web Development" },
    { name: "React", icon: "⚛️", category: "Web Development" },
  ];

  const databaseSkills = [
    { name: "PostgreSQL", icon: "🐘", category: "Databases" },
    { name: "MySQL", icon: "🐬", category: "Databases" },
    { name: "MongoDB", icon: "🍃", category: "Databases" },
  ];

  const dataSkills = [
    { name: "Pandas", icon: "🐼", category: "Data Tools" },
    { name: "Matplotlib", icon: "📊", category: "Data Tools" },
    { name: "Data Visualization", icon: "📈", category: "Data Tools" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20"
      id="skills"
    >
      <div className="section-container">
        <h2 className="netflix-section-title reveal-on-scroll">Skills & Tech Stack</h2>
        
        <div className="space-y-12">
          <SkillsCarousel skills={programmingSkills} category="Programming Languages" />
          <SkillsCarousel skills={webDevSkills} category="Web Development" />
          <SkillsCarousel skills={databaseSkills} category="Databases" />
          <SkillsCarousel skills={dataSkills} category="Data Analysis & Visualization" />
        </div>
      </div>
    </section>
  );
}
