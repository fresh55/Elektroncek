import { redirect } from "next/navigation"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import  getCurrentUser  from "@/app/actions/getCurretUser"
import { DashboardHeader } from "@/components/DashboardHeader"
import { DashboardShell } from "@/components/Shell"
import {Informations} from "./components/Informations"
import {ProfileForm} from "./components/ProfileForm"
import { User } from "@/types";

export const metadata = {
  title: "Nastavitve",
  description: "Manage account and website settings.",
}



export default async function profil() {
  const uporabnik : User  = await getCurrentUser()
  if (!uporabnik) {
    redirect("/login")
  }

  return (
    <div className="grid grid-cols-12 ">
  
    <div className="col-span-5 mx-4  mt-8">
            <div className="sticky top-28">
            <Informations  user={uporabnik}/>
            </div>
    </div>
  
    
    <div className="col-span-7 mx-10 mt-8 ">
    <ProfileForm user={uporabnik}/>
    
    </div>
  </div>
  )
}