
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-card border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-foreground/60">
              © {currentYear} Khushi Vishwakarma. All rights reserved.
            </p>
          </div>
          <div className="flex items-center text-sm text-foreground/60">
            <span>Built with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
