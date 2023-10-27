

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { 
    NavigationMenu, 
    NavigationMenuList, 
    NavigationMenuItem, 
    NavigationMenuLink 
} from '@/components/ui/navigation-menu';

interface MenuItem {
    title: string;
    path: string;
}

interface NavigationProps {
    menuItems: MenuItem[];
}

const Navigation: React.FC<NavigationProps> = ({ menuItems }) => {
    const router = useRouter();
    const pathname = usePathname();
    const isActivePath = (path: string) => pathname === path;
    console.log(menuItems)
    return (
        <div className="border-gray-150 mt-8 border-b px-4 md:px-6 lg:px-8">
            <NavigationMenu>
                <NavigationMenuList>
                    {menuItems.map(item => (
                        <NavigationMenuItem key={item.path}>
                            {isActivePath(item.path) ? (
              <NavigationMenuLink
              className={`inline-flex h-10 w-max items-center justify-center bg-background px-4 py-2 text-sm font-medium border-b border-gray-950  focus:border-indigo-950 disabled:opacity-50 ${isActivePath(item.path) ? "data-[active]:border-b" : ""}`}
          >
              <Link href={item.path}>

                  {item.title}</Link>
          </NavigationMenuLink>
          ) : (
            <NavigationMenuLink
            className={`inline-flex h-10 w-max items-center justify-center  px-4 py-2 text-sm font-medium hover:border-b hover:border-gray-400  focus:border-indigo-950 disabled:opacity-50 ${isActivePath(item.path) ? "data-[active]:border-b" : ""}`}
        >
            <Link href={item.path}>

                {item.title}</Link>
        </NavigationMenuLink>
          )}

                          
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export default Navigation;