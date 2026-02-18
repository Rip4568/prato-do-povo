import React from "react";

import { cn } from "../../lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, container = true, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("relative py-20 w-full overflow-hidden", className)}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  },
);

Section.displayName = "Section";
