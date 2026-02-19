import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* Primary — navy bg + cyan text + glow. ONE per screen. */
        default:
          "bg-primary text-primary-foreground border border-cyan/30 hover:border-cyan/50 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_0_3px_hsl(183_59%_76%/0.18),0_12px_32px_hsl(235_100%_19%/0.45)] hover:shadow-[0_0_0_3px_hsl(183_59%_76%/0.28),0_16px_40px_hsl(235_100%_19%/0.55)]",

        /* Hero = alias of primary for hero section */
        hero:
          "bg-primary text-primary-foreground border border-cyan/30 font-semibold hover:border-cyan/55 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_0_3px_hsl(183_59%_76%/0.18),0_12px_32px_hsl(235_100%_19%/0.45)] hover:shadow-[0_0_0_3px_hsl(183_59%_76%/0.28),0_16px_40px_hsl(235_100%_19%/0.55)]",

        /* CTA = same as hero */
        cta:
          "bg-primary text-primary-foreground border border-cyan/30 font-semibold hover:border-cyan/55 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_0_3px_hsl(183_59%_76%/0.18),0_12px_32px_hsl(235_100%_19%/0.45)] hover:shadow-[0_0_0_3px_hsl(183_59%_76%/0.28),0_16px_40px_hsl(235_100%_19%/0.55)]",

        /* Secondary — muted surface, neutral text, violet hover tint */
        secondary:
          "bg-secondary text-secondary-foreground border border-border hover:bg-accent/10 hover:border-violet-400/40 hover:-translate-y-0.5 active:translate-y-0",

        /* Outline — transparent + border, subtle violet hover */
        outline:
          "border border-border bg-transparent hover:bg-violet-500/10 hover:border-violet-400/50 hover:-translate-y-0.5 active:translate-y-0",

        /* Hero outline — cyan border version */
        heroOutline:
          "border border-cyan/40 text-cyan hover:bg-cyan/8 hover:border-cyan/70 hover:-translate-y-0.5 active:translate-y-0",

        /* Destructive */
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        /* Ghost */
        ghost: "hover:bg-card/50",

        /* Tertiary / Link — Inter 14/20 600, underline on hover */
        link: "text-cyan underline-offset-4 hover:underline hover:text-cyan-light font-semibold",

        /* Glass */
        glass:
          "glass hover:bg-card/90 hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
