import { SectionCard } from "./section-card";
import { InfoItemCard } from "./info-item";
import type { AboutData } from "../resume-section-types";

interface AboutSectionProps {
  data: AboutData;
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <SectionCard title={data.title} description={data.description}>
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {data.infos.map((info, index) => (
          <InfoItemCard key={index} info={info} index={index} />
        ))}
      </dl>
    </SectionCard>
  );
}
