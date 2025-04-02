
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string[];
  isLast?: boolean;
  isFirst?: boolean;
}

export function TimelineItem({ 
  title, 
  organization, 
  period, 
  description, 
  isLast = false,
  isFirst = false
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-12 py-6 group reveal-on-scroll">
      <div className={cn(
        "absolute top-0 left-0 w-1 h-full bg-muted group-hover:bg-primary",
        isFirst && "rounded-t-full pt-2.5",
        isLast && "rounded-b-full h-6"
      )} />
      <div className="absolute left-0 top-6 h-6 w-6 rounded-full border-4 border-muted bg-background group-hover:border-primary flex items-center justify-center" />
      
      <div className="netflix-card p-4 ml-4">
        <h3 className="font-bold text-xl">{title}</h3>
        <div className="text-muted-foreground mb-2">
          <span>{organization}</span> · <span>{period}</span>
        </div>
        <ul className="list-disc list-inside space-y-1">
          {description.map((item, index) => (
            <li key={index} className="text-sm md:text-base">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
