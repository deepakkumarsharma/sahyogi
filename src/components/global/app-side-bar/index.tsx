"use client";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  useSidebar,
  SidebarGroup,
  SidebarHeader,
  SidebarContent,
  SidebarMenuItem,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Bot,
  CreditCard,
  LayoutDashboard,
  LifeBuoy,
  Plus,
  Presentation,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Q&A",
    url: "/qa",
    icon: Bot,
  },
  {
    title: "Meetings",
    url: "/meetings",
    icon: Presentation,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCard,
  },
];

const projects = [
  {
    name: "Project 1",
  },
  {
    name: "Project 2",
  },
  {
    name: "Project 3",
  },
];

const AppSidebar = () => {
  const pathname = usePathname();
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader className="mt-3">
        <div className="flex gap-x-2 items-center">
          <LifeBuoy size={40} />
          {open && <p className="font-mono font-extrabold text-2xl">Sahyogi</p>}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-md mb-1">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link
                    href={item.url}
                    className={cn({
                      "!bg-primary !text-white": pathname === item.url,
                    })}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-md mb-1">
            Your Projects
          </SidebarGroupLabel>
          <SidebarGroupContent>
            {projects.map((project) => (
              <SidebarMenuItem key={project.name}>
                <SidebarMenuButton asChild>
                  <Link href={project.name} className="">
                    <div
                      className={cn(
                        "capitalize rounded-sm shadow border size-6 font-bold flex items-center justify-center",
                        {
                          "!bg-primary !text-white": true,
                        }
                      )}
                    >
                      {project.name[0]}
                    </div>

                    <span>{project.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}

            <SidebarMenuItem>
              <Link href="/create">
                <Button className="mt-4 text-white w-full font-bold">
                  {open ? (
                    <>
                      <Plus />
                      Create project
                    </>
                  ) : (
                    <Plus />
                  )}
                </Button>
              </Link>
            </SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
