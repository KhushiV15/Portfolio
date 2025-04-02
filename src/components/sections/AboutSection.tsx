
import { useEffect, useRef } from "react";

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-12 reveal-on-scroll">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
              alt="John working on code"
              className="rounded-lg shadow-lg object-cover aspect-square"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg reveal-on-scroll">
              <strong className="text-primary">Hi there!</strong> I'm a passionate frontend developer with over 5 years of experience in building modern web applications.
            </p>
            <p className="reveal-on-scroll">
              I specialize in React, TypeScript, and Next.js, focusing on creating responsive, accessible, and performant user interfaces that deliver exceptional user experiences.
            </p>
            <p className="reveal-on-scroll">
              My journey in web development started with a curiosity for how things work on the web, and has evolved into a deep passion for crafting elegant solutions to complex problems.
            </p>
            <p className="reveal-on-scroll">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or enjoying outdoor activities to recharge my creative energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
