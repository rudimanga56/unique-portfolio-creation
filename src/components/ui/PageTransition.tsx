
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
        "animate-fade-in opacity-0 animation-delay-200 animation-fill-forwards",
        className
      )}
    >
      {children}
    </div>
  );
}
