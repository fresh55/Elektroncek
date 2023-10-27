import { DashboardHeader } from "@/components/DashboardHeader";
import * as React from "react";
import {SettingsNavbar} from "../components/SettingsNavbar"


export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const navigation = [
    {
      label: "Splošno",
      href: "/dashboard/nastavitve",
      segment: null
    },
    {
      label: "Vaš Profil",
      href: "/dashboard/nastavitve/profil",
      segment: "profil",
    },
    {
      label: "Notifikacije",
      href: "/app/settings/root-keys",
      segment: "root-keys",
    },
  ];

  return (
    <div>
          <DashboardHeader
              heading="Nastavitve"
              text="Upravljajte z nastavitvami vašega profila"
              button={false}
              />
      <SettingsNavbar navigation={navigation}  />    
      <main>{children}</main>
    </div>
  );
}