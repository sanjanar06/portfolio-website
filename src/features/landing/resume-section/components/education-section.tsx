import type { TimelineData } from "../resume-section-types";
import { SectionCard } from "./section-card";
import { TimelineItemCard } from "./timeline-item";

interface EducationSectionProps {
  data: TimelineData;
}

export function EducationSection({ data }: EducationSectionProps) {
  return (
    <SectionCard title={data.title} description={data.description}>
      <ul className="space-y-8">
        {data.items.map((item, index) => (
          <TimelineItemCard key={index} item={item} index={index} variant="education" />
        ))}
      </ul>
    </SectionCard>
  );
}
