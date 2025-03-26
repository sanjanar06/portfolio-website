"use client";

import React from "react";
import HeaderNav from "./header-nav";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useScrollToAnchor } from "@/hooks/use-scroll-to-anchor";

const Header = () => {
  const scrollToAnchor = useScrollToAnchor();

  return (
    <header
      id="header"
      className="px-8 xl:px-0 max-w-screen-lg mx-auto flex items-center justify-between h-[5rem]"
    >
      <h1
        onClick={() =>
          scrollToAnchor("#hero-section", {
            containerId: "landing-container",
          })
        }
        className="cursor-pointer text-3xl"
      >
        Ganesh.
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
          Hire me
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
