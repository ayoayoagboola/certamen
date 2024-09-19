"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
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
import { projects } from "@/schema";
import { ProjectSelect } from "../user/project/project-select";

interface DefaultSideBarProps {
  isClosed?: boolean;
}

type ProjectType = typeof projects.$inferSelect;

const DefaultSideBar = ({ isClosed }: DefaultSideBarProps) => {
  const [projectList, setProjectList] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjectList(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <aside
      className={`flex flex-col ${
        isClosed ? "w-[50px]" : "w-[200px]"
      } h-screen bg-bg-1 border-r border-bg-4 `}
    >
      <div className="flex-1 flex flex-col left-0 top-0 p-[10px] gap-4  h-screen justify-between">
        <div className="flex flex-col py-[10px] justify-between">
          <div className="flex flex-col gap-[10px]">
            <SideBarItem
              label={!isClosed ? "Dashboard" : undefined}
              href="/dashboard"
              icon="LayoutDashboard"
              isLink
            />
            {isClosed ? (
              <ProjectSelect projects={projectList} />
            ) : (
              <ProjectDropdown projects={projectList} />
            )}
            <SideBarItem
              label={!isClosed ? "Gallery" : undefined}
              href="/gallery"
              icon="Images"
              isLink
            />
            <SideBarItem
              label={!isClosed ? "Stats" : undefined}
              href="/stats"
              icon="ChartLine"
              isLink
            />
          </div>
          <div>
            <SideBarItem
              label={!isClosed ? "Settings" : undefined}
              href="/settings/profile"
              icon="Settings"
              isLink
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DefaultSideBar;
