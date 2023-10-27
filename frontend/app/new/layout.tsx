import { ReactNode } from "react"
import Link from "next/link"
import { SidebarDashboard } from "@/components/SidebarDashboard"
import Stepper from "./components/Stepper"
import { StepProvider } from './StepContext';


export default function newLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <StepProvider>
    <div className="w-full h-screen grid-cols-1 lg:flex ">
    <aside className=" -inset-1 flex bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  flex-col gap-3 border-r  w-[20%]  pt-10 lg:pt-3">
    <Stepper/>
    </aside>
    <main className="flex w-full flex-1 flex-col ">
    <div className=" h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      {children}
      </div>
      </main>
  </div>
  </StepProvider>
    
  )
}
