
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-card shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col reveal-on-scroll">
      <div className="relative aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-primary/80 text-white rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-foreground/70 mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex gap-4 mt-2">
          <Button asChild variant="outline" size="sm">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
