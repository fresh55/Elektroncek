"use client";

import Link from "next/link";
import * as React from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useSelectedLayoutSegment } from "next/navigation";

type Props = {
  navigation: { label: string; href: string; segment: string | null }[];
  className?: string;
};

export const SettingsNavbar: React.FC<React.PropsWithChildren<Props>> = ({ navigation, className }) => {
  const selectedSegment = useSelectedLayoutSegment();
  return (
   
    <nav className={cn("bg-background z-20 border-b", className)}>
      <div className="flex items-center w-full gap-4 pl-6 pt-6 ">
        {navigation.map(({ label, href, segment }) => {
          const active = segment === selectedSegment;
          return (
            <li
            key={label}
              className={cn(" list-none border-b-2 border-transparent p-2 ", {
                "border-primary ": active,
              })}
            >
              <Link
                href={href}
                className={cn(
                  "text-sm font-medium py-2 px-3 -mx-3 text-content-subtle  hover:bg-background-subtle rounded-md hover:text-primary",
                  {
                    "text-primary": active,
                  },
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </div>
      <Separator />
    </nav>
   
  );
};