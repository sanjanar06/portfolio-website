import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function SectionCard({ title, description, children }: SectionCardProps) {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-primary">{title}</CardTitle>
        <CardDescription className="text-sm text-secondary-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
