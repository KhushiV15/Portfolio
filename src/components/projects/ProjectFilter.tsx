
interface ProjectFilterProps {
  filter: "all" | "featured";
  setFilter: (filter: "all" | "featured") => void;
}

export function ProjectFilter({ filter, setFilter }: ProjectFilterProps) {
  return [];
}
