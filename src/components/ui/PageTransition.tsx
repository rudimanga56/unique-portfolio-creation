
import React from "react";
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <div
      className={cn(
        "opacity-100", // Changed from animate-fade-in opacity-0 to make content immediately visible
        className
      )}
    >
      {children}
    </div>
  );
}
