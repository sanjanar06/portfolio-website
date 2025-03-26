"use client";

import { useScrollToAnchor } from "@/hooks/use-scroll-to-anchor";

const links = [
  {
    label: "services",
    anchor: "#services",
  },
  {
    label: "resume",
    anchor: "#resume",
  },
  {
    label: "work",
    anchor: "#work",
  },
];

const HeaderNav = () => {
  const scrollToAnchor = useScrollToAnchor();
  const handleClick = (anchor: string) => {
    scrollToAnchor(anchor, {
      containerId: "landing-container",
    });
  };

  return (
    <nav className="hidden xl:flex gap-5 items-center  xl:text-sm">
      {links.map((link, _) => (
        <span
          key={_}
          className={
            "capitalize hover:underline font-medium transition-colors duration-200 cursor-pointer"
          }
          onClick={(e) => {
            e.preventDefault();
            handleClick(link.anchor);
          }}
        >
          {link.label}
        </span>
      ))}
    </nav>
  );
};

export default HeaderNav;
