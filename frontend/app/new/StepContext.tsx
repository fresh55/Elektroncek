'use client'
import { Icons } from '@/components/Icons';
// StepContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarItem {
  title: string;
  href: string;
  icon: keyof typeof Icons;
  index: number;
}

const items: SidebarItem[] = [
    {
        title: "Osnovne informacije",
        href: "/dashboard",
        icon: "home",
        index: 1
    },
    {
      title: "Izbira kategorije",
      href: "/dashboard/nastavitve",
      icon: "settings",
      index : 2
      
    },
    {
        title: "Izbira slik",
        href: "/dashboard/billing",
        icon: "media",
        index: 3
    },
    {
        title: "Kontakt",
        href: "/dashboard/posts",
        icon: "post",
        index: 4

    },
  ];

interface StepContextType {
  items : SidebarItem[];
  currentStep: SidebarItem;
  setCurrentStep: React.Dispatch<React.SetStateAction<SidebarItem>>;
  goNext : () => void;
   goPrev : () => void

}

const StepContext = createContext<StepContextType | null>(null);

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
};

export const StepProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<SidebarItem>(items[0]);
  console.log("Current Step: ", currentStep);
  console.log("Items: ", items);
  const goNext = () => {
    console.log("uspelo je");
    let nextIndex = currentStep.index + 1;
    if (nextIndex <= items.length) {
      setCurrentStep(items[nextIndex - 1]);
    }
  };

  const goPrev = () => {
    let prevIndex = currentStep.index - 1;
    if (prevIndex >= 1) {
      setCurrentStep(items[prevIndex - 1]);
    }
  };
  return (
    <StepContext.Provider value={{items, currentStep, setCurrentStep, goNext, goPrev }}>
      {children}
    </StepContext.Provider>
  );
};