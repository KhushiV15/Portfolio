
import { useRef } from "react";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";
import { ContactForm } from "@/components/forms/ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NetflixContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useIntersectionAnimation(sectionRef);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://www.linkedin.com/in/khushi-vishwakarma15/"
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/KhushiV15"
    },
    
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20"
      id="contact"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg">
            I'm currently available for freelance work and full-time positions.
            If you're interested in working together, please get in touch!
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            {socialLinks.map((link, index) => (
              <Button 
                key={index}
                variant="outline" 
                size="icon"
                className="netflix-hover-zoom"
                asChild
              >
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="max-w-lg mx-auto reveal-on-scroll">
          <div className="bg-card rounded-lg p-6 border border-border shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Send me a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
