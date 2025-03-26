"use client";

import Link from "next/link";
import { SocialLink } from "../../contact-types";

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {links.map((link, _) => {
        const { icon: Icon, name, url } = link;

        return (
          <Link
            key={_}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label={name}
          >
            <Icon className="h-5 w-5" />
          </Link>
        );
      })}
    </div>
  );
}
