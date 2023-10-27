import { redirect } from "next/navigation"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import  getCurrentUser  from "@/app/actions/getCurretUser"
import { DashboardHeader } from "@/components/DashboardHeader"
import { DashboardShell } from "@/components/Shell"
import  UpdateUserForm  from "@/components/UpdateUserForm"
import NewProductButton from "@/components/NewProductButton"
import {getProductByUserId} from "@/lib/product"
import {ProductsClient} from "@/app/(dashboard)/dashboard/posts/components/client"
import { Button } from "@/components/ui/button"
import Router from "next/router"

const menuData = [
  { title: 'Splošno', path: '/dashboard' },
  { title: 'Another Title', path: '/dashboard/another-path' },
  // ... other menu items
];

import {NavigationMenuDemo} from "./components/NavigationMenu"
export const metadata = {
  title: "Nastavitve",
  description: "Manage account and website settings.",
}

export default async function Oglasi() {
  
  const user = await getCurrentUser()
  const oglasi = await getProductByUserId(user.id);
  
  if (!user) {
    redirect("/login")
  }


  return (
    <DashboardShell>
    
   
     <ProductsClient data={oglasi} userId={user.id}/>
     

    </DashboardShell>
  )
}