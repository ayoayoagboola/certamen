"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import SideBarItem from "./sidebar-item";
import { ProjectDropdown } from "../user/project/project-dropdown";
import { getProjects } from "@/db/queries";
import { Button } from "./button";
import {
  ChartLine,
  Folders,
  Images,
  LayoutDashboard,
  PanelLeft,
} from "lucide-react";
import { LogoutButton } from "../auth/logout-button";
import DefaultSideBar from "./default-sidebar";
import ProjectSideBar from "../user/project/project-sidebar";
import { useParams, usePathname } from "next/navigation";
import SettingsSideBar from "../user/settings-sidebar";

interface SideBarProps {
  isClosed?: boolean;
}

const SideBar = ({ isClosed }: SideBarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(isClosed);
  const params = useParams<{ projectId: string }>();
  const pathname = usePathname();

  return (
    <aside className="h-screen flex-shrink-0">
      {pathname !== "/" && (
        <div className="h-14 min-w-[200px] bg-bg-2 flex justify-end items-center py-1 px-1 border-b border-bg-4 ">
          <Button
            variant="sidebar"
            className="hover:bg-slate-200"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <PanelLeft />
          </Button>
        </div>
      )}
      {pathname.includes("/dashboard") && (
        <DefaultSideBar isClosed={isCollapsed} />
      )}
      {pathname.includes("/project/") && (
        <ProjectSideBar projectId={params.projectId} isClosed={isCollapsed} />
      )}
      {pathname.includes("/settings") && (
        <SettingsSideBar isClosed={isCollapsed} />
      )}
    </aside>
  );
};

export default SideBar;
