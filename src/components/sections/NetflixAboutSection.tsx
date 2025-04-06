
import { useRef } from "react";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";
import { Card, CardContent } from "@/components/ui/card";

export function NetflixAboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useIntersectionAnimation(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-card/50"
      id="about"
    >
      <div className="section-container">
        <h2 className="netflix-section-title reveal-on-scroll">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="netflix-card reveal-on-scroll">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Passionate Software Development Engineer</h3>
                <p className="text-muted-foreground">
                  I'm a dedicated software engineer skilled in Python, C++, and web development, with experience in Flask, Next.js, and data visualization.
                </p>
                <p className="text-muted-foreground">
                  My passion lies in creating powerful, user-friendly applications that solve real-world problems efficiently. 
                </p>
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Key Strengths:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Strong problem-solving abilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Adaptability to new technologies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Excellent time-management skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Collaborative team player</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-8 reveal-on-scroll">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-400 rounded-lg blur opacity-25"></div>
              <div className="relative bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Computer Science Engineering</h4>
                    <p className="text-muted-foreground text-sm">Chandigarh University, 2022-2026</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-400 rounded-lg blur opacity-25"></div>
              <div className="relative bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">Web Development</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">Data Visualization</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">Cybersecurity</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">Taekwondo</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">Classical Dance
</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">Swimming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
