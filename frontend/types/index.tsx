
import { Icons } from "@/components/Icons"


export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title:string
  disabled?: boolean
  active?: boolean
  icon?: keyof typeof Icons
}  & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavItem[];
    }
);

  export type DocsConfig = {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
  }

  export type DashboardConfig = {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
  }

  // create a type alias for your product type
export type Product = {
  id: number;
  ime: string;
  opis: string | null;
  cena: number;
  SKU: number;
  proizvajalec: string | null;
  barva: string | null;
  stanje: string | null;
  slike: string[],
  userId: number;
  createdAt : Date,
 
};

export type User = {
  id: number;
  ime: string | undefined;
  priimek: string | undefined;
  bio: string | undefined;
  mesto: string | undefined;
  avatar: string | undefined;
  userName: string;
  email: string;
  instagramLink : string | undefined;
  facebookLink : string | undefined;
  createdAt : Date,
 
};



