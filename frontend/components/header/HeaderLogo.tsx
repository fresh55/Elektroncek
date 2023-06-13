'use client'
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import Logo from '../Logo';

interface NavLogoProps {
 href: string;
 title: string;
}

function HeaderLogo({href,title}: NavLogoProps) {

 const isActive = usePathname() === href;
 return (
    <Link
      href={href}
      className="flex h-9 items-center gap-2 rounded-xl px-2"
      aria-label={title}
    >
      <Logo active={isActive} />
    </Link>
  );
}



export default HeaderLogo;