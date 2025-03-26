"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import type { TimelineItem } from "../resume-section-types";

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
  variant: "experience" | "education";
}

export function TimelineItemCard({ item, index, variant }: TimelineItemProps) {
  const { title, subtitle, duration, description } = item;
  const Icon = variant === "experience" ? Briefcase : GraduationCap;

  return (
    <motion.li
      className="flex gap-4"
      initial={{ opacity: 0, x: variant === "experience" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="space-y-2">
        <h3 className="text-lg font-semibold leading-none text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground flex items-center">
          <Icon className="h-4 w-4 mr-1" /> {subtitle}
        </p>
        <p className="text-sm text-muted-foreground flex items-center">
          <Calendar className="h-4 w-4 mr-1" /> {duration}
        </p>
        <p className="text-sm text-secondary-foreground">{description}</p>
        <div className="border-b w-full border-primary" />
      </div>
    </motion.li>
  );
}
