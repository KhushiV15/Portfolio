
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveLink: "https://example.com/dashboard",
    githubLink: "https://github.com/johndoe/dashboard",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A feature-rich task management application with drag-and-drop interface, tags, and team collaboration.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    liveLink: "https://example.com/taskapp",
    githubLink: "https://github.com/johndoe/taskapp",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Forecast PWA",
    description: "A progressive web app providing real-time weather forecasts with location-based services.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1765&q=80",
    tags: ["React", "PWA", "Weather API", "Geolocation"],
    liveLink: "https://example.com/weather",
    githubLink: "https://github.com/johndoe/weather",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A social networking platform with real-time chat, post sharing, and user authentication.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    tags: ["React", "Firebase", "Socket.io", "Redux"],
    liveLink: "https://example.com/social",
    githubLink: "https://github.com/johndoe/social",
    featured: true,
  },
  {
    id: 5,
    title: "Recipe Finder App",
    description: "An application to discover and save recipes with filtering options based on ingredients and dietary preferences.",
    image: "https://images.unsplash.com/photo-1556910638-b7c68a2fb6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["React", "API Integration", "Local Storage", "Responsive Design"],
    liveLink: "https://example.com/recipes",
    githubLink: "https://github.com/johndoe/recipes",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing professional work and skills.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    liveLink: "https://example.com/portfolio",
    githubLink: "https://github.com/johndoe/portfolio",
    featured: false,
  },
];
