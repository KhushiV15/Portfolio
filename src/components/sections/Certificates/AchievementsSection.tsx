import { useEffect, useRef } from "react";

const certificatesAchievements = [
  {
    quote:
      "John is an exceptional frontend developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him a valuable asset to any development team.",
    author: "Sarah Johnson",
    title: "CTO, Tech Innovations Inc.",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
  },
  {
    quote:
      "Working with John was a pleasure. He transformed our design concepts into beautiful, responsive interfaces that exceeded our expectations. His technical expertise and communication skills are outstanding.",
    author: "Michael Chen",
    title: "Product Manager, Digital Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "John has a rare combination of technical skill and creative vision. He not only implemented our designs perfectly but also suggested improvements that enhanced the overall user experience.",
    author: "Emily Rodriguez",
    title: "UI/UX Designer, Creative Agency",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

export function CertificatesAchievementsSection() {
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

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="certificates-achievements"
      ref={sectionRef}
      className="section-container"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center mb-4 reveal-on-scroll">
          <span className="gradient-text">Certificates & Achievements</span>
        </h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto reveal-on-scroll">
          What others have to say about working with me.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {certificatesAchievements.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md flex flex-col h-full reveal-on-scroll"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-primary/30"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-foreground/80 mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={`Photo of ${testimonial.author}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
