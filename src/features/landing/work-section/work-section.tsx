"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLinkIcon,
  GithubIcon
} from "lucide-react";
import Image from "next/image";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionHeading,
  SectionSubtitle,
  SectionTopline,
} from "../landing-section";
import useWorkSection from "./use-work-section";

const WorkSection = () => {
  const { project, handleNext, handlePrev } = useWorkSection();
  const { num, title, description, img, tags,  github } = project;

  return (
    <Section
      id="work"
      className="snap-start min-h-[calc(100vh-5rem)] mx-auto max-w-screen-lg px-4 xl:px-0 "
    >
      <SectionHeader>
        <SectionTopline variant="secondary">Work</SectionTopline>
        <SectionHeading>Featured Projects</SectionHeading>
        <SectionSubtitle>Selected work that demonstrates my skills</SectionSubtitle>
      </SectionHeader>

      <SectionContent className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-8">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold">{num}</h1>
            <h2>{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
          <div className="flex gap-3 text-xs flex-wrap">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag.url ? (
                  <a
                    href={tag.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-1"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    <span>{tag.name}</span>
                  </a>
                ) : (
                  tag.name
                )}
              </Badge>
            ))}
          </div>
          <Separator />
          <div className="flex space-x-5">
            <a
              target="_blank"
              href={github}
              className="bg-muted p-4 rounded-full transition-all duration-700"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
        <div className="grid gap-3 h-full">
          <Image
            src={img}
            alt={title}
            height={500}
            width={500}
            className="object-cover h-full"
          />
          <div className="flex space-x-3 self-start justify-self-end">
            <span className="text-sm text-muted-foreground self-center">Swipe for more!</span>
            <Button size="icon" className="cursor-pointer" onClick={handlePrev}>
              <ArrowLeft />
            </Button>
            <Button size="icon" className="cursor-pointer" onClick={handleNext}>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default WorkSection;
