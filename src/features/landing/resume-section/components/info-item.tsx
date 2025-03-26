"use client";

import { motion } from "framer-motion";
import type { InfoItem } from "../resume-section-types";

interface InfoItemProps {
  info: InfoItem;
  index: number;
}

export function InfoItemCard({ info, index }: InfoItemProps) {
  const { icon: Icon, field, value } = info;

  return (
    <motion.div
      className="flex items-center space-x-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Icon className="h-5 w-5 text-primary" />
      <div>
        <dt className="text-sm font-medium text-muted-foreground">{field}</dt>
        <dd className="text-sm font-semibold text-foreground">{value}</dd>
      </div>
    </motion.div>
  );
}
