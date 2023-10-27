import { redirect } from "next/navigation"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import  getCurrentUser  from "@/app/actions/getCurretUser"
import { DashboardHeader } from "@/components/DashboardHeader"
import { DashboardShell } from "@/components/Shell"
import {UpdateLoginForm} from "./components/UpdateLoginForm"
import { DeleteProfile } from "./components/DeleteProfile"
import { User } from "@/types";
export const metadata = {
  title: "Nastavitve",
  description: "Manage account and website settings.",
}



export default async function nastavitve() {
  const uporabnik  = await getCurrentUser()
  if (!uporabnik) {
    redirect("/login")
  }

  return (
    <DashboardShell>
     
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 pb-32 pt-8">
        <UpdateLoginForm user={uporabnik}/>
        <DeleteProfile user={uporabnik}/>
        </div>
      
    </DashboardShell>
  )
}