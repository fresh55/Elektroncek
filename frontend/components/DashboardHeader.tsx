'use client'
import { useRouter } from 'next/navigation'
import { Button } from "./ui/button"
import Navigation from '@/app/(dashboard)/dashboard/components/Navigation'

interface MenuItem {
  title: string;
  path: string;
}


interface DashboardHeaderProps {
    heading: string
    text?: string
    children?: React.ReactNode
    button: boolean
    
  }
  
  export function DashboardHeader({
    heading,
    text,
    children,
    button
  }: DashboardHeaderProps) {
    const router = useRouter();
    return (
      <div className="bg-white border-secondary relative border-b-0 pb-1 hidden lg:block">
        <div className="relative p-4 md:p-6 lg:p-8 pb-0 lg:pb-0 md:pt-6 lg:pt-8">
          <div className="flex w-full items-center justify-between gap-2">
          <h1 className="text-2xl font-bold text-gray-700">{heading}</h1>
          {button &&  <Button onClick={() => router.push(`/dashboard/posts/new`)}>Nov oglas</Button>}
          
         
        </div>
        {text && <p className="text-lg text-muted-foreground">{text}</p>}
        </div>
        
        {children}
      </div>
    )
  }