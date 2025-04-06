
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";

interface Skill {
  name: string;
  icon: string;
  category: string;
}

interface SkillsCarouselProps {
  skills: Skill[];
  category: string;
}

export function SkillsCarousel({ skills, category }: SkillsCarouselProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersectionAnimation(sectionRef);

  return (
    <div ref={sectionRef} className="mb-10 reveal-on-scroll">
      <h3 className="netflix-category">{category}</h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {skills.map((skill, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
              <Card className="netflix-card">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <div className="font-medium text-center">{skill.name}</div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
