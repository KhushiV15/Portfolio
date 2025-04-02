
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NetflixCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
  date?: string;
}

export function NetflixCard({ 
  title, 
  description, 
  image = "/placeholder.svg", 
  tags = [], 
  githubUrl, 
  liveUrl,
  date
}: NetflixCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="netflix-card cursor-pointer h-full">
          <div className="relative overflow-hidden aspect-video">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
            />
          </div>
          <CardHeader className="p-4">
            <CardTitle className="line-clamp-1">{title}</CardTitle>
            {date && <CardDescription>{date}</CardDescription>}
          </CardHeader>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <span key={tag} className="bg-secondary text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {(githubUrl || liveUrl) && (
            <div className="flex gap-2 mt-2">
              {githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
              {liveUrl && (
                <Button size="sm" asChild>
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
