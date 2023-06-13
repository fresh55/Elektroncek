import { redirect } from "next/navigation"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import  getCurrentUser  from "@/app/actions/getCurretUser"
import { DashboardHeader } from "@/components/DashboardHeader"
import { DashboardShell } from "@/components/Shell"
import  UpdateUserForm  from "@/components/UpdateUserForm"

export const metadata = {
  title: "Settings",
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
        heading="Nastavitve"
        text="Upravljajte z nastavitvami vašega profila"
      />
      <div className="grid gap-10">
        <UpdateUserForm user={{ id: user.id, email: user.email || "" }} />
      </div>
    </DashboardShell>
  )
}