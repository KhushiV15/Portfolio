
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";

export function NetflixHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useIntersectionAnimation(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-0"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30 z-[-1]"></div>
      
      <div className="section-container relative z-10 text-center flex flex-col items-center justify-center space-y-8">
        <div className="space-y-4 max-w-4xl">
          <span className="text-primary font-medium tracking-wider reveal-on-scroll">SOFTWARE DEVELOPMENT ENGINEER</span>
          <h1 className="reveal-on-scroll">
            Hi, I'm <span className="gradient-text">Khushi Vishwakarma</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mt-4 mx-auto max-w-2xl reveal-on-scroll">
            Building Scalable & Intuitive Web Applications
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 reveal-on-scroll">
          <Button className="netflix-button" size="lg" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
