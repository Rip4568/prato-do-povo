import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={
          hoverEffect
            ? { y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }
            : undefined
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-xl",
          "dark:border-white/10 dark:bg-black/20",
          className,
        )}
        {...props}
      >
        <div className="relative z-10">{children}</div>

        {/* Decorative gradient blob */}
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
      </motion.div>
    );
  },
);

Card.displayName = "Card";
