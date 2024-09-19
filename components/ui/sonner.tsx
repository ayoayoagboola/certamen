"use client";

import { LoaderCircle, SquareCheck, TriangleAlert } from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "light" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "bg-slate-50 text-sm group toast relative flex w-full items-center justify-start space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      icons={{
        success: <SquareCheck color="#27283e" size={18} />,
        error: <TriangleAlert color="#27283e" size={18} />,
        loading: (
          <LoaderCircle color="#27283e" size={18} className="animate-spin" />
        ),
      }}
      {...props}
    />
  );
};

export { Toaster };
