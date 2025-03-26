import { LucideIcon } from "lucide-react";

export interface InfoItem {
  field: string;
  value: string;
  icon: LucideIcon;
}

export interface AboutData {
  title: string;
  description: string;
  infos: InfoItem[];
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  duration: string;
  logo?: string;
  description: string;
}

export interface TimelineData {
  title: string;
  description: string;
  items: TimelineItem[];
}

// Define a type-safe section configuration
export interface SectionConfig<T> {
  id: string;
  title: string;
  icon: LucideIcon;
  component: React.ComponentType<{ data: T }>;
  data: T;
}

// Define specific section types
export type AboutSectionConfig = SectionConfig<AboutData>;
export type ExperienceSectionConfig = SectionConfig<TimelineData>;
export type EducationSectionConfig = SectionConfig<TimelineData>;

// Union type for all possible section configurations
export type ResumeSectionConfig =
  | AboutSectionConfig
  | ExperienceSectionConfig
  | EducationSectionConfig;
