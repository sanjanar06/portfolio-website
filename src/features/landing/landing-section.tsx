"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionContextValue {
  align?: "left" | "center" | "right";
}

const SectionContext = React.createContext<SectionContextValue>({ align: "left" });

export function useSection() {
  return React.useContext(SectionContext);
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

export function Section({ align = "left", className, children, ...props }: SectionProps) {
  return (
    <SectionContext.Provider value={{ align }}>
      <section className={cn("py-16 md:py-24 w-full", className)} {...props}>
        <div className="container px-4 md:px-6">{children}</div>
      </section>
    </SectionContext.Provider>
  );
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionHeader({ className, children, ...props }: SectionHeaderProps) {
  const { align } = useSection();

  return (
    <div
      className={cn(
        "max-w-[800px] space-y-4 mb-10",
        align === "center" && "mx-auto text-center",
        align === "right" && "ml-auto text-right",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface SectionToplineProps extends React.ComponentPropsWithoutRef<typeof Badge> {
  className?: string;
  children: React.ReactNode;
}

export function SectionTopline({ className, children, ...props }: SectionToplineProps) {
  return (
    <Badge className={cn("text-sm font-semibold uppercase tracking-widest", className)} {...props}>
      {children}
    </Badge>
  );
}

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionHeading({ className, children, ...props }: SectionHeadingProps) {
  return (
    <h2
      className={cn("text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

interface SectionSubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function SectionSubtitle({ className, children, ...props }: SectionSubtitleProps) {
  return (
    <p className={cn("text-muted-foreground text-sm tracking-tighter", className)} {...props}>
      {children}
    </p>
  );
}

interface SectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionContent({ className, children, ...props }: SectionContentProps) {
  return (
    <div className={cn("w-full", className)} {...props}>
      {children}
    </div>
  );
}
