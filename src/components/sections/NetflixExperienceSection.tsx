
import { useRef } from "react";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";
import { TimelineItem } from "@/components/timeline/TimelineItem";

export function NetflixExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useIntersectionAnimation(sectionRef);

  const experiences = [
    {
      title: "Open Source Contributor",
      organization: "BugSphere (Cybersecurity Company)",
      period: "Jan 2025 - Present",
      description: [
        "Developed and improved the blog page using TypeScript.",
        "Optimized performance, accessibility, and responsiveness.",
        "Implemented modern UI components and interactive features.",
        "Collaborated with the team using version control systems."
      ],
      
    },
    {
      title: "Internship",
      organization: "Defence Geo-informatics Research Establishment (DRDO)",
      period: "May 2024 - July 2024",
      description: [
        "Developed a Flask-based web application for dynamic data visualization.",
        "Built an interactive dashboard using Pandas & Matplotlib.",
        "Implemented data processing pipelines for large datasets.",
        "Created responsive visualizations for complex geographical data."
      ],
      
    },
    
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-card/50"
      id="experience"
    >
      <div className="section-container">
        <h2 className="netflix-section-title reveal-on-scroll">Work Experience</h2>
        
        <div className="relative mt-12">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.title}
              organization={exp.organization}
              period={exp.period}
              description={exp.description}
              isFirst={index === 0}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
