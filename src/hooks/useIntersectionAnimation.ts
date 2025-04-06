
import { useEffect, RefObject } from 'react';

export function useIntersectionAnimation(ref: RefObject<HTMLElement>, delay: number = 200) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal-on-scroll').forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('revealed');
            }, i * delay);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, delay]);
}
