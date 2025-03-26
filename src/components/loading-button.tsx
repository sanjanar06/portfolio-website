"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

export interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
  loadingText?: string;
}

const LoadingButton = ({
  className,
  variant,
  size,
  isLoading = false,
  loadingText,
  children,
  disabled,
  ...props
}: LoadingButtonProps) => {
  return (
    <Button
      className={cn(isLoading && "cursor-not-allowed", className)}
      variant={variant}
      size={size}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </Button>
  );
};
LoadingButton.displayName = "LoadingButton";

export { LoadingButton };
