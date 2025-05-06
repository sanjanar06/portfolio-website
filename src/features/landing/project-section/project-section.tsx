"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowDownRightIcon,
  ArrowLeft,
  ArrowRight,
  ExternalLinkIcon,
  GithubIcon
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionHeading,
  SectionSubtitle,
  SectionTopline,
} from "../landing-section";
import FrontendSection from "../work-section/frontend"; // Import your frontend section component
import useWorkSection from "./use-project-section";

const WorkSection = () => {
  const { project, handleNext, handlePrev } = useWorkSection();
  const { num, title, description, img, tags, github, href } = project;
  const [activeService, setActiveService] = useState<string | null>(null);
  const renderServiceContent = () => {
    switch (activeService) {
      case "/services-section/frontend":
        return <FrontendSection />;
      default:
        return (
          <SectionContent className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-5xl font-bold">{num}</h1>
                <h2 className="flex items-center gap-2">
                  {title}
                  <a
                    href={github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <GithubIcon className="h-5 w-5" />
                    <span className="text-sm">GitHub</span>
                  </a>

                  <button
                    className="btn"
                    onClick={() => setActiveService(href)}
                  >
                    <ArrowDownRightIcon />
                  </button>
                </h2>
                <p className="text-sm">{description}</p>
              </div>
              <div className="flex gap-3 text-xs flex-wrap">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag.url ? (
                      <a
                        href={tag.url}
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
              {/* <Separator /> */}
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
        <SectionTopline variant="secondary">Tinker</SectionTopline>
        <SectionHeading>PROJECTS</SectionHeading>
        <SectionSubtitle>Lorem ipsum</SectionSubtitle>
      </SectionHeader>
      {activeService ? (
        <button
          onClick={() => setActiveService(null)} // Back button to return to the services list
          className="mb-4 text-blue-500 hover:underline text-lg"
        >
          ← Back to Services
        </button>
      ) : null}
      {renderServiceContent()}
    </Section>
  );
};

export default WorkSection;
