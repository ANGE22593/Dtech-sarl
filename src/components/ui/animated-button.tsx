
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive" | "link";
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  animation?: "pulse" | "scale" | "slide" | "bounce" | "none";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ 
    children, 
    variant = "default", 
    className, 
    size = "default", 
    animation = "scale",
    icon,
    iconPosition = "right",
    ...props 
  }, ref) => {
    // Animation classes based on animation type
    const animationClasses = {
      pulse: "transition-all duration-300 hover:animate-pulse",
      scale: "transition-transform duration-300 hover:scale-105 active:scale-95",
      slide: "transition-transform duration-300 hover:translate-x-1 active:translate-x-0",
      bounce: "transition-transform duration-300 hover:-translate-y-1 active:translate-y-0",
      none: "",
    };

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          animationClasses[animation],
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </Button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
