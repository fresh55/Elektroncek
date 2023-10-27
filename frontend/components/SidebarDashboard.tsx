"use client"

import Link from "next/link"
import { usePathname, useSelectedLayoutSegments } from "next/navigation"
import {SidebarNavItem} from "@/types/index"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/Icons"



export function SidebarDashboard() {
  const segments = useSelectedLayoutSegments()
  const items: SidebarNavItem[] = [
    {
        title: "Nadzorna plošča",
        href: "/dashboard",
        icon: "home",
    },
    {
      title: "Nastavitve",
      href: "/dashboard/nastavitve",
      icon: "settings",
      active: segments.at(0) === "nastavitve"
    },
    {
        title: "Status",
        href: "/dashboard/billing",
        icon: "billing",
    },
    {
        title: "Vaši oglasi",
        href: "/dashboard/posts",
        icon: "post",
        active: segments.at(0) === "posts"
    },
  ];
  

  
  return (

    <nav className="flex flex-col gap-0.5 px-3 font-medium">
      <div></div>
      {items.map((item, index) => {
      const Icon = Icons[item.icon || "arrowRight"]
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  item.active ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}>
               <Icon className="mr-2 h-5 w-5"/>
                <span>{item.title}</span>
                </span>
                
            
            </Link>
          )
        )
      })}
    </nav>
  )
}
