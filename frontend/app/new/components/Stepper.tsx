"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStep } from "../StepContext";
import { Icons } from "@/components/Icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import clsx from 'clsx';
import {Badge} from "@/components/ui/badge"

interface SidebarItem {
  title: string;
  href: string;
  icon: keyof typeof Icons;
  index: number;
}


function Step({
  step,
  currentstep,
}: {
  step: SidebarItem;
  currentstep: SidebarItem;
}) {
  let status =
    currentstep.index === step.index
      ? "active"
      : currentstep.index < step.index
      ? "inactive"
      : "complete";

  return status;
}

export default function Stepper() {
  const { items,currentStep, setCurrentStep } = useStep();

  return (
    <div aria-label="Progress" className=" px-2">
      
      {items.map((item, index) => {
       const Icon = Icons[item.icon || "arrowRight"]
        const status = Step({ step: items[index], currentstep: currentStep }); // Determine status of this item
        return (
          <li
            key={item.title}
            className="list-none cursor-pointer"
            onClick={() => {
              console.log(`Selected tab changed to: ${item.title}`);
              setCurrentStep(item); // Update the current step when clicked
            }}
          >
           <Card className={clsx(' m-4 shadow-lg relative',
             status === "complete" && 'bg-gradient-to-r from-green-500 to-green-700 text-white  border-green-300',
             status === "active" && ' bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white ',
             status === "inactive" && 'bg-white text-zinc-900 shadow ',
           )}>
             {status === "complete" ? (
    <Badge variant="secondary" className="text-xs uppercase mt-6 ml-6">
      KONČANO
    </Badge>
  ) : (
    <Badge variant="secondary" className="text-xs uppercase mt-6 ml-6">
      Korak {item.index}
    </Badge>
  )}
           <CardHeader>
            
            <div className={clsx('absolute top-5 right-5', 'flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold',
            status === "complete" && 'bg-gradient-to-r from-green-500 to-green-700 text-zinc-900  border-green-300',
            status === "active" && ' bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white ',
            status === "inactive" && 'bg-white text-zinc-900 ',
            )}><div className="flex items-center justify-center">
            {status === "complete" ? (
              <CheckIcon className="h-6 w-6 text-white" />
            ) : <Icon className="h-6 w-6 text-zinc-200" />
            }
          </div></div>
         
        <CardTitle className="text-[18px]">{item.title}</CardTitle>
      
      </CardHeader>
      < CardContent>
    
      </CardContent>
           </Card>
          </li>
        );
      })}
    </div>
  );
    }function CheckIcon(props) {
      return (
        <svg
          {...props}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
         <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
        </svg>
      );
    }