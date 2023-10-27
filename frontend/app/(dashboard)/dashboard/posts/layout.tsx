import { DashboardHeader } from "@/components/DashboardHeader";
import * as React from "react";
import {SettingsNavbar} from "../components/SettingsNavbar"


export default function OglasiLayout({ children }: { children: React.ReactNode }) {
  const navigation = [
    {
      label: "Vaši oglasi",
      href: "/dashboard/posts",
      segment: null
    },
    {
      label: "Arhivirani oglasi",
      href: "/app/settings/team",
      segment: "team",
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
              heading="Oglasi"
              text="Ustvarite in upravljajte z oglasi"
              button={true}
              />
      <SettingsNavbar navigation={navigation} />    
      <main>{children}</main>
    </div>
  );
}