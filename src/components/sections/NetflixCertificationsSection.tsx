
import { useRef } from "react";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";
import { NetflixCard } from "@/components/cards/NetflixCard";

export function NetflixCertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useIntersectionAnimation(sectionRef);

  const certifications = [
    {
      title: "Cloud Computing",
      description: "Comprehensive course covering cloud architecture, deployment models, and services.",
      organization: "IIT Kharagpur (via NPTEL)",
      date: "2024",
      image:"/cloud.svg" 
    },
    {
      title: "Database & SQL for Data Science",
      description: "In-depth study of SQL and database design for data science applications.",
      organization: "IBM (via Coursera)",
      date: "2023",
      image: "/database.svg"
    },
    {
      title: "Multi-core Computer Architecture",
      description: "Advanced study of parallel processing and multi-core computing systems.",
      organization: "IIT Guwahati (via NPTEL)",
      date: "2023",
      image: "/multi.svg"
    }
  ];

  const achievements = [
    {
      title: "SGFI Nationals Taekwondo",
      description: "Represented Chandigarh in the SGFI National Taekwondo Championship.",
      date: "",
      image: "/taekwondo.svg"
    },
    {
      title: "Kala-Connect Club Member",
      description: "Active member of the Kala-Connect arts and culture club.",
      date: "2022-Present",
      image: "/camera.svg"
    },
    {
      title: "Swimming & Yoga",
      description: "Participated in inter-school swimming and yoga competitions.",
      date: "",
      image: "/yoga.svg"
    },
    {
      title: "Classical Dance",
      description: "Trained Classical Dancer with multiple performances.",
      date: "",
      image:"/dance.png"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-card/50"
      id="certifications"
    >
      <div className="section-container">
        <h2 className="netflix-section-title reveal-on-scroll">Certifications & Achievements</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="netflix-category reveal-on-scroll">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="reveal-on-scroll">
                  <NetflixCard
                    title={cert.title}
                    description={cert.description}
                    date={`${cert.organization} • ${cert.date}`}
                    image={cert.image}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="netflix-category reveal-on-scroll">Personal Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="reveal-on-scroll">
                  <NetflixCard
                    title={achievement.title}
                    description={achievement.description}
                    date={achievement.date}
                    image={achievement.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
