'use client'
import AvatarUser from "../AvatarUser";
import { signOut } from "next-auth/react"
import Link from 'next/link';

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  Package2,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from "@/components/ui/button"
  import StatusUserButton from "../statusUserButton";


  function UserMenu (props:any)   {
    
  return (
    <> 
    {props.id  ? (
    <DropdownMenu modal={false} >
    <DropdownMenuTrigger>
      <AvatarUser type={"navbarAvatar"} />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="mr-10 mt-5 ">
      <DropdownMenuLabel className="flex">
      <div className="flex gap-3 items-center">
      <AvatarUser type={"navbarAvatar"}  />
      <div className="">
      {props.name && <p className=" font-medium">{props.name}</p>}
      {props.email && (
              <p className="w-[160px] truncate text-sm text-muted-foreground">
                {props.email}
              </p>
            )}
            </div>
      
    <StatusUserButton />
   
              </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User className="mr-3 h-5 w-5" />
          <span>Vaš profil</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageSquare className="mr-3 h-5 w-5" />
          <span>Vaša sporočila</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Package2 className="mr-3 h-5 w-5" />
          <span>Vaši oglasi</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="bg-gradient-to-r from-purple-600 to-sky-600 text-white focus:text-white hover:from-purple-700 hover:to-sky-600">
        <Plus className="mr-3 h-5 w-5" />
      <span>Nov oglas</span>
      </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LifeBuoy className="mr-3 h-5 w-5" />
        <span>Pomoč</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => signOut()} >
        <LogOut className="mr-3 h-5 w-5" />
        <span>Odjava</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
    ) : (
      <DropdownMenu modal={false} >
      <DropdownMenuTrigger >
        <AvatarUser type={"navbarAvatar"} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" mr-10 mt-3 px-5">
        <DropdownMenuLabel >
        <div className="flex flex-col items-center">
        <AvatarUser type={"userMenuAvatarNoUser"} />
        <p className=" text-xl mt-5">Vpišite se ali registrirajte 
        v vaš Elektronček račun</p>

        </div>
        <div className="flex justify-center gap-4 mt-5">
        <Link href="/login">
        <Button>Prijava</Button></Link>
        <Link  href="/register">
        <Button>Registracija</Button></Link>
        </div>
        </DropdownMenuLabel>
       
      </DropdownMenuContent>
    </DropdownMenu>
  ) }
  </>)
} 

export default UserMenu;