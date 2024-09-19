"use client";

import React from "react";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { icons } from "lucide-react";

interface SideBarItemProps {
  children?: React.ReactNode;
  label?: string;
  icon: string;
  href?: string;
  isLink?: boolean;
}

const SideBarItem = ({
  children,
  label,
  icon,
  href,
  isLink,
}: SideBarItemProps) => {
  const pathname = usePathname();
  const active = pathname === href;
  const Icon = icons[icon as keyof typeof icons];

  return (
    <Button
      variant="sidebar"
      className={`${active ? "bg-bg-3 justify-start" : "justify-start"} ${
        !label && "px-1.5"
      }`}
      asChild
    >
      {isLink ? (
        <Link href={href as string}>
          {Icon && <Icon />}
          <p className="h-[18px]">{label}</p>
        </Link>
      ) : (
        <>
          {Icon && <Icon />}
          {label}
        </>
      )}
    </Button>
  );
};

export default SideBarItem;
