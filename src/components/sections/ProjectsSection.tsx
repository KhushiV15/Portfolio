
import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { projects, Project } from "@/data/projects";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const sectionRef = useRef<HTMLElement>(null);

  useIntersectionAnimation(sectionRef);

  useEffect(() => {
    setFilteredProjects(
      filter === "all"
        ? projects
        : projects.filter((project) => project.featured)
    );
  }, [filter]);

  return (
    <section id="projects" ref={sectionRef} className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-4 reveal-on-scroll">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto reveal-on-scroll">
          Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
        </p>

        <ProjectFilter filter={filter} setFilter={setFilter} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
