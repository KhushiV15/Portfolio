
import { useEffect, useRef } from "react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "Jan 2022 - Present",
    description:
      "Leading the frontend development team in building responsive and accessible web applications using React, TypeScript, and Next.js. Implementing design systems and optimizing performance for large-scale applications.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "Mar 2020 - Dec 2021",
    description:
      "Developed and maintained multiple client-facing web applications. Collaborated with designers and backend developers to implement new features and improve existing functionality.",
  },
  {
    title: "Web Developer",
    company: "Creative Agency",
    period: "Jun 2018 - Feb 2020",
    description:
      "Created responsive websites for various clients using HTML, CSS, JavaScript, and WordPress. Implemented animations and interactive elements to enhance user experience.",
  },
  {
    title: "Junior Developer",
    company: "Startup Hub",
    period: "Sep 2017 - May 2018",
    description:
      "Assisted in the development of web applications and client websites. Learned and applied best practices in web development and gained experience with various frameworks and tools.",
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal-on-scroll').forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('revealed');
            }, i * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-container bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-4 reveal-on-scroll">
          <span className="gradient-text">Work Experience</span>
        </h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto reveal-on-scroll">
          My professional journey in web development and design.
        </p>

        <div className="relative border-l border-primary/30 pl-8 ml-4">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-12 relative reveal-on-scroll"
            >
              <div className="absolute -left-12 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-background rounded-full"></div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-medium text-primary">{exp.company}</span>
                  <span className="text-sm text-foreground/60">• {exp.period}</span>
                </div>
                <p className="text-foreground/80">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
