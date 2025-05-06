"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useScrollToAnchor } from "@/hooks/use-scroll-to-anchor";
import { CoffeeIcon } from "lucide-react";
import HeaderNav from "./header-nav";


const Header = () => {
  const scrollToAnchor = useScrollToAnchor();

  return (
    <header
      id="header"
      className="px-8 xl:px-0 max-w-screen-lg mx-auto flex items-center justify-between h-[5rem]"
    >
      <h1
        onClick={() =>
          scrollToAnchor("#about-section", {
            containerId: "landing-container",
          })
        }
        className="cursor-pointer text-3xl"
      >
        Sanjana.
      </h1>

      <div className="flex items-center gap-5">
        <HeaderNav />

        <Button
          className="cursor-pointer"
          onClick={() =>
            scrollToAnchor("#contact", {
              containerId: "landing-container",
            })
          }
        >
          Connect
          <CoffeeIcon />
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
