import * as React from "react";
import { FC, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const cardVariants = cva(
  "flex items-center justify-center border-black border rounded-lg p-6 bg-slate-50 gap-3",
  {
    variants: {
      variant: {
        default: "",
      },
      // size: {},
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn(className)} {...props} />;
  }
);

Card.displayName = "Card";

export { Card, cardVariants };
