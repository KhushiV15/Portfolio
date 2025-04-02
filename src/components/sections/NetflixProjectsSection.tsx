
import { useRef, useState } from "react";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";
import { NetflixCard } from "@/components/cards/NetflixCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";

export function NetflixProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useIntersectionAnimation(sectionRef);
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const projects = [
    {
      title: "Dynamic Data Visualization Web App",
      description: "A Flask-based web application for visualizing complex datasets with interactive charts and maps.",
      image: "/data.svg",
      tags: ["Flask", "Pandas", "Matplotlib", "Python"],
      githubUrl: "https://github.com/KhushiV15/GRAPH",
      
      featured: true
    },
    {
      title: "BugSphere Blog Page Optimization",
      description: "Redesigned and optimized the company blog for better performance, accessibility, and user experience.",
      image: "/bugsphere.svg",
      tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      
      liveUrl: "https://main.d3nay7lggbjjn.amplifyapp.com/",
      featured: true
    },
    
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section 
      ref={sectionRef}
      className="py-20"
      id="projects"
    >
      <div className="section-container">
        <h2 className="netflix-section-title reveal-on-scroll">Projects Showcase</h2>
        
        <ProjectFilter filter={filter} setFilter={setFilter} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="reveal-on-scroll">
              <NetflixCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
