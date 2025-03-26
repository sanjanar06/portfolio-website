import { Button } from "@/components/ui/button";
import { DownloadIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const links = [
    {
      icon: <GithubIcon />,
      path: "https://github.com/ganeshnaidudsa",
    },

    {
      icon: <LinkedinIcon />,
      path: "https://www.linkedin.com/in/ganesh-naidu-957111238/",
    },
  ];

  return (
    <section
      id="hero-section"
      className="snap-start h-[calc(100vh-5rem)]  flex justify-center items-center mx-auto max-w-screen-lg px-4 xl:px-0 "
    >
      <div className="flex flex-wrap justify-center items-center gap-5">
        {/* <Image
          height={200}
          width={200}
          alt="me"
          src="/me.png"
          className="rounded-full bg-muted p-3 object-contain"
        /> */}
        <div className="flex flex-col xl:flex-row items-start gap-10">
          {/* Left Section: Introduction */}
          <div className="text-center xl:text-left order-2 xl:order-none space-y-6">
            <span className="text-lg font-semibold leading-0.5">Full Stack Developer</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Hello, I am <br />
              <span className="">Ganesh Naidu</span>
            </h2>
            <p className="max-w-xl">
              Recent Software Engineering Graduate with a strong foundation in technology and Full Stack Development.Eager to contribute to innovative projects in this ever- evolving field.{" "}
            </p>

            <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-4">
              {/* Download CV Button */}
              <Button asChild>
                <div className="flex items-center gap-3 px-6 py-3">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1_FdcoPa40gpKdAGia6ZHbnjpyfOY747z/view?usp=drive_link"
                  >
                    Resume
                  </a>
                  <DownloadIcon />
                </div>
              </Button>

              {/* Social Links */}
              <div className="flex gap-5">
                {links.map((link, index) => (
                  <Link legacyBehavior key={index} href={link.path} rel="noreferrer">
                    <a target="_blank" className="p-2 rounded-full text-background bg-foreground">
                      {link.icon}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
