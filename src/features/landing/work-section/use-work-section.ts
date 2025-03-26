import { useState } from "react";
import { projects } from "./work-section-config";

const useWorkSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Get current project
  const project = projects[activeIndex];

  // Navigation functions
  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return {
    project,
    handleNext,
    handlePrev,
  };
};
export default useWorkSection;
