import { redirect } from "next/navigation"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import  getCurrentUser  from "@/app/actions/getCurretUser"
import { DashboardHeader } from "@/components/DashboardHeader"
import { DashboardShell } from "@/components/Shell"
import  UpdateUserForm  from "@/components/UpdateUserForm"
import Navigation from "./components/Navigation"
export const metadata = {
  title: "Nastavitve",
  description: "Manage account and website settings.",
}



export default async function SettingsPage() {
  const user = await getCurrentUser()
  if (!user) {
    redirect("/login")
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Nadzorna plošča"
        text="Upravljajte z nastavitvami vašega profila"
        button={false}
        
      />
      
        <UpdateUserForm user={{ id: user.id, email: user.email }} />
      
    </DashboardShell>
  )
}