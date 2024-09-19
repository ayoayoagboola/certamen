import { cn } from "@/lib/utils";
import React from "react";

export interface LabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Label = React.forwardRef<HTMLInputElement, LabelProps>(
  ({ className, children, ...props }, ref) => {
    return <label className={cn("text-sm", className)}>{children}</label>;
  }
);
Label.displayName = "Label";

export { Label };
