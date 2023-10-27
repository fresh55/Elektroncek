import { Toaster } from '@/components/ui/toaster';
import  {SidebarDashboard}  from "@/components/SidebarDashboard"


interface DashboardLayoutProps {
  children?: React.ReactNode
}





export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {

 

  return (
   
    
      <div className="w-full grid-cols-1 lg:flex ">
        <aside className="relative top-0  flex h-screen w-[320px] flex-col gap-3 border-r transition-transform duration-75 max-lg:fixed lg:w-[240px] max-lg:-translate-x-full pt-3 lg:pt-3">
          <SidebarDashboard />
        </aside>
        <main className="flex w-full flex-1 flex-col bg-gray-50">
          {children}
        </main>
        <Toaster />
      </div>
     

  )
}