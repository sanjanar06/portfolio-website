import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="snap-start h-[calc(100vh-5rem)]  flex justify-center items-center mx-auto max-w-screen-lg px-4 xl:px-0 "
    >
      <div className=" text-justify bg-accent p-10 rounded-lg flex flex-wrap justify-center items-center gap-5">
        {/* Left Section: Introduction */}
        <div className="order-2 xl:order-none space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Hello, I am <br />
            <span className="">Sanjana Reji...</span>
          </h2>
          <p className="max-w-xl">
            A software engineer with over two years of industry experience, currently pursuing my Master's in Computer Sciences at University of Wisconsin Madison. My interests lie at the intersection of system design, scalable architectures, and the stories behind how real-world tech systems evolve — I could talk about engineering case studies for hours. Outside of the code editor, you'll usually find me on a hiking trail or deep in a long-form tech article. I enjoy building thoughtful systems — and conversations.
          </p>

          {/* Download Resume Button */}
          <Button asChild>
            <div className="flex items-center gap-3 px-6 py-3">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1zi6NwEUZOOPaUNQDVK40bfx1zYxEg4qp/view?"
                className="flex items-center gap-3"
              >
                Resume
                <EyeIcon />
              </a>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
