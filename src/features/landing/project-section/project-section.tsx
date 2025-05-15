"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowDownRightIcon,
  ArrowLeft,
  ArrowRight,
  ExternalLinkIcon
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubtitle,
  SectionTopline
} from "../landing-section";
import CodeForGood from "./projects/codeForGood"; // Import your frontend section component
import DeepFake from "./projects/deepfake"; // Import your frontend section component
import useWorkSection from "./use-project-section";

const WorkSection = () => {
  const { project, handleNext, handlePrev } = useWorkSection();
  const { title, description, img, tags, href } = project;
  const [activeService, setActiveService] = useState<string | null>(null);
  const renderServiceContent = () => {
    switch (activeService) {
      case "/projects/deepfake":
        return <DeepFake />;
      case "/projects/cfg":
        return <CodeForGood />;
      default:
        return (
          <SectionContent className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="group flex items-center gap-2 justify-between">
                  <h1 className="text-2xl font-bold">{title}</h1>

                  <button
                    className="btn group-hover:-rotate-45 transition-all duration-700"
                    onClick={() => setActiveService(href)}
                  >
                    <ArrowDownRightIcon />
                  </button>
                </div>
                <p className="text-sm">{description}</p>
              </div>
              <div className="flex gap-3 text-xs flex-wrap">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag.url ? (
                      <a
                        href={tag.url}
                        rel="noopener noreferrer"
                        target="_blank"
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

            </div>
            <div className="grid gap-3 h-full">
              <Image
                src={img}
                alt={title}
                height={500}
                width={500}
                className="object-cover h-full w-full"
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
        );
    }
  };

  return (
    <Section
      id="project"
      className="snap-start min-h-[calc(100vh-5rem)] mx-auto max-w-screen-lg px-4 xl:px-0 "
    >
      <SectionHeader>
        <SectionTopline variant="secondary" className="text-xl">PROJECTS</SectionTopline>
        <SectionSubtitle>Sometimes I work on projects not scoped,sprinted or story pointed haha</SectionSubtitle>
      </SectionHeader>
      {activeService ? (
        <button
          onClick={() => setActiveService(null)} // Back button to return to the services list
          className="mb-4 text-blue-500 hover:underline text-lg"
        >
          ← MORE
        </button>
      ) : null}
      {renderServiceContent()}
    </Section>
  );
};

export default WorkSection;
