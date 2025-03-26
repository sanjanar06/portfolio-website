import type { TimelineData } from "../resume-section-types";
import { SectionCard } from "./section-card";
import { TimelineItemCard } from "./timeline-item";

interface ExperienceSectionProps {
  data: TimelineData;
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <SectionCard title={data.title} description={data.description}>
      <ul className="space-y-8">
        {data.items.map((item, index) => (
          <TimelineItemCard key={index} item={item} index={index} variant="experience" />
        ))}
      </ul>
    </SectionCard>
  );
}
