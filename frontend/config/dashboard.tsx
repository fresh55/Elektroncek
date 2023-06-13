import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Nastavitve",
      href: "/dashboard",
      icon: "logo",
    },
    {
      title: "Status",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Vaši oglasi",
      href: "/dashboard/settings",
      icon: "post",
    },
  ],
}