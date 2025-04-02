
import { ThemeToggle } from "./ThemeToggle";
import { Heart } from "lucide-react";

export function NetflixFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-card border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-foreground/60">
              © {currentYear} Khushi Vishwakarma. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />       
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
          <div>
            <h4 className="font-medium mb-2">Navigation</h4>
            <ul className="space-y-1">
              <li><a href="#home" className="hover:text-primary">Home</a></li>
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#skills" className="hover:text-primary">Skills</a></li>
              <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">More</h4>
            <ul className="space-y-1">
              <li><a href="#experience" className="hover:text-primary">Experience</a></li>
              <li><a href="#certifications" className="hover:text-primary">Certifications</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 mt-6 md:mt-0">
            <h4 className="font-medium mb-2">About This Site</h4>
            <p className="text-xs">
              Built with React, TypeScript, and Tailwind CSS. Designed with a Netflix-inspired 
              interface to showcase my work and skills in an engaging way.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
