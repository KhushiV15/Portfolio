
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background -z-10"></div>
      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-8 items-center pt-20">
        <div className="order-2 md:order-1">
          <h1 className="font-bold mb-4 animate-fade-in">
            <span className="block opacity-90">Hi, I'm</span>
            <span className="block gradient-text text-6xl md:text-7xl mt-2">
              Khushi Vishwakarma
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Building scalable & beautiful web applications with React, TypeScript, and modern frontend technologies.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Khushi Vishwakarma"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2 text-foreground/70">Scroll Down</span>
        <ArrowDown className="w-5 h-5 animate-bounce text-primary" />
      </a>
    </section>
  );
}
