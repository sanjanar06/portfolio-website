import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface UseScrollToAnchorOptions {
  behavior?: "smooth" | "auto";
  offset?: number;
  scrollOnSamePage?: boolean;
  containerId?: string; // ID of the scrollable container
  containerOffset?: number; // Additional offset for container scroll
}

export const useScrollToAnchor = () => {
  const router = useRouter();

  const scrollToElement = useCallback(
    (
      anchor: string,
      options: {
        behavior?: "smooth" | "auto";
        offset?: number;
        containerId?: string;
        containerOffset?: number;
      }
    ) => {
      const { behavior = "smooth", offset = 0, containerId, containerOffset = 0 } = options;

      // Remove leading # if present
      const anchorId = anchor.startsWith("#") ? anchor.slice(1) : anchor;

      // Find the target element
      const targetElement = document.getElementById(anchorId);
      if (!targetElement) {
        console.warn(`Anchor with id "${anchorId}" not found`);
        return;
      }

      // If no container specified, just scroll the window
      if (!containerId) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior,
        });
        return;
      }

      // Find the container element
      const containerElement = document.getElementById(containerId);
      if (!containerElement) {
        console.warn(`Container with id "${containerId}" not found`);
        return;
      }

      // Phase 1: Scroll page until container is visible
      const containerRect = containerElement.getBoundingClientRect();
      const isContainerVisible =
        containerRect.top >= 0 &&
        containerRect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

      if (!isContainerVisible) {
        window.scrollTo({
          top: containerRect.top + window.scrollY - offset,
          behavior,
        });
      }

      // Phase 2: Scroll within the container after a short delay
      setTimeout(
        () => {
          const relativeTop =
            targetElement.getBoundingClientRect().top -
            containerElement.getBoundingClientRect().top;

          containerElement.scrollTo({
            top: relativeTop + containerElement.scrollTop - containerOffset,
            behavior,
          });
        },
        behavior === "smooth" ? 500 : 0
      ); // Wait for smooth scroll to complete
    },
    []
  );

  const scrollToAnchor = useCallback(
    (target: string, options: UseScrollToAnchorOptions = {}) => {
      const { scrollOnSamePage = true } = options;

      try {
        // Parse the target URL
        const url = new URL(target, window.location.origin);
        const pathname = url.pathname;
        const hash = url.hash;

        // Remove leading # from hash if present
        const anchorId = hash.startsWith("#") ? hash.slice(1) : hash;

        // If it's a different page or we want to force navigation
        if (pathname !== window.location.pathname || !scrollOnSamePage) {
          // Navigate to the page with hash
          router.push(pathname + hash);

          // Wait for navigation and scroll
          setTimeout(() => {
            scrollToElement(anchorId, options);
          }, 300); // Slightly longer delay for Next.js page transitions
        } else {
          // Scroll on the same page
          scrollToElement(anchorId, options);
        }
      } catch {
        // Fallback for relative or invalid URLs
        scrollToElement(target, options);
      }
    },
    [router, scrollToElement]
  );

  return scrollToAnchor;
};
