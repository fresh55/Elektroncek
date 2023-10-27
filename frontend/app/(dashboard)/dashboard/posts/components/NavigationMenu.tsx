"use client"
 
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Toggle } from "@/components/ui/toggle"
import  {SlidersHorizontal} from 'lucide-react'
import { useState } from "react";
import {Filter} from "./Filter"
 
export function NavigationMenuDemo() {
    const [filter, setFilter] = useState(false);
  return (
    <>
    <div className="border-gray-150 border-b px-4 md:px-6 lg:px-8">
    
    <NavigationMenu>
      <NavigationMenuList >
      <NavigationMenuItem>
         
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center  bg-background px-4 py-2 text-sm font-medium  hover:border-b  hover:border-indigo-950 hover:border-b focus:border-indigo-950   disabled:pointer-events-none disabled:opacity-50 data-[active]:border-b data-[state=open]:border-b">
              Oglasi
            </NavigationMenuLink>
          
        </NavigationMenuItem>
        <NavigationMenuItem>
          
          <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center  bg-background px-4 py-2 text-sm font-medium  hover:border-b  hover:border-indigo-950 hover:border-b focus:border-indigo-950   disabled:pointer-events-none disabled:opacity-50 data-[active]:border-b data-[state=open]:border-b">
              Arhivirano
            </NavigationMenuLink>
          
        </NavigationMenuItem>
        <NavigationMenuItem>
          
          <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center  bg-background px-4 py-2 text-sm font-medium  hover:border-b  hover:border-indigo-950 hover:border-b focus:border-indigo-950   disabled:pointer-events-none disabled:opacity-50 data-[active]:border-b data-[state=open]:border-b">
              Sledite
            </NavigationMenuLink>
          
        </NavigationMenuItem>
      
        <NavigationMenuItem>
        <Toggle pressed={filter}
                onPressedChange={(value) => setFilter(value)} 
                className=" data-[state=on]:text-black  data-[state=off]:text-gray-500"><SlidersHorizontal className="h-4 w-4"/></Toggle>
        </NavigationMenuItem>
        </NavigationMenuList>
       
    
    </NavigationMenu>
    
    </div>
    {filter && <div className=" flex flex-col gap-2 border-gray-150 border-b px-4 py-3 sm:w-full sm:flex-row md:px-6 lg:px-8">
        <Filter/>
        <Filter/>
        <Filter/>
        </div>}
    </>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-xl font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"